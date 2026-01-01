---
template: post
author: han4wluc
title: RouteVN Devlog 2
tags: [blogPost]
date: '2025-10-08'
seo:
  title: RouteVN Devlog 2
  description: ....
  ogType: article
---

## RouteVN Devlog

This is the second Dev Log following up the one in [from devlog y1-5](https://routevn.com/blog/2025/04-devlog-y1-5/), and will also be a recap for plans in 2026.

Main achievements:

in December we have made RouteVN Creator Client available for public download. This is actually the first time it is available for public download since almost 2 years of development.

The app is not that stable, but it is basic usable, in terms of creating a full Visual Novel from scratch and exporting it in a format runnable in the web.

We have opened up our Discord server, and are slowly inviting people to it. 

Open source

we have open sourced all our code under MIT license, is 3 repos, plus this website itself 4 repos.

Team

There have been some intern hires in the past few months, which is very lucky and unusual, leading problem of having to manage too many people.

These people have been working on the things below:

- rewrote route-graphics to be peoprly written and solid foundation. it is still not perfect, but it is being able to approach many features. some highlights:

- rewrote the engine itself. the code is now almost a miracle. the full codebase is less than 3000 lines of code. because we removed everthing unecessary that is not neede. it will grow once we add features, but I won't expect it to grow by a lot.

Particles courtesy of JeffY

particles we need to balance the interface, how to make it easy to be used by users, yet keep it customizable so they don't always look the same.

Sprite sheets courtesy of nghia


implementing them in the graphics library which is mostly just using pixijs anyways is only the 1st step, it will take longer for it to make it up to the client

and there is much more.

Plans for 2026

Below are the first priorities:

- make the application stable and usable. this remains the top priority and we have very easilyt detoured from it many times. without this, everything else won't be able to follow.
- make it even easier to use. there are some difficult pages in terms of UX. we will need to figure out how to improve them. we also want to implment project templates, where you can select an exisitng project with erady UI. i'm actually very excited about this because will able to involve creators as well.
- features completeness and advanced features. we have put a lot of effort designign and creating a strong foudnation for this application, althout it start with only creating simple features, it was never intended to do only that. add advanced features while always being careful in not making it too complex to use. things like variable management. 
- help with publishing, which will be support more export formats other than web. we also want to have some tools to better support self publishing.

Marketing

We are still waiting for the app to be more stable on promotion and marketing. We started introducing team members. I think in 2026 we will keep a good pace of blog posts and sharing smaller regular contents. This is expected to be gradually more active in this space.

We will be reaching out more for VN related communities

Visual Novel Creation

2026 will be the year the 1st complete VN will be created.

We are all technical software engineer team, and soon this won't be the bottle neck anymore, we will actually need real Visual Novels being created through different ways. We're pushing for 3 ways to produce content.

- we are talking with a couple of indie VN developers to sponsor a short VN. it is expensive for us but might make sense to kickstart things, and also learn more about creating VN as we'll work closely, but most of all we supporting real pepople creating VNs
- we are officially hiring a paid intern for Visual Novel writer & illustration, it is a rare role for someone who can do both. 
- VN created in the wild. we still not there yet right now, but I think in 2026 and can't imagine how many will be created.

































