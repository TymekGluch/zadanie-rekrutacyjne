import React from 'react';
import {
  SECTION_COMPONENTS,
  SECTION_VARIANTS,
  HEADING_COMPONENTS,
} from '../../components/Section/Section.costants';
import { CardsItemType } from '../../components/Cards/Cards.types';
import { AccordionItemType } from '../../components/Accordion';
import { Link } from '../../components/Link';
import {
  LINK_COMPONENT,
  LINK_DEVICE_DISPLAY,
  LINK_VARIANTS,
  LINK_WIDTH,
} from '../../components/Link/Link.constants';
import { Box } from '../../components/Box';
import { BOX_JUSTIFY_CONTENT } from '../../components/Box/Box.constants';

type ValueOf<T> = T[keyof T];

type TabItemType = {
  heading: string;
  text: string;
  hedingComponent: ValueOf<typeof HEADING_COMPONENTS>;
  sectionComponent: ValueOf<typeof SECTION_COMPONENTS>;
  sectionVarinat: ValueOf<typeof SECTION_VARIANTS>;
  image: string;
  alt: string;
  children?: React.ReactNode;
  zoomAndCropImage?: 0.7 | 0.8 | 0.9 | 1 | 1.1 | 1.2;
};

const tabItems = (): TabItemType[] =>
  [
    {
      heading: 'Bookmark in one click',
      text: 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
      hedingComponent: HEADING_COMPONENTS.H3,
      sectionComponent: SECTION_COMPONENTS.SECTION,
      sectionVarinat: SECTION_VARIANTS.LEFT_SIDE_IMG,
      image: '/illustration-features-tab-1.svg',
      alt: 'Bookmark in one click - image',
      children: (
        <Box justifyContent={BOX_JUSTIFY_CONTENT.START}>
          <Link
            component={LINK_COMPONENT.A}
            variant={LINK_VARIANTS.CONTAINED}
            deviceDisplay={LINK_DEVICE_DISPLAY.DESKTOP}
            width={LINK_WIDTH.FIT_CONTENT}
            href="https://chromewebstore.google.com/detail/boczna-lista-zak%C5%82adek/jdbnofccmhefkmjbkkdkfiicjkgofkdh"
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </Link>
        </Box>
      ),
      zoomAndCropImage: 0.9,
    },

    {
      heading: 'Intelligent search',
      text: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`,
      hedingComponent: HEADING_COMPONENTS.H3,
      sectionComponent: SECTION_COMPONENTS.SECTION,
      sectionVarinat: SECTION_VARIANTS.LEFT_SIDE_IMG,
      image: '/illustration-features-tab-2.svg',
      alt: 'tab 2',
      children: (
        <Box justifyContent={BOX_JUSTIFY_CONTENT.START}>
          <Link
            component={LINK_COMPONENT.A}
            variant={LINK_VARIANTS.CONTAINED}
            deviceDisplay={LINK_DEVICE_DISPLAY.DESKTOP}
            width={LINK_WIDTH.FIT_CONTENT}
            href="https://chromewebstore.google.com/detail/boczna-lista-zak%C5%82adek/jdbnofccmhefkmjbkkdkfiicjkgofkdh"
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </Link>
        </Box>
      ),
      zoomAndCropImage: 0.9,
    },

    {
      heading: 'Share your bookmarks',
      text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      hedingComponent: HEADING_COMPONENTS.H3,
      sectionComponent: SECTION_COMPONENTS.SECTION,
      sectionVarinat: SECTION_VARIANTS.LEFT_SIDE_IMG,
      image: '/illustration-features-tab-3.svg',
      alt: 'tab 3',
      children: (
        <Box justifyContent={BOX_JUSTIFY_CONTENT.START}>
          <Link
            component={LINK_COMPONENT.A}
            variant={LINK_VARIANTS.CONTAINED}
            deviceDisplay={LINK_DEVICE_DISPLAY.DESKTOP}
            width={LINK_WIDTH.FIT_CONTENT}
            href="https://chromewebstore.google.com/detail/boczna-lista-zak%C5%82adek/jdbnofccmhefkmjbkkdkfiicjkgofkdh"
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </Link>
        </Box>
      ),
      zoomAndCropImage: 0.9,
    },
  ] as const;

const cardsHomeItems: CardsItemType[] = [
  {
    id: 'add-to-chrome',
    href: 'https://chromewebstore.google.com/detail/boczna-lista-zak%C5%82adek/jdbnofccmhefkmjbkkdkfiicjkgofkdh',
    linkText: 'Add & install extension',
    image: '/logo-chrome.svg',
    alt: 'Chrome logo',
    heading: 'Add to Chrome',
    text: 'Minimum version 62',
  },

  {
    id: 'add-to-firefox',
    href: 'https://addons.mozilla.org/en-US/firefox/extensions/category/bookmarks/',
    linkText: 'Add & install extension',
    image: '/logo-firefox.svg',
    alt: 'Firefox logo',
    heading: 'Add to Firefox',
    text: 'Minimum version 55',
  },

  {
    id: 'add-to-firefox',
    href: 'https://addons.opera.com/en/extensions/details/bookmarks-manager-and-viewer/',
    linkText: 'Add & install extension',
    image: '/logo-opera.svg',
    alt: 'Opera logo',
    heading: 'Add to Opera',
    text: 'Minimum version 46',
  },
];

const accordionHomepageContent = [
  {
    panelHeading: 'What is Bookmark?',
    text: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
    ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
    Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imd`,
    id: 'accordion-item-1',
  },

  {
    panelHeading: 'How can I request a new browser?',
    text: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
    ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
    Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imd`,
    id: 'accordion-item-2',
  },

  {
    panelHeading: 'Is there a mobile app?',
    text: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
    ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
    Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imd`,
    id: 'accordion-item-3',
  },

  {
    panelHeading: 'What about other Chromium browsers?',
    text: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
    ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
    Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imd`,
    id: 'accordion-item-4',
  },
] as AccordionItemType[];

export { tabItems, cardsHomeItems, accordionHomepageContent };
