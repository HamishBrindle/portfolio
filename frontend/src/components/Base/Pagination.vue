<template>
  <el-pagination
    class="m-pagination"
    :small="small"
    :total="total"
    :page-count="pageCount"
    :pager-count="pagerCount"
    :current-page.sync="currentPage"
    :page-size.sync="pageSize"
    :layout="layout"
    :page-sizes="pageSizes"
    :popper-class="popperClass"
    :prev-text="prevText"
    :next-text="nextText"
    :background="background"
    :disabled="disabled"
    :hide-on-single-page="hideOnSinglePage"
    v-bind="$attrs"
    @size-change="onSizeChange"
    @current-change="onCurrentChange"
  />
</template>

<script>
import ElPagination from 'element-ui/lib/pagination';

export default {
  name: 'MPagination',
  componentName: 'MPagination',
  components: {
    'el-pagination': ElPagination,
  },
  props: {
    total: {
      required: true,
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 20,
    },
    small: Boolean,
    pageCount: Number,
    hidden: {
      type: Boolean,
      default: false,
    },
    pagerCount: {
      type: Number,
      validator(value) {
        // eslint-disable-next-line no-bitwise
        return (value | 0) === value && value > 4 && value < 22 && (value % 2) === 1;
      },
      default: 7,
    },
    layout: {
      type: String,
      default: 'prev, pager, next, jumper, ->, total',
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50];
      },
    },
    popperClass: String,
    prevText: String,
    nextText: String,
    background: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    hideOnSinglePage: Boolean,
    autoScroll: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit('update:page', val);
      },
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit('update:limit', val);
      },
    },
  },
  methods: {
    onSizeChange(val) {
      this.$emit('pagination', { page: this.currentPage, limit: val });
    },
    onCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize });
    },
  },
};
</script>

<style>

</style>
