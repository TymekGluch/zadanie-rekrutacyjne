import React from 'react';
import styles from './Modal.module.scss';
import classNames from 'classnames';

const Modal: React.FC = () => {
  return <div className={classNames(styles.modal)}></div>;
};

export { Modal };
