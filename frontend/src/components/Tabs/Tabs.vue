<template>
  <el-tabs
    ref="tabs"
    v-model="tabsModel"
    class="m-tabs"
    :type="type"
    :active-name="activeName"
    :closable="closable"
    :addable="addable"
    :editable="editable"
    :tab-position="tabPosition"
    :before-leave="beforeLeave"
    :stretch="stretch"
    @input="onTabsInput"
    @tab-click="onTabClick"
    @tab-remove="onTabRemove"
    @tab-add="onTabAdd"
    @edit="onTabsEdit"
  >
    <slot />
  </el-tabs>
</template>

<script>
import ElTabs from 'element-ui/lib/tabs';

export default {
  name: 'MTabs',
  componentName: 'MTabs',
  components: {
    'el-tabs': ElTabs,
  },
  props: {
    value: String,
    type: String,
    activeName: String,
    closable: Boolean,
    addable: Boolean,
    editable: Boolean,
    tabPosition: {
      type: String,
      default: 'top',
    },
    beforeLeave: Function,
    stretch: Boolean,
  },
  data() {
    return {
      tabsModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.tabsModel = v;
    },
  },
  methods: {
    onTabsInput(event) {
      this.$emit('input', event);
    },
    onTabClick(event) {
      console.log('onTabClick :', event);
    },
    onTabRemove(event) {
      console.log('onTabRemove :', event);
    },
    onTabAdd(event) {
      console.log('onTabAdd :', event);
    },
    onTabsEdit(event) {
      console.log('onTabsEdit :', event);
    },
  },
};
</script>
