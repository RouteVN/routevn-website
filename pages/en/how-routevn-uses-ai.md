---
template: post
title: How RouteVN Uses AI
url: /en/how-routevn-uses-ai/
seo:
  title: How RouteVN Uses AI - RouteVN
  description: Learn where RouteVN uses AI, where we do not, and what this means for creators. We use AI thoughtfully while respecting creators' creativity and control.
  ogType: article
---

RouteVN uses AI in specific parts of our work, where we believe it provides clear benefits while respecting people and creative work.

This page explains where we use AI, where we do not, and what that means for creators.

We explain our approach to AI in five areas:

- [AI training](#ai-training)
- [AI-assisted and AI-generated content](#ai-assisted-and-ai-generated-content)
- [AI features in RouteVN Creator](#ai-features-in-routevn-creator)
- [AI-assisted software development](#ai-assisted-software-development)
- [What this means for RouteVN creators](#what-this-means-for-routevn-creators)

## AI training

- **RouteVN does not train AI models on user data**, including illustrations, written text, music, or other project content.
- RouteVN Creator works offline. We cannot access the projects you create because they stay on your device.
- Some functionality may require users to upload data to RouteVN servers. We do not use that data to train AI models.

## AI-assisted and AI-generated content

- **Our art, music, and stories are created by people.** This includes content for our website, marketing and promotional materials, and visual novels. We usually commission artists and credit their published work.
- AI may assist with brainstorming, grammar, and writing style for our website and documentation. The source code for this website is available on [GitHub](https://github.com/RouteVN/routevn-website).
- We use AI to assist with translating the RouteVN website, documentation, and RouteVN Creator interface. We expect all translated content to be reviewed by a fluent speaker.

## AI features in RouteVN Creator

- RouteVN Creator does not have any functionality that uses generative AI.
- We carefully review any feature we introduce to make sure that it benefits the RouteVN community while respecting creators' control and creativity.

## AI-assisted software development

- Most of RouteVN Creator is open source. You can inspect and audit the code in the [GitHub repository](https://github.com/RouteVN/routevn-creator-client). **RouteVN Creator is the result of years of deliberate human design and engineering.** Its development journey can be traced through our [devlog posts](/en/blog/devlog-3/) and [technical articles](/en/blog/building-a-visual-novel-engine-route-graphics/).
- RouteVN uses AI extensively for code generation and software engineering work. Every code change is initiated and reviewed by a human, who remains responsible for its quality. We believe this helps us deliver a better product.

AI-assisted software development is evolving quickly. We follow industry practices and continue to evaluate new tools and approaches.

- In April 2026, [Google shared that 75% of its new code was AI-generated and approved by engineers](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/).
- Major open-source operating systems and browsers have guidelines for AI-assisted code. The standard is that a human must understand and review the code and take responsibility for it. See the guidance for the [Linux kernel](https://docs.kernel.org/process/coding-assistants.html), [Android common kernel](https://android.googlesource.com/kernel/common/%2B/refs/heads/android-mainline/README), [Chromium](https://chromium.googlesource.com/chromium/src/%2B/main/agents/ai_policy.md#chromium-ai-coding-policy), and [Firefox](https://firefox-source-docs.mozilla.org/contributing/ai-coding.html). Mozilla has also used AI-assisted analysis in [Firefox security audits](https://blog.mozilla.org/en/firefox/hardening-firefox-anthropic-red-team/).

## What this means for RouteVN creators

Some platforms may require disclosure of AI-generated content. We take these policies into account when developing RouteVN Creator to ensure that the tool does not conflict with their requirements.

### Steam

**Using RouteVN Creator does not impact the Steam Content Survey.**

[Steam's Content Survey](https://partner.steamgames.com/doc/gettingstarted/contentsurvey) covers AI-generated, player-facing content rather than development tools. It applies to AI-generated content added to a visual novel by its creator, not to the engine or how its code was developed.

### itch.io

**Using RouteVN Creator does not impact the itch.io AI content disclosure.**

[itch.io's disclosure](https://itch.io/t/4309690/generative-ai-disclosure-tagging) covers generative AI in graphics, sound, text & dialogue, or code. A visual novel does not need to be marked as `AI Assisted, Code` just because the engine used was developed with AI-assisted code. [This post](https://bsky.app/profile/leafo.itch.io/post/3mqalapc7722q) supports this interpretation.

## Conclusion

AI is a tool that can be used in many ways. We aim to use it responsibly to improve our work and respect human creativity.

AI is a rapidly evolving technology. We will update this article when significant changes occur, maintain a revision history on this page, and announce revisions through our social media channels.

## Changelog

- **15 July 2026:** Created the first version.
