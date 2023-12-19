import React from 'react';
import {
  SECTION_COMPONENTS,
  SECTION_VARIANTS,
  HEADING_COMPONENTS,
} from '../../components/Section/Section.costants';
import { CardsItemType } from '../../components/Cards/Cards.types';

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
    },
  ] as const;

const cardsHomeItems: CardsItemType[] = [
  {
    href: '/',
    linkText: 'Add & install extension',
    image: '/logo-chrome.svg',
    alt: 'Chrome logo',
    heading: 'Add to Chrome',
    text: 'Minimum version 62',
  },

  {
    href: '/',
    linkText: 'Add & install extension',
    image: '/logo-firefox.svg',
    alt: 'Firefox logo',
    heading: 'Add to Firefox',
    text: 'Minimum version 55',
  },

  {
    href: '/',
    linkText: 'Add & install extension',
    image: '/logo-opera.svg',
    alt: 'Opera logo',
    heading: 'Add to Opera',
    text: 'Minimum version 46',
  },
];

export { tabItems, cardsHomeItems };
