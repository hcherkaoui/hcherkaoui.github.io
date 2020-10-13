---
layout: page
permalink: /publications/
title: Publications
description: All my publications as first author.
years: [2018, 2019, 2020, ]
nav: true
order: 2
---

<div class="publications">

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
