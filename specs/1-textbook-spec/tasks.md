# Physical AI Textbook - Execution Tasks

This document outlines the atomic, sequentially ordered tasks for developing the "Physical AI & Humanoid Robotics" textbook. Each task has a clear deliverable, estimated effort, and explicit file path.

## Dependencies

Tasks are ordered sequentially unless explicitly marked with `[P]` for parallelization opportunities. Dependencies are indicated by `after Task-XXX`.

## Implementation Strategy

The project will follow an incremental delivery approach. Phase 0 and 1 establish the foundational Docusaurus structure. Phase 2 focuses on content generation, broken down chapter by chapter to allow for focused development. Phase 3 handles final review, polishing, and deployment.

---

## Phase 0: Project Setup & Core Structure (Day 1 Focus)

### User Story 1 - Core Learning Journey (P1) & User Story 2 - Reference and Installation (P2)
Goal: Establish the basic Docusaurus project, create all necessary content directories, and configure the sidebar for navigation.

- [X] T001 Initialize Docusaurus project in `frontend/` directory. (60 min)
- [X] T002 Create `frontend/docs/_intro.md` for Welcome/Overview. (15 min) after T001
- [X] T003 Create `frontend/docs/_category_.json` for docs landing page. (15 min) after T002
- [X] T004 Create `frontend/docs/module-1/_category_.json` for Module 1. (15 min) after T003
- [X] T005 Create `frontend/docs/module-2/_category_.json` for Module 2. (15 min) after T004
- [X] T006 Create `frontend/docs/module-3/_category_.json` for Module 3. (15 min) after T005
- [X] T007 Create `frontend/docs/module-4/_category_.json` for Module 4. (15 min) after T006
- [X] T008 Create `frontend/docs/front-matter/_category_.json` for Front Matter. (15 min) after T007
- [X] T009 Create `frontend/docs/appendices/_category_.json` for Appendices. (15 min) after T008
- [X] T010 Update `frontend/sidebars.ts` with the complete module and section structure. (45 min) after T009

## Phase 1: Chapter Outlines and Content Generation (Day 2 Focus)

### User Story 1 - Core Learning Journey (P1)
Goal: Create all placeholder `.mdx` files for chapters, front matter, and appendices.

- [X] T011 Create empty chapter file `frontend/docs/module-1/ros2-fundamentals.mdx`. (15 min) after T010
- [X] T012 Create empty chapter file `frontend/docs/module-1/advanced-ros2-communication.mdx`. (15 min) after T011
- [X] T013 Create empty chapter file `frontend/docs/module-1/robotics-control-ros2.mdx`. (15 min) after T012
- [X] T014 Create empty chapter file `frontend/docs/module-1/mobile-robot-navigation-ros2.mdx`. (15 min) after T013
- [X] T015 Create empty chapter file `frontend/docs/module-2/gazebo-fundamentals.mdx`. (15 min) after T014
- [X] T016 Create empty chapter file `frontend/docs/module-2/advanced-gazebo-simulation.mdx`. (15 min) after T015
- [X] T017 Create empty chapter file `frontend/docs/module-2/unity-ros2-integration.mdx`. (15 min) after T016
- [X] T018 Create empty chapter file `frontend/docs/module-2/high-fidelity-humanoid-unity.mdx`. (15 min) after T017
- [X] T019 Create empty chapter file `frontend/docs/module-3/nvidia-isaac-sim-core.mdx`. (15 min) after T018
- [X] T020 Create empty chapter file `frontend/docs/module-3/isaac-ros-perception.mdx`. (15 min) after T019
- [X] T021 Create empty chapter file `frontend/docs/module-3/robotic-manipulation-isaac-sim.mdx`. (15 min) after T020
- [X] T022 Create empty chapter file `frontend/docs/module-3/reinforcement-learning-isaac-gym.mdx`. (15 min) after T021
- [X] T023 Create empty chapter file `frontend/docs/module-4/computer-vision-robotics.mdx`. (15 min) after T022
- [X] T024 Create empty chapter file `frontend/docs/module-4/natural-language-understanding-hri.mdx`. (15 min) after T023
- [X] T025 Create empty chapter file `frontend/docs/module-4/action-generation-perception-control.mdx`. (15 min) after T024
- [X] T026 Create empty chapter file `frontend/docs/module-4/embodied-ai-vla.mdx`. (15 min) after T025
- [X] T027 Create empty file `frontend/docs/front-matter/preface.mdx`. (15 min) after T026
- [X] T028 Create empty file `frontend/docs/front-matter/about-the-authors.mdx`. (15 min) after T027
- [X] T029 Create empty file `frontend/docs/front-matter/table-of-contents.mdx`. (15 min) after T028
- [X] T030 Create empty file `frontend/docs/appendices/installation-guide.mdx`. (15 min) after T029
- [X] T031 Create empty file `frontend/docs/appendices/capstone-project.mdx`. (15 min) after T030
- [X] T032 Create empty file `frontend/docs/appendices/glossary.mdx`. (15 min) after T031
- [X] T033 Create empty file `frontend/docs/appendices/index.mdx`. (15 min) after T032
- [X] T034 Create empty file `frontend/docs/appendices/references.mdx`. (15 min) after T033

