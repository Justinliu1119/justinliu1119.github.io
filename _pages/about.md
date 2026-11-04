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

<div class="intro" markdown="1">

I am a first-year Ph.D. student in Electrical Engineering and Computer Sciences at UC Berkeley. I received B.S. degrees in Electrical and Computer Engineering (Honors) and Applied & Computational Mathematics from the University of Southern California in 2025.

Before Berkeley, I worked with Prof. [Bhaskar Krishnamachari](https://viterbi.usc.edu/directory/faculty/Krishnamachari/Bhaskar) in the [Autonomous Networks Research Group](https://anrg.usc.edu/www/) and Prof. [Peter Beerel](https://sites.usc.edu/eessc/people/) at USC; with Prof. [Qi Zhu](http://users.eecs.northwestern.edu/~qzhu/) in the [Design Automation of Intelligent Systems Lab](http://zhulab.eecs.northwestern.edu/index.html) at Northwestern, where I was a visiting scholar; with Prof. [Yinyu Ye](https://stanford.edu/~yyye/) at Stanford on online stochastic optimization; and with Prof. Dionysis Kalogerias at Yale on robust multi-agent learning.

</div>

## Education

<div class="edu">
  <div class="edu-row">
    <img class="edu-logo" src="{{ '/images/logo_berkeley.svg' | relative_url }}" alt="UC Berkeley">
    <div class="edu-text"><strong>University of California, Berkeley</strong><br><span>Ph.D. in Electrical Engineering and Computer Sciences</span></div>
    <span class="date">2026 – present</span>
  </div>
  <div class="edu-row">
    <img class="edu-logo" src="{{ '/images/logo_usc.svg' | relative_url }}" alt="University of Southern California">
    <div class="edu-text"><strong>University of Southern California</strong><br><span>B.S. in Electrical and Computer Engineering (Honors)<br>B.S. in Applied &amp; Computational Mathematics</span></div>
    <span class="date">2021 – 2025</span>
  </div>
</div>

## Research

<div class="intro" markdown="1">

I study how autonomous agents can make good decisions when each one sees only part of the world, information arrives over time, and some outcomes are unsafe. These conditions appear in multi-robot exploration, embodied assistants, and networked cyber-physical systems. They raise a shared set of questions: what an agent should infer about what it cannot observe, when communication is worth its cost, how tasks and resources should be divided as new information is revealed, and how to check that a learned or language-model-driven policy respects safety constraints.

I approach these questions with tools from optimization, reinforcement learning, generative modeling, and formal methods. My work so far falls into three connected threads.

</div>

<div class="themes">
  <div class="theme">
    <div class="theme-title">Coordination under partial observability</div>
    <p>Decentralized policies that assign tasks fairly and coordinate with limited communication, using equilibrium-based objectives, graph message passing, and diffusion models that infer global state from local views.</p>
    <div class="theme-works">DISPATCH · Quiet Multi-Agent Systems · Zeroth-order robust MARL (ongoing)</div>
  </div>
  <div class="theme">
    <div class="theme-title">Online decision-making under uncertainty</div>
    <p>Algorithms that update prices, allocations, or state estimates as data arrives sequentially, with regret and constraint-violation guarantees where possible.</p>
    <div class="theme-works">Adaptive Online Arrow–Debreu Markets · AUV navigation via Kalman filtering · Byzantine-robust distributed inference</div>
  </div>
  <div class="theme">
    <div class="theme-title">Safe and reliable embodied agents</div>
    <p>Formal specification and verification of safety for LLM-based embodied agents, and robot policies that generalize across object geometry and pose.</p>
    <div class="theme-works">SENTINEL · AnyMug</div>
  </div>
</div>

## News

<ul class="dated-list">
  <li><span class="date">Aug 2026</span><span class="item">Started my Ph.D. in EECS at UC Berkeley.</span></li>
  <li><span class="date">Dec 2025</span><span class="item"><em>DISPATCH</em> released on <a href="https://arxiv.org/abs/2511.17915">arXiv</a>.</span></li>
  <li><span class="date">Nov 2025</span><span class="item"><em>Predictive Modeling in AUV Navigation</em> submitted to IEEE IV 2026 (<a href="https://arxiv.org/abs/2603.27422">arXiv</a>).</span></li>
  <li><span class="date">Sep 2025</span><span class="item"><em>SENTINEL</em> released, with a <a href="https://nu-ideas-lab.github.io/SENTINEL/">project page</a>.</span></li>
  <li><span class="date">Jun 2025</span><span class="item">Distributed ML inference paper published at <a href="https://dl.acm.org/doi/10.1145/3716368.3735230">GLSVLSI 2025</a>.</span></li>
  <li><span class="date">Jun 2025</span><span class="item">Started as a visiting scholar at the <a href="http://zhulab.eecs.northwestern.edu/index.html">Design Automation of Intelligent Systems Lab</a>, Northwestern.</span></li>
  <li><span class="date">May 2025</span><span class="item">Undergraduate thesis on online dynamic resource allocation accepted by USC.</span></li>
  <li><span class="date">Nov 2024</span><span class="item">Pedestrian detection paper published at <a href="https://ieeexplore.ieee.org/xpl/conhome/10768211/proceeding">IEEE SiPS 2024</a>.</span></li>
  <li><span class="date">May 2024</span><span class="item">Honorable Mention, <a href="https://www.contest.comap.com/undergraduate/contests/mcm/contests/2024/results/#b">MCM 2024</a>, for Kalman-filter-based submarine trajectory prediction.</span></li>
  <li><span class="date">Jun 2023</span><span class="item">Started as an ML intern at <a href="https://www.metacam.tech/">Tsinghua MetaCam Lab</a>.</span></li>
</ul>

## Selected Publications

<p class="pub-note"><sup>*</sup> equal contribution &nbsp;·&nbsp; <sup>†</sup> alphabetical order &nbsp;·&nbsp; <a href="{{ '/publications/' | relative_url }}">Full list</a></p>

<h3 class="pub-group">Conference papers</h3>

<div class="pub">
  <div class="pub-media"><img src="{{ '/images/Sentinel_framework.png' | relative_url }}" alt="SENTINEL framework overview" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title">SENTINEL: A Multi-Level Formal Framework for Safety Evaluation of Foundation Model-based Embodied Agents</p>
    <p class="pub-authors">Simon Sinong Zhan<sup>*</sup>, Philip Wang<sup>*</sup>, <strong>Justin Yao Liu</strong><sup>*</sup>, Yiyan Peng<sup>*</sup>, Yiqi Lyu, Zinan Wang, Qineng Wang, Zhian Ruan, Xiangyu Shi, Xinyu Cao, Frank Yang, Zhenyang Ni, Kangrui Wang, Ruohan Zhang, Huajie Shao, Manling Li, Qi Zhu</p>
    <p class="pub-venue"><b>NeurIPS 2026</b></p>
    <p class="pub-links"><a href="https://arxiv.org/abs/2510.12985">Paper</a> <a href="https://nu-ideas-lab.github.io/SENTINEL/">Website</a> <a href="https://github.com/NU-IDEAS-Lab/SENTINEL">Code</a></p>
    <p class="pub-summary">Safety for embodied LLM agents is usually judged informally. SENTINEL expresses safety requirements in temporal logic and checks them at three levels (semantic interpretation, generated plans, and executed trajectories), using computation-tree-based verification in VirtualHome and AI2-THOR to flag unsafe states, ordering violations, and timed hazards with interpretable counterexamples.</p>
  </div>
</div>

<div class="pub">
  <div class="pub-media"><img src="{{ '/images/ML_Inference.png' | relative_url }}" alt="Distributed inference framework for IoT systems" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title">An Efficient Distributed Inference Framework for IoT Systems with Byzantine Fault Detection</p>
    <p class="pub-authors">Xuan Zhou, U. Muhan, <strong>Yao Liu</strong>, Peter Beerel</p>
    <p class="pub-venue"><b>GLSVLSI 2025</b></p>
    <p class="pub-links"><a href="https://dl.acm.org/doi/10.1145/3716368.3735230">Paper</a></p>
    <p class="pub-summary">Detecting Byzantine faults in distributed ML inference without full replication. A partial-redundancy scheme randomizes which inferences are replicated; we derive closed-form bounds on the number of inferences needed for 99% detection confidence at 2–5% redundancy and show a negligible gap between independent and centralized RNG schedulers, validated on GPT-2.</p>
  </div>
</div>

<div class="pub">
  <div class="pub-media"><img src="{{ '/images/Pedestrian_Detection.png' | relative_url }}" alt="Synthetic dataset analysis for pedestrian detection" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title">Let's Roll: Synthetic Dataset Analysis for Pedestrian Detection Across Different Shutter Types</p>
    <p class="pub-authors">Yue Hu, G. Datta, K. Beerel, <strong>Yao Liu</strong>, Peter Beerel</p>
    <p class="pub-venue"><b>IEEE SiPS 2024</b></p>
    <p class="pub-links"><a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10768224">Paper</a></p>
    <p class="pub-summary">Rolling-shutter distortion degrades detectors trained on global-shutter data. An Unreal Engine 5 module synthesizes paired global/rolling-shutter frames with exact ground truth; on real rolling-shutter scenes, rolling-shutter-aware training improves recall by 53.1% and mAP@0.5 by 30.3% without ISP correction.</p>
  </div>
</div>

<h3 class="pub-group">Preprints and submissions</h3>

<div class="pub">
  <div class="pub-media">
    <video autoplay loop muted playsinline preload="metadata" aria-label="AnyMug grasping demo">
      <source src="{{ '/assets/videos/anycat.mp4' | relative_url }}" type="video/mp4">
    </video>
  </div>
  <div class="pub-body">
    <p class="pub-title">Pose-Agnostic Robotic Functional Grasping via Observation–Action Canonicalization (AnyMug)</p>
    <p class="pub-authors">Le Qiu, Cole Harrison, Jiankai Sun, <strong>Yao Liu</strong>, Suning Huang, Qianzhong Chen, Yang You, Marco Pavone</p>
    <p class="pub-venue">arXiv preprint, 2026</p>
    <p class="pub-links"><a href="https://arxiv.org/abs/2606.21148">Paper</a></p>
    <p class="pub-summary">Grasping a mug by its handle requires a policy that works across shapes, placements, and orientations. AnyMug maps depth observations and end-effector actions into a shared mug-centric frame so a single closed-loop PPO policy covers upright and inverted poses; trained only in simulation, it reaches 80% zero-shot success on unseen real mugs with a Franka Panda.</p>
  </div>
</div>

<div class="pub">
  <div class="pub-media"><img src="{{ '/images/fairmarl.png' | relative_url }}" alt="DISPATCH framework" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title">DISPATCH: Decentralized Informed Spatial Planning and Assignment of Tasks for Cooperative Heterogeneous Agents</p>
    <p class="pub-authors"><strong>Yao Liu</strong>, Sampad Mohanty, Elizabeth Ondula, Bhaskar Krishnamachari</p>
    <p class="pub-venue">Submitted to <b>AAMAS 2027</b></p>
    <p class="pub-links"><a href="https://arxiv.org/abs/2511.17915">Paper</a> <a href="https://github.com/Justinliu1119/EG_MARL">Code</a></p>
    <p class="pub-summary">Heterogeneous agents discovering tasks under partial observability must split work both efficiently and fairly. DISPATCH trains decentralized policies toward Eisenberg–Gale equilibrium assignments, using attention-based GNN message passing among nearby agents and goals, and compares against an online Eisenberg–Gale baseline that re-solves the assignment as goals are revealed.</p>
  </div>
</div>

<div class="pub">
  <div class="pub-media"><img src="{{ '/images/QMAS.png' | relative_url }}" alt="Quiet multi-agent system" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title">Quiet Multi-Agent Systems via Predictive World Modeling and Selective Communications</p>
    <p class="pub-authors">Anthony Goeckner, Weihe Gao, <strong>Yao Liu</strong>, Alessandro Pinto, Qi Zhu</p>
    <p class="pub-venue">In submission</p>
    <p class="pub-summary">Reducing how much robots must talk to coordinate. A conditional diffusion model infers global state from local views; its predictive uncertainty decides when communication is needed, and the predictions guide MARL policies for heterogeneous robots on resource exploration, extraction, and transport tasks modeled on NASA's ISRU challenge.</p>
  </div>
</div>

<div class="pub">
  <div class="pub-media"><img src="{{ '/images/Kalman_Filter.png' | relative_url }}" alt="Kalman filter AUV tracking" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title">Predictive Modeling in AUV Navigation: A Perspective from Kalman Filtering</p>
    <p class="pub-authors">Zizhan Tang<sup>*</sup>, <strong>Yao Liu</strong><sup>*</sup>, Jiexi Liu</p>
    <p class="pub-venue">Submitted to <b>IEEE IV 2026</b></p>
    <p class="pub-links"><a href="https://arxiv.org/abs/2603.27422">Paper</a></p>
    <p class="pub-summary">Locating a submersible after communication loss. Multi-buoy TDoA measurements are fused with a Kalman filter whose noise parameters are tuned from residual statistics; beacon outages are handled by gating and covariance inflation, and filtered tracks produce a likelihood heatmap for search. In simulation the pipeline achieves meter-level accuracy (MAE ≤ 4 m) and stays stable through dropouts.</p>
  </div>
</div>

<h3 class="pub-group">In preparation</h3>

<div class="pub">
  <div class="pub-media"><img src="{{ '/images/Arrow_Debreu.png' | relative_url }}" alt="Adaptive online Arrow-Debreu markets" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title">Adaptive Online Pricing for Arrow–Debreu Markets</p>
    <p class="pub-authors">C. Chen<sup>†</sup>, <strong>Yao Liu</strong><sup>†</sup>, J. Yang<sup>†</sup>, Z. Yang<sup>†</sup>, Yinyu Ye</p>
    <p class="pub-venue">In preparation</p>
    <p class="pub-summary">Computing competitive-equilibrium prices when agents arrive sequentially with incomplete information. We extend the Eisenberg–Gale program online with certainty-equivalent and sample-average-approximation updates, and establish <i>O</i>(log <i>n</i>) regret with <i>O</i>(1) constraint violation.</p>
  </div>
</div>

## Honors

<ul class="dated-list date-right">
  <li><span class="item">UC Berkeley EECS Ph.D. Fellowship</span><span class="date">2026</span></li>
  <li><span class="item">Discover Scholar Distinction, USC</span><span class="date">2025</span></li>
  <li><span class="item">Gold Medal, Kaggle LMSYS Chatbot Arena Human Preference Predictions</span><span class="date">2024</span></li>
  <li><span class="item">Honorable Mention, Mathematical Contest in Modeling (COMAP)</span><span class="date">2024</span></li>
  <li><span class="item">Ming Hsieh Institute Undergraduate Scholar, USC (top 5 research scholars in EE)</span><span class="date">2024</span></li>
  <li><span class="item">Provost Research Scholarship, USC</span><span class="date">2024</span></li>
  <li><span class="item">Academic Achievement Award, USC</span><span class="date">2024–2025</span></li>
  <li><span class="item">W.V.T. Rusch Engineering Honors Degree, USC</span><span class="date">2023</span></li>
  <li><span class="item">Richardson CURVE Award, USC</span><span class="date">2022–2024</span></li>
  <li><span class="item">Dean's List, USC</span><span class="date">2022–2025</span></li>
</ul>

## Service

<ul class="dated-list date-right">
  <li><span class="item">Reviewer, Conference on Robot Learning (CoRL)</span><span class="date">2026</span></li>
  <li><span class="item">Reviewer, IEEE Intelligent Vehicles Symposium (IV)</span><span class="date">2026</span></li>
</ul>

## Teaching

<div class="entry">
  <div class="entry-head"><span><strong>Course Producer</strong>, <a href="https://catalogue.usc.edu/preview_course_nopop.php?catoid=18&amp;coid=283518">EE 202 Linear Circuits</a>, USC</span><span class="date">Fall 2023 – Spring 2025</span></div>
  <p>Led lab sections, held office hours, and ran exam review sessions.</p>
</div>
<div class="entry">
  <div class="entry-head"><span><strong>Grader</strong>, <a href="https://catalogue.usc.edu/preview_course_nopop.php?catoid=21&amp;coid=330673">EE 301 Linear Systems</a> and MATH 245, USC</span><span class="date">Fall 2024</span></div>
  <p>Graded homework, quizzes, and lab reports.</p>
</div>

## Industry Experience

<div class="entry">
  <div class="entry-head"><span><strong>Machine Learning Intern</strong>, <a href="https://www.metacam.tech/">Tsinghua University MetaCam Lab</a></span><span class="date">Jun – Aug 2023</span></div>
  <p>Built a spatially adaptive CNN that removes spatially varying optical blur by learning point spread functions across the image field, trained on a ray-traced synthetic pipeline with PSF-based augmentation; improved restoration quality by 1.7% over prior baselines.</p>
</div>

## Skills

<div class="skills">
<strong>Languages</strong>: Python (NumPy, CVXPY, PyTorch, TensorFlow), C/C++, Verilog/HDL, MATLAB<br>
<strong>Robotics and simulation</strong>: ROS 2, MuJoCo, NVIDIA Isaac Sim, VirtualHome, AI2-THOR, BEHAVIOR-1K, ALFRED, MPE, Gymnasium, OpenCV<br>
<strong>Machine learning</strong>: reinforcement learning, diffusion models, online learning, transformers<br>
<strong>Tools</strong>: Git, Docker, AWS, Unreal Engine, Unity, Simulink
</div>
