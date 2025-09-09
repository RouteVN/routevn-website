---
template: post
author: han4wluc
title: Building a Visual Novel Store
tags: [blogPost]
date: '2025-03-14'
seo:
  title: Building a Visual Novel Store - RouteVN Blog
  description: Explore the comprehensive analysis of building a specialized Visual Novel store, covering current market players, content moderation, copyright challenges, monetization strategies, and the vision behind RouteVN Store. Learn how a dedicated platform can address unique needs of both creators and readers while overcoming industry-specific challenges to take Visual Novels to the next level.
  ogType: article
---

## Building a Visual Novel Store

In [this previous article](/blog/2025/01-to-fulfill-the-whole-potential-of-visual-novels/) I have shared how and why I got started building a platform dedicated to Visual Novels.
In this article, I will go thoroughly into more detail about my research and thoughts about building a Visual Novel specific digital store.

This article will cover:

* The current state of Visual Novel stores
* Target audience age
* Copyright
* Social aspect
* Network effects
* Monetization
* RouteVN Store's Vision
* Conclusion

## The current state of Visual Novel stores

| Store | Type | Focus | Content Maturity | Revenue Model |
|-------|------|-------|------------------|---------------|
| Steam | General Game Store | PC Games | Hybrid | Transaction fee |
| GOG | General Game Store | DRM-free PC Games | Hybrid | Transaction fee |
| Epic Games | General Game Store | PC Games | All ages | Transaction fee |
| itch.io | General Game Store | Indie Games | Hybrid | Voluntary transaction fee |
| App Store | App and Games | iOS | All ages | Transaction fee  |
| Google Play | App and Games | Android | All ages | Transaction fee  |
| Console Game Stores | Console Game Stores | Console Platform | All ages | Transaction fee |
| Mature content stores | Digital and physical goods marketplace | Mature audience, regional focus | Mature content | Transaction fee |
| Direct from publisher | Games and digital content store | Publisher specific content | Varied | Direct sale |
| Tyrano Builder's Novel Game Collection | Visual Novels made with Tyrano | Indie VNs | All ages | Transaction fee |

### Major Players and Their Positioning

**Steam** is the prime store for publishing and purchasing visual novels due to their dominance in the game distribution market. Steam is able to drive higher sales and publishers are willing to pay higher fees for this advantage.

**GOG and Epic Games**, although smaller, provide alternatives to Steam and healthy competition. GOG stands out for its DRM-free values, while Epic Games often offers lower prices.

**itch.io** has become the home for indie game developers including Visual Novels. It has a vibrant community where many Visual Novel jams are hosted. Its pricing model is particularly interesting, providing flexible, voluntary pricing options.

**Platform specific stores** like App Store, Google Play, Xbox, Nintendo, PlayStation are essential gatekeepers for their respective devices. Due to their platform dominance, they typically charge higher fees and have specific review processes, though some offer reduced rates for smaller developers.

**Mature content stores** focus on mature content Visual Novels and other digital content. Some stores offer a wider selection of products such as merchandise, typically targeting specific regions such as Japan or English-speaking audiences.

**Publisher direct stores** allow direct purchases from publisher's websites. The advantage is avoiding platform fees, but publishers must handle payment processing and regulatory compliance themselves.

**Tool-specific stores** like Tyrano Builder's Novel Game store are interesting because they're tied to creation tools, with business models often supported by advertising.

**Other Distribution Channels** This overview isn't exhaustive. Numerous smaller stores and niche platforms exist alongside physical retail stores, which remain relevant especially in Japan.

## Target audience age

Due to the historical development of Visual Novels, one critical consideration for any store is what age demographic to target.

There are three main approaches:

* **All Ages Store**: Creating a store that only offers content suitable for general audiences ensures broad accessibility but significantly limits the catalog of available titles.

* **Mature Content Store**: Embracing mature content allows for a comprehensive library but automatically narrows the potential audience and creates regulatory challenges in certain regions.

* **Hybrid Approach**: Offering all ages content by default with options to enable mature content visibility seems ideal in theory. However, implementing this effectively may prove more complex in practice.


### Content Moderation

Stores must perform content moderation to ensure content matches the intended audience.