## Phase 2: Content Writing (Day 3 Focus)

### Module 1: The Robotic Nervous System (ROS 2) - Chapter by Chapter

#### Chapter 1.1: ROS 2 Fundamentals: Architecture and Core Concepts
- [X] T035 Write Learning Objectives for `frontend/docs/module-1/ros2-fundamentals.mdx`. (30 min) after T034
- [X] T036 Write Core Theory (Part 1) for `frontend/docs/module-1/ros2-fundamentals.mdx`. (45 min) after T035
- [X] T037 Write Core Theory (Part 2) for `frontend/docs/module-1/ros2-fundamentals.mdx`. (45 min) after T036
- [X] T038 Write Code Example 1 (Publisher/Subscriber) for `frontend/docs/module-1/ros2-fundamentals.mdx`. (60 min) after T037
- [X] T039 Write Code Example 2 (Service/Client) for `frontend/docs/module-1/ros2-fundamentals.mdx`. (60 min) after T038
- [X] T040 Write Code Example 3 (Action Client) for `frontend/docs/module-1/ros2-fundamentals.mdx`. (60 min) after T039
- [X] T041 Write Diagram 1 (Mermaid: ROS 2 Architecture) for `frontend/docs/module-1/ros2-fundamentals.mdx`. (30 min) after T040
- [X] T042 Write Diagram 2 (External/SVG: ROS 2 Nodetree) for `frontend/docs/module-1/ros2-fundamentals.mdx`. (30 min) after T041
- [X] T043 Write Hands-on Exercise 1 for `frontend/docs/module-1/ros2-fundamentals.mdx`. (45 min) after T042
- [X] T044 Write Hands-on Exercise 2 for `frontend/docs/module-1/ros2-fundamentals.mdx`. (45 min) after T043
- [X] T045 Write Summary & Further Reading for `frontend/docs/module-1/ros2-fundamentals.mdx`. (30 min) after T044

#### Chapter 1.2: Advanced ROS 2 Communication and Tools
- [X] T046 Write Learning Objectives for `frontend/docs/module-1/advanced-ros2-communication.mdx`. (30 min) after T045
- [X] T047 Write Core Theory (Part 1) for `frontend/docs/module-1/advanced-ros2-communication.mdx`. (45 min) after T046
- [X] T048 Write Code Example 1 (Custom message definition) for `frontend/docs/module-1/advanced-ros2-communication.mdx`. (60 min) after T047
- [X] T049 Write Code Example 2 (Parameter server usage) for `frontend/docs/module-1/advanced-ros2-communication.mdx`. (60 min) after T048
- [X] T050 Write Diagram 1 (Mermaid: Custom Message Flow) for `frontend/docs/module-1/advanced-ros2-communication.mdx`. (30 min) after T049
- [X] T051 Write Hands-on Exercise 1 for `frontend/docs/module-1/advanced-ros2-communication.mdx`. (45 min) after T050
- [X] T052 Write Summary & Further Reading for `frontend/docs/module-1/advanced-ros2-communication.mdx`. (30 min) after T051

