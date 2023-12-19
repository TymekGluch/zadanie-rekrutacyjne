import styles from './App.module.scss';
import './globalStyle.scss';
import { MainNavigation } from './components/MainNavigation';
import { MainFooter } from './components/MainFooter';
import { Section } from './components/Section';
import {
  HEADING_COMPONENTS,
  SECTION_COMPONENTS,
  SECTION_VARIANTS,
} from './components/Section/Section.costants';
import { TabItem, Tabs } from './components/Tabs';
import { tabItems } from './data/domain/homepage.data';

function App() {
  return (
    <article className={styles.mainArticle}>
      <MainNavigation />

      <div className={styles.mainArticle_contentWrapper}>
        <Section
          component={SECTION_COMPONENTS.HEADER}
          headingComponents={HEADING_COMPONENTS.H1}
          heading="A simple bookmark manager"
          text="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
          variant={SECTION_VARIANTS.RIGHT_SIDE_IMG}
          image="/illustration-hero.svg"
          alt="hero image"
        ></Section>

        <Section
          id="features"
          component={SECTION_COMPONENTS.SECTION}
          headingComponents={HEADING_COMPONENTS.H2}
          heading="Features"
          text="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
          variant={SECTION_VARIANTS.WITHOUT_IMG}
          image="/illustration-hero.svg"
          alt="test - section"
        >
          <Tabs
            tabsName={[
              'Simple bookmarking',
              'Speedy searching',
              'Easy sharing',
            ]}
            controledIds={['#tab1', '#tab2', '#tab3']}
          >
            {tabItems().map(
              (
                {
                  heading,
                  text,
                  sectionComponent,
                  hedingComponent,
                  sectionVarinat,
                  image,
                  alt,
                  children,
                },
                index,
              ) => (
                <TabItem key={`${heading}${index}`} id={`tab${index + 1}`}>
                  <Section
                    component={sectionComponent}
                    headingComponents={hedingComponent}
                    heading={heading}
                    text={text}
                    variant={sectionVarinat}
                    image={image}
                    alt={alt}
                  >
                    {children}
                  </Section>
                </TabItem>
              ),
            )}
          </Tabs>
        </Section>
      </div>

      <MainFooter />
    </article>
  );
}

export default App;
