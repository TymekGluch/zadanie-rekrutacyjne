import React from 'react';
import styles from './Cards.module.scss';
import classNames from 'classnames';
import { cardsHomeItems } from '../../data/domain/homepage.data';
import { Link } from '../Link';
import { LINK_COMPONENT, LINK_VARIANTS } from '../Link/Link.constants';

const Cards: React.FC = () => {
  const itemPosition = (identifier: number) => {
    const isTopPositionCondition = (idNumber: number): boolean => {
      return idNumber === 0 || idNumber % 3 === 0;
    };

    const isBottomPositionCondition = (idNumber: number): boolean => {
      return idNumber === 2 || (idNumber - 2) % 3 === 0;
    };

    if (
      !isTopPositionCondition(identifier) &&
      !isBottomPositionCondition(identifier)
    ) {
      return '';
    }

    return isTopPositionCondition(identifier)
      ? styles.cards_item__topPosition
      : styles.cards_item__bottomPosition;
  };

  return (
    <div className={styles.cards}>
      <ul className={styles.cards_list}>
        {cardsHomeItems.map(
          ({ href, id, linkText, image, alt, heading, text }, index) => (
            <li
              id={id}
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

                  <Link
                    component={LINK_COMPONENT.A}
                    variant={LINK_VARIANTS.CONTAINED}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    customStyles={{ width: '85%' }}
                  >
                    {linkText}
                  </Link>
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
