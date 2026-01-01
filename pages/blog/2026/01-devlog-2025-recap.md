---
template: post
author: han4wluc
title: RouteVN Devlog 2 - 2025 Recap
tags: [blogPost]
date: '2026-01-01'
seo:
  title: RouteVN Devlog 2 - 2025 Recap
  description: A look back at RouteVN's achievements in 2025 and our plans for 2026, including the public release of RouteVN Creator, open sourcing our code, and upcoming features.
  ogType: article
---

## RouteVN Devlog 2

This is the second devlog, following up on the [Year 1.5 devlog](https://routevn.com/blog/2025/04-devlog-y1-5/). It's also a recap of 2025 and our plans for 2026.

### Main Achievements

In December, we made RouteVN Creator Client available for [public download](https://routevn.com/creator/download/). This is actually the first time it's been publicly available after almost 2 years of development.

The app isn't really stable yet, but it's usable for the basics: creating a full Visual Novel from scratch and exporting it to a web-runnable format.

We've also opened our [Discord server](https://discord.gg/8J9dyZSu9C) and are slowly inviting more people to join.

### Open Source

We've open-sourced all our code under the MIT license across 3 repositories.

- route-graphics
- route-engine
- routevn-creator-client

This website itself is also open-sourced.

### Team & Development

We've had some intern hires in the past few months, which has been both lucky and unusual. It's also led to the interesting challenge of managing more people.

Here's what the team has been working on:

- **Rewrote route-graphics** to have a properly written and solid foundation. It's still not perfect, but it's now able to support many more features. Some highlights:

- **Rewrote the engine itself.** The code has now reached its simplest form — the full codebase is less than 3,000 lines of code. We achieved this by removing everything not directly related to VN functionality and creating the right abstractions. It will grow as we add features, but I don't expect it to grow by much.

- **Particles** (courtesy of JeffY): We need to balance the interface — making it easy for users while keeping it customizable so particle effects don't all look the same.

- **Sprite sheets** (courtesy of Nghia): Implementing them in the graphics library (which mostly uses PixiJS) is only the first step. It will take longer for this to make its way up to the client.

We've also conducted internal research comparing our engine with many VNs out there to see which features we can currently support and which we can't. We may or may not share more about this — it will take time to organize things properly.

We have classified all these features by priority so we can focus on which ones to work on first. I have to say, we still have a lot of work to do!

### Plans for 2026

Below are our top priorities:

- **Make the application stable and usable.** This remains the top priority, and we've easily gotten detoured from it many times. Without this, everything else can't follow.

- **Make it even easier to use.** Some pages are difficult in terms of UX, and we'll need to figure out how to improve them. We also want to implement project templates, where you can start from an existing project with ready-made UI. I'm actually very excited about this because it will allow us to involve creators as well.

- **Feature completeness and advanced features.** We've put a lot of effort into designing and creating a strong foundation for this application. Although it started with only simple features, it was never intended to stay that way. We'll add advanced features while being careful not to make things too complex. Things like variable management.

- **Better publishing experience.** This means supporting more export formats beyond web. We also want to build tools to better support self-publishing.

### Marketing

We're still waiting for the app to be more stable before focusing on promotion and marketing. We've started introducing team members, and I think in 2026 we'll maintain a good pace of blog posts and share smaller, regular content. We expect to be gradually more active in this space.

We'll also be reaching out more to VN-related communities.

### Visual Novel Creation

2026 will be the year the first complete VN is created with RouteVN.

We're an all-technical software engineering team, and soon technical capability won't be the bottleneck anymore. We'll actually need real Visual Novels being created. We're pushing for 3 ways to produce content:

- **Sponsoring indie developers.** We're talking with a couple of indie VN developers about sponsoring a short VN. It's expensive for us, but it might make sense to kickstart things. We'll also learn more about creating VNs by working closely with them — and most of all, we'll be supporting real people creating VNs.

- **Hiring a writer/illustrator intern.** We're officially hiring a paid intern for Visual Novel writing and illustration to create Visual Novels internally. It's a rare role for someone who can do both.

- **VNs created in the wild.** We're not quite there yet, but I think by 2026's end, I can't wait to see how many will be created.

## Conclusion

If you're interested in creating a VN with RouteVN, please reach out to us on [Discord](https://discord.gg/8J9dyZSu9C) or any other channel — we'd love to talk to you.

To stay updated, follow us on social media.

Thank you!

