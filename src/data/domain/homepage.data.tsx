import React from 'react';
import {
  SECTION_COMPONENTS,
  SECTION_VARIANTS,
  HEADING_COMPONENTS,
} from '../../components/Section/Section.costants';

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

export { tabItems };
