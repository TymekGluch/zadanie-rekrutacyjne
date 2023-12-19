import React from 'react';
import styles from './Tabs.module.scss';
import classNames from 'classnames';

type TabItemProps = React.PropsWithChildren<{
  id: string;
}>;

type TabsProps = React.PropsWithChildren<{
  controledIds: string[];
  tabsName: string[];
}>;

const Tabs: React.FC<TabsProps> = ({ children, controledIds, tabsName }) => {
  const [activeElement, SetActiveElement] = React.useState<string>(
    controledIds[0],
  );

  const handleClick = (id: string): void => {
    SetActiveElement(id);

    console.log('test: ', id);
  };

  React.useEffect(() => {
    controledIds.forEach((id) => {
      const iteratedElement = document.querySelector(`${id}`);

      if (id === activeElement) {
        iteratedElement?.classList.remove('tabItem__disabled');
      } else {
        iteratedElement?.classList.add('tabItem__disabled');
      }
    });
  }, [activeElement]);

  return (
    <div className={styles.tab}>
      <ol className={styles.tab_list}>
        {controledIds.map((identifier, index) => (
          <li className={styles.tab_listItem} key={identifier}>
            <button
              className={classNames(
                styles.tab_button,
                identifier === activeElement && styles.tab_button__active,
              )}
              onClick={() => handleClick(identifier)}
              type="button"
            >
              {tabsName[index]}
            </button>
          </li>
        ))}
      </ol>

      <div>{children}</div>
    </div>
  );
};

const TabItem: React.FC<TabItemProps> = ({ children, id }) => {
  return (
    <div className={classNames(styles.tabItem)} id={id}>
      {children}
    </div>
  );
};

export { Tabs, TabItem };
