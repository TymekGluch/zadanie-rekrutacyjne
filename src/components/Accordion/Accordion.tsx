import React from 'react';
import styles from './Accordion.module.scss';
import classNames from 'classnames';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export type AccordionItemType = {
  panelHeading: string;
  text?: string;
  id?: string;
};

type AccordionProps = {
  accordionContent: AccordionItemType[];
};

const Accordion: React.FC<AccordionProps> = ({ accordionContent }) => {
  const arrayOfAccordionState = Array.from(
    { length: accordionContent.length },
    () => false,
  );

  const [itemsState, setItemsStates] = React.useState<boolean[]>(
    arrayOfAccordionState,
  );
  const accordionRef = React.useRef(null);

  const handleOutsideClick = (): void => {
    setItemsStates(arrayOfAccordionState);
  };

  useOutsideClick(handleOutsideClick, accordionRef);

  const handleItemClick = (id: number): void => {
    const resolvedArrayOfState = itemsState.map((_, identifier) =>
      identifier === id ? !itemsState[identifier] : false,
    );

    setItemsStates(resolvedArrayOfState);

    if (!itemsState[id]) {
      window.location.href = `#${accordionContent[id].id}`;
    }
  };

  return (
    <div className={styles.accordion}>
      <ul ref={accordionRef} className={styles.accordion_list}>
        {accordionContent.map(({ panelHeading, text, id }, index) => (
          <li
            id={id}
            key={`${panelHeading}${index}`}
            className={classNames(
              styles.accordion_item,
              itemsState[index] && styles.accordion_item__active,
            )}
          >
            <button
              className={styles.accordion_itemButton}
              onClick={() => handleItemClick(index)}
            >
              {panelHeading}
            </button>

            <p className={styles.accordion_contentText}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Accordion };
