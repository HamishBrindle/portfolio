<template>
  <el-checkbox-group
    v-model="checkboxGroupModel"
    class="m-checkbox-group"
    :disabled="disabled"
    :min="min"
    :max="max"
    :size="size"
    :fill="fill"
    :text-color="textColor"
    @change="onCheckboxGroupChange"
  >
    <slot />
  </el-checkbox-group>
</template>

<script>
import ElCheckboxGroup from 'element-ui/lib/checkbox-group';

export default {
  name: 'MCheckboxGroup',
  componentName: 'MCheckboxGroup',
  components: {
    'el-checkbox-group': ElCheckboxGroup,
  },
  props: {
    value: Array,
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String,
  },
  data() {
    return {
      checkboxGroupModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.checkboxGroupModel = v;
    },
  },
  methods: {
    onCheckboxGroupChange(event) {
      this.$emit('input', event);
      this.$emit('change', event);
    },
  },
};
</script>
