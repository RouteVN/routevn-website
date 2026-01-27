---
template: post
author: han4wluc
title: Building a Visual Novel engine from scratch part 1 - Route Graphics
tags: [blogPost]
date: '2026-01-26'
seo:
  title: RouteVN Technical Architecture
  description: This is a technical post explaining how to build a Visual Novel engine
  ogType: article
---

# RouteVN Technical Architecture

This series will explain the whole architecture and design of RouteVN Creator.
By the end of the series, you should have a good understanding of how RouteVN Creator works, and essentially how to build a Visual Novel engine from scratch.

This is part 1 of a 3-part series:

- Part 1 - Route Graphics: a declarative graphics and sound library
- Part 2 - Route Engine: a Visual Novel engine built on route-graphics
- Part 3 - RouteVN Creator: a Desktop application to create Visual Novels without any coding

## Route Graphics

Route Graphics is responsible for handling any visual and audio changes on the screen.

If we want to change any pixels or audio, it will be done through route-graphics.

It provides all necessary graphic primitives to build a visual novel, but the library itself does not mention or have any knowledge about Visual Novels, is designed to be a general graphics library that can be used for any other use cases.

Route Graphics is a declerative library built based on PixiJS.

Below is an example of the declarative JSON/YAML interface

```yaml
```

Route Graphics will take care of rendering this onto the screen

<!-- TODO: Add image -->

Any updates we want to make, we just update the JSON/YAML

## Declarative vs Imperative

**Declarative** — You define the end state, and the library figures out how to get there.

**Imperative** — You write surgical, step-by-step instructions to reach the desired state.

While designing the declerative interface, we took the freedom to adapt the interface a bit to be easier to use for client libraries, meaning we do not map the API one to one with PixiJS API, it is a whole new API.

By building this decleartive interface, we simplify the interface that Route Engine and RouteVN Creator have to deal for their graphics and audio needs.

## PixiJS

Route Graphics is built on [PixiJS](https://pixijs.com/).

PixiJS was choosen because
- It works on the web, which is one of the most accessible platforms out there
- It is performant and it supports 3 types of renderers: WebGPU, WebGL, and canvas
- API is easy enough to use with good documentation
- Mature: has been around for many years, and used by successful game engines

In theory, the Route Graphics is designed in a way that it can support other rendering engines other than PixiJS, but for now PixiJS satisfies all our needs.

## Audio

We wanted a unified library for both graphics and audio.

We could not find a better name for the library, so we ended up sticking with Route Graphics, but it also handles audio.

PixiJS itself does not support audio, so we implemented sounds using the [WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).

Similarly to how we wrapped PixiJS with a declarative interface, we also wrapped the WebAudio API with a declarative interface.


## Plugin System

The current supported node types are:

Elements:
- Container
- Sprite
- Rect
- Slider
- Text
- TextRevealing
- Particles
- Animated Sprite (Spritesheet)

Animations
- Tween

Audio
- Sound

We may add more node types as we need.

Many of the node types are straighfroward and similar to what PixiJS has, below we will go through some of the more interesting ones.

## Tween Animations

Animations, or more precisely tween animations are implemented using PixiJS Ticker.

Tween animatins are essentially changes in a property over time.

Below is an example to make the background have a fade in effect.

```yaml

```

Below is an example of moving a character:

<!-- TODO: Add tween example -->


The primitives: `keyframes` with `duration`, `value`, `easing` is all that is needed to realize all kinds of interesting animations.

## Particles

PixiJS itself provies a particles primitive, but does not provide high level implemetation to get intereting effects.

We looked into this library, and was able to take most of it

Snow effect



This is still work in progress

## Text Revealing

Challenging to implment.

Need to calculate the width and height of text. 

We use PixiJS Ticker to 

## Spritesheets

Basically GIF. Spritesheet seems what it is used in game development and is preferred over GIF. There are several software that supports editing spriteshest, and there is a Spritesheet class implemtned in PixiJS.


## Event system

In Visual Novels, we have click and drag events. We implmeented an even system with declarative code as well.

```yaml


```

The client will receive this event, and will be able to do whatever it needs to do. You can also pass a payload to it. This is exactly button click sand clicking to go to next line works.

## Implementation

Below we discuss more on some of the challenged and details of of implementing such library.

## Diff

One key aspect of building a declarative library is the diffing algorithm.

Each node is split into add, update, delete operations. Each node has a unique ID.

Add and delete are more straightforward. Update is more involved, as you need to make sure to update only the things that have changed.

The diffing algorithm basically walks through and compares the previous state and next state, and will do the add, update, delete operations accordingly.

## Computed

Our first implementation of route-graphics was more naive. We ran into issues and complicated code because we were doing calculations and execution at the same time.

Calculations are things like the final X and Y position of the element. It also includes calculating the width and height of text elements.

Execution is actually calling the PixiJS functions to apply the graphics.

We concluded that we could process all the original state into a computed state first. And during execution, it would be much simpler.

The JSON gets first converted into computed format. We do this transformation preprocessing before doing any execution. This helps us with calculating the positions, for example fonts, etc., so during execution it will just execute without doing any other calculations. This has been very useful for keeping the code clean and maintainable. Calculations are fully unit tested.

## Aborts and async code

Unline normal render functions where it executse immediatley. Things like animations and revealing text, take longer.

One issue is what happens if state is updated before the previous animation has concluded.

Another issue we have encountered, is how to make sure that when render() is called before the previous render is finished, how it will behave. For example at 500ms insead of 1000ms animation. There can be different animations or other things going on in the screen. 

At first we had tried to do it with Promise and signal abort. However working with the async await when is abortable was difficult, especially when there were muttiple ones going on at the same time.

We updated the implemenation in favour of a centralized bus that will coordinate and better manage all asyncronous events.

## Where Route Graphics is Used

All exported Visual Novels will have Route Graphics bundled and run it

Route Graphics powers the live preview in the scene editor. And that is also why the live preview is fully accurate and same as the exported Visual Novel.

We also use Route Graphics to preview for the Tween, and Transform pages.

## Closing

Route Graphics is open source under MIT License. You can star it on GitHub.

You can see more examples from the playground website.

In the next post, we will be talking about Route Engine. How we designed a system that implements a full Visual Novel engine with less than 3000 lines of code.

