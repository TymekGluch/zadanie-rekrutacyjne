import React from 'react';
import './MainNavigation.scss';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { listOfNavigationLink } from './MainNavigation.data';

const MainNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const menuListRef = React.useRef<HTMLOListElement>(null);

  const body = document.querySelector('body');

  const handleClick = (): void => {
    setIsMenuOpen(true);

    body?.classList.add('overflow-hidden');
  };

  const handleCloseButtonClick = (): void => {
    setIsMenuOpen(false);

    body?.classList.remove('overflow-hidden');
  };

  const handleOutsideClick = (): void => {
    body?.classList.remove('overflow-hidden');

    setIsMenuOpen(false);
  };

  useOutsideClick(handleOutsideClick, menuListRef);

  return (
    <header className="main-navigation">
      <a href="/" className="main-navigation__link">
        <img
          className="main-navigation__logo"
          src="/src/assets/logo-bookmark.svg"
          alt="Bookmark - logo"
        />
      </a>

      <button
        className={`main-navigation__toggle-menu${
          isMenuOpen ? ' main-navigation__toggle-menu--turned-on' : ''
        }`}
        onClick={handleClick}
      >
        <img src="/src/assets/icon-hamburger.svg" alt="open menu" />
      </button>

      <div
        className={`main-navigation__menu${
          isMenuOpen ? ' main-navigation__menu--open' : ''
        } menu`}
      >
        <header className="menu__header">
          <a href="/" className="menu__link">
            <img
              className="menu__logo"
              src="/src/assets/logo-bookmark-white.svg"
              alt="Bookmark - logo"
            />
          </a>

          <button
            className="menu__close-button"
            onClick={handleCloseButtonClick}
          >
            <img src="/src/assets/icon-close.svg" alt="close menu" />
          </button>
        </header>

        <ol ref={menuListRef} className="menu__list">
          {listOfNavigationLink.map(({ name, link }) => (
            <li key={name} className="menu__list-item">
              <a href={link} className="menu__item-link">
                {name}
              </a>
            </li>
          ))}
        </ol>

        <button className="menu__login-button">Login</button>

        <div className="menu__socials">
          <a
            className="menu__social-link"
            href=""
            aria-label="facebook"
            title="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/icon-facebook.svg" alt="facebook icon" />
          </a>

          <a
            className="menu__social-link"
            href="https://twitter.com/"
            aria-label="twitter"
            title="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/icon-twitter.svg" alt="twitter icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export { MainNavigation };
