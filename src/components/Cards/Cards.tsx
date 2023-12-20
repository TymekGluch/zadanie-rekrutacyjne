import React from 'react';
import styles from './Cards.module.scss';
import classNames from 'classnames';
import { cardsHomeItems } from '../../data/domain/homepage.data';

const Cards: React.FC = () => {
  const itemPosition = (identifier: number) => {
    const isTopPositionCondition = (idNumber: number): boolean => {
      return idNumber === 0 || idNumber % 3 === 0;
    };

    const isBottomPositionCondition = (idNumber: number): boolean => {
      return idNumber === 2 || (idNumber - 2) % 3 === 0;
    };

    switch (true) {
      case isTopPositionCondition(identifier):
        return styles.cards_item__topPosition;
      case isBottomPositionCondition(identifier):
        return styles.cards_item__bottomPosition;
      default:
        return '';
    }
  };

  return (
    <div className={styles.cards}>
      <ul className={styles.cards_list}>
        {cardsHomeItems.map(
          ({ href, linkText, image, alt, heading, text }, index) => (
            <li
              key={`${heading}${index}`}
              className={classNames(styles.cards_item, itemPosition(index))}
            >
              <section className={classNames(styles.cards_itemContent)}>
                <img className={styles.cards_image} src={image} alt={alt} />

                <div className={styles.cards_textWrapper}>
                  <h3 className={styles.cards_heading}>{heading}</h3>

                  <p className={styles.cards_text}>{text}</p>
                </div>

                <div className={styles.cards_anchorWrapper}>
                  <img
                    src="/bg-dots.svg"
                    className={styles.cards_dots}
                    alt=""
                  />

                  <a
                    href={href}
                    className={styles.cards_anchor}
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    {linkText}
                  </a>
                </div>
              </section>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export { Cards };
