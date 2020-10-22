---
layout: post
title: "Just Helping"
description: "Get unsolicited suggestions from a neural network."
category: "Art Machine"
tagline: "Get unsolicited suggestions from a neural network."
status: In a private collection
galleryimages: [just-helping-20180210-IMG_7979.jpg,just-helping-20180210-IMG_7966.jpg,just-helping-20180210-IMG_7918.jpg,just-helping-20180210-IMG_7963.jpg,just-helping-20180210-IMG_7948.jpg,just-helping-display.png,just-helping-controller.png,just-helping-stackup.png]
heroimage: just-helping-20180210-IMG_7948.jpg
tags: [Artist, Embedded developer, Hardware designer, PDSP-211x displays, Judging Me Judging You, Vintage OSRAM mainframe LED displays, Aluminum extrusion, Custom circuit boards, Neural networks]

---
{% include JB/setup %}

## What is it?

This machine gives you unsolicited suggestions from a neural network. It's styled after 70s mainframes and uses vintage Osram displays.

## What was my role in it?

I created this piece, including the design of custom display driver PCBs, enclosure design, and neural network training.

## How does it work?

A microcontroller (ESP8266) holds about 29,000 stored suggestions, generated with a [torch-rnn](https://github.com/jcjohnson/torch-rnn) network. It changes every two minutes, enough for about 40 days of continuous operation.

## Backstory
