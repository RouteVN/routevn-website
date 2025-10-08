---
template: post
author: han4wluc
title: RouteVN Devlog first 1.5 year
tags: [blogPost]
date: '2025-10-08'
seo:
  title: RouteVN Devlog first 1.5 year
  description: A 1.5-year development journey of RouteVN, a visual novel engine and editor built from scratch. Follow the process from initial prototype through multiple rewrites, usability testing, and challenges in creating a no-code visual novel creation tool with modern UX.
  ogType: article
---

## RouteVN Devlog first 1.5 year


I've been working on RouteVN for over 1.5 years. Time really flew by.
I wanted to take some space to share about the journey and process itself as it is still in my memory.

## Beginning

It was around Feb 2024, I was looking for a new project to work on.
I always wanted to build something for Visual Novels since I had started coding but never really gave myself the time for such a project.
Well, now I had time and resources, so I decided to do it.

I had a lot of experience in software engineering and web development, which is really a blessing because it gave me the skills to basically build anything software related.

It took a while thinking about things, but it became more obvious that I just wanted to build a Visual Novel engine:
- It sounded challenging
- It is a necessary foundation to build better products for Visual Novels
- Existing experience for creating and reading Visual Novels is suboptimal, there is opportunity to do much better
- If successful, could have a big positive impact on the Visual Novel ecosystem

Actually, it is more like I wanted to build more of a visual editor to write Visual Novels without coding.
But in order to do that I had to build the engine as well.

I've been using products like Figma, Linear, and Notion. I think those products have a great user experience, much better than the previous generation of products. And I wanted to bring this kind of better experience for creating Visual Novels as well.

## First prototype for the engine

I wanted to build a quick prototype to validate how a Visual Novel engine could be built with web technologies.
I knew that for graphics could be built with html DOM, but I didn't want to do that and was looking for something better and more specific for the purpose. That's how I found out about PixiJS
I quickly built a proof of concept using PixiJS.
After a couple of days (with help of ChatGPT as well) I created this simple prototype where you can click and move to the next dialogue. It had sounds, background, character. It worked.

Another technical decision I made early on, based on my experience as a web dev, is that I wanted to separate the content and code.
All content of the Visual Novel would be in a JSON/YAML; it would be declarative.
All functionality and implementation would be in code in JavaScript.
This I thought was the only way to build a no-code tool.
This also worked.

So now, I had this prototype and a list of Visual Novel features that needed to be added.
This was enough for a prototype; I would not add all the features at this point.

## Start of editor

Now that I had a basic prototype for an engine, I wanted to prototype the Visual Novel editor.
This was actually a lot of design work, it was not just static UI design but designing the interactivity as well.
I did a lot of frontend work previously, but was not a designer.
My design approach was basically to think about all the design requirements and work on them one by one. I would try different things, leave it for a while until I found a satisfying design. A lot of trial and error.
The scene editor was the most important page, one which would be most different from existing tools out there right now and one that users will spend the most time on.
I don't remember exactly how much time it took, but I'm guessing around 2 weeks. I designed and built something that:

* Has a reasonable writing experience. Can be done without any coding.
* Has a live preview
* You see an overview, and can bring up more details when necessary

This is what it looked like

<img src="/public/blog/2025/04/1.png" style="width: 100%; margin-bottom: 24px;">


I was very proud of having built this, and it felt good to use. It was an early prototype, but a much better approach than anything else that I knew of.


## First round of usability testing

I mostly found people to test on LinkedIn by searching people who had some relation to Visual Novels. It was surprisingly effective, and I got the users willing to test that I needed.
I did around 5 tests in March and April; they were all done online.
I was primarily testing for usability itself. The conclusion was that all users were able to learn it and use it relatively quickly for the scene editor. It validated my experiment and also got some useful feedback to improve the experience.
This however did not validate if this thing was viable as a product; it was too incomplete.

For the next month I continued to improve the product.
Coding has become slower as more features were added and code became messier. Some parts had to be rewritten.
I also took the time to properly build an assets manager and scene canvas which would make the user journey more complete.
By the end of May, I had a new version with more features and more polished.

This is what it looked like:

<img src="/public/blog/2025/04/2.png" style="width: 100%; margin-bottom: 24px;">


The original plan was to do another round of usability test. But I ended up not doing that, and jump into a huge rabbit hole.

I was still not satisfied with what I had built.
The codebase was still too messy, and I didn't believe it was the best software design.
The product was OK, but it just felt better but not as delightful as I wished it to be. The functionality was also very limiting; it could not create custom GUI, for example.
It did not pass my bar for what I wanted to build, and I just wanted to build it better.



## Rewrite and improvements

For the next few months, I worked on the tech, frustrated that the software was not well designed and not up to my expectations.
There were also more advanced things like collaborative editing and GUI editor which were not resolved, and I wanted to have a solution for them.
This is a weird and questionable thing to do; I could do it only because I had the luxury of time.

I don't remember the exact things I did month by month, but it roughly went like this:

- June:
  - Built a new abstraction interface for the graphics.
  - Researched and experimented with yjs for CRDT collaboration storage
- July: Tried to find a solution for fully customizable GUI
- August:
  - Did a major rewrite of the editor & improved website
  - At one point I even considered to sponsor a game jam but the product was not ready for it
- October/November: Rewrote the Visual Novel engine to use the new graphics interface; it also supported animations, transitions, etc.
- December has been a slower month for me as I was traveling.

