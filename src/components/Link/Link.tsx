import React, { useState } from 'react';
import styles from './Link.module.scss';
import {
  LINK_COMPONENT,
  LINK_DEVICE_DISPLAY,
  LINK_VARIANTS,
  LINK_WIDTH,
} from './Link.constants';
import { ValueOf } from '../../types';
import classNames from 'classnames';

type LinkProps = React.PropsWithChildren<{
  component: ValueOf<typeof LINK_COMPONENT>;
  variant?: ValueOf<typeof LINK_VARIANTS>;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  width?: ValueOf<typeof LINK_WIDTH>;
  icon?: string;
  accentIcon?: string;
  ariaLabel?: string;
  deviceDisplay?: ValueOf<typeof LINK_DEVICE_DISPLAY>;
  customStyles?: React.CSSProperties;
}>;

const Link: React.FC<LinkProps> = ({
  component,
  variant = 'default',
  onClick,
  href,
  target,
  rel,
  width = LINK_WIDTH.FULL,
  icon,
  accentIcon,
  ariaLabel = '',
  deviceDisplay = 'all',
  customStyles,
  children,
}) => {
  const Component = component;
  const componentsProps =
    component === LINK_COMPONENT.A ? { href, target, rel } : { onClick };

  const [isIconLinkActive, setIsIconLinkActive] = useState<boolean>(false);

  const getVariantClass = (linkVarint: ValueOf<typeof LINK_VARIANTS>) => {
    switch (linkVarint) {
      case LINK_VARIANTS.DARK_BACKGROUND_DEFAULT:
        return styles.link__darkBackgroundDefault;
      case LINK_VARIANTS.ICON:
        return styles.link__onlyIcon;
      case LINK_VARIANTS.CONTAINED:
        return styles.link__contained;
      case LINK_VARIANTS.CONTAINED_LIGHT:
        return styles.link__containedLight;
      case LINK_VARIANTS.CONTAINED_DARK:
        return styles.link__containedDark;
      case LINK_VARIANTS.OUTLINED:
        return styles.link__outlined;
      default:
        return '';
    }
  };

  return (
    <Component
      className={classNames(
        styles.link,
        getVariantClass(variant),
        width === LINK_WIDTH.FIT_CONTENT && styles.link__fitContent,
        deviceDisplay === LINK_DEVICE_DISPLAY.DESKTOP &&
          styles.link__onlyDesktop,
        deviceDisplay === LINK_DEVICE_DISPLAY.MOBILE && styles.link__onlyMobile,
      )}
      onFocus={() => setIsIconLinkActive(true)}
      onBlur={() => setIsIconLinkActive(false)}
      onMouseOver={() => setIsIconLinkActive(true)}
      onMouseLeave={() => setIsIconLinkActive(false)}
      aria-label={ariaLabel}
      {...componentsProps}
      style={customStyles}
    >
      {variant === LINK_VARIANTS.ICON ? (
        <>
          {isIconLinkActive ? (
            <img className={styles.link_Icon} src={accentIcon} alt="" />
          ) : (
            <img className={styles.link_icon} src={icon} alt="" />
          )}
        </>
      ) : (
        children
      )}
    </Component>
  );
};

export { Link };
