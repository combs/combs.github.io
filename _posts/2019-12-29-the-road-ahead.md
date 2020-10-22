---
layout: post
title: "Road Ahead"
description: ""
category: "Art Machines"
tagline:
github:
galleryimages: [road-ahead-20191229-IMG_2380.jpg,road-ahead-20191229-IMG_2432.jpg,road-ahead-20191229-IMG_2382.jpg,road-ahead-20191229-IMG_2431.jpg,road-ahead-20191229-IMG_2416.jpg]
gallerycaptions: ["","",""]
heroimage: road-ahead-20191229-IMG_2380.jpg
instagrams:
videos: [road-ahead-oblique-sd.mp4,road-ahead-head-on-sd.mp4,road-ahead-figures-sd.mp4]
status: In a private collection
tags: [Custom circuit boards,Raspberry Pi, Seven-segment displays,Python, Occupancy sensor, Artist,WPA High Frequency]
dimensions: 12x8x3"
materials: Hand-assembled custom display panels, vintage LED displays, powder-coated steel enclosure, acrylic, computer, microwave occupancy sensor, infrared occupancy sensors


---
{% include JB/setup %}

## Auction

This piece was auctioned as part of WPA's 2020 auction, ["High Frequency"](https://www.artsy.net/auction/washington-project-for-the-arts-high-frequency-benefit-auction-2020).

## What is it?

This piece has a large, handmade array of small, numeric displays that show a sequence of numbers.

Using its infrared and microwave motion sensors, it watches for nearby people.

After a certain amount of movement is observed, it slowly fades to a videogame-style display of a car driving along a winding road.

## How was it made?

I designed and fabricated this artwork. The circuit boards were fabricated to my design by a PCB factory. I also started with a powder-painted steel enclosure which required machining.

I sourced components and assembled the boards by hand with a hot-air rework station. I wrote the software and drivers, and filled it with artwork that I collaged and painted.

## Technical information

There are 336 individual vintage numeric displays attached to 14 display boards, which each have their own display controller (ISSI IS31FL3733). I designed these boards and wrote the Python driver software for their display controllers. A Raspberry Pi 3 computer runs my software, which turns a pixel grid into the very different display signals needed for the 336 numeric displays. The multiprocess software uses interprocess communication (pipes and queues) to synchronize signaling for a deep framebuffer and communicate with its peripherals.

[More about its technology and creation on Hackaday.io](https://hackaday.io/project/169244-336-digit-7-segment-display-with-per-segment-pwm)

## Press

[Hackaday: "Bask in the Glory of This 336 LED Digit Display"](https://hackaday.com/2020/01/18/bask-in-the-glory-of-this-336-led-digit-display/)
[Hackster.io: "A 336-Digit 7-Segment Matrix Display"](https://www.hackster.io/news/a-336-digit-7-segment-matrix-display-15504a9fff11)
[WPA "High Frequency"](https://www.artsy.net/auction/washington-project-for-the-arts-high-frequency-benefit-auction-2020)
[WPA "High Frequency" print catalog](https://issuu.com/wpadc/docs/wpa_high_frequency_catalogue_issuu-final)