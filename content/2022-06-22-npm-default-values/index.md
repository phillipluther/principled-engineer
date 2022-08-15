---
title: 'Better Bootstrapping: Set Default Values for NPM Init'
summary: "Set your NPM default values! Manually editing every new project's `package.json` is a small thing that annoys greatly."
author: Phillip Luther
published: '2022-06-22T07:00:00.000Z'
tags:
  - Node.js
  - NPM
  - Developer Experience
keywords:
  - npm default value
  - npm init
series: Practicals
slug: 'set-default-values-npm-init'
cover: 'old-boots.jpeg'
cover_credit: 'Oziel Gomez'
cover_credit_link: 'https://unsplash.com/@ozgomz'
---

Tale as old as time: an idea for a new JavaScript project pops into your head, you `npm init` the thing because we `npm init` all the things, and then you're off to the races.

Except not.

Immediately after init you've gotta fire up your editor of choice and tweak the new project's `package.json` file. Said file's assuredly rife with awful default settings.

Version 1.0.0? No author information? Utter nonsense.

What the bleep is an ISC license? Cue [Clippy](https://en.wikipedia.org/wiki/Office_Assistant): did you mean MIT?

## Setting NPM Init's Default Values

Initialization defaults are part of NPM's config. You update and delete them just like any other NPM config setting.

```bash
$ npm config set [key] [value]
```

Conveniently enough, all relevant config settings are prefixed with init-. We can grab everything worth defaulting with a good ol' grep.

```bash
$ npm config ls -l | grep init-
```

That'll list out all of NPM init's defaults. I'm mostly concerned with updating the license, author, and version values since those cause me the most grief.

I'm open to any suggestions on better/leeter/more performant ways to get these settings, but I'd also ask why we'd bother optimizing a one-time action.

## Update NPM Init's Default Version

```bash
$ npm config set init-version 0.0.0 -g
```

NPM's default version value is 1.0.0; that's you telling the world your package is stable and ready for production according to [SemVer](https://semver.org/).

This one kills me. Who's stable and production-ready without writing a single line of code? It's a straight up bad default. Maybe it's intended to ease Node.js support into existing/mature projects, but that's me stretching for rationale. Please hit me up if you know why 1.0.0 is NPM's default version. It deeply vexes me.

I digress.

Personally, I set my version default to 0.0.0. Version zero make sense in my head, as I haven't published a new project so there is no version yet. On first publish – almost certainly using the fantastic [np](https://github.com/sindresorhus/np#np-) utility – I'll bump that zero to 0.1.0 or 1.0.0 or whatever semantic version suits my consumable's use case.

Set your default version to whatever makes sense for your own workflows.

### Update NPM Init's Default License

```bash
$ npm config set init-license MIT -g
```

When initializing new Node.js projects, NPM defaults to the ISC license. This is another default setting that baffles me.

I've never shipped anything using the ISC license; few-to-none of the NPM modules I use regularly ship with the ISC license, either. In fact, the company behind the ISC license [doesn't use it](https://en.wikipedia.org/wiki/ISC_license#Reception) or recommend using it anymore. I have great confidence in the Node.js dev community and I have great confidence there's a great reason npm init still uses "ISC" for its out-of-the-box license field. I don't know what that reason is, though, and I get irked needing to manually change the value on every init.

As with versioning, so for licensing: update the default license value to whatever makes sense for most of your projects. I ship my Node.js packages with the MIT license so I default to that.

### Update NPM Init's Default Author Values

```bash
$ npm config set init-author-name "Phillip Luther" -g
$ npm config set init-author-email dev@phillipluther.com -g
$ npm config set init-author-url https://phillipluther.com -g
```

Legit Node.js packages have legit author information: the author's name, email, and website. Legit author info inspires confidence in consumers of your package, especially if they're pulling it down from the NPM registry. I try to be legit whenever possible. Blank author info is not legit; nor is manually editing JSON with every new project.

Author details are understandably blank by default since Node.js has no idea who you are. To ensure my Node.js packages are legit and populated with legit author info, I make sure my name, email, and website are defaulted for future inits.

Note the quotes! You'll need to wrap strings in quotes for multi-word defaults like init-author-name. Insidiously, nothing breaks if your string isn't hugged by quotes, but you'll end up with only the first word.

```bash
$ npm config set init-author-name Phillip Luther -g
$ npm config get init-author-name
Phillip
```

## Let NPM Init's Defaults Be Defaults

Setting sensible NPM defaults is a one-time action to remove friction. Once set, those values apply to any flavor of npm init. My defaults are so ubiquitous I almost always use npm init -y to bypass that cute little CLI interview.

If you simply npm init and follow the prompts, though, you'll find your updated config settings waiting for you as the default-mash-return options.

![Any defaults you set apply to the npm-init interview](./npm-init-interview-default-settings.png)

That makes handling project setup exceptions all the easier. Speaking of exceptions …

### Exceptions to the Defaults

> But I don't WANT every project to use the same author email address and name!

Yeah, me either.

Note that we've been talking about sensible defaults. Don't get hung up on what-if and well-actually; it's a numbers game. If most of your projects use the MIT license, like mine do, set the default to MIT.

Got a random library that's GNU licensed? Tweak it after init or go through that init wizard thing. Deal with one-offs as they come. Make the exceptions exceptions.

Almost all of my projects use the same author info, starting version, and license. That's where I lean hard into that concept of setting sensible defaults. I found some sane settings that cover the majority of my use cases and applied them.

### Let That -g Flag Fly

I always update my NPM initialization defaults globally, too, appending a `-g` flag to the tail of every `npm config set` command. There are other location options for setting config values -- namely, at the user and project level -- but exploring the differences and reasoning around why you'd update one config over another is beyond the scope of this post.

I prefer updating these values globally because I think of them as global defaults to my NPM initialization setup.

## Sensible NPM Init Default Values (Revisited)

Admittedly, the sky's not gonna fall if a new project's `package.json` sports blank author details or declares an asinine version. Those wonky values bother me, though. They hang me up after every init. I can remove those hang ups by setting sensible defaults.

I start (and abandon) myriad new projects. Manually updating a `package.json` file puts one extra obstacle in front of actually building something. That's assuming the bad defaults bother you as much as they bother me. They really bother me.

Seriously, though … update your NPM config defaults. Do it as a one-time thing and never futz with it again. Never futz with it until you buy a new computer and have to reconfigure your whole environment, at least. The more projects you create the more the move pays for itself. The focus you're not spending on JSON settings is focus you can spend on whatever code you're actually trying to write.

I don't use Yarn, but yeah … yada-cubed all of the above for Yarn, too.
