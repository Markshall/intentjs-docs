import { createHighlighter } from "shiki";

export async function highlightCode(code, lang, theme) {
  const highlighter = await createHighlighter({
    themes: ["material-theme-darker"],
    langs: ["javascript"],
  });

  return highlighter.codeToHtml(code, {
    lang,
    theme,
  });
}
