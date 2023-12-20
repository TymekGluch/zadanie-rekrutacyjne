import React from 'react';
import {
  SECTION_COMPONENTS,
  SECTION_VARIANTS,
  HEADING_COMPONENTS,
} from '../../components/Section/Section.costants';
import { CardsItemType } from '../../components/Cards/Cards.types';
import { AccordionItemType } from '../../components/Accordion';

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
  zoomAndCropImage?: number;
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
      children: null,
      zoomAndCropImage: 0.9,
    },

    {
      heading: 'Bookmark in one click',
      text: 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
      hedingComponent: HEADING_COMPONENTS.H3,
      sectionComponent: SECTION_COMPONENTS.SECTION,
      sectionVarinat: SECTION_VARIANTS.RIGHT_SIDE_IMG,
      image: '/illustration-features-tab-2.svg',
      alt: 'tab 2',
      children: null,
      zoomAndCropImage: 0.9,
    },

    {
      heading: 'Bookmark in one click',
      text: 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
      hedingComponent: HEADING_COMPONENTS.H3,
      sectionComponent: SECTION_COMPONENTS.SECTION,
      sectionVarinat: SECTION_VARIANTS.LEFT_SIDE_IMG,
      image: '/illustration-features-tab-3.svg',
      alt: 'tab 3',
      children: null,
      zoomAndCropImage: 0.9,
    },
  ] as const;

const cardsHomeItems: CardsItemType[] = [
  {
    href: 'https://chromewebstore.google.com/detail/boczna-lista-zak%C5%82adek/jdbnofccmhefkmjbkkdkfiicjkgofkdh',
    linkText: 'Add & install extension',
    image: '/logo-chrome.svg',
    alt: 'Chrome logo',
    heading: 'Add to Chrome',
    text: 'Minimum version 62',
  },

  {
    href: 'https://addons.mozilla.org/en-US/firefox/extensions/category/bookmarks/',
    linkText: 'Add & install extension',
    image: '/logo-firefox.svg',
    alt: 'Firefox logo',
    heading: 'Add to Firefox',
    text: 'Minimum version 55',
  },

  {
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
