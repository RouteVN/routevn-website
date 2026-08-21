import assert from "node:assert/strict";
import test from "node:test";

import { nestMarkdownHeadings, renderMarkdown } from "./build.js";

test("nestMarkdownHeadings nests headings under a release heading", () => {
  const markdown = [
    "# Unexpected top-level heading",
    "## Changes",
    "### Details",
    "###### Deep heading",
  ].join("\n");

  assert.equal(
    nestMarkdownHeadings(markdown),
    [
      "### Unexpected top-level heading",
      "### Changes",
      "#### Details",
      "###### Deep heading",
    ].join("\n"),
  );
});

test("nestMarkdownHeadings preserves headings inside fenced code blocks", () => {
  const markdown = [
    "```md",
    "## Code example",
    "```",
    "## Changes",
  ].join("\n");

  assert.equal(
    nestMarkdownHeadings(markdown),
    [
      "```md",
      "## Code example",
      "```",
      "### Changes",
    ].join("\n"),
  );
});

test("renderMarkdown supports nested heading output", () => {
  assert.deepEqual(
    renderMarkdown("## Changes", "nested"),
    { __html: "<h3>Changes</h3>\n" },
  );
});
