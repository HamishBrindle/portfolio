<template>
  <el-popover
    v-model="popoverModel"
    class="m-popover"
    :trigger="trigger"
    :open-delay="openDelay"
    :title="title"
    :disabled="disabled"
    :content="content"
    :reference="reference"
    :placement="placement"
    :popper-class="popperClass"
    :width="width"
    :visible-arrow="visibleArrow"
    :arrow-offset="arrowOffset"
    :transition="transition"
    @input="onPopoverInput"
    @show="onPopoverShow"
    @after-enter="onPopoverAfterEnter"
    @hide="onPopoverHide"
    @after-leave="onPopoverAfterLeave"
  >
    <slot />
    <span
      v-if="showReference"
      slot="reference"
    >
      <slot name="reference" />
    </span>
  </el-popover>
</template>

<script>
import ElPopover from 'element-ui/lib/popover';

export default {
  name: 'MPopover',
  componentName: 'MPopover',
  components: {
    'el-popover': ElPopover,
  },
  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1,
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    value: {
      type: Boolean,
      default: false,
    },
    placement: String,
    title: String,
    disabled: Boolean,
    content: String,
    reference: String,
    popperClass: String,
    width: [String, Number],
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    arrowOffset: {
      type: Number,
      default: 0,
    },
    transition: {
      type: String,
      default: 'fade-in-linear',
    },
  },
  data() {
    return {
      popoverModel: this.value,
    };
  },
  computed: {
    showReference() {
      return this.$slots.reference && this.$slots.reference.length > 0;
    },
  },
  watch: {
    value(v) {
      this.popoverModel = v;
    },
  },
  methods: {
    onPopoverInput(event) {
      this.$emit('input', event);
    },
    onPopoverShow(event) {
      this.$emit('show', event);
    },
    onPopoverAfterEnter(event) {
      this.$emit('after-enter', event);
    },
    onPopoverHide(event) {
      this.$emit('hide', event);
    },
    onPopoverAfterLeave(event) {
      this.$emit('after-leave', event);
    },
  },
};
</script>
