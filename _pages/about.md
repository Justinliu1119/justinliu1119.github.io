---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hello! I am Justin Liu. I will begin my Ph.D. in EECS at the UC Berkeley in Fall 2026. I completed dual B.S. degrees in Electrical and Computer Engineering (Honors) and Applied & Computational Mathematics at the University of Southern California in May 2025. I am a researcher in intelligent cyber-physical systems with [Autonomous Networks Research Group](https://anrg.usc.edu/www/) advised by Professor [Bhaskar Krishnamachari](https://viterbi.usc.edu/directory/faculty/Krishnamachari/Bhaskar), and I have worked closely with Professor [Peter Beerel](https://sites.usc.edu/eessc/people/) on conditional diffusion models. I was also a visiting scholar at Northwestern University [Design Automation of Intelligent Systems Lab](http://zhulab.eecs.northwestern.edu/index.html), advised by Prof. [Qi Zhu](http://users.eecs.northwestern.edu/~qzhu/). I'm also fortunate enough to be advised by Prof. [Yinyu Ye](https://stanford.edu/~yyye/) on stochastic online optimization.

My research focuses on decentralized control, stochastic optimization, and uncertainty-robust learning with applications in multi-agent and cyber-physical systems. Specifically, I design autonomous agents that can coordinate over long horizons, make robust decisions under uncertainty, and satisfy safety constraints in dynamic environments. Looking ahead, I aim to advance learning and optimization methods that make autonomous systems simultaneously high‑performance, fair, and safety‑critical.

**Current Focus Areas**
- **Data-Driven Decision-Making:** Developing online learning algorithms that handle uncertainty with convergence and regret guarantees in multi-agent games.  

- **Generative modeling for dynamics:** Leveraging diffusion models to enable decentralized systems to infer global states from partial and noisy observations, improving coordination under uncertainty.

- **Safety in embodied AI:** Using LLMs for high-level task planning combined with Temporal Logic–based verification to guarantee interpretable, constraint‑compliant behaviors in simulators such as AI2‑THOR and VirtualHome.



## News
- **[Dec 2025]** – Our paper *"DISPATCH: Decentralized Informed Spatial Planning and Assignment of Tasks for Cooperative Heterogeneous Agents"* is submitted to **IEEE RA-L 2026**. [arXiv:2511.17915](https://arxiv.org/pdf/2511.17915)
- **[Nov 2025]** - Our Paper "Predictive Modeling in AUV Navigation: A Perspective from Kalman Filtering" is submitted to [IEEE Intelligent Vehicles 2026]([https://dl.acm.org/doi/10.1145/3716368.3735230)
- **[Sep 2025]** - Our Paper "SENTINEL: A Multi-Level Formal Framework for Safety Evaluation of LLM-based Embodied Agents" is live at [SENTINEL](https://nu-ideas-lab.github.io/Sentinel/)
- **[June 2025]** - Our Paper on the Distributed ML Inference Framework is published by [GLSVLSI 2025](https://dl.acm.org/doi/10.1145/3716368.3735230)
- **[June 2025]** - Started as a Visiting Scholar at [Design Automation of Intelligent Systems Lab](http://zhulab.eecs.northwestern.edu/index.html)
- **[May 2025]** - Undergrad Thesis on Online Dynamic Resource Allocation is accepted by USC
- **[November 2024]** - Paper on Pedestrian Detection published by [IEEE SiPS 2024](https://ieeexplore.ieee.org/xpl/conhome/10768211/proceeding)
- **[May 2024]** - Paper on Model-Based Kalman Filter State Prediction for Submarine Trajectory won Honorable Mention from [MCM 2024](https://www.contest.comap.com/undergraduate/contests/mcm/contests/2024/results/#b)
- **[June 2023]** - Started as a ML Intern at [Tsinghua MetacamTech Lab](https://www.metacam.tech/)


# Projects

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Research Project</div>
      <img src='images/Sentinel_framework.png' alt="SENTINEL" width="100%">
    </div>
  </div>

  <div class='paper-box-text' markdown="1">

**SENTINEL: A Multi-Level Formal Framework for Safety Evaluation of LLM-based Embodied Agents**

We developed a multi-level safety evaluation framework for embodied LLM agents that injects temporal-logic safety constraints into prompts, enabling semantic, plan, and trajectory-level checking; built computation-tree-based verification in VirtualHome and AI2-THOR to reproducibly detect unsafe states, ordering violations, and timed hazards with interpretable counterexamples.

[Website](https://nu-ideas-lab.github.io/SENTINEL/) \| 
[Paper](https://arxiv.org/abs/2510.12985) \| 
[Code](Coming soon)

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Research Project</div>
      <img src='images/QMAS.png' alt="Quiet Multi-Agent System" width="100%">
    </div>
  </div>

  <div class='paper-box-text' markdown="1">

**Quiet Multi-Agent System**

Developed a diffusion-based module that reconstructs the global system state using only local observations and limited communication. Integrated with PPO-trained policies, the predicted state enables communication-efficient task allocation for In-Situ Resource Utilization (ISRU) on planetary surfaces. To track confidence, we add epistemic uncertainty estimation using deep ensembles, informing both action and communication decisions.

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Research Project</div>
      <img src='images/FAIR_MARL.png' alt="DISPATCH framework" width="100%">
    </div>
  </div>

  <div class='paper-box-text' markdown="1">

**DISPATCH--Decentralized Informed Spatial Planning and Assignment of Tasks for Cooperative Heterogeneous Agents**

We develop a multi-agent reinforcement learning framework grounded in the Eisenberg–Gale (EG) competitive equilibrium to ensure fair and efficient agent–goal assignment. Incorporated graph neural networks (GNNs) in the actor–critic architecture for message passing among nearby agents and goals. Extended the framework with an online EG baseline that recomputes assignments from the currently discovered goals, solving the same optimization problem over dynamically revealed partitions.

[Paper](https://arxiv.org/pdf/2511.17915) \| 
[Code](Coming soon)

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">GLVISI 2025</div>
      <img src="{{ site.baseurl }}/images/ML_Inference.png" alt="Distributed inference framework for IoT systems" style="width:100%; height:auto; display:block;" />
      <img src="{{ site.baseurl }}/images/ML_Inference_2.png" alt="Distributed inference additional figure" style="width:100%; height:auto; display:block; margin-top: 0.5rem;" />
    </div>
  </div>

  <div class='paper-box-text' markdown="1">

**An Efficient Distributed Inference Framework for IoT Systems with Byzantine Fault Detection**

We designed a redundancy-driven scheme for distributed inference that scrambles replica timing to foil periodicity-based attacks. Co-develop lightweight detectors for stochastic corruptions reaching 99% confidence with minimal overhead via optimized redundancy. Prove required inferences converge to a tight upper bound even at low redundancy, and show the gap to a centralized-RNG baseline is negligible. Recommend heterogeneous PRNGs with coprime periods to resist pattern learning while keeping compute and bandwidth costs low.

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">IEEE SiPS 2024</div>
      <img src='images/Pedestrian_Detection.png' alt="Synthetic dataset analysis for pedestrian detection" width="100%">
    </div>
  </div>

  <div class='paper-box-text' markdown="1">

**Synthetic Dataset Analysis for Pedestrian Detection Across Different Shutter Types**

We developed a pipeline for pedestrian detection across shutter types. We built a UE5 module to simulate rolling-shutter (RS) distortions from high-FPS global-shutter (GS) video, generating paired GS↔RS frames with precise ground truth. Our validation on real RS scenes shows RS-aware training closes the GS gap and improves performance (+53.1% recall, +30.3% mAP@0.5; +42.4% mAP@0.5–0.95)—without ISP RS-correction.

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Research Project</div>
      <img src="{{ site.baseurl }}/images/Kalman_Filter.png" style="width:100%; height:auto; max-height: 500px;" />
    </div>
  </div>

  <div class='paper-box-text' markdown="1">

**Predictive Modeling in AUV Navigation: A Perspective from Kalman Filtering**

We introduce a model-based navigation/search pipeline for submersibles under communication loss. We fuse multi-buoy TDoA with an (E)KF to denoise and predict state, tuning process/measurement noise via residual statistics. Beacon outages are handled via gating and covariance inflation; uncertainty ellipsoids guide planning. Filtered tracks form a maximum-likelihood search heatmap to prioritize regions and return paths. In simulation, we achieve meter-level accuracy (MAE CDF <= 4 m) and robust tracking during dropouts.
  </div>

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Research Project</div>
      <img src='images/Arrow_Debreu.png' alt="Arrow-Debreu adaptive online stochastic optimization" width="100%">
    </div>
  </div>

  <div class='paper-box-text' markdown="1">

**Arrow-Debreu Equilibrium: Adaptive Online Stochastic Optimization**

Develop an adaptive online decision-making framework for Arrow–Debreu Competitive Equilibrium with incomplete agent information. Extend the Eisenberg–Gale (EG) program to the online setting using two update rules: Certainty-Equivalent (CE) to compute prices/allocations from current estimated demand, and Sample-Average Approximation (SAA) to refine prices from mini-batches of recent arrival.

  </div>
</div>

## Selected Recognition

<hr class="recognition-divider" />

<ul class="recognition-list">
  <li><span class="recognition-title">Discover Scholar Distinction</span>, USC (Spring 2025)</li>
  <li><span class="recognition-title">Gold Medalist</span>, Kaggle - Chatbot Arena Human Preference Predictions (Summer 2024)</li>
  <li><span class="recognition-title">Honorable Mention</span>, Mathematical Contest in Modeling (COMAP) (Spring 2024)</li>
  <li><span class="recognition-title">Ming Hsieh Institute Undergraduate Scholar</span>, USC (top 5 research scholars in Electrical Engineering) (Spring 2024)</li>
  <li><span class="recognition-title">Academic Achievement Award</span>, USC (Spring 2024-Spring 2025)</li>
  <li><span class="recognition-title">Provost Research Scholarship</span>, USC (Spring 2024)</li>
  <li><span class="recognition-title">W.V.T. Rusch Engineering Honors Degree</span>, USC (Fall 2023)</li>
  <li><span class="recognition-title">Richardson CURVE Award</span>, USC (2022-2024)</li>
</ul>

## Teaching

**Linear Circuits (EE 202L), USC — Spring 2025 & Fall 2024**  
Held office hours, led lab sections, and ran exam‑review sessions.  
[Course page](https://catalogue.usc.edu/preview_course_nopop.php?catoid=18&coid=283518)

**Linear Systems (EE 301/301L), USC — Fall 2024**  
Held office hours; graded homework, labs, and quizzes.  
[Course page](https://catalogue.usc.edu/preview_course_nopop.php?catoid=21&coid=330673)

## Work Experiences

***Software Engineer Intern @ [Tsinghua University MetaCam Lab](https://www.metacam.tech/)*** _(June 2023 - Aug 2023)_

Implement a spatial-adaptive CNN to correct optical aberrations by learning and removing point spread functions (PSFs) across the image field. Build a synthetic training pipeline with ray-tracing and PSF superposition to generate PSF-convolved images, then fine-tune the network with PSF-based augmentations to handle spatially variant blur and chromatic dispersion. Deliver a production-ready model that improves restoration quality by +1.7% over state-of-the-art baselines.

## Skills

***Languages***: Python (NumPy, CVXPY, TensorFlow, PyTorch), C/C++, Verilog/HDL, MATLAB, HTML
<br>***Robotic Learning***: ROS2, AI2-THOR/Alfred, VirtualHome, BEHAVIOR-1K, OpenCV, CUDA, MAPPO, MuJoCo, SLAM, Issac Lab
<br>***Web/Mobile Development***: Reinforcement Learning, Diffusion Models, Online Learning, SGD, AdaBoost, Transformers
<br>***DevOps***: Git, Docker, AWS, Firebase, REST APIs, MySQL