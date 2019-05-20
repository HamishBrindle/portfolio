/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Breadcrumb', module)
  .add('Basic', () => ({
    template: html`
      <m-breadcrumb separator="/">
        <m-breadcrumb-item :to="{ path: '/' }">homepage</m-breadcrumb-item>
        <m-breadcrumb-item><a to="/">promotion management</a></m-breadcrumb-item>
        <m-breadcrumb-item>promotion list</m-breadcrumb-item>
        <m-breadcrumb-item>promotion detail</m-breadcrumb-item>
      </m-breadcrumb>
    `,
  }));