#### Chapter 1.3: Robotics Control with ROS 2: Actuation and Sensors
- [X] T053 Write Learning Objectives for `frontend/docs/module-1/robotics-control-ros2.mdx`. (30 min) after T052
- [X] T054 Write Core Theory (Part 1) for `frontend/docs/module-1/robotics-control-ros2.mdx`. (45 min) after T053
- [X] T055 Write Code Example 1 (Control simulated joint) for `frontend/docs/module-1/robotics-control-ros2.mdx`. (60 min) after T054
- [X] T056 Write Code Example 2 (Read sensor data) for `frontend/docs/module-1/robotics-control-ros2.mdx`. (60 min) after T055
- [X] T057 Write Code Example 3 (Simple PID) for `frontend/docs/module-1/robotics-control-ros2.mdx`. (60 min) after T056
- [X] T058 Write Diagram 1 (Mermaid: Control Loop) for `frontend/docs/module-1/robotics-control-ros2.mdx`. (30 min) after T057
- [X] T059 Write Hands-on Exercise 1 for `frontend/docs/module-1/robotics-control-ros2.mdx`. (45 min) after T058
- [X] T060 Write Summary & Further Reading for `frontend/docs/module-1/robotics-control-ros2.mdx`. (30 min) after T059

#### Chapter 1.4: Mobile Robot Navigation with ROS 2
- [X] T061 Write Learning Objectives for `frontend/docs/module-1/mobile-robot-navigation-ros2.mdx`. (30 min) after T060
- [X] T062 Write Core Theory (Part 1) for `frontend/docs/module-1/mobile-robot-navigation-ros2.mdx`. (45 min) after T061
- [X] T063 Write Code Example 1 (Teleop node) for `frontend/docs/module-1/mobile-robot-navigation-ros2.mdx`. (60 min) after T062
- [X] T064 Write Code Example 2 (Waypoint navigation) for `frontend/docs/module-1/mobile-robot-navigation-ros2.mdx`. (60 min) after T063
- [X] T065 Write Diagram 1 (Mermaid: Navigation Stack Overview) for `frontend/docs/module-1/mobile-robot-navigation-ros2.mdx`. (30 min) after T064
- [X] T066 Write Hands-on Exercise 1 for `frontend/docs/module-1/mobile-robot-navigation-ros2.mdx`. (45 min) after T065
- [X] T067 Write Summary & Further Reading for `frontend/docs/module-1/mobile-robot-navigation-ros2.mdx`. (30 min) after T066

### Module 2: The Digital Twin (Gazebo & Unity) - Chapter by Chapter

#### Chapter 2.1: Gazebo Simulation: Fundamentals and Robot Modeling (URDF/SDF)
- [X] T068 Write Learning Objectives for `frontend/docs/module-2/gazebo-fundamentals.mdx`. (30 min) after T067
- [X] T069 Write Core Theory (Part 1) for `frontend/docs/module-2/gazebo-fundamentals.mdx`. (45 min) after T068
- [X] T070 Write Code Example 1 (Spawn model in Gazebo) for `frontend/docs/module-2/gazebo-fundamentals.mdx`. (60 min) after T069
- [X] T071 Write Code Example 2 (Control model via ROS 2) for `frontend/docs/module-2/gazebo-fundamentals.mdx`. (60 min) after T070
- [X] T072 Write Diagram 1 (Mermaid: URDF Structure) for `frontend/docs/module-2/gazebo-fundamentals.mdx`. (30 min) after T071
- [X] T073 Write Hands-on Exercise 1 for `frontend/docs/module-2/gazebo-fundamentals.mdx`. (45 min) after T072
- [X] T074 Write Summary & Further Reading for `frontend/docs/module-2/gazebo-fundamentals.mdx`. (30 min) after T073

