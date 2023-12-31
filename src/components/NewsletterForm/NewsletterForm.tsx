import React from 'react';
import styles from './NewsletterForm.module.scss';
import classNames from 'classnames';
import { Link } from '../Link';
import { LINK_COMPONENT, LINK_VARIANTS } from '../Link/Link.constants';
import { resolvedCounterValue } from './NewsletterForm.handlers';
import { newsletterShema } from './NewsletterForm.validation';
import ErrorIcon from '../../assets/icon-error.svg?react';

const NewsletterForm: React.FC = () => {
  const totalTime = 20000;
  const defaultCounterValue = 35000;
  const changeRatePerSecond = defaultCounterValue / (totalTime / 1000);

  type FormErrors = {
    [key: string]: string | undefined;
  };

  const [value, setValue] = React.useState<number>(defaultCounterValue);

  const [email, setEmail] = React.useState<string>('');
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  React.useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime >= totalTime) {
        setValue(0);
        clearInterval(interval);
      } else {
        const newValue =
          defaultCounterValue - changeRatePerSecond * (elapsedTime / 1000);
        setValue(Math.max(0, Math.floor(newValue)));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [defaultCounterValue, changeRatePerSecond, totalTime]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    newsletterShema
      .validate({ email })
      .then(() => {
        setErrors((prevErrors) => ({ ...prevErrors, email: undefined }));
        setIsSuccess(true);
      })
      .catch((error) => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: error.errors[0],
        }));
      });
  };

  return (
    <section id="contact" className={classNames(styles.formSection)}>
      <p className={styles.formSection_counter}>
        <span className={classNames(styles.formSection_counterValue)}>
          {resolvedCounterValue(value)}
        </span>

        <span>Already joined</span>
      </p>

      {!isSuccess ? (
        <>
          <h2 className={styles.formSection_heading}>
            Stay up-to-date with what we're doing
          </h2>

          <form
            className={classNames(styles.formSection_form, styles.form)}
            onSubmit={handleSubmit}
            noValidate
          >
            <div
              className={classNames(
                styles.form_textField,
                styles.textField,
                errors.email && styles.textField__error,
                email !== '' && styles.textField__withContent,
              )}
            >
              <label htmlFor="emailInput" className={styles.textField_label}>
                Enter your email address
              </label>

              <input
                className={styles.textField_input}
                type="email"
                id="emailInput"
                name="email"
                value={email}
                onChange={handleInputChange}
              />

              {errors.email && (
                <ErrorIcon className={styles.textField_errorIcon} />
              )}

              <p className={styles.textField_errorMessage}>{errors.email}</p>
            </div>

            <div className={styles.form_buttonWrapper}>
              <Link
                component={LINK_COMPONENT.BUTTON}
                variant={LINK_VARIANTS.CONTAINED_DARK}
                type="submit"
              >
                Contact Us
              </Link>
            </div>
          </form>
        </>
      ) : (
        <h2 className={styles.formSection_heading}>
          Thank you for subscribing to our newsletter!
        </h2>
      )}
    </section>
  );
};

export { NewsletterForm };
