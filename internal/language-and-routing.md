# Language and Routing Policy

This site currently ships English content only.

Use `en` as the default locale.

## Supported locales

- `en`: English (default).
- Chinese Simplified: `zh-hans` for URL slugs and `zh-Hans` for BCP 47 tags.
- Chinese Traditional: `zh-hant` for URL slugs and `zh-Hant` for BCP 47 tags.

## Routing behavior

- `/` is a language-neutral home page.
- Canonical English content pages live under `/en/...`.
- Non-locale content paths are redirects only. They must not render duplicate pages.
- Sitemaps, canonical URLs, internal links, and navigation should use `/en/...` for content pages.
- Home links may use `/` because the homepage is intentionally language-neutral.

## Route examples

- Landing: `/`.
- Creator about: `/en/creator/about/`.
- Creator download: `/en/creator/download/`.
- Support: `/en/support/`.
- Creator changelog: `/en/creator/changelog/`.
- Creator docs introduction: `/en/creator/docs/introduction/`.
- Creator docs page index: `/en/creator/docs/page-index/`.
- Spritesheet tool: `/en/creator/tools/spritesheet/`.
- Hiring index: `/en/hiring/`.
- Hiring post: `/en/hiring/swe-intern/`.
- Blog index: `/en/blog/`.
- Blog post: `/en/blog/routevn-creator-macos-release/`.
- Privacy policy: `/en/agreement/privacy-policy/`.
- Terms of service: `/en/agreement/terms-of-service/`.

## Blog URL policy

Canonical blog post URLs should use this shape:

```text
/en/blog/title-name/
```

Example:

```text
/en/blog/routevn-creator-macos-release/
```

Rationale:

- Use simple, descriptive, readable, and logically organized URLs.
- Keep the publish date in frontmatter, not in the URL.
- Avoid making evergreen or updated posts look stale because of dated URLs.
- Keep the `/blog/` segment to avoid collisions with docs, legal pages, hiring pages, product pages, and future routes.
- Keep the same pattern for future locales, such as `/zh-hans/blog/title-name/` and `/zh-hant/blog/title-name/`.

References:

- Google URL structure best practices: https://developers.google.com/search/docs/crawling-indexing/url-structure
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

Avoid:

```text
/en/title-name/
```

This is too flat and loses the blog context.

Avoid:

```text
/en/post/date-title-name/
```

`post` is less user-facing than `blog`, and dates in slugs add noise.

Acceptable, but not preferred:

```text
/en/blog/2026/title-name/
```

Use year-based public URLs only if year archive navigation becomes important.

For RouteVN, prefer:

```text
/en/blog/routevn-creator-macos-release/
/en/blog/building-a-visual-novel-engine-route-graphics/
/en/blog/devlog-3/
/en/blog/contributor-intro-jeff-y/
```

Content files may still be organized by year and prefixed with ordering numbers:

```text
pages/en/blog/2026/01-devlog-2.md
pages/en/blog/2026/10-routevn-creator-macos-release.md
```

Use the Rettangoli Sites explicit page URL override to set the canonical public route:

```yaml
url: /en/blog/routevn-creator-macos-release/
```

Keep `date` in frontmatter and show it on the page/card.
When migrating existing dated URLs, add redirects from the old URLs to the new canonical URLs.

## Partial language coverage

Some sections may only be available in one language while the site supports more.

- For pages we do not translate, create only the `en` version.
- Do not create placeholder or empty files for unsupported locales.
- Redirect missing-locale requests to the English version.
- Do not list missing-locale routes in sitemaps or `hreflang` metadata.
- Use explicit fallback links in these pages to avoid dead ends.
- Document every intentionally partial section so this behavior is visible to future contributors.

Example:

- Hiring is English-only.
- `/en/hiring/` and `/en/hiring/swe-intern/` exist.
- `/vi/hiring/` and `/zh-hans/hiring/` redirect to `/en/hiring/`.
- `/en/hiring/swe-intern/` is the canonical route for that job post.

## Migration from existing routes

The existing website used non-locale routes such as `/creator/about/` and `/blog/`.
During migration, these routes become legacy redirects.

- Add redirects from every existing non-locale public route to its `/en/...` route.
- Keep `/` as a language-neutral home page.
- Update all internal content links to point directly to `/en/...`.
- Update canonical URLs to point to `/en/...` for content pages.
- Update sitemap entries to include only `/en/...` canonical content pages and `/`.
- Keep redirects in place long-term for public links, search results, and bookmarks.

Examples:

- `/creator/about/` redirects to `/en/creator/about/`.
- `/creator/download/` redirects to `/en/creator/download/`.
- `/creator/docs/introduction/` redirects to `/en/creator/docs/introduction/`.
- `/blog/` redirects to `/en/blog/`.
- `/blog/2026/10-routevn-creator-macos-release/` redirects to `/en/blog/routevn-creator-macos-release/`.
- `/hiring/` redirects to `/en/hiring/`.
- `/support/` redirects to `/en/support/`.
- `/agreement/privacy-policy/1-0-0/` redirects to `/en/agreement/privacy-policy/1-0-0/`.

## Canonical locale tags

- Use BCP 47 language tags.
- Use canonical BCP 47 casing in `html lang` and `hreflang`, such as `en`, `zh-Hans`, and `zh-Hant`.
- Use lowercase URL locale slugs, such as `en`, `zh-hans`, and `zh-hant`.
- Use canonical language content per page.
- Do not mix languages on the same page.
