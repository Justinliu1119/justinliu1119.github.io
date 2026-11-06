---
layout: single
title: "Other Projects"
permalink: /other-projects/
author_profile: true
excerpt: "Selected non-publication projects and competition work."
---

<div class="op-list">

<article class="op-item">
  <a class="op-media" href="{{ '/images/LLM_Fine_Tuning.png' | relative_url }}"><img src="{{ '/images/LLM_Fine_Tuning.png' | relative_url }}" alt="Chatbot Arena Human Preference Prediction"></a>
  <div class="op-body">
    <div class="pl-head"><p class="pl-title">Chatbot Arena Human Preference Prediction</p><span class="pl-tag">Kaggle Gold Medal</span></div>
    <p class="op-text">We trained Gemma-2-9B and Llama-3.1-8B with 4-bit QLoRA to predict human preferences, using AdamW and gradient accumulation to optimize log loss. To improve training efficiency and robustness, we tuned the context length and adopted length-sorted batching. We further improved performance by constructing a validation-weighted ensemble, yielding more stable and accurate preference probabilities.</p>
  </div>
</article>

<article class="op-item">
  <a class="op-media" href="{{ '/images/MCU.png' | relative_url }}"><img src="{{ '/images/MCU.png' | relative_url }}" alt="Autonomous inventory management system"></a>
  <div class="op-body">
    <div class="pl-head"><p class="pl-title">Autonomous Inventory Management System</p><span class="pl-tag">Embedded Systems</span></div>
    <p class="op-text">Built an autonomous inventory management system that tracks items, expirations, and temperature in real time. Used an ATmega328p with a barcode scanner (UART), LCD, DS1631 sensor (I2C), and keypad, bridged to a Raspberry Pi over SPI. Integrated Firebase and a SwiftUI app for adding/removing items, viewing metadata, and receiving temperature alerts with instant two-way sync. Implemented a compact state machine for add/remove/info workflows with debounced inputs. Delivered hardware schematics, microcontroller firmware, a Pi client/server, and a complete mobile UI for autonomous, low-overhead inventory control.</p>
  </div>
</article>

</div>
