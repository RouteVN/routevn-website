---
template: post
author: han4wluc
title: Building a Visual Novel Engine Part 2 - Route Engine
tags: [blogPost]
date: '2026-02-03'
seo:
  title: Building a Visual Novel Engine Part 2 - Route Engine
  description: Route Engine is a lightweight Visual Novel engine, it is written with less than 5000 lines of JavaScript code.
  ogType: article
---

# Building a Visual Novel Engine Part 2 - Route Engine

This series will explain the whole architecture and design of RouteVN Creator.
By the end of the series, you should have a good understanding of how RouteVN Creator works, and essentially how to build a Visual Novel engine from scratch.

This is part 2 of a 3 part series:

- Part 1 - Route Graphics: a declarative graphics and sound library
- Part 2 - Route Engine: a Visual Novel engine built on Route Graphics
- Part 3 - RouteVN Creator: a Desktop application to create Visual Novels without any coding

## Route Engine

Route Engine is all about the Visual Novel domain. It takes all the capabilities of Route Graphics and turns in into full fledged Visual Novel Engine.

There were a few goals or rather constraints that we had that decided on the outcome of this library:

- All graphics itself will be handled by Route Graphics
- All content will be in a big JSON file.
- The engine will execute the content into a full playable Visual Novel. Implementation.



<!-- ## Scripting language -->
<!---->
<!-- The most common way to implmeent a Visual Novel engine is through a scripting langauge. -->
<!---->
<!-- Let's take kirikiri2 for example. We can call those scripting langauges a DSL. they have very weell defined syntax and functionlity. -->
<!-- They also are simpe enoghh to write and read by hand, which is how it is actually used. -->
<!---->
<!-- ```kirikiri2 -->
<!-- @eval exp="f.hp = f.hp - 10; f.items['potion'] > 0" -->
<!-- [if exp="f.hp <= 0"] -->
<!--   [playse storage="gameover.ogg"] -->
<!--   你死了！[p] -->
<!--   [jump storage="scene1.ks" target="*start"] -->
<!-- [elsif exp="!f.items['potion']"] -->
<!--   使用药水恢复。[p] -->
<!-- [endif] -->
<!-- ``` -->
<!---->
<!---->
<!---->
<!-- The scripting language has to be parsed, syntax validated into a well defined datastructure. This is actually what the runtime executor will use. -->
<!---->
<!---->
<!-- or with programming language itself -->
<!---->
<!---->
<!-- renpy in python -->
<!---->
<!-- monogartari in javascript -->

## Diffrence between content and implementation

The content is what the user created. it is a json.

The implmenttino is the enigne code, it is javascript, and the user cannot change it. is a real programming langauge.

this is a big difference to engines like Renpy or Monogatari. Where the user is writing actual python / javascript itself.

in fact, we do not expect users to be writing the json by hand, it is suppoed to be used by anothe program.

route-engine does not have a scripting language. and it is just data, it is not a programming langauge like python or js.

the reason for this is because our primary use case is for this engine to be used by RouteVN Creator. Our objective is to hide the complexity and technicalaties and expose a non technical user via easy to use UI.

Having said that, it very possible to build a scripting langauge on top of route-engine. route-engine implmeents all the features and a higher level scripting langauge can be enough to wrap it to make it easier to use.


## Background

It is not the first time buliding visual novel engine. there have been hundreds built beore. but yet only a few make it and become big and mature enough to havev a significant userbase. this got me thinking a lot, and I came with the following confusion:

building a visual novel engines is deceptivley easy.

- at the shallow level, it seems that is just about putting images and text on the screen with specific coordinates. that is easy, and is something that can be built easily. and that is what I had in mind in the beginning. that is why there are more than a dozen of VN engines coming out every years. this is mostlly wrappers around the graphics layer.

- on the other hand, building a visual novel engines is basically bulidng an entire game engine. which is a huge work and hard. you have to manage the state of the game, record game progression to implmenet save, load, rollback, interactive UI, and loading assets. a visual novel's mechanics especially the graphics is much easier than other games. yet you still have to implement everything. you can also think of it as a mini operating system.

- if you are just building a custom engine runtime for just 1 VN. it is relatively straighforward. because you can basically hardcode evertying. a visual novel engine, however there is 2 set of users. 1 is the end consuemr that will read the Visual Novel. but on the other than it is the artsts and developers who need to use this engine to create more content. the 2nd is much harder, you cannot control wht the use wants to make, they are creating the content. and a lot of issues on the usability rather than the techncl itself.


