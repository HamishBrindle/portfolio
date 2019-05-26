<template>
  <div>
    <m-table
      v-loading="$apollo.loading"
      :data="projects"
      fit
      highlight-current-row
      :max-height="getTableHeight"
      :min-width="getTableMinWidth"
      @sort-change="sortChange"
    >
      <m-table-column
        label="ID"
        prop="id"
        sortable="custom"
        min-width="150"
      />
      <m-table-column
        label="Name"
        prop="name"
        min-width="150"
      />
      <m-table-column
        label="Date Created"
        prop="createdAt"
        min-width="150"
      />
      <m-table-column
        label="Date Updated"
        prop="updatedAt"
        min-width="150"
      />

      <m-table-column
        min-width="175"
        fixed="right"
      >
        <template
          slot="header"
        >
          <m-input
            v-model="filterText"
            placeholder="Input filter"
          >
            <m-icon
              slot="suffix"
              name="filter"
            />
          </m-input>
        </template>
        <template slot-scope="{ row, $index }">
          <m-button
            type="primary"
            size="mini"
            @click="onViewButtonClick(row, $index)"
          >
            View
          </m-button>
          <m-button
            type="success"
            size="mini"
            @click="onEditButtonClick(row, $index)"
          >
            Edit
          </m-button>
          <m-button
            type="danger"
            size="mini"
            @click="onDeleteButtonClick(row, $index)"
          >
            Delete
          </m-button>
        </template>
      </m-table-column>
    </m-table>
    <!-- <br> -->
    <!-- <m-pagination
      v-show="listQuery.total > 0"
      :total="listQuery.total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      layout="total, sizes, prev, pager, next"
      @pagination="loadTableData"
    /> -->
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { mapState } from 'vuex';
import styles from 'global-styles';

export default {
  components: {
    'm-table': () => import(/* webpackChunkName: "chunk-components-table" */ '@/components/Table/Table.vue'),
    'm-table-column': () => import(/* webpackChunkName: "chunk-components-table" */ '@/components/Table/TableColumn.js'),
  },
  data() {
    return {
      filterText: '',
      // listQuery: {
      //   page: 1,
      //   limit: 20,
      //   total: 0,
      //   filter: '',
      // },
    };
  },
  computed: {
    ...mapState({
      windowHeight: state => state.context.window.height,
      windowWidth: state => state.context.window.width,
    }),
    getTableHeight() {
      return this.windowHeight - 250;
    },
    getTableMinWidth() {
      return styles['breakpoint-sm'];
    },
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    projects: gql`
      query projects {
        projects {
          id,
          name,
          description,
          createdAt,
          updatedAt
        }
      }`,
  },
  methods: {
    onViewButtonClick(row, $index) {

    },
    onEditButtonClick(row, $index) {

    },
    onDeleteButtonClick(row, $index) {
      this.$alert('Are you sure you want to delete this project?', 'Confirm', {
        confirmButtonText: 'OK',
        callback: (a) => {
          if (a === 'confirm') this.deleteProject(row);
        },
      });
    },
    async deleteProject(row) {
      const { id } = row;
      const { data } = await this.$apollo.mutate({
        mutation: gql`
        mutation deleteProject(
          $id: String!
        ) {
          deleteProject(
            id: $id
          ) {
            id
          }
        }`,
        variables: {
          id,
        },
      });

      this.$apollo.queries.projects.refetch();

      const { deleteProject } = data;
      console.log('deleteProject :', deleteProject);
    },
    sortChange(data) {
      const { prop, order } = data;
      // if (prop === 'id') {}
      // if (prop === 'name') {}
      // if (prop === 'createdAt') {}
      // if (prop === 'updatedAt') {}
    },
  },
};
</script>

<style>

</style>
