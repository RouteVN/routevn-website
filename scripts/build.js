import { buildSite } from "@rettangoli/sites/cli";
import MarkdownIt from "markdown-it";

const markdownRenderer = new MarkdownIt();

export function nestMarkdownHeadings(content) {
  let fence = null;

  return String(content ?? "")
    .split("\n")
    .map((line) => {
      const fenceMatch = line.match(/^\s{0,3}(`{3,}|~{3,})/);

      if (fenceMatch) {
        const marker = fenceMatch[1];
        const markerType = marker[0];

        if (fence === null) {
          fence = { markerType, length: marker.length };
        } else if (fence.markerType === markerType && marker.length >= fence.length) {
          fence = null;
        }

        return line;
      }

      if (fence !== null) {
        return line;
      }

      const headingPattern = /^(\s{0,3})(#{1,5})(?=[ \t])/;

      return line.replace(
        headingPattern,
        (_, indentation, markers) => `${indentation}${"#".repeat(Math.max(3, markers.length + 1))}`,
      );
    })
    .join("\n");
}

export function renderMarkdown(content, mode) {
  const markdown = mode === "nested" ? nestMarkdownHeadings(content) : content;

  return {
    __html: markdownRenderer.render(String(markdown ?? "")),
  };
}

if (import.meta.main) {
  await buildSite({
    functions: { md: renderMarkdown },
  });

  console.log("Build completed successfully!");
}