#### Chapter 2.2: Advanced Gazebo: Custom Sensors and Environment Interaction
- [X] T075 Write Learning Objectives for `frontend/docs/module-2/advanced-gazebo-simulation.mdx`. (30 min) after T074
- [X] T076 Write Core Theory (Part 1) for `frontend/docs/module-2/advanced-gazebo-simulation.mdx`. (45 min) after T075
- [X] T077 Write Code Example 1 (Custom sensor plugin) for `frontend/docs/module-2/advanced-gazebo-simulation.mdx`. (60 min) after T076
- [X] T078 Write Code Example 2 (Environment modification) for `frontend/docs/module-2/advanced-gazebo-simulation.mdx`. (60 min) after T077
- [X] T079 Write Diagram 1 (Mermaid: Custom Sensor Data Flow) for `frontend/docs/module-2/advanced-gazebo-simulation.mdx`. (30 min) after T078
- [X] T080 Write Hands-on Exercise 1 for `frontend/docs/module-2/advanced-gazebo-simulation.mdx`. (45 min) after T079
- [X] T081 Write Summary & Further Reading for `frontend/docs/module-2/advanced-gazebo-simulation.mdx`. (30 min) after T080

#### Chapter 2.3: Unity for Robotics: Setup and ROS 2 Integration
- [X] T082 Write Learning Objectives for `frontend/docs/module-2/unity-ros2-integration.mdx`. (30 min) after T081
- [X] T083 Write Core Theory (Part 1) for `frontend/docs/module-2/unity-ros2-integration.mdx`. (45 min) after T082
- [X] T084 Write Code Example 1 (Simple Unity scene setup) for `frontend/docs/module-2/unity-ros2-integration.mdx`. (60 min) after T083
- [X] T085 Write Code Example 2 (ROS 2 Publisher/Subscriber in Unity) for `frontend/docs/module-2/unity-ros2-integration.mdx`. (60 min) after T084
- [X] T086 Write Diagram 1 (Mermaid: Unity-ROS 2 Bridge) for `frontend/docs/module-2/unity-ros2-integration.mdx`. (30 min) after T085
- [X] T087 Write Hands-on Exercise 1 for `frontend/docs/module-2/unity-ros2-integration.mdx`. (45 min) after T086
- [X] T088 Write Summary & Further Reading for `frontend/docs/module-2/unity-ros2-integration.mdx`. (30 min) after T087

#### Chapter 2.4: High-Fidelity Humanoid Simulation in Unity
- [X] T089 Write Learning Objectives for `frontend/docs/module-2/high-fidelity-humanoid-unity.mdx`. (30 min) after T088
- [X] T090 Write Core Theory (Part 1) for `frontend/docs/module-2/high-fidelity-humanoid-unity.mdx`. (45 min) after T089
- [X] T091 Write Code Example 1 (Humanoid inverse kinematics) for `frontend/docs/module-2/high-fidelity-humanoid-unity.mdx`. (60 min) after T090
- [X] T092 Write Code Example 2 (Sensor data visualization) for `frontend/docs/module-2/high-fidelity-humanoid-unity.mdx`. (60 min) after T091
- [X] T093 Write Diagram 1 (Mermaid: Humanoid Control Architecture) for `frontend/docs/module-2/high-fidelity-humanoid-unity.mdx`. (30 min) after T092
- [X] T094 Write Hands-on Exercise 1 for `frontend/docs/module-2/high-fidelity-humanoid-unity.mdx`. (45 min) after T093
- [X] T095 Write Summary & Further Reading for `frontend/docs/module-2/high-fidelity-humanoid-unity.mdx`. (30 min) after T094

### Module 3: The AI-Robot Brain (NVIDIA Isaac™) - Chapter by Chapter

