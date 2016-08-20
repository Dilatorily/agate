import { jsdom } from 'jsdom'; // eslint-disable-line import/no-extraneous-dependencies

const window = `
  <!DOCTYPE>
  <html>
    <body>
      <div id="root"></div>
    </body>
  </html>
`;

const reset = () => {
  global.window = jsdom(window).defaultView;
  global.document = global.window.document;
};
reset();

export default reset;
