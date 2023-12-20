import React from 'react';
import styles from './Link.module.scss';
import {
  LINK_COMPONENT,
  LINK_DEVICE_DISPLAY,
  LINK_VARIANTS,
  LINK_WIDTH,
} from './Link.constants';
import { ValueOf } from '../../types';
import classNames from 'classnames';

type IconSVGType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

type LinkInternalProps = {
  variant?: ValueOf<typeof LINK_VARIANTS>;
  width?: ValueOf<typeof LINK_WIDTH>;
  deviceDisplay?: ValueOf<typeof LINK_DEVICE_DISPLAY>;
  customStyles?: React.CSSProperties;
  icon?: IconSVGType;
};

type LinkOmittedProps = keyof LinkInternalProps | 'style';

type LinkAsAnchorComponentProp = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type LinkAsButtonComponentProp = React.ButtonHTMLAttributes<HTMLButtonElement>;

type LinkPolymorphicType = {
  [LINK_COMPONENT.A]: { component: typeof LINK_COMPONENT.A } & Omit<
    LinkAsAnchorComponentProp,
    LinkOmittedProps
  > &
    LinkInternalProps;
  [LINK_COMPONENT.BUTTON]: { component: typeof LINK_COMPONENT.BUTTON } & Omit<
    LinkAsButtonComponentProp,
    LinkOmittedProps
  > &
    LinkInternalProps;
};

type LinkProps =
  | LinkPolymorphicType[typeof LINK_COMPONENT.A]
  | LinkPolymorphicType[typeof LINK_COMPONENT.BUTTON];

const Link: React.FC<LinkProps> = ({
  component,
  variant = 'default',
  width = LINK_WIDTH.FULL,
  icon,
  deviceDisplay = 'all',
  customStyles,
  children,
  ...restProps
}) => {
  const Component = component as unknown as React.ComponentType<
    React.ComponentPropsWithoutRef<typeof component>
  >;
  const componentProps = restProps as React.ComponentProps<typeof Component>;
  const IconComponent = icon;

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
      style={customStyles}
      {...componentProps}
    >
      {variant === LINK_VARIANTS.ICON && IconComponent ? (
        <IconComponent />
      ) : (
        children
      )}
    </Component>
  );
};

export { Link };