There are different things that need to be moderated, such as sexually explicit content, violence, politics etc.

What constitutes "mature content" isn't always clear cut. Even with consistent policies, stores must navigate:

* Shifting legal frameworks across jurisdictions, content that's legal in one country may be prohibited in another
* Evolving cultural standards about acceptable content
* The subjective nature of content ratings

### Steam Study case

In June 2018 Steam posted [an article](https://steamcommunity.com/games/593110/announcements/detail/1666776116200553082) explaining their shift in content moderation policy to allow many more games to be published as long as it was legal.
Over the years, Steam has changed the language and criteria for what is allowed, balancing the concerns from players, publishers and other institutions. It has to strike a sensitive balance between players, publishers, and institutions to ultimately decide which games can be in the store and which cannot.

## Copyright

Copyright is an essential cornerstone of how content industries function and stores play an important role in making sure that copyright is respected.

Stores need to ensure that publishers actually own the copyright to the works they're selling. This is essential for maintaining the integrity of the platform and protecting both creators and consumers. The store needs to implement these verification processes without unnecessarily burdening legitimate publishers.

Additionally, a store needs to have a clear DMCA process for copyright owners to report infringing content.

### Piracy

Piracy has long challenged creative industries. Rather than viewing it solely as a problem, we can learn from how other sectors have responded.

One trend that has emerged is the rise of legitimate platforms that offer compelling solutions to piracy. For example:

* Amazon for books (Kindle)
* Spotify for music
* Steam for games
* Crunchyroll for anime

These platforms have been successful in attracting users and generating revenue in industries where piracy has traditionally been really common. 

### The DRM Debate

One stance that the industry has adopted to fight piracy has been using Digital Rights Management (DRM) technology. Basically, it uses technology to put some protection on the content so that it cannot be shared or distributed. 

Most platforms have some kind of DRM implemented in one way or another. It is a well-known fact that DRM is not 100% unbreakable, but making it hard or time-consuming enough to break usually is enough to achieve its objective.

DRM has also been criticized by many people, especially when it is implemented in ways that degrade user experience.

GOG is a store that takes an extreme position and publishes only DRM-free games.

A Visual Novel store will also need to take a stance on how DRM is implemented for the Visual Novels that are published. However, it does not need to take an extreme stance; it can also take an approach where it lets the publisher decide whether a Visual Novel has or does not have DRM.

I like to think of these two quotes as great approaches on how to think about piracy:

> "The easiest way to stop piracy is not by putting antipiracy technology to work. It's by giving those people a service that's better than what they're receiving from the pirates." — Gabe Newell, Valve Corporation

> "Piracy is not an issue of price. It's an issue of access. I just really believe that if we create the right product, which is better than piracy, that people will come." — Daniel Ek, Spotify

### Translated work

Visual Novel translation is a critical component of distributing Visual Novels to a global audience. It also offers unique challenges in terms of copyright especially in the context of fan translations.

Fan translations have undeniably helped visual novels reach a global audience. I give my utmost respect to the dedicated individuals who have spent years translating as volunteers.

Historically, accessing translated visual novels frequently meant resorting to unauthorized versions. The landscape has evolved significantly with the emergence of licensed translations and global distribution platforms like Steam. This legitimate ecosystem benefits all stakeholders: translators receive fair compensation, original publishers expand their markets, and consumers gain legal access to content while supporting creators. Recognizing this opportunity, some Japanese publishers have established their own translation initiatives to capitalize on growing international demand.

Despite this progress, several challenges remain in the translation ecosystem:

* The licensing process remains largely inaccessible, dominated by a small number of companies with established industry connections. This creates a barrier of entry, where talented translators with great skills may not have access to the connections necessary to secure a licensing.
* Translation efforts concentrate primarily on English and Chinese markets, leaving significant gaps for speakers of other languages who lack the infrastructure and industry connections needed for licensed translations.
* The rapid advancement of AI translation technology is something to keep an eye on, as it increasingly enables readers to bypass traditional translators entirely through increasingly sophisticated machine translation tools.

### Modding and derivative work

Modding refers to taking an existing Visual Novel and making changes to it. This might involve altering game mechanics, changing content, or creating new branches or routes.

Some stores allow listing this kind of derivative work, while other more official stores allow only original work.

A store needs to balance supporting this kind of community engagement while being aware of potential copyright infringement issues. Some approaches might include having clear guidelines on what content is allowed or not allowed in the store.

When handled well, modding and derivative works can enhance the original Visual Novels and create stronger engagement around them.

### Conclusion on copyright

There are many moving parts in regards to copyright. A Visual Novel store needs to understand the nuances and support an ecosystem where copyright is respected while at the same time not being an obstacle for creativity and engagement.

## Social aspect

A healthy relationship between creators and readers is vital for the Visual Novel ecosystem. A well-designed store platform can facilitate meaningful engagement through multiple channels:

* Reviews that help readers make informed purchasing decisions
* Discussion forums where communities can form around specific titles
* Feedback mechanisms for early versions, which are particularly valuable for creators' development process

Different stores provide different levels of support for this kind of social engagement.

One challenge worth considering is the potential fragmentation of community discussions. If reviews and conversations are locked to specific stores, users might face a disjointed experience such as purchasing a Visual Novel from one platform while needing to visit another for meaningful discussions.

An alternative solution is integration with established and more neutral databases or communities such as VNDB and CnGal, which already host substantial review collections and discussion communities.

### Case Study: itch.io's Creator centric approach

itch.io demonstrates an effective creator focused strategy by enabling creators to build followers, publish development updates, and participate in game jams. This approach fosters deeper connections between creators and their audience while building community around the creative process itself.

## Network effects

A Visual Novel store is a marketplace. Marketplaces have this network effect or flywheel effect:

* More publishers in the store lead to a larger catalog
* A larger catalog attracts more readers for discovery and purchasing
* More readers make the platform more attractive for publishers to increase sales

New marketplaces face a "cold start" problem. Without initial buyers, sellers hesitate to join, and without sellers, buyers see no value.

For a new Visual Novel store just starting out, it needs to find a niche or solve a critical pain point. It ultimately needs to bring a unique audience or engagement to make it worthwhile for publishers to use the platform.

## Monetization

### Transaction Fee Model

The pricing model for distribution stores is straightforward but with a few important nuances:

* Free games are distributed without fees, benefiting creators, readers, and the store by attracting user traffic
* For paid games, the store handles payments and charges a fee, typically between 12% and 30%

A 12% fee might seem substantial, but we need to look at different numbers to understand where all the money is going:

* Payment Processing fees
* VAT/GST & Sales tax
* Withholding tax

#### Payment Processing Fees

Payment processing fees are usually absorbed by the platform, meaning if the store charges 12%, and payment processing fees are 8%, the store will end up with 4%.

Payment processing fees vary a lot by payment methods.

Card-based payment methods usually have a structure like:
* Percentage fee
* Fixed fee
* Foreign exchange fees
* Bank transfer fees

You can go to some of the major payment gateway website and check the exact pricing.

This can easily total to 8% or even more, but does not consider chargeback and refunds where the fees will be even higher.

Alternative payment methods such as e-wallets follow a similar structure to cards, but without the fixed fee which leads to significant lower overall fees.

The key issue is that fixed fees are disproportionately high for lower priced items. If the fixed fee was $0.3 for example, it would amount to 30% for a $1 item, 6% for a $5 item, and 3% for a $10 item. For Visual Novels this can be a problem.

Larger platforms and stores are able to decrease the payment processing fees due to their huge payment volumes. However, this is not possible for smaller stores.

For smaller stores that want to minimize this fee, some options are:

* Enable a wallet top-up system, where users can top up like $10 or $20 so that we minimize the fixed fees of payment processors
* Encourage users to purchase using payment methods with lower fees
* Pass the payment processor fees to the publishers altogether, which is not ideal

#### VAT/GST & Sales tax (0-27% depending on country)

Although VAT is a common tax applied by countries around the world, especially in Europe, the original intent is that this fee should be paid by the customer.

For digital products, however, where products are accessible from all over the world, stores often charge the same final price to all countries for simplicity and practicality.

All the handling of VAT and compliance is usually handled by the store. This is so that publishers have less burden and can do their work rather than focusing on VAT.

Another model that some larger stores have been adopting is regional pricing. The idea is to charge different prices for each country. This is a great strategy that can take into consideration the VAT level and purchasing power of the specific group.

The thing that does need to be taken into account is having some system that is able to prevent people from switching and buying from lower priced countries.

#### Withholding tax (0-30% depending on the country)

This is subtracted when the store has to send the money to the publisher. There are different laws and requirements for different countries. The store has to do its utmost to set up the contracting and payments in a way that minimizes withholding taxes.

### Advertising and Subscription Model

Advertising, combined with a subscription option to remove ads, represents an alternative monetization strategy that has proven successful in other content industries such as music and video streaming.

The primary advantage of this model is that readers gain access to a broader range of free content, though at the cost of a potentially interrupted user experience. 

Users who choose to pay for an ad-free experience make a direct monetary contribution that benefits publishers. This creates a dual revenue stream that can be particularly effective for growing platforms.

For this model to work effectively, the store must implement a fair system to pool all revenue from advertisements and subscriptions, then distribute it proportionally to publishers based on metrics like engagement time, completion rates, or other relevant performance indicators.

### Choosing the business model

The Visual Novel store needs to choose which business model is best or even come up with some alternative monetization strategies. Regardless of the model, the platform has to make decisions based on:

* Making the store sustainable in the long run
* Maximizing the user experience for readers and publishers
* Creating incentives that grow the ecosystem

## The RouteVN Store Vision

After analyzing the current landscape and identifying key challenges, I've developed a clear vision for RouteVN Store that addresses unique needs of both creators and readers.

### Core Principles

* Visual Novel specific. Most major platforms for Visual Novels today are game platforms. We believe we can do much more if we specialize specifically for Visual Novels. 
* User experience powered by product innovation. Our main differentiation should be a better product that provides the best user experience for both publishers and readers.
* Global audience, we want to reach every country and language.

### Strategy

* RouteVN Store will focus on all ages content for several important reasons:
  * Broader Market Access: This allows your visual novels to reach audiences that might otherwise be inaccessible
  * Reduced Regulatory Complexity: Fewer content restrictions means faster approvals and global availability
  * Emerging Trend Support: We hope to align with a growing trend of major studios creating high quality all ages games

* Invest in building a Visual Novel specific engine.
  * The engine should be open source
  * The engine will be an enabler for many of the product innovations down the road

* True seamless experience across devices
  * Single Purchase, Multiple Devices: Buy once, play anywhere: desktop, mobile, tablet
  * Seamless Continuity: Start on your PC, continue on your phone with automatic cloud saves

* Build tools to facilitate global audience
  * Adapt the platform to regional differences to make sure we comply with different regulations
  * Enhanced tools for those who want to read Visual Novels in foreign languages 
  * Facilitate and streamline process for licensing and translation Visual Novels

* Creator-Friendly Publishing
  * Simplified Submission Process: Clear guidelines and streamlined approval process
  * Transparent Analytics: Useful insights into how readers engage with your visual novels
  * Improved Fan Engagement: Tools to communicate with and build your audience
  * Low platform fees: On par with the lowest fees in the industry

### Join Us in Building the Future of Visual Novels

If you're a visual novel creator interested in being part of our journey:

* [Join our Discord community](https://tally.so/r/w4LKab): Connect with other creators and get early updates on our progress
* [Apply for our publisher beta program](https://tally.so/r/wzZ7rM): Be among the first to publish on RouteVN Store
* [Talk to me](https://tally.so/r/wzZ7rM): Let's discuss how RouteVN can you to showcase your Visual Novels

## Conclusion

In this article, I've shared my research and thoughts on building a Visual Novel specific digital store. We've explored the current landscape of stores, content considerations, copyright challenges, social aspects, network effects, and monetization strategies.

The Visual Novel industry has evolved significantly over the years, yet there remains room for specialized platforms that understand the unique needs of both creators and readers. RouteVN Store aims to contribute to this ecosystem by focusing on what makes Visual Novels special and creating an environment where they can thrive.

I believe that with thoughtful design choices and a focus on both creator and reader experiences, we can help take Visual Novels to the next level.
