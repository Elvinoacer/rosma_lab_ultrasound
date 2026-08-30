import React from "react";

type Segment =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "italic"; value: string }
  | { type: "code"; value: string }
  | { type: "link"; value: string; href: string };

function safeHref(href: string) {
  try {
    const url = new URL(href, "https://rosmalab.co.ke");
    return ["http:", "https:", "mailto:", "tel:"].includes(url.protocol) ? url.toString() : "#";
  } catch {
    return "#";
  }
}

function inlineMarkdown(value: string): Segment[] {
  const segments: Segment[] = [];
  const pattern = /(\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|_[^_]+_|`[^`]+`|\[[^\]]+\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|tel:[^\s)]+)\))/g;
  let last = 0;

  for (const match of value.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) segments.push({ type: "text", value: value.slice(last, index) });
    const token = match[0];

    if (token.startsWith("**") || token.startsWith("__")) {
      segments.push({ type: "bold", value: token.slice(2, -2) });
    } else if (token.startsWith("*") || token.startsWith("_")) {
      segments.push({ type: "italic", value: token.slice(1, -1) });
    } else if (token.startsWith("`")) {
      segments.push({ type: "code", value: token.slice(1, -1) });
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) segments.push({ type: "link", value: linkMatch[1], href: linkMatch[2] });
      else segments.push({ type: "text", value: token });
    }

    last = index + token.length;
  }

  if (last < value.length) segments.push({ type: "text", value: value.slice(last) });
  return segments;
}

function Inline({ value }: { value: string }) {
  return (
    <>
      {inlineMarkdown(value).map((segment, index) => {
        if (segment.type === "bold") return <strong key={index} className="font-semibold text-white">{segment.value}</strong>;
        if (segment.type === "italic") return <em key={index}>{segment.value}</em>;
        if (segment.type === "code") return <code key={index} className="rounded bg-white/10 px-1.5 py-0.5 text-[0.88em] text-sand">{segment.value}</code>;
        if (segment.type === "link") return <a key={index} href={safeHref(segment.href)} className="font-medium text-sand underline decoration-sand/40 underline-offset-2 hover:text-white">{segment.value}</a>;
        return <React.Fragment key={index}>{segment.value}</React.Fragment>;
      })}
    </>
  );
}

export default function MarkdownMessage({ content }: { content: string }) {
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  const blocks: React.ReactNode[] = [];
  let listItems: { ordered: boolean; text: string }[] = [];
  let codeLines: string[] | null = null;

  const flushList = () => {
    if (!listItems.length) return;
    const ordered = listItems[0].ordered;
    const List = ordered ? "ol" : "ul";
    blocks.push(
      <List key={`list-${blocks.length}`} className={ordered ? "my-2 list-decimal space-y-1 pl-5" : "my-2 list-disc space-y-1 pl-5"}>
        {listItems.map((item, index) => <li key={index}><Inline value={item.text} /></li>)}
      </List>,
    );
    listItems = [];
  };

  const flushCode = () => {
    if (codeLines === null) return;
    blocks.push(
      <pre key={`code-${blocks.length}`} className="my-2 overflow-x-auto rounded-xl border border-white/10 bg-black/20 p-3 text-xs leading-relaxed text-bone/80">
        <code>{codeLines.join("\n")}</code>
      </pre>,
    );
    codeLines = null;
  };

  lines.forEach((line, index) => {
    if (line.trim().startsWith("```")) {
      flushList();
      if (codeLines === null) codeLines = [];
      else flushCode();
      return;
    }

    if (codeLines !== null) {
      codeLines.push(line);
      return;
    }

    const heading = line.match(/^#{1,3}\s+(.+)$/);
    const unordered = line.match(/^\s*[-*]\s+(.+)$/);
    const ordered = line.match(/^\s*\d+[.)]\s+(.+)$/);

    if (unordered) {
      listItems.push({ ordered: false, text: unordered[1] });
      return;
    }
    if (ordered) {
      listItems.push({ ordered: true, text: ordered[1] });
      return;
    }

    flushList();

    if (!line.trim()) {
      blocks.push(<div key={`space-${index}`} className="h-1" />);
    } else if (heading) {
      blocks.push(<p key={index} className="mt-2 text-sm font-semibold text-white first:mt-0"><Inline value={heading[1]} /></p>);
    } else {
      blocks.push(<p key={index} className="leading-relaxed text-bone/80"><Inline value={line} /></p>);
    }
  });

  flushList();
  flushCode();

  return <div className="text-[0.92rem]">{blocks}</div>;
}
