import React from 'react';

import classNames from 'classnames';

import styles from './TestComponent.module.css';

export interface TestComponentProps {
  theme: 'primary' | 'secondary';
}

export const TestComponent = ({ theme }: TestComponentProps) => (
  <div
    data-testid="test-component"
    className={classNames([
      styles.testComponent,
      { [styles.testComponentSecondary]: theme === 'secondary' },
    ])}
  >
    <h1 className={styles.heading}>I am the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);
