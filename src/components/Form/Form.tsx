import React from 'react';
import styles from './Form.module.scss';
import classNames from 'classnames';

const Form: React.FC = () => {
  const defaultCounterValue = 35;

  const [value, setValue] = React.useState<number>(defaultCounterValue);

  const counter = (): void => {
    setTimeout((): void => {
      if (value !== 0) {
        setValue(value - 1);
      }
    }, 572);
  };

  counter();

  const resolvedValue = (value: number): string => {
    const stringifiedValue = value.toString();
    const lengthOfValue = stringifiedValue.length;

    if (lengthOfValue >= 4 && lengthOfValue < 7) {
      const preffix = stringifiedValue.slice(0, lengthOfValue - 3);
      const suffix = stringifiedValue.slice(-3);

      console.log(value, stringifiedValue, preffix, suffix);

      return `${preffix},${suffix}+`;
    } else {
      return stringifiedValue;
    }
  };

  return (
    <form className={classNames(styles.form)}>
      <p className={styles.form_counter}>
        {resolvedValue(value)}Already joined
      </p>
    </form>
  );
};

export { Form };
