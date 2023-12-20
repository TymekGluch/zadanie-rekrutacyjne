import React from 'react';
import styles from './Accordion.module.scss';
import classNames from 'classnames';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Link } from '../Link';
import {
  LINK_COMPONENT,
  LINK_VARIANTS,
  LINK_WIDTH,
} from '../Link/Link.constants';

export type AccordionItemType = {
  panelHeading: string;
  text?: string;
  id?: string;
};

type AccordionProps = {
  accordionContent: AccordionItemType[];
  linkText?: string;
  link?: string;
};

const Accordion: React.FC<AccordionProps> = ({
  accordionContent,
  link = undefined,
  linkText = undefined,
}) => {
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

      {link && linkText && (
        <Link
          component={LINK_COMPONENT.A}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          variant={LINK_VARIANTS.CONTAINED}
          width={LINK_WIDTH.FIT_CONTENT}
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export { Accordion };
