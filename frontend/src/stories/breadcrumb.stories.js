/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { withDesign } from 'storybook-addon-designs';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Breadcrumb', module)
  .addDecorator(withDesign)
  .add('Basic', () => ({
    template: html`
      <m-breadcrumb separator="/">
        <m-breadcrumb-item :to="{ path: '/' }">homepage</m-breadcrumb-item>
        <m-breadcrumb-item><a to="/">promotion management</a></m-breadcrumb-item>
        <m-breadcrumb-item>promotion list</m-breadcrumb-item>
        <m-breadcrumb-item>promotion detail</m-breadcrumb-item>
      </m-breadcrumb>
    `,
  }), {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/GrLhDoEf1BqUAVTIbXZHqxkL/MADISON-WIRE-FRAME?node-id=300%3A0',
    },
  });
