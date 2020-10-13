---
layout: page
title: Code
permalink: /codes/
description:
nav: true
order: 4
---

<div class="codes grid">
  {% assign sorted_codes = site.codes | sort: "importance" %}
  {% for code in sorted_codes %}
  <div class="grid-item">
    {% if code.img %}
      <img src="{{ code.img | relative_url }}" alt="code thumbnail" width="100" height="100">
    {% endif %}
    <div class="card-body">
      <h3 class="card-title"> <a href="{{ code.github }}" target="_blank">{{ code.title }}</a> </h3>
      <p class="card-text">{{ code.description }}</p>
    </div>
  </div>
{% endfor %}
</div>
