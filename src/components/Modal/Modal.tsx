import React from 'react';
import styles from './Modal.module.scss';
import classNames from 'classnames';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import CloseIcon from '../../assets/icon-close.svg?react';
import { Link } from '../Link';
import {
  LINK_COMPONENT,
  LINK_VARIANTS,
  LINK_WIDTH,
} from '../Link/Link.constants';
import { Section } from '../Section';
import { SECTION_COMPONENTS } from '../Section/Section.costants';
import { ValueOf } from '../../types';
import { MODAL_VARIANTS } from './Modal.constants';

const TIME_AFTER_SIDE_OPEN = 30000;

type ModalProps = React.PropsWithChildren<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
  alt: string;
  heading: string;
  text: string;
  variant: ValueOf<typeof MODAL_VARIANTS>;
}>;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  image,
  alt,
  heading,
  text,
  variant,
  children,
}) => {
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('overflowHidden');
    } else {
      document.documentElement.classList.remove('overflowHidden');
    }
  }, [isOpen]);

  const handleOutsideClick = (): void => {
    setIsOpen(false);
  };

  useOutsideClick(handleOutsideClick, contentRef);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsOpen(true), TIME_AFTER_SIDE_OPEN);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={classNames(styles.modal, isOpen && styles.modal__open)}>
      <div className={styles.modal_content} ref={contentRef}>
        <div className={styles.modal_buttonWrapper}>
          <Link
            component={LINK_COMPONENT.BUTTON}
            variant={LINK_VARIANTS.ICON}
            width={LINK_WIDTH.FIT_CONTENT}
            icon={CloseIcon}
            onClick={() => setIsOpen(false)}
            customStyles={{ width: '2rem', height: '2rem' }}
          />
        </div>

        <Section
          component={SECTION_COMPONENTS.SECTION}
          variant={variant}
          heading={heading}
          text={text}
          image={image}
          alt={alt}
        >
          {children}
        </Section>
      </div>
    </div>
  );
};

export { Modal };
