import React from 'react';
import styles from './MainFooter.module.scss';
import { footersNavigationItem } from './MainFooter.data';
import { Link } from '../Link';
import { LINK_COMPONENT, LINK_VARIANTS } from '../Link/Link.constants';
import { NewsletterForm } from '../NewsletterForm';
import IconFB from '../../assets/icon-facebook.svg?react';
import InonX from '../../assets/icon-twitter.svg?react';

const MainFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_formWrapper}>
        <NewsletterForm />
      </div>

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
            aria-label="facebook"
            icon={IconFB}
            target="_blank"
            rel="noopener noreferrer"
          />

          <Link
            component={LINK_COMPONENT.A}
            variant={LINK_VARIANTS.ICON}
            href="https://twitter.com/"
            aria-label="twitter"
            icon={InonX}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </footer>
  );
};

export { MainFooter };