when you have to do both point 2 and 3, it is a non trivial engineering project, one that take a lof iteraions and intentional design decisions to make it work.

buliding such project, we optimize for those 3

- easy to use
- able to scale to comlex features
- and stay reliable perfroamtn and stable

a enginge that grows in features but gets pulled down by all kinds of bugs is something I wanted prevent from the original deisgn.

this has gone through many iterations and rewrites. probaly 4 or 5. lost count.

## An entire Visual Novel with just a JSON file. is it possible?

Possible yes, for sure. the problem is more about how to make it practical.
by practical I mean mostly:
- easy to use
- can do it with the limited time and resources we have

We're not talking just about the graphics and UI like Route Graphics, we are talking abuot a JSON structure that here we're talking about everything. more advanced features including:

- showing the splash screen
- menu page with buttons
- handling button clicks
- fully customizable UI
- dialogs, confirm boxes
- auto mode skip mode,
- nvl mode, history mode
- managing all variables
- scene transitinos and animations
- and evertything that you see in visual novels
- variables and conditionals

what is not included:
- mini games 
- customizations outside of basic visual novel features


all of this without writing a single line of code. is it practical?

We've been trying to do this for a long time, the answer is mostly yes, but it is by no means easy and we are far from being done.

The key is that this is not implmeented in the JSON data stcutreu of course, but all these capabilities need to be implented in js and be exposed the JSON.

Next we will go throught this mythical json structure and show how we represent a full Visual Novel with a big JSON file

### Resources

We predefine all resources beforehand.

images can be used for both bg and cg and ui. these are all the buliding blocks we use for the visual novel. in here we just need to define all of it awith its respectie parameters. they all have an id that will be used to identify it.

example:


```yaml
images

sounds

videos

layouts

characters


tween
```

the above part is pretty straighfroward, some notes:
- we need to be careful on the resources types we support. layouts is direct RouteGrphics structure, so is most flexible.

we don't want to add too many types


### Story hierarchy

This is a meticulsously designed data structuer after many iterations to solve for the branching and content nature of visual novels.


We split the structure of a Visual novel into these:
- Scene
- Section
- Lines
- Actions


Scnenes is actually more like folders. they don't really have much logic, but they are useful for gruping sections.

Section is a real unit of content. A section is composed of mulitple lines. We just jump from sectino to section. the jump can be fully be insivsilbe to the user meainng it will be seen as continous. or can add a more significant transition between sections to make it feel like a full scene transition.

The line is the unit. It is usually experience that when use click left in the mouse, we will move to the next line. 

When during chioces, when we need a branching. it can jump to another section.

a line is made of actions
this is for example for a line where we need to show the background

```yaml

```

this is 2 lines, where text is changing.


```yaml

```

actions, most of the time represent a change.
for example we add a background. and the backgroudn will stay there until we have an acount to remove or change the backgrounds.


So everything is implemented with the section and lines. even the title screen. menu screens have layouts.

how do we know which line we are currently on?
we have a pointer that keeps track of the current sectionId, and lineId. this pointer gets updated everyting there is a change.

### Rendering dynamic data

Jempl is a templating langauge for JSON.

Is necessary to implment more dynamic stuff such as showing ths save slots, or partially show someting.


Variables. Show current speed.

```

```

Conditionasl. Show skip indictor only when skip mode is active. 

```

```

when calling the `stopSkipMode` action, it will update the variable, and change the contitional.


Loops. Show 6 save slots in the screen.

```

```

### Handling interactive elements with actions

This is where it comes close integration between Route Graphics and Route Engine.


```

```

This basically imlmented means that when the button is clicked, it will show the layout

Similar way

This basically imlmented means that when the button is clicked, it will jump to anotoher

Supports both click and hover events.

RouteGraphics layotus can suppoort actions. so can implmeent any action from click hover or ohter events.



### Challanges

Above we have demonstrated how you can use resources, story scene, section, lines, actions, and jempl to create dynamic and interactive expereinces.

It is a big challenge, we are verey contrained by the json, and we need to be very careful on the functionalities we want to instroduce. We mosty try to balance:

- making it too specific and hardcoded, it becomes just not flexible and cannot meet all use cases.
- making it too general, then this become hard to use, user will need to create more repetitive work. and differnt users may be building their own abstractions on it.

