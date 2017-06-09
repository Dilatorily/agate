import debug from 'electron-debug'; // eslint-disable-line import/no-extraneous-dependencies
import install, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'; // eslint-disable-line import/no-extraneous-dependencies

export default () => {
  debug();
  install(REACT_DEVELOPER_TOOLS);
  install(REDUX_DEVTOOLS);
};
