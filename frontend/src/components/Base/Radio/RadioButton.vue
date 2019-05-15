<template>
  <el-radio-button
    v-model="radioButtonModel"
    class="m-radio-button"
    :label="label"
    :disabled="disabled"
    :name="name"
    @change="onRadioButtonChange()"
  >
    <slot />
  </el-radio-button>
</template>

<script>
import ElRadioButton from 'element-ui/lib/radio-button';

export default {
  name: 'MRadioButton',
  componentName: 'MRadioButton',
  components: {
    'el-radio-button': ElRadioButton,
  },
  props: {
    label: [String, Number, Boolean],
    disabled: Boolean,
    name: String,
  },
  data() {
    return {
      radioButtonModel: this.value,
    };
  },
  methods: {
    onRadioButtonChange() {
      this.$emit('input', this.radioButtonModel);
      this.$emit('change', this.radioButtonModel);
    },
  },
};
</script>
