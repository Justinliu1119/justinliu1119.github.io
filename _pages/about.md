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

I am a first-year Ph.D. student in [Electrical Engineering and Computer Sciences at UC Berkeley](https://eecs.berkeley.edu/). Before Berkeley, I received B.S. degrees from the [University of Southern California](https://www.usc.edu/) in Electrical and Computer Engineering (Honors) and Applied & Computational Mathematics. At USC, I worked with Prof. [Bhaskar Krishnamachari](https://viterbi.usc.edu/directory/faculty/Krishnamachari/Bhaskar) in the [Autonomous Networks Research Group](https://anrg.usc.edu/www/) and with Prof. [Peter Beerel](https://sites.usc.edu/eessc/people/). I have also worked with Prof. [Qi Zhu](http://users.eecs.northwestern.edu/~qzhu/) as a visiting scholar in the [Design Automation of Intelligent Systems Lab](http://zhulab.eecs.northwestern.edu/index.html) at Northwestern, Prof. [Yinyu Ye](https://stanford.edu/~yyye/) at Stanford, and Prof. Dionysis Kalogerias at Yale.

</div>

## Research Vision

<div class="intro" markdown="1">

My research aims to advance general-purpose physical intelligence: robots and teams of robots that learn to perceive, plan, and act in the physical world, with guarantees on their behavior. Learning has made robots more capable, but strong average performance does not ensure reliability under partial observability, distribution shift, or adversarial perturbations. I want to build learned controllers whose behavior we can reason about and verify: whether they satisfy safety specifications, remain robust under uncertainty, and improve with bounded regret as they gain experience.

I study how robots can use predictive world models to infer what they cannot directly observe, account for uncertainty and risk when making decisions, and coordinate with other agents under partial information. I also work on using explicit task and safety specifications to guide and verify learned policies, including vision-language-action models. These directions share a central question: how can we make robots more adaptable while preserving meaningful guarantees on their behavior? My goal is to develop general-purpose robots that generalize across tasks and environments, grow more capable with data and experience, and offer reliability guarantees with clear assumptions and limits.

</div>

## Education

<div class="edu">
  <div class="edu-row">
    <img class="edu-logo" src="{{ '/images/seal_berkeley.svg' | relative_url }}" alt="UC Berkeley">
    <div class="edu-text"><strong>University of California, Berkeley</strong><br><span>Ph.D. in Electrical Engineering and Computer Sciences</span></div>
    <span class="date">2026 – present</span>
  </div>
  <div class="edu-row">
    <img class="edu-logo" src="{{ '/images/seal_usc_cardinal.svg' | relative_url }}" alt="University of Southern California">
    <div class="edu-text"><strong>University of Southern California</strong><br><span>B.S. in Electrical and Computer Engineering (Honors)<br>B.S. in Applied &amp; Computational Mathematics</span></div>
    <span class="date">2021 – 2025</span>
  </div>
</div>

## News

<ul class="dated-list">
  <li><span class="date">Sep 2026</span><span class="item"><em>SENTINEL</em> accepted to <a href="https://neurips.cc/">NeurIPS 2026</a>.</span></li>
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

<div class="pub" data-href="https://arxiv.org/abs/2606.21148">
  <div class="pub-media has-caption">
    <span class="media-caption">Grasping across varied mug poses</span>
    <video autoplay loop muted playsinline preload="metadata" poster="{{ '/images/anymug_grasp_poster.jpg' | relative_url }}" aria-label="AnyMug grasping demo">
      <source src="{{ '/assets/videos/anymug_grasp.mp4' | relative_url }}" type="video/mp4">
    </video>
  </div>
  <div class="pub-body">
    <p class="pub-title"><a href="https://arxiv.org/abs/2606.21148">AnyMug: Pose-Agnostic Robotic Functional Grasping via Observation–Action Canonicalization</a></p>
    <p class="pub-authors">Le Qiu, Cole Harrison, Jiankai Sun, <strong>Yao Liu</strong>, Suning Huang, Qianzhong Chen, Yang You, Marco Pavone</p>
    <p class="pub-meta"><span class="pub-venue status">arXiv preprint, 2026</span><span class="sep">|</span><a href="https://arxiv.org/abs/2606.21148">Paper</a><span class="sep">|</span><a href="#qiu2026anymug" class="bib-toggle" aria-expanded="false" aria-controls="qiu2026anymug">BibTeX</a></p>
    <pre class="bibtex" id="qiu2026anymug" hidden>@misc{qiu2026anymug,
  title         = {Pose-Agnostic Robotic Functional Grasping via Observation-Action Canonicalization},
  author        = {Le Qiu and Cole Harrison and Jiankai Sun and Yao Liu and Suning Huang and Qianzhong Chen and Yang You and Marco Pavone},
  year          = {2026},
  eprint        = {2606.21148},
  archivePrefix = {arXiv},
  primaryClass  = {cs.RO},
  url           = {https://arxiv.org/abs/2606.21148}
}</pre>
    <p class="pub-summary">A single closed-loop policy grasps mugs by the handle across shapes and poses by canonicalizing observations and actions in a mug-centric frame. Trained only in simulation, it transfers zero-shot to a real Franka Panda.</p>
  </div>
</div>

<div class="pub" data-href="https://arxiv.org/abs/2510.12985">
  <div class="pub-media"><img src="{{ '/images/sentinel_pipeline.png' | relative_url }}" alt="SENTINEL framework overview" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title"><a href="https://arxiv.org/abs/2510.12985">SENTINEL: A Multi-Level Formal Framework for Safety Evaluation of Foundation Model-based Embodied Agents</a></p>
    <p class="pub-authors">Simon Sinong Zhan<sup>*</sup>, Philip Wang<sup>*</sup>, <strong>Justin Yao Liu</strong><sup>*</sup>, Yiyan Peng<sup>*</sup>, Yiqi Lyu, Zinan Wang, Qineng Wang, Zhian Ruan, Xiangyu Shi, Xinyu Cao, Frank Yang, Zhenyang Ni, Kangrui Wang, Ruohan Zhang, Huajie Shao, Manling Li, Qi Zhu</p>
    <p class="pub-meta"><span class="pub-venue">NeurIPS 2026</span><span class="sep">|</span><a href="https://arxiv.org/abs/2510.12985">Paper</a><span class="sep">|</span><a href="https://nu-ideas-lab.github.io/SENTINEL/">Website</a><span class="sep">|</span><a href="https://github.com/NU-IDEAS-Lab/SENTINEL">Code</a><span class="sep">|</span><a href="#zhan2026sentinel" class="bib-toggle" aria-expanded="false" aria-controls="zhan2026sentinel">BibTeX</a></p>
    <pre class="bibtex" id="zhan2026sentinel" hidden>@misc{zhan2026sentinel,
  title         = {SENTINEL: A Multi-Level Formal Framework for Safety Evaluation of Foundation Model-based Embodied Agents},
  author        = {Simon Sinong Zhan and Philip Wang and Yao Liu and Yiyan Peng and Zinan Wang and Qineng Wang and Zhian Ruan and Xiangyu Shi and Xinyu Cao and Frank Yang and Zhenyang Ni and Kangrui Wang and Ruohan Zhang and Huajie Shao and Manling Li and Qi Zhu},
  year          = {2026},
  eprint        = {2510.12985},
  archivePrefix = {arXiv},
  primaryClass  = {cs.AI},
  url           = {https://arxiv.org/abs/2510.12985}
}</pre>
    <p class="pub-summary">SENTINEL specifies safety requirements for embodied LLM agents in temporal logic and checks them at the semantic, plan, and trajectory levels. Verification in VirtualHome and AI2-THOR flags unsafe states, ordering violations, and timed hazards with interpretable counterexamples.</p>
  </div>
</div>

<div class="pub" data-href="https://arxiv.org/abs/2511.17915">
  <div class="pub-media"><img src="{{ '/images/dispatch_setting.png' | relative_url }}" alt="DISPATCH problem setting: robots, task stations, and skill compatibility" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title"><a href="https://arxiv.org/abs/2511.17915">DISPATCH: Decentralized Informed Spatial Planning and Assignment of Tasks for Cooperative Heterogeneous Agents</a></p>
    <p class="pub-authors"><strong>Yao Liu</strong>, Sampad Mohanty, Elizabeth Ondula, Bhaskar Krishnamachari</p>
    <p class="pub-meta"><span class="pub-venue status">Submitted to AAMAS 2027</span><span class="sep">|</span><a href="https://arxiv.org/abs/2511.17915">Paper</a><span class="sep">|</span><a href="https://github.com/Justinliu1119/EG_MARL">Code</a><span class="sep">|</span><a href="#liu2026dispatch" class="bib-toggle" aria-expanded="false" aria-controls="liu2026dispatch">BibTeX</a></p>
    <pre class="bibtex" id="liu2026dispatch" hidden>@misc{liu2026dispatch,
  title         = {DISPATCH -- Decentralized Informed Spatial Planning and Assignment of Tasks for Cooperative Heterogeneous Agents},
  author        = {Yao Liu and Sampad Mohanty and Elizabeth Ondula and Bhaskar Krishnamachari},
  year          = {2026},
  eprint        = {2511.17915},
  archivePrefix = {arXiv},
  primaryClass  = {cs.MA},
  url           = {https://arxiv.org/abs/2511.17915}
}</pre>
    <p class="pub-summary">Decentralized policies for fair and efficient task assignment among heterogeneous agents under partial observability, learned toward Eisenberg–Gale equilibrium allocations with attention-based GNN message passing.</p>
  </div>
</div>

<div class="pub">
  <div class="pub-media"><img src="{{ '/images/QMAS.png' | relative_url }}" alt="Quiet multi-agent system" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title">Quiet Multi-Agent Systems via Predictive World Modeling and Selective Communications</p>
    <p class="pub-authors">Anthony Goeckner, <strong>Yao Liu</strong>, Zhian Ruan, Alessandro Pinto, Qi Zhu</p>
    <p class="pub-meta"><span class="pub-venue status">In submission</span></p>
    <p class="pub-summary">A conditional diffusion model infers global state from local views, and its uncertainty decides when robots need to communicate. The predictions guide MARL policies on NASA ISRU-style exploration and transport tasks.</p>
  </div>
</div>

<div class="pub" data-href="https://dl.acm.org/doi/10.1145/3716368.3735230">
  <div class="pub-media"><img src="{{ '/images/distributed_detection.png' | relative_url }}" alt="Distributed inference framework for IoT systems" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title"><a href="https://dl.acm.org/doi/10.1145/3716368.3735230">An Efficient Distributed Inference Framework for IoT Systems with Byzantine Fault Detection</a></p>
    <p class="pub-authors">Xuan Zhou, U. Muhan, <strong>Yao Liu</strong>, Peter Beerel</p>
    <p class="pub-meta"><span class="pub-venue">GLSVLSI 2025</span><span class="sep">|</span><a href="https://dl.acm.org/doi/10.1145/3716368.3735230">Paper</a><span class="sep">|</span><a href="#zhou2025distributed" class="bib-toggle" aria-expanded="false" aria-controls="zhou2025distributed">BibTeX</a></p>
    <pre class="bibtex" id="zhou2025distributed" hidden>@inproceedings{zhou2025distributed,
  title     = {An Efficient Distributed Machine Learning Inference Framework with Byzantine Fault Detection},
  author    = {Zhou, Xuan and Mohan, Utkarsh and Liu, Yao and Beerel, Peter},
  booktitle = {Proceedings of the Great Lakes Symposium on VLSI 2025},
  series    = {GLSVLSI '25},
  pages     = {56--63},
  publisher = {ACM},
  year      = {2025},
  doi       = {10.1145/3716368.3735230}
}</pre>
    <p class="pub-summary">A partial-redundancy scheme for detecting Byzantine faults in distributed ML inference. We derive bounds on the inferences needed for 99% detection confidence at 2–5% redundancy, validated on GPT-2.</p>
  </div>
</div>

<div class="pub" data-href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10768224">
  <div class="pub-media"><img src="{{ '/images/letsroll_pipeline.png' | relative_url }}" alt="Traditional versus rolling-shutter-aware detection pipeline" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title"><a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10768224">Let's Roll: Synthetic Dataset Analysis for Pedestrian Detection Across Different Shutter Types</a></p>
    <p class="pub-authors">Yue Hu, G. Datta, K. Beerel, <strong>Yao Liu</strong>, Peter Beerel</p>
    <p class="pub-meta"><span class="pub-venue">IEEE SiPS 2024</span><span class="sep">|</span><a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10768224">Paper</a><span class="sep">|</span><a href="#hu2024letsroll" class="bib-toggle" aria-expanded="false" aria-controls="hu2024letsroll">BibTeX</a></p>
    <pre class="bibtex" id="hu2024letsroll" hidden>@inproceedings{hu2024letsroll,
  title     = {Let's Roll: A Synthetic and Real Dataset for Pedestrian Detection Across Different Shutter Types},
  author    = {Hu, Yue and Datta, Gourav and Beerel, Kira and Liu, Yao and Beerel, Peter},
  booktitle = {2024 IEEE Workshop on Signal Processing Systems (SiPS)},
  pages     = {113--118},
  publisher = {IEEE},
  year      = {2024},
  doi       = {10.1109/SiPS62058.2024.00028}
}</pre>
    <p class="pub-summary">An Unreal Engine 5 pipeline synthesizes paired global- and rolling-shutter frames with exact ground truth. Rolling-shutter-aware training improves recall by 53.1% on real rolling-shutter scenes.</p>
  </div>
</div>

<div class="pub" data-href="https://arxiv.org/abs/2603.27422">
  <div class="pub-media"><img src="{{ '/images/auv_localization.png' | relative_url }}" alt="Acoustic localization of a submersible from surface buoys" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title"><a href="https://arxiv.org/abs/2603.27422">Predictive Modeling in AUV Navigation: A Perspective from Kalman Filtering</a></p>
    <p class="pub-authors">Zizhan Tang<sup>*</sup>, <strong>Yao Liu</strong><sup>*</sup>, Jiexi Liu</p>
    <p class="pub-meta"><span class="pub-venue status">Submitted to IEEE IV 2026</span><span class="sep">|</span><a href="https://arxiv.org/abs/2603.27422">Paper</a><span class="sep">|</span><a href="#tang2026auv" class="bib-toggle" aria-expanded="false" aria-controls="tang2026auv">BibTeX</a></p>
    <pre class="bibtex" id="tang2026auv" hidden>@misc{tang2026auv,
  title         = {Predictive Modeling in AUV Navigation: A Perspective from Kalman Filtering},
  author        = {Zizhan Tang and Yao Liu and Jessica Liu},
  year          = {2026},
  eprint        = {2603.27422},
  archivePrefix = {arXiv},
  primaryClass  = {cs.RO},
  url           = {https://arxiv.org/abs/2603.27422}
}</pre>
    <p class="pub-summary">Multi-buoy TDoA measurements are fused with an adaptively tuned Kalman filter to track a submersible through communication loss. Filtered tracks yield a search heatmap, with meter-level accuracy in simulation.</p>
  </div>
</div>

<div class="pub">
  <div class="pub-media"><img src="{{ '/images/Arrow_Debreu.png' | relative_url }}" alt="Adaptive online Arrow-Debreu markets" loading="lazy"></div>
  <div class="pub-body">
    <p class="pub-title">Adaptive Online Pricing for Arrow–Debreu Markets</p>
    <p class="pub-authors">C. Chen<sup>†</sup>, <strong>Yao Liu</strong><sup>†</sup>, J. Yang<sup>†</sup>, Z. Yang<sup>†</sup>, Yinyu Ye</p>
    <p class="pub-meta"><span class="pub-venue status">In preparation</span></p>
    <p class="pub-summary">Online algorithms that compute Arrow–Debreu equilibrium prices as agents arrive with incomplete information, with <i>O</i>(log <i>n</i>) regret and <i>O</i>(1) constraint violation.</p>
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

<script>
document.addEventListener('click', function (e) {
  var card = e.target.closest('.pub[data-href]');
  if (card && !e.target.closest('a, button, pre, video, details, summary') && !window.getSelection().toString()) {
    window.open(card.getAttribute('data-href'), '_self');
    return;
  }
  var t = e.target.closest('.bib-toggle');
  if (!t) return;
  e.preventDefault();
  var pre = document.getElementById(t.getAttribute('aria-controls'));
  if (!pre) return;
  pre.hidden = !pre.hidden;
  t.setAttribute('aria-expanded', String(!pre.hidden));
});
</script>
