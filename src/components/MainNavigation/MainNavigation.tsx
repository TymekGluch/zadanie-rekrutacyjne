import React from 'react';
import styles from './MainNavigation.module.scss';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { listOfNavigationLink } from './MainNavigation.data';
import classNames from 'classnames';
import { Link } from '../Link';
import {
  LINK_COMPONENT,
  LINK_DEVICE_DISPLAY,
  LINK_VARIANTS,
  LINK_WIDTH,
} from '../Link/Link.constants';

const MainNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const menuListRef = React.useRef<HTMLOListElement>(null);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflowHidden');
    } else {
      document.body.classList.remove('overflowHidden');
    }
  }, [isMenuOpen]);

  const handleClick = (): void => {
    setIsMenuOpen(true);
  };

  const handleCloseButtonClick = (): void => {
    setIsMenuOpen(false);
  };

  const handleOutsideClick = (): void => {
    setIsMenuOpen(false);
  };

  useOutsideClick(handleOutsideClick, menuListRef);

  return (
    <nav className={styles.mainNavigation}>
      <a href="/" className={styles.mainNavigation_link}>
        <img
          className={styles.mainNavigation_logo}
          src="/logo-bookmark.svg"
          alt="Bookmark - logo"
        />
      </a>

      <button
        className={classNames(styles.mainNavigation_toggleMenu, {
          [styles.maiNavigation_toggleMenu__turnedOn]: isMenuOpen,
        })}
        onClick={handleClick}
      >
        <img src="/icon-hamburger.svg" alt="open menu" />
      </button>

      <div
        className={classNames(styles.mainNavigation_menu, styles.menu, {
          [styles.mainNavigation_menu__open]: isMenuOpen,
        })}
      >
        <header className={styles.menu_header}>
          <a href="/" className={styles.menu_link}>
            <img
              className={styles.menu_logo}
              src="/logo-bookmark-white.svg"
              alt="Bookmark - logo"
            />
          </a>

          <button
            className={styles.menu_closeButton}
            onClick={handleCloseButtonClick}
          >
            <img src="/icon-close.svg" alt="close menu" />
          </button>
        </header>

        <ul ref={menuListRef} className={styles.menu_list}>
          {listOfNavigationLink.map(({ name, link }) => (
            <li key={name} className={styles.menu_listItem}>
              <Link
                component={LINK_COMPONENT.A}
                variant={LINK_VARIANTS.DARK_BACKGROUND_DEFAULT}
                href={link}
                customStyles={{ fontSize: 20 }}
                deviceDisplay={LINK_DEVICE_DISPLAY.MOBILE}
              >
                {name}
              </Link>

              <Link
                component={LINK_COMPONENT.A}
                variant={LINK_VARIANTS.DEFAULT}
                href={link}
                customStyles={{
                  fontSize: 20,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
                deviceDisplay={LINK_DEVICE_DISPLAY.DESKTOP}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          component={LINK_COMPONENT.BUTTON}
          variant={LINK_VARIANTS.OUTLINED}
          deviceDisplay={LINK_DEVICE_DISPLAY.MOBILE}
          customStyles={{ marginTop: '1.5rem', fontSize: '1.25rem' }}
        >
          Login
        </Link>

        <Link
          component={LINK_COMPONENT.BUTTON}
          variant={LINK_VARIANTS.CONTAINED_DARK}
          deviceDisplay={LINK_DEVICE_DISPLAY.DESKTOP}
          width={LINK_WIDTH.FIT_CONTENT}
          customStyles={{
            paddingLeft: '2.188rem',
            paddingRight: '2.188rem',
            textTransform: 'uppercase',
            letterSpacing: '0.125rem',
            fontWeight: '300',
          }}
        >
          Login
        </Link>

        <div className={styles.menu_socials}>
          <Link
            component={LINK_COMPONENT.A}
            variant={LINK_VARIANTS.ICON}
            href="https://www.facebook.com/"
            ariaLabel="facebook"
            icon="/icon-facebook.svg"
            accentIcon="/icon-facebook-accent.svg"
            target="_blank"
            rel="noopener noreferrer"
          ></Link>

          <Link
            component={LINK_COMPONENT.A}
            variant={LINK_VARIANTS.ICON}
            href="https://twitter.com/"
            ariaLabel="twitter"
            icon="/icon-twitter.svg"
            accentIcon="/icon-twitter-accent.svg"
            target="_blank"
            rel="noopener noreferrer"
          ></Link>
        </div>
      </div>
    </nav>
  );
};

export { MainNavigation };
