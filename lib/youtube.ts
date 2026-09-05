/** Extracts a YouTube video ID from watch/youtu.be/shorts URL formats. */
export function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    let id: string | null = null;

    if (parsed.hostname === "youtu.be") {
      id = parsed.pathname.slice(1);
    } else if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname.startsWith("/shorts/")) {
        id = parsed.pathname.replace("/shorts/", "");
      } else {
        id = parsed.searchParams.get("v");
      }
    }

    id = id?.split("/")[0]?.split("?")[0] ?? null;
    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
}
