import React from 'react';
import styles from './MainFooter.module.scss';
import { footersNavigationItem } from './MainFooter.data';
import { Link } from '../Link';
import { LINK_COMPONENT, LINK_VARIANTS } from '../Link/Link.constants';

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
              <Link
                component={LINK_COMPONENT.A}
                variant={LINK_VARIANTS.DARK_BACKGROUND_DEFAULT}
                href={link}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.footer_socials}>
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
    </footer>
  );
};

export { MainFooter };
