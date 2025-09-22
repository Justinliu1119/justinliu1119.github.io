# About

Hello! I am Justin Liu. I completed dual B.S. degrees in Electrical and Computer Engineering (Honors) and Applied & Computational Mathematics at the University of Southern California in May 2025. I am a researcher in the [Autonomous Networks Research Group](https://anrg.usc.edu/www/) advised by Professor Bhaskar Krishnamachari, and I have worked closely with Professor Peter Beerel. I was also a visiting scholar at Northwestern’s [Design Automation of Intelligent Systems Lab](http://zhulab.eecs.northwestern.edu/index.html) advised by Prof. [Qi Zhu](http://users.eecs.northwestern.edu/~qzhu/). I also collaborate with Prof. [Yinyu Ye](https://stanford.edu/~yyye/).

My research is focused in autonomous network, control and their applications in multi-agent and Cyber-Physical Systems. Specifically, I design decentralized systems that can coordinate over long horizons, make robust decisions under uncertainty, and satisfy safety constraints in dynamic environments.

**Current focus areas**
- **Data-Driven Decision-Making:** developing online learning algorithms that handle uncertainty with convergence and regret guarantees in multi-agent games.  

- **Generative modeling for dynamics:** Leveraging diffusion models to enable decentralized systems to infer global states from partial and noisy observations, improving coordination under uncertainty.

- **Safety in embodied AI:** Using LLMs for high-level task planning combined with Temporal Logic–based verification to guarantee interpretable, constraint‑compliant behaviors in simulators such as AI2‑THOR and VirtualHome.

Looking ahead, I aim to advance learning and optimization methods that make autonomous systems simultaneously high‑performance, fair, and safety‑critical.

## News
- **[June 2025]** We submitted a paper on Distributed ML Inference Framework to[ICRL 2026]
- **[June 2025]** Paper on Distributed ML Inference Framework published by[GLSVLSI 2025](https://neurips.cc/)
- **[June 2025]** - Started as a Visiting Scholar at [Design Automation of Intelligent Systems Lab]((http://zhulab.eecs.northwestern.edu/index.html)
- **[May 2025]** Submitted Undergrad Thesis <a href="/frank_yang/assets/pdf/MS_Thesis_Frank.pdf" target="_blank">"Safety-Assured Autonomy of Learning-Enabled Embodied AI Agents"</a>!
- **[November 2024]** - Paper on Pedestrian Detection published by IEEE SiPS [IEEE SiPS 2024](https://ieeexplore.ieee.org/xpl/conhome/10768211/proceeding)
- **[May 2024]** - Paper on Model-Based Kalman Filter State Prediction for Submarine Trajectory won Honorable Mention from MCM 2024
- **[June 2023]** - Started as a ML Intern at [Tsinghua MetacamTech Lab](https://www.metacam.tech/)


## Publications

Yue Hu, G. Datta, K. Beerel, **Yao Liu**, Peter Beerel. *Let’s Roll: Synthetic Dataset Analysis for Pedestrian Detection Across Different Shutter Types.* IEEE SiPS 2024 (Published). [IEEE Xplore](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10768224)

Xuan Zhou, U. Muhan, **Yao Liu**, Peter Beerel. *An Efficient Distributed Inference Framework for IoT Systems with Byzantine Fault Detection.* GLSVLSI 2025 (Published). [ACM DOI](https://dl.acm.org/doi/10.1145/3716368.3735230)

**Yao Liu**, S. Mohanty, E. Ondula, Bhaskar Krishnamachari. *Cooperative Multi-Agent System: A Fairness Perspective towards Competitive Equilibrium* (In Preparation).

Simon Zhan, **Yao Liu**, Philip Wang, Zinan Wang, Qineng Wang, Zhian Ruan, Xiangyu Shi, Xinyu Cao, Frank Yang,
Kangrui Wang, Huajie Shao, Manling Li, Qi Zhu. SENTINEL: A Multi-Level Formal FRAMEWORK FOR SAFETY EVALUATION
OF LLM-based Embodied Agents (Submitted to ICLR 2026)

A. Goeckner, A. Ruan, **Yao Liu**, W. Gao, Alessandro Pinto, Qi Zhu. *Quiet Multi-Agent System for Task Allocation* (In Preparation).


C. Chen, **Yao Liu**, Z. Yang, J. Yang, Yinyu Ye (alphabetical order). *Adaptive Online Arrow–Debreu Market* (Working Manuscript).

## Research Projects

<img src="/yao_liu/images/Benchmark_LLM.png" width="35%" align="left" style="margin:2rem 2rem 2rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">SENTINEL: A MULTI-LEVEL FORMAL FRAMEWORK FOR SAFETY EVALUATION
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

<img src="/yao_liu/images/ML_Inference.png" width="35%" align="left" style="margin: 2rem 2rem 5rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Distributed Inference & Adversarial Detection:</h3>

Advised by: [Prof. Peter Beerel](https://sites.usc.edu/eessc/people/)
<br clear="right">Source: [Paper](https://dl.acm.org/doi/10.1145/3716368.3735230)
<br clear="right">
We designed a redundancy-driven scheme for distributed inference that scrambles replica timing to foil periodicity-based attacks. Co-develop lightweight detectors for stochastic corruptions reaching **99% confidence** with minimal overhead via optimized redundancy. Prove required inferences converge to a tight upper bound even at low redundancy, and show the gap to a centralized-RNG baseline is negligible. Recommend heterogeneous PRNGs with coprime periods to resist pattern learning while keeping compute and bandwidth costs low.


<img src="/yao_liu/images/Pedestrian_Detection.png" width="35%" align="left" style="margin: 2rem 2rem 5rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Distributed Inference & Adversarial Detection:</h3>

Advised by: [Prof. Peter Beerel](https://sites.usc.edu/eessc/people/)
<br clear="right">Source: [Paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10768224)
<br clear="right">
We developed a pipeline for **pedestrian detection across shutter types**. We built a UE5 module to **simulate rolling-shutter (RS) distortions** from high-FPS global-shutter (GS) video, generating paired GS↔RS frames with precise ground truth. Our validation on real RS scenes shows RS-aware training **closes the GS gap** and improves performance (**+53.1% recall**, **+30.3% mAP@0.5; +42.4% mAP@0.5–0.95**)—**without ISP RS-correction**. 



## Other Projects

<img src="/yao_liu/images/Kalman_Filter.jpg" width="35%" align="left" style="margin: 0rem 2rem 2rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Kalman Filter-Based Submersible Navigation</h3>
_(Fed 2024)_

Source: [Code](https://github.com/Justinliu1119/Kalman-Filter-Based-Submersible-Navigation-via-MCM-Competition) 
<br clear="right">Develop a model-based **navigation and search** pipeline for submersibles operating under **communication loss**. Fuse acoustic **Time-Difference of Arrival (TDoA)** from multi-buoy beacons with a (E)KF under a constant-velocity motion model to denoise and predict state \((x,y,z,\dot{x},\dot{y},\dot{z})\), tuning process/measurement noise via residual statistics. Handle beacon outages with gating and covariance inflation, then propagate **uncertainty ellipsoids** to the planner. Convert filtered tracks into a **maximum-likelihood search heatmap**, integrate over time to propose prioritized search regions and return paths. In simulation, we achieve meter-level accuracy (MAE CDF saturates ≤ 4 m) and stable tracking during dropouts.

<img src="/yao_liu/images/LLM_Fine_Tuning.img" width="35%" align="left" style="margin: 0rem 2rem 1rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Reminiscia</h3>
_(Aug 2024)_

Source: [Code]() 
<br clear="right">Fine-tune compact LLMs for **Chatbot Arena Human Preference Prediction**. Train **Gemma-2-9b** and **Llama-3.1-8b** with **QLoRA (4-bit)**, AdamW, and gradient accumulation to minimize **log loss**. Optimize context length and length-sorted batching. Build a **validation-weighted ensemble** for steadier, stronger preference probabilities. Ship a reproducible pipeline with data splits, tuning knobs, and inference scripts.

<br>
<br>
<br>

<img src="/yao_liu/images/MCU.img" width="35%" align="left" style="margin: 0rem 2rem 5rem 0rem"/>

<h3 style="margin: 0rem 0rem 1rem">Transformer-based Lie Detection</h3>
_(Jan 2024 - May 2024)_

Advised by: [Prof. Allen Weber]()
<br clear="right">Source: [Code](https://github.com/Justinliu1119/Smart-Management-Hub)
<br clear="right"> Build an **autonomous inventory management system** that tracks items, expirations, and temperature in real time. Use an **ATmega328p** with **barcode scanner (UART)**, **LCD**, **DS1631 sensor (I²C)**, and **keypad**, bridged to a **Raspberry Pi** over **SPI**. Integrate **Firebase** and a **SwiftUI** app for adding/removing items, viewing metadata, and receiving temperature alerts with instant two-way sync. Implement a compact state machine for add/remove/info workflows with debounced inputs. Deliverables: hardware schematics, microcontroller firmware, Pi client/server, and a complete mobile UI for autonomous, low-overhead inventory control.



## Teaching

**Linear Circuits (EE 202L), USC — Spring 2025 & Fall 2024**  
Held office hours, led lab sections, and ran exam‑review sessions.  
[Course page](https://ece-classes.usc.edu/ee202)

**Linear Systems (EE 301/301L), USC — Fall 2024**  
Held office hours; graded homework, labs, and quizzes.  
[Course page](https://classes.usc.edu/term-20243/course/ee-301/)

## Work Experiences

***Software Engineer Intern @ [Tsinghua University MetaCam Lab](https://www.metacam.tech/)*** _(June 2023 - Aug 2023)_

Implement a **spatial-adaptive CNN** to correct optical aberrations by learning and removing **point spread functions (PSFs)** across the image field. Build a synthetic training pipeline with **ray-tracing** and **PSF superposition** to generate PSF-convolved images, then fine-tune the network with PSF-based augmentations to handle **spatially variant blur** and **chromatic dispersion**. Deliver a production-ready model that improves restoration quality by **+1.7%** over state-of-the-art baselines.



## Skills

***Languages***: Python (NumPy, CVXPY, TensorFlow, PyTorch), C/C++, Verilog/HDL, MATLAB, HTML
<br>***Robotic Learning***: ROS2, AI2-THOR/Alfred, VirtualHome, BEHAVIOR-1K, OpenCV, CUDA, MAPPO, MuJoCo, SLAM
<br>***Web/Mobile Development***: Reinforcement Learning, Diffusion Models, Online Learning, SGD, AdaBoost, Transformers
<br>***DevOps***: Git, Docker, AWS, Firebase, REST APIs, MySQL
