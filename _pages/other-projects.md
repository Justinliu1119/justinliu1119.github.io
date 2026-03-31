---
layout: single
title: "Other Projects"
permalink: /other-projects/
author_profile: true
excerpt: "Selected non-publication projects and competition work."
---

<div class='legacy-projects-font' markdown="1">

## Competition Projects

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Kaggle Project</div>
      <img src="{{ site.baseurl }}/images/LLM_Fine_Tuning.png" alt="Chatbot Arena Human Preference Prediction" style="width:100%; height:auto; max-height: 500px;" />
    </div>
  </div>

  <div class='paper-box-text' markdown="1">

**Chatbot Arena Human Preference Prediction**

We trained Gemma-2-9B and Llama-3.1-8B with 4-bit QLoRA to predict human preferences, using AdamW and gradient accumulation to optimize log loss. To improve training efficiency and robustness, we tuned the context length and adopted length-sorted batching. We further improved performance by constructing a validation-weighted ensemble, yielding more stable and accurate preference probabilities.

  </div>
</div>

## Embeded Systems Design
<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Embeded System</div>
      <img src="{{ site.baseurl }}/images/MCU.png" alt="Autonomous inventory management system" style="width:100%; height:auto; max-height: 500px;" />
    </div>
  </div>

  <div class='paper-box-text' markdown="1">

**Autonumous Inventory Management System**

Build an autonomous inventory management system that tracks items, expirations, and temperature in real time. Use an ATmega328p with a barcode scanner (UART), LCD, DS1631 sensor (I2C), and keypad, bridged to a Raspberry Pi over SPI. Integrate Firebase and a SwiftUI app for adding/removing items, viewing metadata, and receiving temperature alerts with instant two-way sync. Implement a compact state machine for add/remove/info workflows with debounced inputs. Deliverables: hardware schematics, microcontroller firmware, Pi client/server, and a complete mobile UI for autonomous, low-overhead inventory control.
  </div>
</div>

</div>
