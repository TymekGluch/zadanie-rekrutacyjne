import React from 'react';
import './MainFooter.scss';
import { footersNavigationItem } from './MainFooter.data';

const MainFooter: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__form-wrapper"></div>

      <div className="footer__content-wrapper">
        <a href="/" className="footer__link">
          <img
            className="footer__logo"
            src="/src/assets/logo-bookmark-footer.svg"
            alt="Bookmark - logo"
          />
        </a>

        <ul className="footer__list">
          {footersNavigationItem.map(({ name, link }) => (
            <li key={name} className="footer__list-item">
              <a href={link} className="footer__item-link">
                {name}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer__socials">
          <a
            className="footer__social-link"
            href=""
            aria-label="facebook"
            title="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/icon-facebook.svg" alt="facebook icon" />
          </a>

          <a
            className="footer__social-link"
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
    </footer>
  );
};

export { MainFooter };