These 6 months, I had been heavily coding all day, trying to learn and solve the technical things preventing me from building the ideal product, and sometimes being distracted by other things in life. Satisfying my curiosity and technical progress was what kept me going.

## Detour for a VN store

By January, I had a new version of the Visual Novel engine, but I saw no end to it.
I took some existing VNs to try to implement all their features in the engine, but there were too many features to implement.

This gave me the idea that I could port existing Visual Novels into my engine and publish them in a store.
There were a couple of things about this that were especially attractive to me:
- I could kickstart a store from existing Visual Novels rather than having users create new Visual Novels from my engine
- If this was successful, it would have been a quick path to monetization

I worked a couple of months to build the store and figure out how to package a Visual Novel for distribution.
Then there was a month around March when I was reaching out to all indie VN creators I could find to tell them about this VN store and if I could port their VNs there
In the end, however, it didn't go anywhere; no one was willing to have their Visual Novels ported:
- No trust and very skeptical about this engine and store
- No user base that would actually read or buy Visual Novels from this store

It had become obvious that this was a dead end, so I took the learnings and moved on.

## Back to the main quest

Building an engine and editor was hard,  but this is exactly what this project was about. I either solved it or didn't.

At this point, I had explored the full product and tech:

- Built a graphics interface from scratch
- Built a Visual Novel engine from scratch
- Built an editor from scratch, enabled by:
  - Frontend and UI framework from scratch
  - Understanding of CRDT libraries and their limitations
- Building static websites
- Building a Visual Novel store and mobile apps

At this point it was a weird place to be.
I hadn't shipped anything real in 1+ year. All I had been doing was exploring.
I never felt more confident about building this as I had the deepest understanding of the product and tech.

## New design for the scene editor

A spark of inspiration hit me when I was browsing some posts on Reddit.
For the scene editor, what if we could put a text editor instead of the block editor?
A text editor would be more familiar to people, and it would not require opening a separate dialog to edit the text.
I gave this a try; I researched a lot about how rich text editors worked, and after many prototypes and trials, I concluded that it was possible.
I considered this a breakthrough and a major UX improvement for the product.

## Rewriting the engine

I was still not satisfied with the current engine, and wanted to simplify it even more.
Breakthrough: The amazing thing is that the core engine was around only 1000 lines of code. Even if I added missing features, it would probably grow to less than 2000 lines. This was a hint that I had found a good design and architecture.
This would have been around the 4th and 5th major rewrite of the engine.

## Rewrote frontend framework

I had been using a frontend framework I put together for over a year to build the editor.
I had good understanding of its limitations and I wanted something better.
Luckly I was able to find a better way came up with a new framework. This gave me confidence to rewrite the entire editor.

## Start a new editor

This was around June 2025. I felt I had figured out all the pieces.
I went to build a new version, this time again hoping this would be the last.
In a sense, my time was running out both financially and mentally. I wanted to ship something real.

I did a complete rewrite of almost all parts. Basically from scratch, now with all my experience and all the new tech that I had built.

During the rewrite, I also did design improvements, addressed many of the shortcomings in the previous versions.

The rewrite worked. It takes a while to implement again all the features, but it worked, the code was much cleaner, and the design and UX better than before.

## First intern hire

In July, my first intern hire started working.
I did not want to hire anyone too early, as things were just so chaotic; now things had gotten a bit more stable.
After over 1.5 years of coding alone, I finally started collaborating with another dev.
There are pros and cons, but there are many aspects that are more enjoyable when working together.

We got a lot of development done in July and August; we had caught up with all features previously implemented.

This is what it looked like:

<img src="/public/blog/2025/04/3.png" style="width: 100%;">

## Second batch of usability test

In August, we conducted a round of usability tests. It has been more than 1 year since we last conducted such a test.
This time, I had planned all tests to be done offline instead of online, in order to capture more information. The scope of the tests was larger, with much more features to test.
Out of these tests, 1 person was really excited about the product, 4 were OK but not that excited. But in terms of usability, they had all passed.
It gave me enough confidence to proceed in this direction and turn this prototype into a full product.

## Desktop app

In August and September, we focused on building the desktop app.
Originally, I had planned for the editor to work from the browser, but now decided to release a desktop version instead:
- Being able to store data locally was a big advantage. It's better for privacy and works better offline
- Storing locally meant that we did not need to maintain any servers, much easier from an operational standpoint.

One last feature we added to the desktop application is the ability to export the Visual Novel as index.html and JS files.
This made the user journey complete, working from end to end.
You could create a Visual Novel with the editor by storing all data locally, and then export it.
The exported version could be uploaded to any service that can run web-based applications.

## What is next

And here I am in early October as I'm writing this.
The Visual Novel editor is working but full of bugs, and missing things here and there.
These next months are still crucial; I just want to fix all bugs and finish the essential features.

There are so many advanced features and services that I want to add on top of it, but I need to prioritize reliability first.
We will gradually open testing to a larger audience and try to make user testing a regular thing, at least a few per month.

The last mile before a release always feels so close, but each time you get closer, the destination moves a bit further.
It is painful to know there are all those imperfections and bugs, but I also have to accept that it's not possible to get everything perfect immediately.

I do feel a bit of fatigue to having worked for such a long time, but it is also exciting to see the full product taking shape and putting it in the hands of users.