Finding a good balance one that correctly represends the visual novel domain is a challenge.
We need to be very careful on any new functionality of this JSON.

Backward compatiblity.
Also considreing any breaking change would require users to mostly start over their VN again or migrate the project. So we are willing to do this only when we have found structural wrothy impreovemtns that jsutifies the breaking change.

## Implementation / Runtime

Designign and imlmeentg this interface is done in iteratively, is needed to try things and to see how the implemetnation works.

This sectino will describe how we actually implmeent this data structure. he runtime.

Ok. now how do we implmeent this interface?

Below is some serious design and implementaton decisions that we made to make it happen.

A single store, comprising of state, selectors and mutations.
It has 2 sub stoes, for renderState, and presentationState due to their complexity.

projectData is the content JSON a big json.

systemState is the state of the full system. there is ONLY ONE state for the whole VN. this state fully explains everything to render current position in the VN.

presentaionState = is jsut the final state after computeing the actions for all lines.

renderState, is computed from the presenationtState and the rest of the systemState. the renderStateis sent directly to Route Graphics for updateing the screen.


selectors are just computed based on the raw system state. they make it easier to work with

actions is the only way you can update the sytem state. we have actions for everything.


### full example 1

The screen as abase with click actions for nextLine

- when you click
- Route Graphics emits event
- We handle the event, and call route Engine to run the action nextLine
- Next line does a bunch of calcualtesion, and endes up updating the current line
- we call render and get the updated presentatioState & renderState
- screen is updated


### full example 2

- click a button in menu, jump to stat game

- when you click
- Route Graphics emits event
- We handle the event, and call route Engine to run the action sectionTransition
- Section transition does a bunch of calcualtesion, and endes up updating the current line
- we call render and get the updated presentatioState & renderState
- screen is updated

### Single state

there is just a huge state for the entire thing. that is it. we figured out one single state is the simplest and enough. we can stilll break it down the single state for us to more easily work with.



In other words. sysmteStore is just a big intricated state machine. fully syncronous. pending side effects is stored in this state itself.

the effectsHandler will handle this effects, and update the pending effects state.
this is how all things with side effects are handled including:
- saveing game
- take screenshot
- render route graphics
- etc...

but most of the time it works.

### Pure functions, side effects

All actions and selectors are pure functions. all what actions do is just to update the state. that is around it.
The only other thing we didn't cover is how to handle side effects.

this is fully tested and this is what gives us confidence on growing the feature of this engine.

In the system state, we have an array to keep track of pending side effects.

The ssytem will check for pending side effects, and if there are side effects, it will be handler.

'render' side effects, will just call route gprahics render with the latest renderState.

saveing data will save the data to a more permanetn storage such as in the browser indexeddb or online

there is some manual tings to do to connect he envirnoment, the systemStore and side effects.

for example whenever we want a delayed actions, we will be using the timer

### Imlemenation challenges

all actions are pure functions. anything that needs sie effects needs to be doe with side effects.
whenever adding a new features, we need to make sure to implemented with the above restrictions. one tricky example was taking a screenshot for the sake of save data. the taking screenshot part is asycnronous, so we had to o a little of tricks to make ti work well with side effects.

some state actions are complicated. there is actions with 20+ lines of code with various conditional and loops and beceomes hard to see what is correct. even the unit tests, becomes hard to see if the unit tests itself are correct.
even if the unit test passes 100%, it is hard to grasp if the specificaiton itself is correct.
this is currently one challange that we have. 
we might need to further optmize the state design to make it more tactable, similar to how we did with renderState and presentaitonState or add some abstraciton sot handle some of the intrictate stuff.

this create a different way to do things, we cannot just imperative call the side effects. but the tradeoff is tha a pure functis state machine is so much more easier to maintain and work with.

## Future plans

Internally we use route-engine to re-implement some existing short Visual Novels by hand. This is for us to test how much we can do with this engine. How much of the featuers we can support, what are the gaps.

The current state is that it can do a lot of things, but there are still many glitches here and there, I'd say we're able to get to around 80% reproduction.

There is still work to do, but mainly we are adding support for all the most common visual novel funcitnality that we encounter, yet trying to tame the codebase so it does grow too complciated, there is no bugs, and stable.


## Conclusion


Route Engine is a well designed library serving as a bulidng block for building visual novel applications.

In the next post we will talk about RouteVN Creator, the actual editor, and how it is build on top of Route Engine. We have spend much more time on RouteVN Creator than any other libraries.


