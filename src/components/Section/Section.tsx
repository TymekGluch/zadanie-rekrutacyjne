import React from 'react';
import styles from './Section.module.scss';
import classNames from 'classnames';

type ValueOf<T> = T[keyof T];

const VARIANTS = {
  WITHOUT_IMG: 'without-img',
  LEFT_SIDE_IMG: 'left-side-img',
  RIGHT_SIDE_IMG: 'right-side-img',
} as const;

const COMPONENTS = {
  HEADER: 'header',
  SECTION: 'section',
};

type Variant = ValueOf<typeof VARIANTS>;
type Components = ValueOf<typeof COMPONENTS>;

type InternalProps = {
  heading: string;
  text: string;
  component: Components;
};

type Props = (
  | { variant: typeof VARIANTS.WITHOUT_IMG; image?: never; alt?: never }
  | {
      variant: Omit<Variant, typeof VARIANTS.WITHOUT_IMG>;
      image: string;
      alt: string;
    }
) &
  InternalProps;

type SectionProps = React.PropsWithChildren<Props>;

const Section: React.FC<SectionProps> = ({
  children,
  heading,
  text,
  component,
  variant,
  image,
  alt,
}) => {
  const content = (
    <>
      <h2 className={styles.section_heading}>{heading}</h2>
      <p className={styles.section_text}>{text}</p>
      <div className={styles.section_content}>{children}</div>
      {(variant === 'left-side-img' || variant === 'right-side-img') && (
        <img
          className={classNames(
            styles.section_image,
            variant === 'left-side-img'
              ? styles.section_image__left
              : styles.section_image__right,
          )}
          src={image}
          alt={alt}
        ></img>
      )}
    </>
  );

  return component === 'section' ? (
    <section className={styles.section}>{content}</section>
  ) : (
    <header className={styles.section}>{content}</header>
  );
};

export { Section };