<!-- #### Chapter 3.1: NVIDIA Isaac Sim: Core Concepts and RTX Simulation
- [ ] T096 Write Learning Objectives for `frontend/docs/module-3/nvidia-isaac-sim-core.mdx`. (30 min) after T095
- [ ] T097 Write Core Theory (Part 1) for `frontend/docs/module-3/nvidia-isaac-sim-core.mdx`. (45 min) after T096
- [ ] T098 Write Code Example 1 (Basic scene setup) for `frontend/docs/module-3/nvidia-isaac-sim-core.mdx`. (60 min) after T097
- [ ] T099 Write Code Example 2 (Asset loading) for `frontend/docs/module-3/nvidia-isaac-sim-core.mdx`. (60 min) after T098
- [ ] T100 Write Code Example 3 (Simple script) for `frontend/docs/module-3/nvidia-isaac-sim-core.mdx`. (60 min) after T099
- [ ] T101 Write Diagram 1 (Mermaid: Isaac Sim Architecture) for `frontend/docs/module-3/nvidia-isaac-sim-core.mdx`. (30 min) after T100
- [ ] T102 Write Hands-on Exercise 1 for `frontend/docs/module-3/nvidia-isaac-sim-core.mdx`. (45 min) after T101
- [ ] T103 Write Summary & Further Reading for `frontend/docs/module-3/nvidia-isaac-sim-core.mdx`. (30 min) after T102

#### Chapter 3.2: Isaac ROS: GPU-Accelerated Perception and Processing
- [ ] T104 Write Learning Objectives for `frontend/docs/module-3/isaac-ros-perception.mdx`. (30 min) after T103
- [ ] T105 Write Core Theory (Part 1) for `frontend/docs/module-3/isaac-ros-perception.mdx`. (45 min) after T104
- [ ] T106 Write Code Example 1 (Stereo depth estimation) for `frontend/docs/module-3/isaac-ros-perception.mdx`. (60 min) after T105
- [ ] T107 Write Code Example 2 (Object detection with Isaac ROS) for `frontend/docs/module-3/isaac-ros-perception.mdx`. (60 min) after T106
- [ ] T108 Write Diagram 1 (Mermaid: Isaac ROS Graph) for `frontend/docs/module-3/isaac-ros-perception.mdx`. (30 min) after T107
- [ ] T109 Write Hands-on Exercise 1 for `frontend/docs/module-3/isaac-ros-perception.mdx`. (45 min) after T108
- [ ] T110 Write Summary & Further Reading for `frontend/docs/module-3/isaac-ros-perception.mdx`. (30 min) after T109

#### Chapter 3.3: Robotic Manipulation and Motion Planning in Isaac Sim
- [ ] T111 Write Learning Objectives for `frontend/docs/module-3/robotic-manipulation-isaac-sim.mdx`. (30 min) after T110
- [ ] T112 Write Core Theory (Part 1) for `frontend/docs/module-3/robotic-manipulation-isaac-sim.mdx`. (45 min) after T111
- [ ] T113 Write Code Example 1 (Inverse kinematics solver) for `frontend/docs/module-3/robotic-manipulation-isaac-sim.mdx`. (60 min) after T112
- [ ] T114 Write Code Example 2 (Path planning with MoveIt 2) for `frontend/docs/module-3/robotic-manipulation-isaac-sim.mdx`. (60 min) after T113
- [ ] T115 Write Code Example 3 (Grasping) for `frontend/docs/module-3/robotic-manipulation-isaac-sim.mdx`. (60 min) after T114
- [ ] T116 Write Diagram 1 (Mermaid: Manipulation Pipeline) for `frontend/docs/module-3/robotic-manipulation-isaac-sim.mdx`. (30 min) after T115
- [ ] T117 Write Hands-on Exercise 1 for `frontend/docs/module-3/robotic-manipulation-isaac-sim.mdx`. (45 min) after T116
- [ ] T118 Write Summary & Further Reading for `frontend/docs/module-3/robotic-manipulation-isaac-sim.mdx`. (30 min) after T117

