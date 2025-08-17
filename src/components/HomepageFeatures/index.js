import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI',
    Svg: require('@site/static/img/logo.jpg').default,
    description: (
      <>
        The AI section is dedicated to the AI projects that we are working on. 
        Key papers and training material is reviewed and shared here.
      </>
    ),
  },
  {
    title: 'Tech',
    Svg: require('@site/static/img/logo.jpg').default,
    description: (
      <>
        Our favourite <code>code</code> and design articles are collected here.
      </>
    ),
  },
  {
    title: 'Science',
    Svg: require('@site/static/img/logo.jpg').default,
    description: (
      <>
        Science is in our DNA. We share our favourite science articles here.
      </>
    ),
  },
    {
    title: 'Finance',
    Svg: require('@site/static/img/logo.jpg').default,
    description: (
      <>
        Fiance, risk and quant modelling.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
