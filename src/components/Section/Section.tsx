import React from 'react';
import styles from './Section.module.scss';
import classNames from 'classnames';
import {
  HEADING_COMPONENTS,
  SECTION_COMPONENTS,
  SECTION_VARIANTS,
} from './Section.costants';

type ValueOf<T> = T[keyof T];

type Variant = ValueOf<typeof SECTION_VARIANTS>;
type Components = ValueOf<typeof SECTION_COMPONENTS>;
type HedingComponents = ValueOf<typeof HEADING_COMPONENTS>;

type InternalProps = {
  id?: string;
  heading?: string;
  text?: string;
  component: Components;
  headingComponents?: HedingComponents;
  zoomAndCropImage?: 0.7 | 0.8 | 0.9 | 1 | 1.1 | 1.2;
};

type Props = (
  | { variant: typeof SECTION_VARIANTS.WITHOUT_IMG; image?: never; alt?: never }
  | {
      variant: Omit<Variant, typeof SECTION_VARIANTS.WITHOUT_IMG>;
      image: string;
      alt: string;
    }
) &
  InternalProps;

type SectionProps = React.PropsWithChildren<Props>;

const Section: React.FC<SectionProps> = ({
  children,
  id,
  heading = 'heading',
  text = 'text',
  component,
  headingComponents = 'h2',
  variant,
  image,
  alt,
  zoomAndCropImage = 1,
}) => {
  const HeadingComponent = headingComponents;
  const SectionComponent = component;

  const getImageClass = (zoomAndCrop: number): string => {
    switch (zoomAndCrop) {
      case 0.7:
        return styles.section_image__7;
      case 0.8:
        return styles.section_image__8;
      case 0.9:
        return styles.section_image__9;
      case 1.1:
        return styles.section_image__11;
      case 1.2:
        return styles.section_image__12;
      default:
        return '';
    }
  };

  const content = (
    <>
      {variant !== SECTION_VARIANTS.WITHOUT_TEXT_LEFT_IMG &&
        variant !== SECTION_VARIANTS.WITHOUT_TEXT_RIGHT_IMG && (
          <div
            className={classNames(
              styles.section_contentWrapper,
              variant === SECTION_VARIANTS.WITHOUT_IMG &&
                styles.section_contentWrapper__onlyText,
            )}
          >
            <HeadingComponent
              className={classNames(
                styles.section_heading,
                component === SECTION_COMPONENTS.HEADER &&
                  styles.section_heading__hero,
              )}
            >
              {heading}
            </HeadingComponent>

            <p className={styles.section_text}>{text}</p>

            <div className={styles.section_content}>{children}</div>
          </div>
        )}
      {(variant === SECTION_VARIANTS.LEFT_SIDE_IMG ||
        variant === SECTION_VARIANTS.RIGHT_SIDE_IMG ||
        variant === SECTION_VARIANTS.WITHOUT_TEXT_LEFT_IMG ||
        variant === SECTION_VARIANTS.WITHOUT_TEXT_RIGHT_IMG) && (
        <>
          <div
            className={classNames(
              styles.section_imageWrapper,
              variant === SECTION_VARIANTS.LEFT_SIDE_IMG ||
                variant === SECTION_VARIANTS.WITHOUT_TEXT_LEFT_IMG
                ? styles.section_imageWrapper__left
                : styles.section_imageWrapper__right,
            )}
          >
            <img
              className={classNames(
                styles.section_image,
                getImageClass(zoomAndCropImage),
              )}
              src={image}
              alt={alt}
            />
          </div>

          <div
            className={classNames(
              styles.section_placeHolder,
              (variant === SECTION_VARIANTS.LEFT_SIDE_IMG ||
                variant === SECTION_VARIANTS.WITHOUT_TEXT_LEFT_IMG) &&
                styles.section_placeHolder__leftSide,
            )}
          />
        </>
      )}
    </>
  );

  return (
    <SectionComponent
      id={id ?? id}
      className={classNames(
        styles.section,
        variant === SECTION_VARIANTS.WITHOUT_IMG && styles.section__onlyText,
      )}
    >
      <div className={styles.section_fitWrapper}>{content}</div>
    </SectionComponent>
  );
};

export { Section };
