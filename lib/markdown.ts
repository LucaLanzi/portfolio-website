import { defaultSchema } from "rehype-sanitize";

/**
 * Extends the default rehype-sanitize schema so GitHub-flavored README HTML
 * (badges, centered divs, <picture>, collapsible <details>, etc.) survives
 * sanitization instead of being stripped.
 */
export const readmeSanitizeSchema: typeof defaultSchema = {
  ...defaultSchema,
  tagNames: [
    ...(defaultSchema.tagNames ?? []),
    "picture",
    "source",
    "details",
    "summary",
    "sub",
    "sup",
    "kbd",
    "mark",
  ],
  attributes: {
    ...defaultSchema.attributes,
    "*": [...(defaultSchema.attributes?.["*"] ?? []), "align", "style", "id"],
    img: [
      ...(defaultSchema.attributes?.img ?? []),
      "width",
      "height",
      "align",
    ],
    source: ["srcSet", "media", "type"],
    a: [...(defaultSchema.attributes?.a ?? []), "target", "rel"],
  },
};

const IMAGE_EXTENSIONS = /\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i;

function isAbsoluteUrl(url: string) {
  return /^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith("//");
}

/**
 * Rewrites a repo-relative README link/image path (e.g. "./assets/diagram.png"
 * or "docs/img.png") to an absolute GitHub URL, since relative paths only
 * resolve correctly on github.com itself.
 */
export function rewriteRelativeUrl(
  url: string,
  owner: string,
  repo: string,
  defaultBranch: string
): string {
  if (!url || isAbsoluteUrl(url) || url.startsWith("#") || url.startsWith("mailto:")) {
    return url;
  }

  const cleanPath = url.replace(/^\.\//, "").replace(/^\//, "");
  const isImage = IMAGE_EXTENSIONS.test(cleanPath);

  return isImage
    ? `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/${cleanPath}`
    : `https://github.com/${owner}/${repo}/blob/${defaultBranch}/${cleanPath}`;
}
