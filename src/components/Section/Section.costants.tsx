const SECTION_VARIANTS = {
  WITHOUT_IMG: 'without-img',
  WITHOUT_TEXT_LEFT_IMG: 'without-text-left-img',
  WITHOUT_TEXT_RIGHT_IMG: 'without-text-RIGHT-img',
  LEFT_SIDE_IMG: 'left-side-img',
  RIGHT_SIDE_IMG: 'right-side-img',
} as const;

const SECTION_COMPONENTS = {
  HEADER: 'header',
  SECTION: 'section',
  DIV: 'div',
} as const;

const HEADING_COMPONENTS = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
} as const;

export { SECTION_COMPONENTS, SECTION_VARIANTS, HEADING_COMPONENTS };
