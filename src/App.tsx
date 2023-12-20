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
import {
  accordionHomepageContent,
  tabItems,
} from './data/domain/homepage.data';
import { Cards } from './components/Cards';
import { Accordion } from './components/Accordion';

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

        <Section
          id="download-the-extension"
          component={SECTION_COMPONENTS.SECTION}
          headingComponents={HEADING_COMPONENTS.H2}
          heading="Download the extension"
          text="We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize."
          variant={SECTION_VARIANTS.WITHOUT_IMG}
        >
          <Cards />
        </Section>

        <Section
          id="frequently-asked-questions"
          component={SECTION_COMPONENTS.SECTION}
          headingComponents={HEADING_COMPONENTS.H2}
          heading="Frequently asked questions"
          text="Here are some of our FAQS. If you have any other questions
          you'd like answered please feel free to email us."
          variant={SECTION_VARIANTS.WITHOUT_IMG}
        >
          <Accordion accordionContent={accordionHomepageContent} />
        </Section>
      </div>

      <MainFooter />
    </article>
  );
}

export default App;
