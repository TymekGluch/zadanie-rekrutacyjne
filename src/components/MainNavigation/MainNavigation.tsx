import React from 'react';
import styles from './MainNavigation.module.scss';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { listOfNavigationLink } from './MainNavigation.data';
import classNames from 'classnames';

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
              <a href={link} className={styles.menu_itemLink}>
                {name}
              </a>
            </li>
          ))}
        </ul>

        <button className={styles.menu_loginButton}>Login</button>

        <div className={styles.menu_socials}>
          <a
            className={styles.menu_socialLink}
            href=""
            aria-label="facebook"
            title="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icon-facebook.svg" alt="facebook icon" />
          </a>

          <a
            className={styles.menu_socialLink}
            href="https://twitter.com/"
            aria-label="twitter"
            title="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icon-twitter.svg" alt="twitter icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export { MainNavigation };
