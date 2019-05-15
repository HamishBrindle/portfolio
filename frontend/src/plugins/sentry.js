import * as Sentry from '@sentry/browser';
import * as Integration from '@sentry/integrations';

export default {
  install(Vue) {
    Sentry.init({
      dsn: process.env.VUE_APP_SENTRY_DSN,
      beforeSend(event) {
        if (event.exception) {
          Sentry.showReportDialog({ eventId: event.event_id });
        }
        console.error(event);
        return event;
      },
      integrations: [
        new Integration.Vue({
          Vue,
          attachProps: true,
        }),
      ],
      debug: true,
    });
  },
};
