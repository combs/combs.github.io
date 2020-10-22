---
layout: post
title: "Fireflies"
description: "These firefly lanterns learn colors from each other&mdash;or from you."
category: "Art Machines"
tagline: "These firefly lanterns learn colors from each other&mdash;or from you."
github:
galleryimages: [fireflies-20181103-IMG_0040-2.jpg,fireflies-daytime.jpg,fireflies-20181104-IMG_0276.jpg,fireflies-20181104-IMG_0305.jpg,fireflies-20181104-_DSC5123.jpg,fireflies-20181103-IMG_0246.jpg,fireflies-20181103-IMG_0183.jpg,]
gallerycaptions:
heroimage: fireflies-20181103-IMG_0033.jpg
instagrams:
link:
videos: [fireflies-in-situ-sd-sharp-low.mp4,fireflies-sharpened.mp4]
roles:
status: NFS
tags: [AVR, RGB color sensor, Addressable LEDs, LEDs, Infrared communication, 3D printing, Papier m&acirc;ch&eacute;, Interactivity, Artist, Hardware designer, Embedded developer, Collaborator, PLA]
---
{% include JB/setup %}

## What is it?

These firefly lanterns learn colors from each other&mdash;or from you. Each firefly blinks its own color and pattern, and spreads them to other nearby fireflies. Color picking wands let you send your favorite color to the fireflies.

## What was my role in it?

These were created in collaboration with [Rachel Kaufman](http://thistleandthy.me). Rachel designed and created their appearance and bodies, and I designed and created their interactivity and electronics.

Our primary goal was to inspire a sense of wonder in viewers.

We showed 42 of these (with 6 color pickers) at the Mount Pleasant Lantern Walk in 2018.

## How does it work?

Each firefly communicates with other fireflies nearby using infrared, like a TV remote. They each share the most recent color they've heard, and listen for fresher colors.

The color pickers have a color sensor and a button, and send the colors to nearby fireflies, who spread it onwards.

Care was taken with the interaction design to ensure that many people could use them at once, while still having a rewarding experience.
