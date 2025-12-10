// import type {ReactNode} from 'react';
 import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
 import HomepageFeatures from '@site/src/components/HomepageFeatures';
 import Heading from '@theme/Heading';

 import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): ReactNode {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }
import useBaseUrl from "@docusaurus/useBaseUrl";


import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The complete reference for Physical AI & Robotics"
    >
      <header className="hero" style={{ backgroundColor: '#001d35' }}> {/* Dark navy background */}
        <div className="container hero__container">
          <div className="row">
            <div className="col col--6" style={{width: '45%'}}>
              <h1 className="hero__title" style={{ color: '#ffffff' }}>
                The complete reference for Physical AI & Robotics
              </h1>
              <p className="hero__subtitle" style={{ color: '#d1d5db' }}>
                Build apps capable of taking millions of users on journeys they've never been on before. Simple. Scalable. Secure.
              </p>
              <div className="buttons">
                <Link
                  className="button button--lg button--secondary"
                  to="/docs/intro"
                  style={{ backgroundColor: '#00b8d4', borderColor: '#00b8d4', color: '#001d35' }}
                >
                  Learn about Physical AI
                </Link>
                <Link
                  className="button button--lg button--secondary margin-left--md"
                  to="/docs/intro" // Adjust to your actual build docs path
                  style={{ backgroundColor: '#00b8d4', borderColor: '#00b8d4', color: '#001d35' }}
                >
                  Start Building
                </Link>
              </div>
            </div>
            <div className="col col--6">
            <img src={useBaseUrl("/img/header.svg")} alt="Banner"  
            style={{width: '100%' , height: 'auto'}}
            />
            </div>
          </div>
        </div>
      </header>
      <main>
         <HomepageFeatures />
      </main>
    </Layout>
  );
}