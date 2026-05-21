---
layout: page
permalink: /slides/
title: slides
description: Selected lecture and presentation slides.
nav: true
nav_order: 6
---

{% assign slides = site.data.slides %}

{% for slide in slides %}

## {{ slide.title }}

{{ slide.summary }}

**Open:** <a href="{{ slide.file | prepend: '/assets/pdf/slides/' | relative_url }}" target="_blank" rel="noopener noreferrer">slides</a>

{% endfor %}
