import React from 'react';
import styles from './Box.module.scss';
import classNames from 'classnames';
import { ValueOf } from '../../types';
import { BOX_JUSTIFY_CONTENT, JUSTIFY_ON_DEVICE } from './Box.constants';

type BoxProps = React.PropsWithChildren<{
  justifyContent?: ValueOf<typeof BOX_JUSTIFY_CONTENT>;
  justifyOnDevice?: ValueOf<typeof JUSTIFY_ON_DEVICE>;
}>;

const Box: React.FC<BoxProps> = ({
  justifyContent = 'center',
  justifyOnDevice = JUSTIFY_ON_DEVICE.FULL,
  children,
}) => {
  return (
    <div
      className={classNames(
        styles.box,
        justifyContent === BOX_JUSTIFY_CONTENT.START &&
          styles.box__justifyStart,
        justifyContent === BOX_JUSTIFY_CONTENT.END && styles.box__justifyEnd,
        justifyOnDevice === JUSTIFY_ON_DEVICE.DESKTOP &&
          styles.box__onlyDesktop,
        justifyOnDevice === JUSTIFY_ON_DEVICE.MOBILE && styles.box__onlyMobile,
      )}
    >
      {children}
    </div>
  );
};

export { Box };
