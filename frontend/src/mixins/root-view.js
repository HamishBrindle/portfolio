const rootViewMixin = {
  methods: {
    /**
     * Return whether or not a view is the root view of a route.
     *
     * @param {string} view - name of view
     */
    isRoot(view) {
      return this.$route.name.toLowerCase() === view.toLowerCase();
    },
  },
};

export default rootViewMixin;
