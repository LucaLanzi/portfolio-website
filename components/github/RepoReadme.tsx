"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";
import { rewriteRelativeUrl, readmeSanitizeSchema } from "@/lib/markdown";

type RepoReadmeProps = {
  markdown: string;
  owner: string;
  repo: string;
  defaultBranch: string;
};

export function RepoReadme({ markdown, owner, repo, defaultBranch }: RepoReadmeProps) {
  const components: Components = {
    h1: (p) => (
      <h1
        className="mt-6 font-display text-xl font-bold uppercase text-star-white first:mt-0"
        {...p}
      />
    ),
    h2: (p) => (
      <h2
        className="mt-6 font-display text-lg font-bold uppercase text-star-white first:mt-0"
        {...p}
      />
    ),
    h3: (p) => (
      <h3 className="mt-4 font-display text-base font-bold text-star-white" {...p} />
    ),
    p: (p) => <p className="mt-3 font-body text-sm leading-relaxed text-star-dim" {...p} />,
    a: ({ href, ...rest }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-nasa-blue underline underline-offset-2 hover:text-nasa-red"
        {...rest}
      />
    ),
    ul: (p) => <ul className="mt-3 list-disc space-y-1 pl-5 font-body text-sm text-star-dim" {...p} />,
    ol: (p) => <ol className="mt-3 list-decimal space-y-1 pl-5 font-body text-sm text-star-dim" {...p} />,
    li: (p) => <li className="marker:text-nasa-red" {...p} />,
    blockquote: (p) => (
      <blockquote
        className="mt-3 border-l-2 border-nasa-blue pl-4 font-body text-sm italic text-star-dim"
        {...p}
      />
    ),
    hr: () => <hr className="my-6 border-space-600" />,
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={typeof src === "string" ? src : undefined}
        alt={alt ?? ""}
        className="my-3 max-w-full rounded-md border border-space-600"
      />
    ),
    code: ({ className, children, ...rest }) => {
      const isBlock = /language-/.test(className ?? "");
      if (!isBlock) {
        return (
          <code
            className="rounded bg-space-700 px-1.5 py-0.5 font-mono text-xs text-star-white"
            {...rest}
          >
            {children}
          </code>
        );
      }
      return (
        <code className={className} {...rest}>
          {children}
        </code>
      );
    },
    pre: (p) => (
      <pre
        className="mt-3 overflow-x-auto rounded-md border border-space-600 bg-space-900 p-4 font-mono text-xs"
        {...p}
      />
    ),
    table: (p) => (
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-left font-body text-sm text-star-dim" {...p} />
      </div>
    ),
    th: (p) => (
      <th
        className="border-b border-space-500 px-3 py-2 font-mono text-xs uppercase tracking-wide text-star-white"
        {...p}
      />
    ),
    td: (p) => <td className="border-b border-space-700 px-3 py-2" {...p} />,
  };

  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, readmeSanitizeSchema], rehypeHighlight]}
        urlTransform={(url) => rewriteRelativeUrl(url, owner, repo, defaultBranch)}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
