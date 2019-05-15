import { create } from '@storybook/theming';
import styles from '../src/assets/styles/globals/_variables.scss';

const storybookAccentColor = '#7CD6D0';

export default create({
  base: 'dark',

  colorPrimary: styles['color-primary'],
  colorSecondary: storybookAccentColor,

  // UI
  appBg: styles['color-blk'],
  appContentBg: styles['color-backgroundBase'],
  appBorderColor: styles['color-borderBase'],
  appBorderRadius: 4,

  // Typography
  fontBase: '\'Raleway\', sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: styles['color-backgroundBase'],
  textInverseColor: styles['color-wht'],

  // Toolbar default and active colors
  barTextColor: styles['color-textPlaceholder'],
  barSelectedColor: storybookAccentColor,
  barBg: styles['color-primary'],

  brandTitle: 'Omnium Business Solutions',
  brandUrl: 'http://localhost:6006',
  brandImage: 'icons/logo/logo-typeface-pill-white-blue.png',
});