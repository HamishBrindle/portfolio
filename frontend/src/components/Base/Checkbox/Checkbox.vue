<template>
  <el-checkbox
    :id="id"
    v-model="checkboxModel"
    class="m-checkbox"
    :label="label"
    :indeterminate="indeterminate"
    :disabled="disabled"
    :checked="checked"
    :name="name"
    :true-label="trueLabel"
    :false-label="falseLabel"
    :controls="controls"
    :border="border"
    :size="size"
    @change="onCheckboxChange"
  >
    <slot />
  </el-checkbox>
</template>

<script>
import ElCheckbox from 'element-ui/lib/checkbox';

export default {
  name: 'MCheckbox',
  componentName: 'MCheckbox',
  components: {
    'el-checkbox': ElCheckbox,
  },
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String,
    controls: String,
    border: Boolean,
    size: String,
  },
  data() {
    return {
      checkboxModel: this.value,
    };
  },
  methods: {
    onCheckboxChange(event) {
      this.$emit('change', event);
      this.$emit('input', event);
    },
  },
};
</script>