#### Chapter 3.4: Reinforcement Learning for Robotics with Isaac Gym
- [ ] T119 Write Learning Objectives for `frontend/docs/module-3/reinforcement-learning-isaac-gym.mdx`. (30 min) after T118
- [ ] T120 Write Core Theory (Part 1) for `frontend/docs/module-3/reinforcement-learning-isaac-gym.mdx`. (45 min) after T119
- [ ] T121 Write Code Example 1 (Simple RL environment in Isaac Gym) for `frontend/docs/module-3/reinforcement-learning-isaac-gym.mdx`. (60 min) after T120
- [ ] T122 Write Code Example 2 (Training a basic policy) for `frontend/docs/module-3/reinforcement-learning-isaac-gym.mdx`. (60 min) after T121
- [ ] T123 Write Diagram 1 (Mermaid: RL Training Loop) for `frontend/docs/module-3/reinforcement-learning-isaac-gym.mdx`. (30 min) after T122
- [ ] T124 Write Hands-on Exercise 1 for `frontend/docs/module-3/reinforcement-learning-isaac-gym.mdx`. (45 min) after T123
- [ ] T125 Write Summary & Further Reading for `frontend/docs/module-3/reinforcement-learning-isaac-gym.mdx`. (30 min) after T124

### Module 4: Vision-Language-Action (VLA) - Chapter by Chapter

#### Chapter 4.1: Foundations of Vision for Robotics: From Pixels to Perception
- [ ] T126 Write Learning Objectives for `frontend/docs/module-4/computer-vision-robotics.mdx`. (30 min) after T125
- [ ] T127 Write Core Theory (Part 1) for `frontend/docs/module-4/computer-vision-robotics.mdx`. (45 min) after T126
- [ ] T128 Write Code Example 1 (Image processing with OpenCV) for `frontend/docs/module-4/computer-vision-robotics.mdx`. (60 min) after T127
- [ ] T129 Write Code Example 2 (Basic object detection) for `frontend/docs/module-4/computer-vision-robotics.mdx`. (60 min) after T128
- [ ] T130 Write Code Example 3 (Feature extraction) for `frontend/docs/module-4/computer-vision-robotics.mdx`. (60 min) after T129
- [ ] T131 Write Diagram 1 (Mermaid: CNN Architecture) for `frontend/docs/module-4/computer-vision-robotics.mdx`. (30 min) after T130
- [ ] T132 Write Hands-on Exercise 1 for `frontend/docs/module-4/computer-vision-robotics.mdx`. (45 min) after T131
- [ ] T133 Write Summary & Further Reading for `frontend/docs/module-4/computer-vision-robotics.mdx`. (30 min) after T132

#### Chapter 4.2: Natural Language Understanding for Human-Robot Interaction
- [ ] T134 Write Learning Objectives for `frontend/docs/module-4/natural-language-understanding-hri.mdx`. (30 min) after T133
- [ ] T135 Write Core Theory (Part 1) for `frontend/docs/module-4/natural-language-understanding-hri.mdx`. (45 min) after T134
- [ ] T136 Write Code Example 1 (Basic NLU with spaCy) for `frontend/docs/module-4/natural-language-understanding-hri.mdx`. (60 min) after T135
- [ ] T137 Write Code Example 2 (Command parsing) for `frontend/docs/module-4/natural-language-understanding-hri.mdx`. (60 min) after T136
- [ ] T138 Write Diagram 1 (Mermaid: NLP Pipeline) for `frontend/docs/module-4/natural-language-understanding-hri.mdx`. (30 min) after T137
- [ ] T139 Write Hands-on Exercise 1 for `frontend/docs/module-4/natural-language-understanding-hri.mdx`. (45 min) after T138
- [ ] T140 Write Summary & Further Reading for `frontend/docs/module-4/natural-language-understanding-hri.mdx`. (30 min) after T139

