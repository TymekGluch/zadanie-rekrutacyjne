import React from 'react';
import styles from './Box.module.scss';
import classNames from 'classnames';
import { ValueOf } from '../../types';
import { BOX_JUSTIFY_CONTENT } from './Box.constants';

type BoxProps = React.PropsWithChildren<{
  justifyContent?: ValueOf<typeof BOX_JUSTIFY_CONTENT>;
}>;

const Box: React.FC<BoxProps> = ({ justifyContent = 'center', children }) => {
  return (
    <div
      className={classNames(
        styles.box,
        justifyContent === BOX_JUSTIFY_CONTENT.START &&
          styles.box__justifyStart,
        justifyContent === BOX_JUSTIFY_CONTENT.END && styles.box__justifyEnd,
      )}
    >
      {children}
    </div>
  );
};

export { Box };
