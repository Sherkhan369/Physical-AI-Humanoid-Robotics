import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  
  {
   
    title: 'The Robotic Nervous System (ROS 2)',
    Svg: require('@site/static/img/sdk_card_anim.svg').default,
    description: (
      <>
       the industry-standard framework that acts as a robot's "nervous system."
You'll master core concepts like nodes, topics, services, and actions to enable seamless communication between robot components.
      </>
    ),
  },
  {
    title: 'The Digital Twin (Gazebo & Unity',
    Svg: require('@site/static/img/participate.svg').default,
    description: (
      <>
       Dive into simulation with Gazebo (physics-accurate) and Unity (high-fidelity visuals) to create powerful digital twins of your robot.
      </>
    ),
  },
  {
    title: 'The AI-Robot Brain (NVIDIA Isaac™)',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Master NVIDIA Isaac platform  the complete AI robotics stack combining Isaac ROS, Isaac Sim, and pretrained foundation models.

      </>
    ),
  },
  {
    title: 'Vision-Language-Action (VLA) Integration',
    Svg: require('@site/static/img/build.svg').default,
    description: (
      <>
        Explore cutting-edge Vision-Language-Action models that let robots understand natural language commands, see the world through cameras, and act intelligently in one end-to-end system.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
   
    <div className={clsx('col col--3 shadow--md', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="padding-horiz--md">
        
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
