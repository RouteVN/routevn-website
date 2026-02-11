---
template: post
author: han4wluc
title: Building a Visual Novel Engine Part 3 - RouteVN Creator
tags: [blogPost]
date: '2026-02-12'
seo:
  title: Building a Visual Novel Engine Part 3 - RouteVN Creator
  description: RouteVN Creator is the desktop-first editor that turns Route Engine into a no-code workflow. This post explains the product architecture, offline-first data model, scene editor design, and export pipeline.
  ogType: article
---

# Building a Visual Novel Engine Part 3 - RouteVN Creator

This series will explain the whole architecture and design of RouteVN Creator. By the end of the series, you should have a good understanding of how RouteVN Creator works, and essentially how to build a Visual Novel engine from scratch.

This is part 3 of a 3 part series:

- [Part 1 - Route Graphics: a declarative graphics and sound library](/blog/2026/03-building-a-visual-novel-engine-part-1-route-graphics)
- [Part 2 - Route Engine: a Visual Novel engine built on Route Graphics](/blog/2026/05-building-a-visual-novel-engine-route-engine)
- Part 3 - RouteVN Creator: a Desktop application to create Visual Novels without any coding

## Product Vision and Design Intent

We saw two common patterns in existing tools for creating Visual Novels.

Script/code-based engines are very powerful allowing full customizations, but they require technical knowledge and a meaningful learning curve.

UI-based editors offer the other side of the tradeoff:

- Easy at first, but advanced use cases eventually push users back into scripting or technical workflows
- Some of them are more powerful, but with hard to use UI/UX

From the beginning, our product direction had two goals:

1. Make Visual Novel creation more accessible.
This means no coding requirement, intuitive UI/UX, and a beginner-friendly flow where creators can start quickly.

2. Build better tools for serious Visual Novels.
This means supporting advanced features and richer workflows, while still hiding technical complexity behind clear interfaces. Advanced features include collaborative editor.

We took an ambitious approach and tried to aim for both:

- Build first for easyness of use
- Then expand to support more powerful features

These two goals create a constant product tension: keep things simple for new users, while still expanding power for advanced use cases.

Below we will explore how we built the application while trying to achieve our design goals.

## Architecture

