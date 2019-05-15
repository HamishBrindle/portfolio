<template>
  <el-radio
    v-model="radioModel"
    class="m-radio"
    :label="label"
    :disabled="disabled"
    :name="name"
    :border="border"
    :size="size"
    @change="onRadioChange"
  >
    <slot />
  </el-radio>
</template>

<script>
import ElRadio from 'element-ui/lib/radio';

export default {
  name: 'MRadio',
  componentName: 'MRadio',
  components: {
    'el-radio': ElRadio,
  },
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String,
  },
  data() {
    return {
      radioModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.radioModel = v;
    },
  },
  methods: {
    onRadioChange(event) {
      this.$emit('input', event);
      this.$emit('change', event);
    },
  },
};
</script>
