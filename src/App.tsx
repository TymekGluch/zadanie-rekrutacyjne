import styles from './App.module.scss';
import './globalStyle.scss';
import { MainNavigation } from './components/MainNavigation';
import { MainFooter } from './components/MainFooter';
import { Section } from './components/Section';

function App() {
  return (
    <article className={styles.mainArticle}>
      <MainNavigation />

      <div className={styles.mainArticle_contentWrapper}>
        <Section
          component="header"
          heading="test heading"
          text="text test"
          variant="left-side-img"
          image="/src/assets/illustration-hero.svg"
          alt="hero image"
        >
          <p></p>
        </Section>
      </div>

      <MainFooter />
    </article>
  );
}

export default App;
