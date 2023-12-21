import React from 'react';
import styles from './Tabs.module.scss';
import classNames from 'classnames';

type TabItemProps = React.PropsWithChildren<{
  id: string;
  isActive?: boolean;
}>;

const TabItem: React.FC<TabItemProps> = ({
  children,
  id,
  isActive = false,
}) => {
  return (
    <div
      className={classNames(styles.tabItem, {
        [styles.tabItem__hidden]: !isActive,
      })}
      id={id}
    >
      {children}
    </div>
  );
};

type TabsProps = React.PropsWithChildren<{
  controledIds: string[];
  tabsName: string[];
}>;

const TabsComponent: React.FC<TabsProps> = ({
  children,
  controledIds,
  tabsName,
}) => {
  const [activeElement, setActiveElement] = React.useState<string>(
    controledIds[0],
  );

  const handleClick = (id: string): void => {
    setActiveElement(id);
  };

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

      <div>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === TabItem) {
            const modifiedProps = {
              ...child.props,
              isActive: child.props.id === activeElement,
            };

            return React.cloneElement(child, modifiedProps);
          }

          throw new Error('Tabs can have only Tabs.Item children');
        })}
      </div>
    </div>
  );
};

type TabsComponentType = typeof TabsComponent & { Item: typeof TabItem };

const Tabs = TabsComponent as TabsComponentType;

Tabs.Item = TabItem;

export { Tabs };
