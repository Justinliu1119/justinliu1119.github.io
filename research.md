---
layout: page
title: Research
menu: true
order: 4
permalink: /research/
---

I study learning and control for autonomous systems, with a focus on **multi-agent decision making**, **data-driven state estimation**, and **safety**.

## Eisenberg–Gale MARL (EG-MARL)
I model multi-robot task allocation as a **competitive-equilibrium market**.  
Budgets encode fairness, utilities capture heterogeneity, and the equilibrium provides **efficient** and **fair** assignments with transparent trade-offs.  
I compare against Hungarian/greedy baselines and explore CTDE training and online replanning.
- Repo: <https://github.com/Justinliu1119/Fair-MARL>

## Diffusion-based State Estimation
For partially observed dynamics, I use **conditional diffusion models** to impute latent states and missing observations, improving policy robustness in noisy environments.

## Embodied AI Safety
In interactive simulators (e.g., AI2-THOR / VirtualHome), I combine **LLM-assisted planning** with **constraint checks** (temporal-logic style) to keep policies within safe regions while maintaining task success.

## Wildfire Modeling
I explore spatiotemporal forecasting and geolocation under multi-modal sensing, aiming to estimate ignition and arrival-time maps that support planning.

### Selected Notes
- IEEE SiPS 2024 paper: *Let’s Roll: A Synthetic and Real Dataset for Pedestrian Detection Across Different Shutter Types*.  
- Ongoing: benchmarking EG-MARL fairness–efficiency curves and diffusion estimators under occlusion.
