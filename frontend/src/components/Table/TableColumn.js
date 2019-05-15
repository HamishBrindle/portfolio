import ElTableColumn from 'element-ui/lib/table-column';

/**
 * ! Unable to properly wrap this component - The use of
 * ! slot-scopes has made this too difficult to work with
 * ! a custom template. Defaulting to Element's raw
 * ! implementation.
 *
 * TODO: Come back to this when there's time.
 */
ElTableColumn.install = (Vue) => {
  Vue.component('m-table-column', ElTableColumn);
};

export default ElTableColumn;
