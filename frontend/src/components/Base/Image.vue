<template>
  <div class="el-image m-image">
    <slot
      v-if="loading"
      name="placeholder"
    >
      <div class="el-image__placeholder" />
    </slot>
    <slot
      v-else-if="error"
      name="error"
    >
      <div class="el-image__error">
        {{ t('el.image.error') }}
      </div>
    </slot>
    <img
      v-else
      class="el-image__inner"
      :src="src"
      :alt="alt"
      :style="imageStyle"
      :class="{ 'el-image__inner--center': alignCenter }"
    >
  </div>
</template>

<script>
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

/**
 * ! Couldn't find `ElImage` anywhere in the element-ui package...
 * Had to copypasta this from their Github.
 */

import Locale from 'element-ui/src/mixins/locale';
import {
  on, off, isInContainer,
} from 'element-ui/src/utils/dom';
import throttle from 'throttle-debounce/throttle';

const isString = e => typeof e === 'string' || e instanceof String;
const isHtmlElement = (obj) => {
  try {
    // Using W3 DOM2 (works for FF, Opera and Chrome)
    return obj instanceof HTMLElement;
  } catch (e) {
    // Browsers not supporting W3 DOM2 don't have HTMLElement and
    // an exception is thrown and we end up here. Testing some
    // properties that all elements have (works on IE7)
    return (typeof obj === 'object')
      && (obj.nodeType === 1) && (typeof obj.style === 'object')
      && (typeof obj.ownerDocument === 'object');
  }
};

const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined;
const ObjectFit = {
  NONE: 'none',
  CONTAIN: 'contain',
  COVER: 'cover',
  FILL: 'fill',
  SCALE_DOWN: 'scale-down',
};
export default {
  name: 'MImage',
  componentName: 'MImage',
  mixins: [Locale],
  props: {
    src: String,
    fit: String,
    // ! `lazy` and `scrollContainer` don't work - dont use.
    // lazy: Boolean,
    // scrollContainer: [String, Object],
    alt: String,
  },
  data() {
    return {
      loading: true,
      error: false,
      show: !this.lazy,
      imageWidth: 0,
      imageHeight: 0,
    };
  },
  computed: {
    imageStyle() {
      const { fit } = this;
      if (!this.$isServer && fit) {
        return isSupportObjectFit()
          ? { 'object-fit': fit }
          : this.getImageStyle(fit);
      }
      return {};
    },
    alignCenter() {
      return !this.$isServer && !isSupportObjectFit() && this.fit !== ObjectFit.FILL;
    },
  },
  watch: {
    src(val) {
      this.show && this.loadImage();
    },
    show(val) {
      val && this.loadImage();
    },
  },
  mounted() {
    if (this.lazy) {
      this.addLazyLoadListener();
    } else {
      this.loadImage();
    }
  },
  beforeDestroy() {
    // eslint-disable-next-line no-unused-expressions
    this.lazy && this.removeLazyLoadListener();
  },
  methods: {
    loadImage() {
      if (this.$isServer) return;
      // reset status
      this.loading = true;
      this.error = false;
      const img = new Image();
      img.onload = e => this.handleLoad(e, img);
      img.onerror = this.handleError.bind(this);
      img.src = this.src;
    },
    handleLoad(e, img) {
      this.imageWidth = img.width;
      this.imageHeight = img.height;
      this.loading = false;
      this.$emit('load', e);
    },
    handleError(e) {
      this.loading = false;
      this.error = true;
      this.$emit('error', e);
    },
    handleLazyLoad() {
      // if (isInContainer(this.$el, this._scrollContainer)) {
      //   this.show = true;
      //   this.removeLazyLoadListener();
      // }
    },
    addLazyLoadListener() {
      if (this.$isServer) return;
      const { scrollContainer } = this;
      let _scrollContainer = null;

      if (isHtmlElement(scrollContainer)) {
        _scrollContainer = scrollContainer;
      } else if (isString(scrollContainer)) {
        _scrollContainer = document.querySelector(scrollContainer);
      } else {
        // _scrollContainer = getScrollContainer(this.$el);
      }

      if (_scrollContainer) {
        this._scrollContainer = _scrollContainer;
        this._lazyLoadHandler = throttle(200, this.handleLazyLoad);
        on(_scrollContainer, 'scroll', this._lazyLoadHandler);
        this.handleLazyLoad();
      }
    },
    removeLazyLoadListener() {
      const { _scrollContainer, _lazyLoadHandler } = this;
      if (this.$isServer || !_scrollContainer || !_lazyLoadHandler) return;
      off(_scrollContainer, 'scroll', _lazyLoadHandler);
      this._scrollContainer = null;
      this._lazyLoadHandler = null;
    },
    /**
     * simulate object-fit behavior to compatible with IE11 and other
     * browsers which not support object-fit
     */
    getImageStyle(fit) {
      const { imageWidth, imageHeight } = this;
      const {
        clientWidth: containerWidth,
        clientHeight: containerHeight,
      } = this.$el;
      if (!imageWidth || !imageHeight || !containerWidth || !containerHeight) return {};
      const vertical = imageWidth / imageHeight < 1;
      if (fit === ObjectFit.SCALE_DOWN) {
        const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight;
        // eslint-disable-next-line no-param-reassign
        fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN;
      }
      switch (fit) {
        case ObjectFit.NONE:
          return { width: 'auto', height: 'auto' };
        case ObjectFit.CONTAIN:
          return vertical ? { width: 'auto' } : { height: 'auto' };
        case ObjectFit.COVER:
          return vertical ? { height: 'auto' } : { width: 'auto' };
        default:
          return {};
      }
    },
  },
};
</script>
