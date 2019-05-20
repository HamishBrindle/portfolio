/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Tooltip', module).add('Basic', () => ({
  template: html`
    <div style="margin: 10rem 15rem;">
      <div class="box">
        <div class="top">
          <m-tooltip
            class="item"
            effect="dark"
            content="Top Left prompts info"
            placement="top-start"
          >
            <m-button>top-start</m-button>
          </m-tooltip>
          <m-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
            <m-button>top</m-button>
          </m-tooltip>
          <m-tooltip
            class="item"
            effect="dark"
            content="Top Right prompts info"
            placement="top-end"
          >
            <m-button>top-end</m-button>
          </m-tooltip>
        </div>
        <div
          style="display: flex; flex-direction: row; max-width: 30rem; justify-content: space-between;"
        >
          <div class="left" style="display: flex; flex-direction: column; max-width: 15rem;">
            <m-tooltip
              class="item"
              effect="dark"
              content="Left Top prompts info"
              placement="left-start"
            >
              <m-button>left-start</m-button>
            </m-tooltip>
            <m-tooltip
              class="item"
              effect="dark"
              content="Left Center prompts info"
              placement="left"
            >
              <m-button>left</m-button>
            </m-tooltip>
            <m-tooltip
              class="item"
              effect="dark"
              content="Left Bottom prompts info"
              placement="left-end"
            >
              <m-button>left-end</m-button>
            </m-tooltip>
          </div>

          <div class="right" style="display: flex; flex-direction: column; max-width: 15rem;">
            <m-tooltip
              class="item"
              effect="dark"
              content="Right Top prompts info"
              placement="right-start"
            >
              <m-button>right-start</m-button>
            </m-tooltip>
            <m-tooltip
              class="item"
              effect="dark"
              content="Right Center prompts info"
              placement="right"
            >
              <m-button>right</m-button>
            </m-tooltip>
            <m-tooltip
              class="item"
              effect="dark"
              content="Right Bottom prompts info"
              placement="right-end"
            >
              <m-button>right-end</m-button>
            </m-tooltip>
          </div>
        </div>
        <div class="bottom">
          <m-tooltip
            class="item"
            effect="dark"
            content="Bottom Left prompts info"
            placement="bottom-start"
          >
            <m-button>bottom-start</m-button>
          </m-tooltip>
          <m-tooltip
            class="item"
            effect="dark"
            content="Bottom Center prompts info"
            placement="bottom"
          >
            <m-button>bottom</m-button>
          </m-tooltip>
          <m-tooltip
            class="item"
            effect="dark"
            content="Bottom Right prompts info"
            placement="bottom-end"
          >
            <m-button>bottom-end</m-button>
          </m-tooltip>
        </div>
      </div>
    </div>
  `,
  data() {
    return {};
  },
  methods: {},
}));