This project grew into a big engineering project, and we needed a strong foundation to support our vision.
That is why we built Route Graphics, Route Engine, and even a frontend framework, [Rettangoli](https://github.com/yuusoft-org/rettangoli).

Most of that technology is invisible to normal users, but is what we develops work with on a daily basis.

RouteVN Creator is the actual product people interface with. It is the user facing frontend, and it is also the part that took us the most time and care.

### Offline and Collaboration Data Structure

Offline applications are the ones that work fully offline, and provide a great user expeirence because it does not need to wait for a server to response, every user action is instantly updated.

Collaborative applicatinos are ones where multiple users can work on the project at the same time, and get the updates of what others are working on.

The technology that is used to build modern collaboratie applications is called CRDT, and OT (Operational Transofrms), and they are both collaborative and offline first.  

The way it works in principle is that the system records all actions performed rather than the end state, so, and all actions get synched with all users.

We did exacty this approach, but modified the CRDT/OT main protocl a bit to suit some our needs such as strong validaton. We came up with our own library: [insieme](https://github.com/yuusoft-org/insieme)

One realization is that offline applications are easier to build than client/server appliations because we do not need to wait for server response. in fact we do not even need loading indicators because data is direclty saved locally which is instant.

Building a collaboration library however, is much more involved to make sure that the data is synced and merged properly

### Desktop Application with Tauri

At first I was thiknnig of building a web based appliicatin, becase that is where my experience came from and web you can do al most anything.

Browser can actually support offline applications with Indexed DB. Browser data can be unintentinally  lost during some clean up operations.

The biggest limitation of web based appilcations was the storage persisatence.

Users are not used to have a big project data stored in the browser. The solution to that is a desktop application where project data is stored idrecly on the user machine' file sytem. this follows what other game engines do.

To build cross platform Desktop applications with web technologies, we basicaly choose Tauri to do it. I am not a fan of Rust, but lucky most things get done with minimal Rust intentervention.

The desktop app is packaged with Tauri, we wanted to support all major operating systems.

The main decision was between Electron and Tauri.

We chose Tauri primarily because of its low-memory positioning.

It is less table, there are a few things like the installer, updater, file pemissons where we have to work with the limitaitons.

## Page by Page

Below is the creator workflow page by page, and the most important parts in each one.

### Projects and Project

We have a global level sqlite file that stores user configuration and also the list of projects.

For each project, the data lives inside a folder. There is basically 1 sqlite file and the assets data as binary files. the sqlite file stores all project data inculding all the event logs.

### Resources (Assets and UI)

Resources are split into two groups:

- **Assets**: images, sounds, videos, characters, and content resources
- **UI**: colors, fonts, typography, layouts, and interface resources

There are few things to note here what made it possible to maintain such large amount of pages and data structuer:

- consistent design. we follow a consitehnt shell, with folders and items grouped into folders. and a edit panel in the right. a dialog for create and edit. we reuse the same code for this shell. this has 2 advantages:
  - consistent for the user, when user learns things in 1 page, he/she can expect to be able to have learnd many other pages as well.
  - we are able to reuse the same code for all pages, so it is much easier to maintain. and keep design consistent.
  - we do allow customization for each item, because each item has very specific needs and is very unique.

- we use same data foundtions to all resource types. espeically the folder and file organizaation. we use a tree structure for appedn only to minimize confclits during collaboration scenarios.

The ui pages: colors, font, typography were designed to be very structured. they are a bit of a hassle to work with in the beginnign, but it come from experience and something that scales much better as the project grows.

Assets are more straighfoward you upload all assets. we decided a couple of things:
- structure by item data type rather than use case.

we have a flexible folder system so users can organize as they want.

### Layout Editor

One of the most advanced parts here is the Layout Editor.

We wanted to give users full UI customization.

In order to do that, and give a good UX, we ended up builing a full design tool.

It is even more advanced features such as supporing hover, click events, and variables.


### Scene Map

Scene Map gives a high-level structure of story flow between scenes.
This is where users organize macro story structure before or during detailed writing.
it is implmented using html. it does not use canvas or anyting fancy. we found this to be most easy to work with, and for our use case, is not performance bound.

### Scene Editor

The Scene Editor is where users spend most of their time, so it became one of the hardest parts of the whole product.

The live preview is supposed to be the magical feature.
As users write and edit content, the preview updates in real time.
The goal is immediate and accurate feedback, so creators can see exactly what they are building without context switching.

At first glance, using an existing rich text editor seems like the obvious choice. We tried that direction, but it did not map well to the behavior we needed for Visual Novel writing.
So we implemented the editor on top of `<div contenteditable>`.

The difficult part was not showing text. The difficult part was interaction:

- A line-based editing model, not just a generic document
- Reliable keyboard flow across lines (split/merge, up/down navigation, left/right edge behavior)
- Stable cursor behavior while the preview updates in real time
- Tight synchronization between selected line and runtime preview state

This took many iterations and a lot of bug fixing around cursor, focus, and line operations. and it is still tricky. for example we don't have a rich text support.

### Versions and Export

Versions are lightweight pointers to event history. because the original data we store is sppend only log. it is easy to allow an user to export the version of the appicaton at any point the time.

Final distribution is only 3 files:

- `index.html`
- `main.js`
- `package.bin`

`package.bin` concatenates all assets and instructions into one payload, with an index that records byte ranges for each item (content-range style lookup).
At runtime, the player resolves content using those ranges, so it can locate exactly what it needs from one package instead of handling many separate files.

by bunding the application, we want to make it easy to move and deploy.
unforutny due to browser local file permission limitations, we cannot run directl from local broweser, and needs a web service. we plan to provide a lightweight tool to do this more convenientely.

## Ending: Current State and Future Plan

As of this writing 0.15.0, is more of a proof that the idea works. We need to do antother signifcant iteration to make the whole thing more robust and user friendly.

A big part of how we improved RouteVN Creator was running usability tests continuously, usually a few sessions every month.

In earlier tests, many users got blocked by bugs before we could even properly evaluate UX.
So a lot of effort went into stability and bug fixing first.
This improved significantly over time, and the current product is much better than earlier versions.

At the same time, we are still not where we want to be.
Some parts are still not fully self-intuitive, and there is still a lot of work ahead to make the whole experience feel truly effortless.

At this stage, RouteVN Creator is still closer to a working prototype than a production product.
Our goal in the coming months is to push this into a production-ready product.
The encouraging part is that this prototype has already proven many hard problems can be solved.
