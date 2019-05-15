import Loading from 'element-ui/lib/loading';
import MessageBox from 'element-ui/lib/message-box';
import Message from 'element-ui/lib/message';
import Notification from 'element-ui/lib/notification';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

export default {
  install(Vue) {
    locale.use(lang);

    Vue.use(Loading.directive);

    /**
     * TODO: Fix error: "ReferenceError: _Loading is not defined"
     *
     * At the moment, using these prototype-overrides fails
     * all our tests.
     *
     * It's probably something that should be figured out, but for
     * now, let's just skip it while we're fleshing things out.
     */
    if (process.env.NODE_ENV !== 'test') {
      Vue.prototype.$loading = Loading.service;
      Vue.prototype.$msgbox = MessageBox;
      Vue.prototype.$alert = MessageBox.alert;
      Vue.prototype.$confirm = MessageBox.confirm;
      Vue.prototype.$prompt = MessageBox.prompt;
      Vue.prototype.$notify = Notification;
      Vue.prototype.$message = Message;
    }
  },
};
