import React from 'react';
import styles from './MainFooter.module.scss';
import { footersNavigationItem } from './MainFooter.data';

const MainFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_formWrapper}></div>

      <div className={styles.footer_contentWrapper}>
        <a href="/" className={styles.footer_link}>
          <img
            className={styles.footer_logo}
            src="/logo-bookmark-footer.svg"
            alt="Bookmark - logo"
          />
        </a>

        <ul className={styles.footer_list}>
          {footersNavigationItem.map(({ name, link }) => (
            <li key={name} className={styles.footer_listItem}>
              <a href={link} className={styles.footer_itemLink}>
                {name}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.footer_socials}>
          <a
            className={styles.footer_socialLink}
            href=""
            aria-label="facebook"
            title="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icon-facebook.svg" alt="facebook icon" />
          </a>

          <a
            className={styles.footer_socialLink}
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
    </footer>
  );
};

export { MainFooter };
