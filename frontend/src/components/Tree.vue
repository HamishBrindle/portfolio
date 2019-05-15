<template>
  <el-tree
    ref="tree"
    class="m-tree"
    :data="data"
    :empty-text="emptyText"
    :render-after-expand="renderAfterExpand"
    :node-key="nodeKey"
    :check-strictly="checkStrictly"
    :default-expand-all="defaultExpandAll"
    :expand-on-click-node="expandOnClickNode"
    :check-on-click-node="checkOnClickNode"
    :check-descendants="checkDescendants"
    :auto-expand-parent="autoExpandParent"
    :default-checked-keys="defaultCheckedKeys"
    :default-expanded-keys="defaultExpandedKeys"
    :current-node-key="currentNodeKey"
    :render-content="renderContent"
    :show-checkbox="showCheckbox"
    :draggable="draggable"
    :allow-drag="allowDrag"
    :allow-drop="allowDrop"
    :props="props"
    :lazy="lazy"
    :highlight-current="highlightCurrent"
    :load="load"
    :filter-node-method="filterNodeMethod"
    :accordion="accordion"
    :indent="indent"
    :icon-class="iconClass"
    @node-click="onNodeClick"
    @node-contextmenu="onNodeContextmenu"
    @check-change="onCheckChange"
    @check="onCheck"
    @current-change="onCurrentChange"
    @node-expand="onNodeExpand"
    @node-collapse="onNodeCollapse"
    @node-drag-start="onNodeDragStart"
    @node-drag-enter="onNodeDragEnter"
    @node-drag-leave="onNodeDragLeave"
    @node-drag-over="onNodeDragOver"
    @node-drag-end="onNodeDragEnd"
    @node-drop="onNodeDrop"
  >
    <!--
      This right here is how we pass down scoped-slots to
      child components. Remember this shit...
    -->
    <template
      v-for="slot in Object.keys($scopedSlots)"
      :slot="slot"
      slot-scope="scope"
    >
      <slot
        :name="slot"
        v-bind="scope"
      />
    </template>
  </el-tree>
</template>

<script>
import ElTree from 'element-ui/lib/tree';

export default {
  name: 'MTable',
  componentName: 'MTable',
  components: {
    'el-tree': ElTree,
  },
  props: {
    data: {
      type: Array,
    },
    emptyText: {
      type: String,
      default() {
        return 'Nothing here!';
      },
    },
    renderAfterExpand: {
      type: Boolean,
      default: true,
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true,
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: false,
    },
    autoExpandParent: {
      type: Boolean,
      default: true,
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      type: [Object, Function],
      default() {
        return {
          children: 'children',
          label: 'label',
          disabled: 'disabled',
        };
      },
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18,
    },
    iconClass: String,
  },
  data() {
    return {
      debug: true,
    };
  },
  methods: {
    onNodeClick(nodeObj, nodeProp, node) {
      this.$emit('node-click', nodeObj, nodeProp, node);
    },
    onNodeContextmenu(event) {
      this.$emit('node-contextmenu', event);
    },
    onCheckChange(event) {
      this.$emit('check-change', event);
    },
    onCheck(event) {
      this.$emit('check', event);
    },
    onCurrentChange(event) {
      this.$emit('current-change', event);
    },
    onNodeExpand(event) {
      this.$emit('node-expand', event);
    },
    onNodeCollapse(event) {
      this.$emit('node-collapse', event);
    },
    onNodeDragStart(event) {
      this.$emit('node-drag-start', event);
    },
    onNodeDragEnter(event) {
      this.$emit('node-drag-enter', event);
    },
    onNodeDragLeave(event) {
      this.$emit('node-drag-leave', event);
    },
    onNodeDragOver(event) {
      this.$emit('node-drag-over', event);
    },
    onNodeDragEnd(event) {
      this.$emit('node-drag-end', event);
    },
    onNodeDrop(event) {
      this.$emit('node-drop', event);
    },
    filter(val) {
      this.$refs.tree.filter(val);
    },
    updateKeyChildren(key, data) {
      this.$refs.tree.updateKeyChildren(key, data);
    },
    getCheckedNodes(leafOnly, includeHalfChecked) {
      return this.$refs.tree.getCheckedNodes(leafOnly, includeHalfChecked);
    },
    setCheckedNodes(nodes, leafOnly) {
      this.$refs.tree.setCheckedNodes(nodes, leafOnly);
    },
    getCheckedKeys(leafOnly) {
      return this.$refs.tree.getCheckedKeys(leafOnly);
    },
    setCheckedKeys(keys, leafOnly) {
      this.$refs.tree.setCheckedKeys(keys, leafOnly);
    },
    setChecked(data, checked, deep) {
      this.$refs.tree.setChecked(data, checked, deep);
    },
    getHalfCheckedNodes() {
      return this.$refs.tree.getHalfCheckedNodes();
    },
    getHalfCheckedKeys() {
      return this.$refs.tree.getHalfCheckedKeys();
    },
    getCurrentKey() {
      return this.$refs.tree.getCurrentKey();
    },
    getCurrentNode() {
      return this.$refs.tree.getCurrentNode();
    },
    setCurrentKey(key) {
      this.$refs.tree.setCurrentKey(key);
    },
    setCurrentNode(node) {
      this.$refs.tree.setCurrentNode(node);
    },
    getNode(data) {
      return this.$refs.tree.getNode(data);
    },
    remove(data) {
      this.$refs.tree.remove(data);
    },
    append(data, parentNode) {
      this.$refs.tree.append(data, parentNode);
    },
    insertBefore(data, refNode) {
      this.$refs.tree.insertBefore(data, refNode);
    },
    insertAfter(data, refNode) {
      this.$refs.tree.insertAfter(data, refNode);
    },
  },
};
</script>

<style>

</style>
