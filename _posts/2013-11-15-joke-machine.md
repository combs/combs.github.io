---
layout: post
title: "Joke Machine"
description: ""
category: "Prototype"
tagline: Only the freshest.
github: https://github.com/combs/ArduinoJokeMachine
galleryimages: [joke-machine-IMG_1166.jpg,joke-machine-IMG_1169.jpg,joke-machine-_DSC4905.jpg,joke-machine-_DSC4919.jpg,joke-machine-IMG_20130918_223147_966.jpg]
gallerycaptions: ["It's a bit tongue-in-cheek.","Want to hear the whole joke? Here goes... Why do seagulls fly over the sea? If they fly over the bay, they turn into bagels!","I've built several versions of the Joke Machine. This one featured embossed labels on a brushed-metal tin.","An early version of the Joke Machine had a hand-assembled circuit board.","A functional protoype of the interface."]
heroimage: joke-machine-IMG_1166.jpg
instagrams:
link:
youtubes:
status: Ongoing series
tags: [AVR,Arduino,Custom circuit boards,Power management,Custom circuit boards,Enclosure design,Jokes,Embedded developer]
---
{% include JB/setup %}

## What is it?

<pre>
HOW MANY
TICKLES DOES
IT TAKE FOR
AN OCTOPUS
TO LAUGH ?
...
TEN TICKLES
</pre>

*The JOKE MACHINE is a vastly sophisticated, 8-bit enhanced humor creating device with parallelized punchline circuitry and a remarkable sense of timing. It has but a few simple interface elements; future versions will feature a D-2-B (direct to brain) interface, with the option of retransmitting humorous thoughts to other nearby JOKE MACHINE users.*

## What problem does it solve?

As a user, I am sorely lacking jokes.

## What was my role in it?

Oh, you know, a bit of this, a bit of that. *cough cough I made it and its software and firmware and a custom circuit board but I did get [some help](http://www.readwriterachel.com) with the jokes*

## How does it work?

The screen is a 12-digit numeric display, probably originally intended for desk phones.

It's built around the ATTiny84 embedded processor with 8KB of storage. That 8KB has to include both the jokes and the actual program code. So there are *tons* of jokes. I did a lot of persnickety optimization with compiler flags and such to cram as much in as possible.

*Q: How do I input jokes into the JOKE MACHINE?*

*We predict that the JOKE MACHINE's vast store of jokes will become exhausted in 290 of your Earth years, but perhaps you wish to leave your mark before then. Regrettably, the JOKE MACHINE's incredibly complicated humor mixology circuits may only be maintained by a certified JOKE MACHINE technician.*


## Backstory

I made a few of these as holiday gifts one year.

*Q: It just keeps telling me the same joke over and over. Why?*

*The JOKE MACHINE automatically detects that if a joke was funny the first time, it will be funny the second time, and yet funnier the third time. If you do not find this amusing, your sense of humor may be recalibrated at any JOKE MACHINE dealer.*

*Q: Can I make it go faster or slower?*

*The JOKE MACHINE senses and adapts to its audience's rate of comprehension. If you feel like you aren't keeping up, this is simply the JOKE MACHINE's sophisticated timing circuitry deciding to catch you by surprise. Awkward-seeming pauses, too, are only used for dramatic effect. The JOKE MACHINE knows what is best.*

*Q: What happens when the battery runs out?*

*Who knows? A gradual dwindling of consciousness, a softening of the signature JOKE MACHINE voice? Failure to respond to simple questions? A disheveled nature? If you notice any of these attributes in your JOKE MACHINE, please advance it to the next realm of consciousness by replacing the batteries.*
