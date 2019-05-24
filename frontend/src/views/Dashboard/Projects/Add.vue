<template>
  <m-container class="add-project-view">
    <m-header>
      <h1>Add Project</h1>
    </m-header>
    <m-main>
      <m-row>
        <m-col
          :xs="24"
          :sm="20"
          :md="18"
          :lg="16"
          :xl="12"
        >
          <m-form
            ref="project-form"
            :model="project"
            label-width="120px"
            class="add-project-view__form"
            :rules="rules"
          >
            <m-form-item
              label="Name"
              prop="name"
            >
              <m-input v-model="project.name" />
            </m-form-item>
            <m-form-item
              label="Description"
              prop="description"
            >
              <m-input
                v-model="project.description"
                type="textarea"
              />
            </m-form-item>
            <div class="add-project-view__form-submit">
              <m-button
                type="success"
                class="add-project-view__form-submit-button"
                @click="onFormSubmit('project-form')"
              >
                Submit
              </m-button>
              <m-button
                type="danger"
                class="add-project-view__form-clear-button"
                @click="onFormReset()"
              >
                Clear
              </m-button>
            </div>
          </m-form>
        </m-col>
      </m-row>
      <m-row />
    </m-main>
  </m-container>
</template>

<script>
import gql from 'graphql-tag';
import { apolloClient } from '@/apollo';

export default {
  data() {
    return {
      project: {
        name: '',
        description: '',
        page: null,
        projectImages: null,
        tags: null,
        technologies: null,
        startDate: null,
        finishDate: null,
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input a Project name.',
            trigger: 'blur',
          },
          {
            min: 1,
            max: 40,
            message: 'Project name length should be 1 to 40 characters in length.',
            trigger: 'blur',
          },
        ],
        description: [
          {
            required: true,
            message: 'Please input a Project description.',
            trigger: 'blur',
          },
          {
            min: 1,
            max: 400,
            message: 'Project description length should be 1 to 400 characters in length.',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    onFormSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$alert('Are you sure you want to submit?', 'Confirm', {
            confirmButtonText: 'OK',
            callback: (a) => {
              if (a === 'confirm') this.saveProject();
            },
          });
          return true;
        }

        return false;
      });
    },
    onFormReset(formName) {
      this.$refs[formName].resetFields();
    },
    async saveProject() {
      const { data } = await apolloClient.mutate({
        mutation: gql`
        mutation createProject(
          $name: String!
          $description: String!
        ) {
          createProject(
            name: $name
            description: $description
          ) {
            id
            name
            description
            createdAt
          }
        }`,
        variables: {
          name: this.project.name,
          description: this.project.description,
        },
      });

      if (data.createProject) {
        this.$message({
          type: 'success',
          message: 'Project has been saved!',
        });
        this.onFormReset('project-form');
      } else {
        this.$message({
          type: 'danger',
          message: 'Project was unable to be saved.',
        });
      }

      console.log('Project: ', data.createProject);
    },
  },
};
</script>

<style lang="scss">
.add-project-view {
  &__form {}
  &__form-submit {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  &__form-submit-button {}
}
</style>
