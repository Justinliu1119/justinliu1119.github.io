# About

Hello! I am Justin Liu. I completed dual B.S. degrees in Electrical and Computer Engineering (Honors) and Applied & Computational Mathematics at the University of Southern California in May 2025. I am a researcher in the [Autonomous Networks Research Group](https://anrg.usc.edu/www/) advised by Professor Bhaskar Krishnamachari, and I have worked closely with Professor Peter Beerel. I was also a visiting scholar at Northwestern’s [Design Automation of Intelligent Systems Lab](http://zhulab.eecs.northwestern.edu/index.html) advised by Prof. [Qi Zhu](http://users.eecs.northwestern.edu/~qzhu/). I also collaborate with Prof. [Yinyu Ye](https://stanford.edu/~yyye/).

My research is focused in autunomous network, control and their applications in multi-agent and Cyper-Physical-Systems. Specifically, I design decentralized systems that can coordinate over long horizons, make robust decisions under uncertainty, and satisfy safety constraints in dynamic environments.

**Current focus areas**
- **Data-Driven Decision-Making:** developing online learning algorithms that handle uncerntainty with convergence and regret guarentees in multi-agent games.  

- **Generative modeling for dynamics:** Leveraging diffusion models to enable decentralized systems to infer global states from partial and noisy observations, improving coordination under uncertainty.

- **Safety in embodied AI:** Using LLMs for high-level task planning combined with Temporal Logic–based verification to guarantee interpretable, constraint‑compliant behaviors in simulators such as AI2‑THOR and VirtualHome.

Looking ahead, I aim to advance learning and optimization methods that make autonomous systems simultaneously high‑performance, fair, and safety‑critical.

## News
- **[June 2025]** We submitted a paper on Distributed ML Inference Framework to[ICRL 2026]
- **[June 2025]** Paper on Distributed ML Inference Framework published by[GLSVLSI 2025](https://neurips.cc/)
- **[June 2025]** - Started as a Visiting Scholar at [Design Automation of Intelligent Systems Lab]((http://zhulab.eecs.northwestern.edu/index.html)
- **[May 2025]** Submitted Undergrad Thesis <a href="/frank_yang/assets/pdf/MS_Thesis_Frank.pdf" target="_blank">"Safety-Assured Autonomy of Learning-Enabled Emobodied AI Agents"</a>!
- **[November 2024]** - Paper on Pedestrain Detection published by IEEE SiPS [IEEE SiPS 2024](https://ieeexplore.ieee.org/xpl/conhome/10768211/proceeding)
- **[May 2024]** - Paper on Model-Based Kalman Filter State Prediction for Submarine Trajectory won Honorable Mention from MCM 2024
- **[June 2023]** - Started as a ML Intern at [Tsinghua MetacamTech Lab](https://www.metacam.tech/)


## Publications

Yue Hu, G. Datta, K. Beerel, **Yao Liu**, Peter Beerel. *Let’s Roll: Synthetic Dataset Analysis for Pedestrian Detection Across Different Shutter Types.* IEEE SiPS 2024 (Published). [IEEE Xplore](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10768224)

Xuan Zhou, U. Muhan, **Yao Liu**, Peter Beerel. *An Efficient Distributed Inference Framework for IoT Systems with Byzantine Fault Detection.* GLSVLSI 2025 (Published). [ACM DOI](https://dl.acm.org/doi/10.1145/3716368.3735230)

**Yao Liu**, S. Mohanty, E. Ondula, Bhaskar Krishnamachari. *Cooperative Multi-Agent System: A Fairness Perspective towards Competitive Equilibrium* (In Preparation).

Simon Zhan, **Yao Liu**, Philip Wang, Zinan Wang, Qineng Wang, Zhian Ruan, Xiangyu Shi, Xinyu Cao, Frank Yang,
Kangrui Wang, Huajie Shao, Manling Li, Qi Zhu. SENTINEL: A Multi-Level Formal Framework for Safety Evaluation
of LLM-based Embodied Agents (Submmitted to ICLR 2026)

A. Goeckner, A. Ruan, **Yao Liu**, W. Gao, Alessandro Pinto, Qi Zhu. *Quiet Multi-Agent System for Task Allocation* (In Preparation).


C. Chen, **Yao Liu**, Z. Yang, J. Yang, Yinyu Ye (alphabetical order). *Adaptive Online Arrow–Debreu Market* (Working Manuscript).

## Research Projects

<img src="/yao_liu/images/Benchmark_LLM.png" width="35%" align="left" style="margin:2rem 2rem 2rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">SENTINEL: A MULTI-LEVEL FORMAL FRAMWORK FOR SAFETY EVALUATION
OF LLM-BASED EMBODIED AGENTS
AGENTS</h3>

Advised by: [Prof. Qi Zhu & Manling Li]()
<br clear="right">Sources: [Project]() / [Paper]()
<br clear="right"> We developed a safety-aware framework for LLM-based embodied agents that do household tasks. Safety rules are formalized as Linear Temporal Logic (LTL) and checked before execution; high-level, symbolic plans are converted into structured, low-level action sequences runnable in AI2-THOR. During execution, we evaluate Computation Tree Logic (CTL) properties across all possible trajectories to deliver real-time, interpretable diagnostics whenever a rule is violated. 

<img src="/yao_liu/images/QMAS.png" width="35%" align="left" style="margin:2rem 2rem 4rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Quiet Multi-Agent System</h3>

Advised by: [Prof. Qi Zhu](http://users.eecs.northwestern.edu/~qzhu/)
<br clear="right">Sources: [Paper]() 
<br clear="right"> Developed a diffusion-based module that reconstructs the global system state using only local observations and limited communication. Integrated with PPO-trained policies, the predicted state enables communication-efficient task allocation for In-Situ Resource Utilization (ISRU) on planetary surfaces. To track confidence, we add epistemic uncertainty estimation using deep ensembles, informing both action and communication decisions.

<img src="img" width="35%" align="left" style="margin: 2rem 2rem 5rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Efficient Encoding of Graphics Primitives with Simplex-based Structures</h3>

Advised by: [Prof. Bhaskar Krishmanachari](http://users.ece.northwestern.edu/~yingwu/)
<br clear="right">Source: [Paper](./frank_yang/assets/pdf/Encoding.pdf)
<br clear="right">Developed a multi-agent reinforcement learning framework grounded in the Eisenberg–Gale (EG) competitive equilibrium to ensure fair and efficient agent–goal assignment. Incorporated graph neural networks (GNNs) in the actor–critic architecture for message passing among nearby agents and goals. Extended the framework with an online EG baseline that recomputes assignments from the currently discovered goals, solving the same optimization problem over dynamically revealed partitions.
<br>

<img src="img" width="35%" align="left" style="margin: 2rem 2rem 5rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Efficient Encoding of Graphics Primitives with Simplex-based Structures</h3>

Advised by: [Prof. Yinyu Ye](https://stanford.edu/~yyye/)
<br clear="right">Source: [Paper]()
<br clear="right">
Develop an adaptive online decision-making framework for Arrow–Debreu Competitive Equilibrium with incomplete agent information. Extend the Eisenberg–Gale (EG) program to the online setting using two update rules: **Certainty-Equivalent (CE)** to compute prices/allocations from current estimated demand, and **Sample-Average Approximation (SAA)** to refine prices from mini-batches of recent arrival.

<img src="ML_Inference.png" width="35%" align="left" style="margin: 2rem 2rem 5rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Distributed Inference & Adversarial Detection:</h3>

Advised by: [Prof. Peter Beerel](https://sites.usc.edu/eessc/people/)
<br clear="right">Source: [Paper](https://dl.acm.org/doi/10.1145/3716368.3735230)
<br clear="right">
We designed a redundancy-driven scheme for distributed inference that scrambles replica timing to foil periodicity-based attacks. Co-develop lightweight detectors for stochastic corruptions reaching **99% confidence** with minimal overhead via optimized redundancy. Prove required inferences converge to a tight upper bound even at low redundancy, and show the gap to a centralized-RNG baseline is negligible. Recommend heterogeneous PRNGs with coprime periods to resist pattern learning while keeping compute and bandwidth costs low.


<img src="Pedestrian_Detection.png" width="35%" align="left" style="margin: 2rem 2rem 5rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Distributed Inference & Adversarial Detection:</h3>

Advised by: [Prof. Peter Beerel](https://sites.usc.edu/eessc/people/)
<br clear="right">Source: [Paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10768224)
<br clear="right">
We developed a pipeline for **pedestrian detection across shutter types**. We built a UE5 module to **simulate rolling-shutter (RS) distortions** from high-FPS global-shutter (GS) video, generating paired GS↔RS frames with precise ground truth. Our validation on real RS scenes shows RS-aware training **closes the GS gap** and improves performance (**+53.1% recall**, **+30.3% mAP@0.5; +42.4% mAP@0.5–0.95**)—**without ISP RS-correction**. 




## Teaching

***Graduate TA*** for CS340: [Computer Networking](https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/340.html) taught by Alexandar Kuzmanovic, Winter 2023

***Graduate TA*** for CS310: [Scalable Software Architectures](https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/310.html) taught by Joe Hummel, Fall 2023

***Undergraduate TA*** for CS396: [Intro to Web Development](https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/396-6.html) taught by Sarah Van Wart, Spring 2022

***Project Manager*** for Institute of Electrical and Electronics Engineers, 2022

## Other Projects

<img src="/frank_yang/assets/img/quadrotor.jpg" width="35%" align="left" style="margin: 0rem 2rem 2rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Quadrotor Design and Control</h3>
_(Mar 2024 - Jun 2024)_

Source: [Code](https://github.com/yyf20001230/CS410) 
<br clear="right">Developed a WiFi-enabled quadrotor using Raspberry Pi and IMU; implemented PID control, safety measures, and joystick interfacing in C that allows stable manual flight control; integrated Vive Lighthouse with IR sensors to enable autonomous flight control with precise 3D positioning

<img src="/frank_yang/assets/img/reminiscia.jpg" width="35%" align="left" style="margin: 0rem 2rem 1rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Reminiscia</h3>
_(Dec 2022 - May 2023)_

Source: [Code](https://github.com/yyf20001230/reminiscia) 
<br clear="right">Implemented a multimodal text-to-image search application using pretrained vision-language models; employed Vision and CoreML to allow calculations of cosine similarity between text and image embeddings; distilled original 224MB CLIP model into an 85MB, 6-layer image encoder to improve inference speed
<br>
<br>
<br>


<img src="/frank_yang/assets/img/lie.jpg" width="35%" align="left" style="margin: 0rem 2rem 5rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Transformer-based Lie Detection</h3>
_(Feb 2022 - Jan 2023)_

Advised by: [Zach Wood Woughty](https://zachwd.com/)
<br clear="right">Source: [Code](https://github.com/yyf20001230/Lie_Detection)
<br clear="right">Conceptualized a vision-based transformer that detects lies from multimodal inputs with PyTorch; trained a transformer encoder from fine-tuning Inceptionv3; pinpointed 20 micro-gestures and facial AUs that most contribute to lying; resulted an out-of-sample lying classification of 76%


<!-- <img src="/frank_yang/assets/img/matcha.jpg" width="35%" align="left" style="margin: 2rem 2rem 4rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">MatchaNU</h3>
_(Jun 2021 - Feb 2022)_

Launched a IOS application to assist Northwestern students with course planning and building navigation
<br>Integrated Google Geocoding API to generate building name from scrapped catalog into geocoordinates
<br>Integrated UIKit with LocationManager in SwiftUI to track location and provide to classrooms navigation
<br> Used by over 1000 Northwestern undergraduates every quarter; making updates from quarterly testing

<br clear="right" style="margin: 1rem 0rem 2rem">[Code](https://github.com/yyf20001230/matchaNU)
<br>
<br> -->

<!-- <img src="/frank_yang/assets/img/lightfield.jpg" width="35%" align="left" style="margin: 2rem 2rem 6rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Single-Len Lightfield imaging</h3>
_(Jul 2021 - Feb 2022)_

Introduced an alternative to a light-field camera that synthesizes camera focus point after a video is taken
<br>Researched capturing the light-field from a camera with known parameter with OpenCV
<br>Tested with mirrorless-cam experiments and decreased the functional cost of a light-field camera by 3000%

<br clear="right" style="margin: 1rem 0rem 2rem">[Code](https://github.com/yyf20001230/LightField)
<br> -->

## Work Experiences

***Software Engineer Intern @ [Target](https://www.target.com)*** _(June 2023 - Aug 2023)_

Developed a Golang application within a Vela CI/CD pipeline to enforce security and compliance standards
<br>Integrated Postgres with RestAPI for build lifecycle and versioning information retrieval and storage

***Lead Tech Engineer @ [Skuy](https://www.skuy.app/)*** _(Apr 2022 - Jun 2024)_

Built a college community network app startup, amassed 1000+ users on both the App Store and Google Play
<br>Led a 2-months database migration from Heroku to Firebase for service growth and stability
<br>Configured CI/CD pipeline on Expo for IOS Pod and Android Gradle builds

***Software Development Engineering Intern @ [Amazon](https://www.amazon.com/)*** _(Jun 2022 - Sep 2022)_

Implemented a Sagemaker site that provides benchmarked health & architecture evaluations for ML models
<br>Presented a demo to Sagemaker engineers; received candidacy to beta-launch model cards on AWS Re:Invent

## Skills

***Languages***: Python, Go, TypeScript, SwiftUI, HTML/CSS/JavaScript, C++
<br>***Robotic Learning***: ROS2, Torch, CUDA, TensorFlow, OpenCV
<br>***Web/Mobile Development***: React, React Native, Flask, Redux, Node, ESLint, Cypress
<br>***DevOps***: RestAPI, AWS, Firebase, Heroku, Elastic Beanstalk, Git, Vela, Docker, MySQL, PostgresSQL

## Cimematography

<img src="/frank_yang/assets/img/photography.png" width="40%" align="left" style="margin:2rem 4rem 5rem 0rem"/>

<br clear="right"> Outside of school, I am a freelance photographer taking landscape, portrait, and graduation photos. In my creative endeavor, I am a cinematographer working on film projects such as Applause For A Cause and TEDx. I am committed to creating cinematic lighting and true-story shots that evokes emotion. Check out my [portfolio](https://sashimiphotos.com) for my fun side!

![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=http%3A%2F%2Ffrankyang.me&count_bg=%23FFA148&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)

[CV]: https://drive.google.com/file/d/1lxpvsV7zgDOGkaYI4jsujNtcj7tX1Utx/view?usp=sharing
[blog]: https://hydejack.com/blog/
[portfolio]: https://hydejack.com/projects/
[resume]: https://hydejack.com/resume/
[download]: https://hydejack.com/download/
[welcome]: https://hydejack.com/
[forms]: https://hydejack.com/forms-by-example/

[features]: https://hydejack.com/#features
[news]: https://hydejack.com/#build-an-audience
[syntax]: https://hydejack.com/#syntax-highlighting
[latex]: https://hydejack.com/#beautiful-math
[dark]: https://hydejack.com/blog/hydejack/2018-09-01-introducing-dark-mode/
[search]: https://hydejack.com/#_search-input
[grid]: https://hydejack.com/blog/hydejack/

[lic]: LICENSE.md
[pro]: licenses/PRO.md
[docs]: https://hydejack.com/docs/
[ofln]: https://hydejack.com/docs/advanced/#enabling-offline-support
[math]: https://hydejack.com/docs/writing/#adding-math

[kit]: https://github.com/hydecorp/hydejack-starter-kit/releases
[src]: https://github.com/hydecorp/hydejack
[gem]: https://rubygems.org/gems/jekyll-theme-hydejack
[buy]: https://gum.co/nuOluY
[nfy]: https://app.netlify.com/start/deploy?repository=https://github.com/hydecorp/hydejack-starter-kit
[dtn]: https://www.netlify.com/img/deploy/button.svg

[gpss]: https://developers.google.com/speed/pagespeed/insights/?url=https://hydejack.com/
[hy-push-state]: https://hydecorp.github.io/hy-push-state/
[hy-drawer]: https://hydecorp.github.io/hy-drawer/
[rouge]: http://rouge.jneen.net
[katex]: https://khan.github.io/KaTeX/
[mathjax]: https://www.mathjax.org/
[tinyletter]: https://tinyletter.com/