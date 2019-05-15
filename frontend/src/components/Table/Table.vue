<template>
  <el-table
    ref="table"
    class="m-table"
    :data="data"
    :size="size"
    :width="width"
    :height="height"
    :max-height="maxHeight"
    :fit="fit"
    :stripe="stripe"
    :border="border"
    :row-key="rowKey"
    :show-header="showHeader"
    :show-summary="showSummary"
    :sum-text="sumText"
    :summary-method="summaryMethod"
    :row-class-name="rowClassName"
    :row-style="rowStyle"
    :cell-class-name="cellClassName"
    :cell-style="cellStyle"
    :header-row-class-name="headerRowClassName"
    :header-row-style="headerRowStyle"
    :header-cell-class-name="headerCellClassName"
    :header-cell-style="headerCellStyle"
    :highlight-current-row="highlightCurrentRow"
    :current-row-key="currentRowKey"
    :empty-text="emptyText"
    :expand-row-keys="expandRowKeys"
    :default-expand-all="defaultExpandAll"
    :default-sort="defaultSort"
    :tooltip-effect="tooltipEffect"
    :span-method="spanMethod"
    :select-on-indeterminate="selectOnIndeterminate"
    :indent="indent"
    :lazy="lazy"
    :load="load"
    @select="onTableSelect"
    @select-all="onTableSelectAll"
    @selection-change="onTableSelectionChange"
    @cell-mouse-enter="onTableCellMouseEnter"
    @cell-mouse-leave="onTableCellMouseLeave"
    @cell-click="onTableCellClick"
    @cell-dblclick="onTableCellDblclick"
    @row-click="onTableRowClick"
    @row-contextmenu="onTableRowContextmenu"
    @row-dblclick="onTableRowDblclick"
    @header-click="onTableHeaderClick"
    @header-contextmenu="onTableHeaderContextmenu"
    @sort-change="onTableSortChange"
    @filter-change="onTableFilterChange"
    @current-change="onTableCurrentChange"
    @header-dragend="onTableHeaderDragend"
    @expand-change="onTableExpandChange"
  >
    <slot />
    <template slot="append">
      <slot name="append" />
    </template>
  </el-table>
</template>

<script>
import ElTable from 'element-ui/lib/table';

export default {
  name: 'MTable',
  componentName: 'MTable',
  components: {
    'el-table': ElTable,
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    size: String,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    fit: {
      type: Boolean,
      default: true,
    },
    stripe: Boolean,
    border: Boolean,
    rowKey: [String, Function],
    showHeader: {
      type: Boolean,
      default: true,
    },
    showSummary: Boolean,
    sumText: String,
    summaryMethod: Function,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    cellClassName: [String, Function],
    cellStyle: [Object, Function],
    headerRowClassName: [String, Function],
    headerRowStyle: [Object, Function],
    headerCellClassName: [String, Function],
    headerCellStyle: [Object, Function],
    highlightCurrentRow: Boolean,
    currentRowKey: [String, Number],
    emptyText: String,
    expandRowKeys: Array,
    defaultExpandAll: Boolean,
    defaultSort: Object,
    tooltipEffect: String,
    spanMethod: Function,
    selectOnIndeterminate: {
      type: Boolean,
      default: true,
    },
    indent: {
      type: Number,
      default: 16,
    },
    lazy: Boolean,
    load: Function,
  },
  computed: {
    showAppendSlot() {
      return this.$slots.append && this.$slots.append.length > 0;
    },
  },
  methods: {
    onTableSelect(event) {
      this.$emit('select', event);
    },
    onTableSelectAll(event) {
      this.$emit('select-all', event);
    },
    onTableSelectionChange(event) {
      this.$emit('select-change', event);
    },
    onTableCellMouseEnter(event) {
      this.$emit('cell-mouse-enter', event);
    },
    onTableCellMouseLeave(event) {
      this.$emit('cell-mouse-leave', event);
    },
    onTableCellClick(event) {
      this.$emit('cell-click', event);
    },
    onTableCellDblclick(event) {
      this.$emit('cell-dblclick', event);
    },
    onTableRowClick(event) {
      this.$emit('row-click', event);
    },
    onTableRowContextmenu(event) {
      this.$emit('row-contextmenu', event);
    },
    onTableRowDblclick(event) {
      this.$emit('row-dblclick', event);
    },
    onTableHeaderClick(event) {
      this.$emit('header-click', event);
    },
    onTableHeaderContextmenu(event) {
      this.$emit('header-contextmenu', event);
    },
    onTableSortChange(event) {
      this.$emit('sort-change', event);
    },
    onTableFilterChange(event) {
      this.$emit('filter-change', event);
    },
    onTableCurrentChange(event) {
      this.$emit('current-change', event);
    },
    onTableHeaderDragend(event) {
      this.$emit('header-dragend', event);
    },
    onTableExpandChange(event) {
      this.$emit('expand-change', event);
    },
    clearSelection() {
      this.$refs.table.clearSelection();
    },
    toggleRowSelection(row, selected) {
      this.$refs.table.toggleRowSelection(row, selected);
    },
    toggleAllSelection() {
      this.$refs.table.toggleAllSelection();
    },
    toggleRowExpansion(row, expanded) {
      this.$refs.table.toggleRowExpansion(row, expanded);
    },
    setCurrentRow(row) {
      this.$refs.table.setCurrentRow(row);
    },
    clearSort() {
      this.$refs.table.clearSort();
    },
    clearFilter(columnKeys) {
      this.$refs.table.clearFilter(columnKeys);
    },
    doLayout() {
      this.$refs.table.doLayout();
    },
    sort(prop, order) {
      this.$refs.table.sort(prop, order);
    },
  },
};
</script>

<style lang="scss">
  .m-table .warning-row {
    background: lighten(map-get($colors, warning), 38%);
  }
  .m-table .success-row {
    background: lighten(map-get($colors, success), 62%);
  }
  .m-table .danger-row {
    background: lighten(map-get($colors, danger), 41%);
  }
</style>
