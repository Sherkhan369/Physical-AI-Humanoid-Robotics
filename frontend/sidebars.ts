/**
 * Creating a sidebar enables you to:
 * - Create an ordered group of docs
 * - Render a sidebar in the docs portal
 * - Learn more here: https://docusaurus.io/docs/sidebar
 */

import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // This links to frontend/docs/intro.md
      label: 'Welcome to the Textbook',
    },
    {
      type: 'category',
      label: 'Front Matter',
      link: {
        type: 'generated-index',
        title: 'Front Matter',
        slug: '/front-matter',
        description: 'Important introductory sections.',
      },
      items: [
        'front-matter/preface',
        'front-matter/about-the-authors',
        'front-matter/table-of-contents',
      ],
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      link: {
        type: 'generated-index',
        title: 'Module 1 Overview',
        slug: '/module-1',
        description: 'Explore the fundamentals of ROS 2 for physical AI.',
      },
      items: [
        'module-1/ros2-fundamentals',
        'module-1/advanced-ros2-communication',
        'module-1/robotics-control-ros2',
        'module-1/mobile-robot-navigation-ros2',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      link: {
        type: 'generated-index',
        title: 'Module 2 Overview',
        slug: '/module-2',
        description: 'Dive into robotic simulation with Gazebo and Unity.',
      },
      items: [
        'module-2/gazebo-fundamentals',
        'module-2/advanced-gazebo-simulation',
        'module-2/unity-ros2-integration',
        'module-2/high-fidelity-humanoid-unity',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      link: {
        type: 'generated-index',
        title: 'Module 3 Overview',
        slug: '/module-3',
        description: 'Master advanced AI for robotics using NVIDIA Isaac Sim.',
      },
      items: [
        'module-3/nvidia-isaac-sim-core',
        'module-3/isaac-ros-perception',
        'module-3/robotic-manipulation-isaac-sim',
        'module-3/reinforcement-learning-isaac-gym',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      link: {
        type: 'generated-index',
        title: 'Module 4 Overview',
        slug: '/module-4',
        description: 'Integrate vision, language, and action for intelligent robots.',
      },
      items: [
        'module-4/computer-vision-robotics',
        'module-4/natural-language-understanding-hri',
        'module-4/action-generation-perception-control',
        'module-4/embodied-ai-vla',
      ],
    },
    {
      type: 'category',
      label: 'Appendices',
      link: {
        type: 'generated-index',
        title: 'Appendices',
        slug: '/appendices',
        description: 'Supplementary materials and references.',
      },
      items: [
        'appendices/installation-guide',
        'appendices/capstone-project',
        'appendices/glossary',
        'appendices/index',
        'appendices/references',
      ],
    },
  ],
};

export default sidebars;