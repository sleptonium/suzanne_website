import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'AI',
    Svg: require('@site/static/img/AI.jpeg').default,
    link: '/docs/AI',
    description: (
      <>
        GenAI, Reinforcement Learning, LLMs, and more.
      </>
    ),
  },
  {
    title: 'Tech',
    Svg: require('@site/static/img/code.jpeg').default,
    link: '/docs/Tech',
    description: (
      <>
        From <code>code</code> to system design.
      </>
    ),
  },
  {
    title: 'Science',
    Svg: require('@site/static/img/boff.png').default,
    link: '/docs/Science',
    description: (
      <>
        Science is in our DNA.
      </>
    ),
  },
  {
    title: 'Finance',
    Svg: require('@site/static/img/bean.png').default,
    link: '/docs/Finance',
    description: (
      <>
        Pricing, Risk and Quant modelling.
      </>
    ),
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
        <div className="text--center">
          <img className={styles.featureSvg} src={Svg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
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
