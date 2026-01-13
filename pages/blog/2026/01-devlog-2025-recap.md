---
template: post
author: han4wluc
title: RouteVN Devlog 2
tags: [blogPost]
date: '2026-01-13'
seo:
  title: RouteVN Devlog 2
  description: A look back at RouteVN's achievements in late 2025 and our plans for 2026, including the public release of RouteVN Creator, open sourcing our code, and upcoming features.
  ogType: article
---

# RouteVN Devlog 2

This is the second devlog, following up on the [Year 1.5 devlog](https://routevn.com/blog/2025/04-devlog-y1-5/). It's also a recap of late 2025 and our plans for 2026.

## Public release

In December, we made RouteVN Creator Client available for [public download](https://routevn.com/creator/download/). 
This is actually the first time it's been publicly available after almost 2 years of development.

The app isn't perfect, but it's slowly becoming more stable.

It's usable for the basics: creating a full Visual Novel from scratch and exporting it to a web-runnable format.

We also revamped the website with a new demo.

With this we hope that more people will be able to try the software and let us know what they think.

## Open Source

The project has been planned to be open source from the beginning, but we never actually open sourced it because a lot of the code was exploratory and rewritten frequently.

We have finally stabilized the code and open-sourced all our code under the MIT license.

- [route-graphics](https://github.com/RouteVN/route-graphics): A declarative graphics library powered by PixiJS
- [route-engine](https://github.com/RouteVN/route-engine): A lightweight Visual Novel engine written in JavaScript.
- [routevn-creator-client](https://github.com/RouteVN/routevn-creator-client): The desktop application for creating Visual Novels
- [routevn-website](https://github.com/RouteVN/routevn-website): This website itself is open sourced

We plan to write a technical blog post in a couple of weeks to better explain the whole architecture of how the engine works.

## Team & Development

We've had some intern hires in the past few months. They have all been working on various parts of the codebases. Here's what the team has been working on:

- **Rewrote route-graphics** Nghia has re-written the codebase with a parse and render and plugin system. It's now able to support more features, it is better tested leading to less bugs and more maintainable code:

Here's some of the early work of cool features we're developing on it:

  - **Particles**: This is a feature that will be used to support effects such as snow, rain, fire, etc... we've been trying to design an interface that is easy to use yet customizable to the user's needs.

  <video src="/public/blog/2026/01/devlog-2-1.mp4" autoplay loop muted playsinline></video>

  - **Sprite sheets**: The library now supports spritesheets, which can be used to create animated spritesheets.

  <video src="/public/blog/2026/01/devlog-2-2.mp4" autoplay loop muted playsinline></video>

- **Rewrote route-engine itself.** Over the 2 years, we have explored and rewritten this engine many times, maybe 4 times, we lost count. The current version has reached its simplest form. This is the Visual Novel runtime that will power both the editor and actual executable. With the latest re-write the codebase itself is less than 3000 lines of code.


## Internal VN Features Research

We've also conducted internal research comparing our engine with many VNs out there to see which features we can currently support and which we can't.

We have classified all these features by priority so we can focus on which ones to work on first.

I have to say, we still have a lot of work to do! We will be very busy for the whole of 2026.

We're trying to see how we can make our roadmap more public, so users have better visibility on what we're working on.

## Plans for 2026

Below are our top priorities for the year. This is just an initial plan, it will adapt as we learn more

### Improve the product

- **Make the application stable and usable.** This remains the top priority. Without this, everything else can't follow.

- **Make it even easier to use.**
  - Some pages are difficult in terms of UX and are still confusing, we will need to figure out how to improve them.
  - Implement project templates, where you can start from an existing project with ready-made UI. I'm actually very excited about this because it will allow us to involve creators as well.
  - Build out documentation, which is currently non-existent.

- **Feature completeness and advanced features.** We've put a lot of effort into designing and creating a strong foundation for this application. Although it started with only simple features, it was never intended to stay that way. We'll add advanced features while being careful not to make things too complex. Things like variable management.

- **Better publishing experience.** This means supporting more export formats beyond web. We also want to build tools to better support self-publishing.

### Marketing & Outreach

Last year, we spent most of our time building, but that alone won't make an engine successful.

This year, we're putting a lot more effort on marketing, community building, and engaging users for feedback.

Basic plan is:

- Blog posts every week. They will cover various topics. Some will be technical, some more about introducing features that is available. There's a lot of interesting stuff we want to share.
- Social Media & user engagement. We will be doing this more accross all channles including:
  - [X](https://x.com/routevn)
  - [Bluesky](https://bsky.app/profile/routevn.bsky.social)
  - [Discord](https://discord.gg/8J9dyZSu9C)
- Sponsor Visual Novel related events and Jams. We are exploring what upcoming events are out there that we should sponsor.

To be honest, it will be a lot of learning and experimentation on the marketing side for us. We're open to learning more about how to better engage the community.

## Conclusion

There is a lot of work to do for us in 2026, but it is also an exciting time because we are going from a phase of just building the Visual Novel engine into putting it in the hands of people and having them use it to create real Visual Novels.

If everything plays out well, we hope that by the end of the year, RouteVN Creator will become a compelling engine that people will seriously consider when choosing which engine to use to for a new Visual Novel.


