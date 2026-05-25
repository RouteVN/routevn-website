---
template: documentation
title: Language and Routing Policy
sidebarId: language-routing
---

# Language and Routing Policy

This site currently ships English content only.

Use `en` as the default locale.

## Supported locales

- `en`: English (default).
- Chinese Simplified: `zh-hans`.
- Chinese Traditional: `zh-hant`.

## Routing behavior

- Language URL prefixes follow the locale folder pattern.
- Current locale implementation uses the default `en` path only.
- `/` is a language-neutral home page.
- All public pages must live under `/en/...`.
- Non-locale page paths are redirects only. They must not render duplicate pages.
- Sitemaps, canonical URLs, internal links, and navigation must use `/en/...`.

## Route examples

- Landing:
  - `/` is the language-neutral home page.

- Core sections:
  - `/creator/about/` → `/en/creator/about/`.
  - `/creator/download/` → `/en/creator/download/`.
  - `/support/` → `/en/support/`.
  - `/creator/changelog/` → `/en/creator/changelog/`.

- Docs:
  - `/creator/docs/introduction/` → `/en/creator/docs/introduction/`.
  - `/creator/docs/page-index/` → `/en/creator/docs/page-index/`.

- Tools:
  - `/creator/tools/spritesheet/` → `/en/creator/tools/spritesheet/`.

- Hiring:
  - `/hiring/` → `/en/hiring/`.
  - `/hiring/swe-intern/` → `/en/hiring/swe-intern/`.

- Blog:
  - `/blog/` → `/en/blog/`.
  - `/blog/2026/10-routevn-creator-macos-release/` → `/en/blog/2026/10-routevn-creator-macos-release/`.

- Agreements:
  - `/agreement/privacy-policy/1-0-0/` → `/en/agreement/privacy-policy/1-0-0/`.
  - `/agreement/terms-of-service/1-0-0/` → `/en/agreement/terms-of-service/1-0-0/`.

## Partial language coverage

Some sections may only be available in one language while the site supports more.

- For pages we do not translate, create only the `en` version.
- Do not create placeholder/empty files for unsupported locales.
- Redirect missing-locale requests to the English version.
- Do not list missing-locale routes in sitemaps or `hreflang` metadata.
- Use explicit fallback links in these pages to avoid dead ends.
- Document every intentionally partial section so this behavior is visible to future contributors.

Examples:

- Hiring is English-only:
  - `/en/hiring/` and `/en/hiring/swe-intern/` exist.
  - `/vi/hiring/` and `/zh-hans/hiring/` redirect to `/en/hiring/`.
  - `/en/hiring/swe-intern/` is the canonical route for that job post.

## Migration from existing routes

The existing website uses non-locale routes such as `/creator/about/` and `/blog/`.
During migration, these routes become legacy redirects.

- Add redirects from every existing non-locale public route to its `/en/...` route.
- Keep `/` as a language-neutral home page.
- Update all internal links to point directly to `/en/...`.
- Update canonical URLs to point to `/en/...`.
- Update sitemap entries to include only `/en/...` canonical pages.
- Keep redirects in place long-term for public links, search results, and bookmarks.

Examples:

- `/creator/about/` redirects to `/en/creator/about/`.
- `/creator/download/` redirects to `/en/creator/download/`.
- `/creator/docs/introduction/` redirects to `/en/creator/docs/introduction/`.
- `/blog/` redirects to `/en/blog/`.
- `/blog/2026/10-routevn-creator-macos-release/` redirects to `/en/blog/2026/10-routevn-creator-macos-release/`.
- `/hiring/` redirects to `/en/hiring/`.
- `/support/` redirects to `/en/support/`.
- `/agreement/privacy-policy/1-0-0/` redirects to `/en/agreement/privacy-policy/1-0-0/`.

## Canonical locale tags

- Use BCP 47 language tags.
- Use canonical BCP 47 casing in `html lang` and `hreflang`, such as `en`, `zh-Hans`, and `zh-Hant`.
- Use lowercase URL locale slugs, such as `en`, `zh-hans`, and `zh-hant`.
- Use canonical language content per page.
- Do not mix languages on the same page.
