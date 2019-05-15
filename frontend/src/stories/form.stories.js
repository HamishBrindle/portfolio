/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Form', module)
  .add('Basic', () => ({
    template: html`
      <m-container>
        <m-form ref="form" :model="form" label-width="120px">
          <m-form-item label="Activity name">
            <m-input v-model="form.name"></m-input>
          </m-form-item>
          <m-form-item label="Activity zone">
            <m-select v-model="form.region" placeholder="please select your zone">
              <m-option label="Zone one" value="shanghai"></m-option>
              <m-option label="Zone two" value="beijing"></m-option>
            </m-select>
          </m-form-item>
          <m-form-item label="Activity time">
            <m-col :span="11">
              <m-date-picker
                type="date"
                placeholder="Pick a date"
                v-model="form.date1"
                style="width: 100%;"
              ></m-date-picker>
            </m-col>
            <m-col class="line" :span="2">-</m-col>
            <m-col :span="11">
              <m-time-picker
                placeholder="Pick a time"
                v-model="form.date2"
                style="width: 100%;"
              ></m-time-picker>
            </m-col>
          </m-form-item>
          <m-form-item label="Instant delivery">
            <m-switch v-model="form.delivery"></m-switch>
          </m-form-item>
          <m-form-item label="Activity type">
            <m-checkbox-group v-model="form.type">
              <m-checkbox label="Online activities" name="type"></m-checkbox>
              <m-checkbox label="Promotion activities" name="type"></m-checkbox>
              <m-checkbox label="Offline activities" name="type"></m-checkbox>
              <m-checkbox label="Simple brand exposure" name="type"></m-checkbox>
            </m-checkbox-group>
          </m-form-item>
          <m-form-item label="Resources">
            <m-radio-group v-model="form.resource">
              <m-radio label="Sponsor"></m-radio>
              <m-radio label="Venue"></m-radio>
            </m-radio-group>
          </m-form-item>
          <m-form-item label="Activity form">
            <m-input type="textarea" v-model="form.desc"></m-input>
          </m-form-item>
          <m-form-item>
            <m-button type="primary" @click="onSubmit">Create</m-button>
            <m-button>Cancel</m-button>
          </m-form-item>
        </m-form>
      </m-container>
    `,
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!', this.form);
      },
    },
  }))
  .add('Inline form', () => ({
    template: html`
      <m-container style="margin: 5rem;">
        <m-form :inline="true" :model="formInline" class="demo-form-inline">
          <m-form-item label="Approved by">
            <m-input v-model="formInline.user" placeholder="Approved by"></m-input>
          </m-form-item>
          <m-form-item label="Activity zone">
            <m-select v-model="formInline.region" placeholder="Activity zone">
              <m-option label="Vancouver" value="vancouver"></m-option>
              <m-option label="LA" value="los-angeles"></m-option>
            </m-select>
          </m-form-item>
          <m-form-item>
            <m-button type="primary" @click="onSubmit">Query</m-button>
          </m-form-item>
        </m-form>
      </m-container>
    `,
    data() {
      return {
        formInline: {
          user: '',
          region: '',
        },
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
    },
  }))
  .add('Alignment', () => ({
    template: html`
      <m-container style="margin: 5rem; display: flex; flex-direction: column; width: 80rem">
        <m-radio-group v-model="labelPosition" size="small">
          <m-radio-button label="left">Left</m-radio-button>
          <m-radio-button label="right">Right</m-radio-button>
          <m-radio-button label="top">Top</m-radio-button>
        </m-radio-group>
        <div style="margin: 20px;"></div>
        <m-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <m-form-item label="Name">
            <m-input v-model="formLabelAlign.name"></m-input>
          </m-form-item>
          <m-form-item label="Activity zone">
            <m-input v-model="formLabelAlign.region"></m-input>
          </m-form-item>
          <m-form-item label="Activity form">
            <m-input v-model="formLabelAlign.type"></m-input>
          </m-form-item>
        </m-form>
      </m-container>
    `,
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
        },
      };
    },
  }))
  .add('Validation', () => ({
    template: html`
      <m-container style="margin: 5rem;">
        <m-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <m-form-item label="Activity name" prop="name">
            <m-input v-model="ruleForm.name"></m-input>
          </m-form-item>
          <m-form-item label="Activity zone" prop="region">
            <m-select v-model="ruleForm.region" placeholder="Activity zone">
              <m-option label="Zone one" value="shanghai"></m-option>
              <m-option label="Zone two" value="beijing"></m-option>
            </m-select>
          </m-form-item>
          <m-form-item label="Activity time" required>
            <m-col :span="11">
              <m-form-item prop="date1">
                <m-date-picker
                  type="date"
                  placeholder="Pick a date"
                  v-model="ruleForm.date1"
                  style="width: 100%;"
                ></m-date-picker>
              </m-form-item>
            </m-col>
            <m-col class="line" :span="2">-</m-col>
            <m-col :span="11">
              <m-form-item prop="date2">
                <m-time-picker
                  placeholder="Pick a time"
                  v-model="ruleForm.date2"
                  style="width: 100%;"
                ></m-time-picker>
              </m-form-item>
            </m-col>
          </m-form-item>
          <m-form-item label="Instant delivery" prop="delivery">
            <m-switch v-model="ruleForm.delivery"></m-switch>
          </m-form-item>
          <m-form-item label="Activity type" prop="type">
            <m-checkbox-group v-model="ruleForm.type">
              <m-checkbox label="Online activities" name="type"></m-checkbox>
              <m-checkbox label="Promotion activities" name="type"></m-checkbox>
              <m-checkbox label="Offline activities" name="type"></m-checkbox>
              <m-checkbox label="Simple brand exposure" name="type"></m-checkbox>
            </m-checkbox-group>
          </m-form-item>
          <m-form-item label="Resources" prop="resource">
            <m-radio-group v-model="ruleForm.resource">
              <m-radio label="Sponsorship"></m-radio>
              <m-radio label="Venue"></m-radio>
            </m-radio-group>
          </m-form-item>
          <m-form-item label="Activity form" prop="desc">
            <m-input type="textarea" v-model="ruleForm.desc"></m-input>
          </m-form-item>
          <m-form-item>
            <m-button type="primary" @click="submitForm('ruleForm')">Create</m-button>
            <m-button @click="resetForm('ruleForm')">Reset</m-button>
          </m-form-item>
        </m-form>
      </m-container>
    `,
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        rules: {
          name: [
            {
              required: true,
              message: 'Please input Activity name',
              trigger: 'blur',
            },
            {
              min: 3,
              max: 5,
              message: 'Length should be 3 to 5',
              trigger: 'blur',
            },
          ],
          region: [
            {
              required: true,
              message: 'Please select Activity zone',
              trigger: 'change',
            },
          ],
          date1: [
            {
              type: 'date',
              required: true,
              message: 'Please pick a date',
              trigger: 'change',
            },
          ],
          date2: [
            {
              type: 'date',
              required: true,
              message: 'Please pick a time',
              trigger: 'change',
            },
          ],
          type: [
            {
              type: 'array',
              required: true,
              message: 'Please select at least one activity type',
              trigger: 'change',
            },
          ],
          resource: [
            {
              required: true,
              message: 'Please select activity resource',
              trigger: 'change',
            },
          ],
          desc: [
            {
              required: true,
              message: 'Please input activity form',
              trigger: 'blur',
            },
          ],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$alert('Are you sure you want to submit?', 'Confirm', {
              confirmButtonText: 'OK',
              callback: (a) => {
                this.$message({
                  type: a === 'confirm' ? 'success' : 'error',
                  message: a === 'confirm' ? 'Form Submitted!' : 'Submission cancelled.',
                });
              },
            });
            return true;
          }

          console.log('Error trying to submit!');
          return false;
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
  }))
  .add('Custom validation rules', () => ({
    template: html`
      <m-container style="margin: 5rem;">
        <m-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
          style="width: 40rem;"
        >
          <m-form-item label="Password" prop="pass">
            <m-input type="password" v-model="ruleForm.pass" autocomplete="off"></m-input>
          </m-form-item>
          <m-form-item label="Confirm" prop="checkPass">
            <m-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></m-input>
          </m-form-item>
          <m-form-item label="Age" prop="age">
            <m-input v-model.number="ruleForm.age"></m-input>
          </m-form-item>
          <m-form-item>
            <m-button type="primary" @click="submitForm('ruleForm')">Submit</m-button>
            <m-button @click="resetForm('ruleForm')">Reset</m-button>
          </m-form-item>
        </m-form>
      </m-container>
    `,
    data() {
      const checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }, 1000);

        return true;
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error("Two inputs don't match!"));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
        },
        rules: {
          pass: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
          age: [{ validator: checkAge, trigger: 'blur' }],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$alert('Are you sure you want to submit?', 'Confirm', {
              confirmButtonText: 'OK',
              callback: (a) => {
                this.$message({
                  type: a === 'confirm' ? 'success' : 'error',
                  message: a === 'confirm' ? 'Form Submitted!' : 'Submission cancelled.',
                });
              },
            });
          } else {
            console.log('error submit!!');
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
  }))
  .add('Delete or add form items dynamically', () => ({
    template: html`
      <m-container style="margin: 5rem;">
        <m-form
          :model="dynamicValidateForm"
          ref="dynamicValidateForm"
          label-width="120px"
          class="demo-dynamic"
        >
          <m-form-item
            prop="email"
            label="Email"
            :rules="[
              { required: true, message: 'Please input email address', trigger: 'blur' },
              { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
            ]"
          >
            <m-input v-model="dynamicValidateForm.email"></m-input>
          </m-form-item>
          <m-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'Domain' + index"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
            :rules="{
              required: true, message: 'domain can not be null', trigger: 'blur'
            }"
          >
            <m-input v-model="domain.value"></m-input
            ><m-button @click.prevent="removeDomain(domain)">Delete</m-button>
          </m-form-item>
          <m-form-item>
            <m-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</m-button>
            <m-button @click="addDomain">New domain</m-button>
            <m-button @click="resetForm('dynamicValidateForm')">Reset</m-button>
          </m-form-item>
        </m-form>
      </m-container>
    `,
    data() {
      return {
        dynamicValidateForm: {
          domains: [
            {
              key: 1,
              value: '',
            },
          ],
          email: '',
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$alert('Are you sure you want to submit?', 'Confirm', {
              confirmButtonText: 'OK',
              callback: (a) => {
                this.$message({
                  type: a === 'confirm' ? 'success' : 'error',
                  message: a === 'confirm' ? 'Form Submitted!' : 'Submission cancelled.',
                });
              },
            });
          } else {
            console.log('error submit!!');
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        const index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1);
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: '',
        });
      },
    },
  }));
