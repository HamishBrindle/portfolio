const nodemailer = require('nodemailer');
const { util } = require('../tools');

const html = util.tag; // For tooling
const css = util.tag;

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const emailTemplates = {
  resetPassword: (text) => {
    const cssTemplate = css`
      .email {
        border: 1px solid black;
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 20px;
        font-size: 20px;
      }
    `;

    const htmlTemplate = html`
      <style>
        ${cssTemplate}
      </style>
      <div class="email">
        <h2>Hello There!</h2>
        <p>${text}</p>
      </div>
    `;

    return htmlTemplate;
  }
}

const makeEmail = (template, text) => {
  if (!text)
    text = '';

  if (!emailTemplates[template])
    throw new Error('HTML template for email not found.')

  return emailTemplates[template](text);
};

module.exports = {
  transport,
  makeEmail
};