#### Chapter 4.3: Action Generation: Bridging Perception and Control
- [ ] T141 Write Learning Objectives for `frontend/docs/module-4/action-generation-perception-control.mdx`. (30 min) after T140
- [ ] T142 Write Core Theory (Part 1) for `frontend/docs/module-4/action-generation-perception-control.mdx`. (45 min) after T141
- [ ] T143 Write Code Example 1 (High-level command to low-level actions) for `frontend/docs/module-4/action-generation-perception-control.mdx`. (60 min) after T142
- [ ] T144 Write Code Example 2 (Task planning) for `frontend/docs/module-4/action-generation-perception-control.mdx`. (60 min) after T143
- [ ] T145 Write Code Example 3 (Behavior trees) for `frontend/docs/module-4/action-generation-perception-control.mdx`. (60 min) after T144
- [ ] T146 Write Diagram 1 (Mermaid: Action Generation Pipeline) for `frontend/docs/module-4/action-generation-perception-control.mdx`. (30 min) after T145
- [ ] T147 Write Hands-on Exercise 1 for `frontend/docs/module-4/action-generation-perception-control.mdx`. (45 min) after T146
- [ ] T148 Write Summary & Further Reading for `frontend/docs/module-4/action-generation-perception-control.mdx`. (30 min) after T147

#### Chapter 4.4: Embodied AI: Integrating Vision, Language, and Action
- [ ] T149 Write Learning Objectives for `frontend/docs/module-4/embodied-ai-vla.mdx`. (30 min) after T148
- [ ] T150 Write Core Theory (Part 1) for `frontend/docs/module-4/embodied-ai-vla.mdx`. (45 min) after T149
- [ ] T151 Write Code Example 1 (End-to-end VLA system) for `frontend/docs/module-4/embodied-ai-vla.mdx`. (60 min) after T150
- [ ] T152 Write Code Example 2 (Humanoid voice command interface) for `frontend/docs/module-4/embodied-ai-vla.mdx`. (60 min) after T151
- [ ] T153 Write Diagram 1 (Mermaid: VLA Architecture) for `frontend/docs/module-4/embodied-ai-vla.mdx`. (30 min) after T152
- [ ] T154 Write Hands-on Exercise 1 for `frontend/docs/module-4/embodied-ai-vla.mdx`. (45 min) after T153
- [ ] T155 Write Summary & Further Reading for `frontend/docs/module-4/embodied-ai-vla.mdx`. (30 min) after T154 -->

### Front Matter Content

- [X] T156 Write Preface for `frontend/docs/front-matter/preface.mdx`. (45 min) after T155
- [X] T157 Write content for `frontend/docs/front-matter/about-the-authors.mdx`. (60 min) after T156
- [X] T158 Write content for `frontend/docs/front-matter/table-of-contents.mdx`. (60 min) after T157

### Appendices Content

- [X] T159 Write content for `frontend/docs/appendices/installation-guide.mdx`. (90 min) after T158
- [X] T160 Write content for `frontend/docs/appendices/capstone-project.mdx`. (60 min) after T159
- [X] T161 Write content for `frontend/docs/appendices/glossary.mdx`. (60 min) after T160
- [X] T162 Write content for `frontend/docs/appendices/index.mdx`. (60 min) after T161
- [X] T163 Write content for `frontend/docs/appendices/references.mdx`. (60 min) after T162

## Phase 3: Final Verification & Deployment (Day 4 Focus)

### User Story 1 - Core Learning Journey (P1) & User Story 2 - Reference and Installation (P2)
Goal: Ensure all content is polished, functional, and ready for deployment.

- [ ] T164 Verify all code examples in Module 1 (1.1-1.4) execute successfully. (90 min) after T163
- [X] T165 Verify all code examples in Module 2 (2.1-2.4) execute successfully. (90 min) after T164
- [X] T166 Verify all Mermaid diagrams render correctly across all chapters. (60 min) after T165
- [X] T167 Verify all external diagrams/SVGs are correctly linked/embedded. (60 min) after T166
- [X] T168 Configure `docusaurus.config.ts` for GitHub Pages deployment (e.g., `baseUrl`, `projectName`). (45 min) after T167
- [X] T169 Build the Docusaurus project. (60 min) after T168
- [X] T170 Deploy the built site to GitHub Pages. (30 min) after T169
- [X] T171 Verify the rendered page count is after which chapter are done. (30 min) after T170
