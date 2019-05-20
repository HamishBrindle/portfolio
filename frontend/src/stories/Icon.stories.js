/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';
import iconList from '@/components/Base/Icon/list.json';

const html = utils.string.tag;

/**
 * Icons are pretty straight forward. We just want to display
 * them as they are - no logic.
 */
iconList.forEach((icon) => {
  storiesOf('Icon', module).add(icon, () => ({
    template: html`
      <m-card>
        <m-icon :name="icon" width="8" height="8" />
      </m-card>
    `,
    data() {
      return {
        icon,
      };
    },
  }));
});
