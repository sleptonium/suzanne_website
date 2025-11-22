import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI',
    Svg: require('@site/static/img/ai.jpeg').default,
    description: (
      <>
        GenAI, Reinforcement Learning, LLMs, and more.
      </>
    ),
  },
  {
    title: 'Tech',
    Svg: require('@site/static/img/code.jpeg').default,
    description: (
      <>
        From <code>code</code> to system design.
      </>
    ),
  },
  {
    title: 'Science',
    Svg: require('@site/static/img/boff.png').default,
    description: (
      <>
        Science is in our DNA.
      </>
    ),
  },
  {
    title: 'Finance',
    Svg: require('@site/static/img/bean.png').default,
    description: (
      <>
        Pricing, Risk and Quant modelling.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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
