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
import { Tabs } from './components/Tabs';
import {
  accordionHomepageContent,
  cardsHomeItems,
  tabItems,
} from './data/domain/homepage.data';
import { Cards } from './components/Cards';
import { Accordion } from './components/Accordion';
import { Link } from './components/Link';
import {
  LINK_COMPONENT,
  LINK_VARIANTS,
  LINK_WIDTH,
} from './components/Link/Link.constants';
import { Box } from './components/Box';
import {
  BOX_JUSTIFY_CONTENT,
  JUSTIFY_ON_DEVICE,
} from './components/Box/Box.constants';
import { Modal } from './components/Modal';
import React from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const isModalOpenedRef = React.useRef<boolean>(false);

  const handleMouseEnterNavigation = () => {
    if (!isModalOpenedRef.current) {
      setIsModalOpen(true);
      isModalOpenedRef.current = true;
    }
  };

  return (
    <article className={styles.mainArticle}>
      <MainNavigation handleMouseEnter={handleMouseEnterNavigation} />

      <div className={styles.mainArticle_contentWrapper}>
        <Section
          component={SECTION_COMPONENTS.HEADER}
          headingComponents={HEADING_COMPONENTS.H1}
          heading="A simple bookmark manager"
          text="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
          variant={SECTION_VARIANTS.RIGHT_SIDE_IMG}
          image="/illustration-hero.svg"
          alt="hero image"
        >
          <Box
            justifyContent={BOX_JUSTIFY_CONTENT.START}
            justifyOnDevice={JUSTIFY_ON_DEVICE.DESKTOP}
          >
            <Link
              component={LINK_COMPONENT.A}
              variant={LINK_VARIANTS.CONTAINED}
              width={LINK_WIDTH.FIT_CONTENT}
              href="#add-to-chrome"
            >
              Get it on Chrome
            </Link>

            <Link
              component={LINK_COMPONENT.A}
              variant={LINK_VARIANTS.CONTAINED_LIGHT}
              width={LINK_WIDTH.FIT_CONTENT}
              href="#add-to-firefox"
            >
              Get it on Firefox
            </Link>
          </Box>
        </Section>

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
            controledIds={['tab1', 'tab2', 'tab3']}
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
                  zoomAndCropImage,
                },
                index,
              ) => (
                <Tabs.Item key={`${heading}${index}`} id={`tab${index + 1}`}>
                  <Section
                    component={sectionComponent}
                    headingComponents={hedingComponent}
                    heading={heading}
                    text={text}
                    variant={sectionVarinat}
                    image={image}
                    alt={alt}
                    zoomAndCropImage={zoomAndCropImage}
                  >
                    {children}
                  </Section>
                </Tabs.Item>
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
          <Cards content={cardsHomeItems} />
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
          <Accordion
            accordionContent={accordionHomepageContent}
            link="https://chromewebstore.google.com/detail/boczna-lista-zak%C5%82adek/jdbnofccmhefkmjbkkdkfiicjkgofkdh"
            linkText="More info"
          />
        </Section>

        <Modal
          image="/illustration-features-tab-2.svg"
          alt="tab 2 modal"
          heading="Intelligent Search"
          text="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
          variant={SECTION_VARIANTS.LEFT_SIDE_IMG}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      </div>
      <MainFooter />
    </article>
  );
}

export default App;
