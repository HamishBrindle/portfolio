<template>
  <el-radio-group
    ref="radioGroup"
    v-model="radioGroupModel"
    class="m-radio-group"
    :size="size"
    :fill="fill"
    :text-color="textColor"
    :disabled="disabled"
    @change="onRadioGroupChange"
  >
    <slot />
  </el-radio-group>
</template>

<script>
import ElRadioGroup from 'element-ui/lib/radio-group';

export default {
  name: 'MRadioGroup',
  componentName: 'MRadioGroup',
  components: {
    'el-radio-group': ElRadioGroup,
  },
  props: {
    value: [String, Number, Boolean, Array],
    size: String,
    fill: String,
    textColor: String,
    disabled: Boolean,
  },
  data() {
    return {
      radioGroupModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.radioGroupModel = v;
    },
  },
  methods: {
    onRadioGroupChange(event) {
      this.$emit('input', event);
      this.$emit('change', event);
    },
  },
};
</script>
