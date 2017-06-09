// CSS Styles
import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';

const index = () => {
  const rootNode = document.getElementById('root');
  render(<h1>Hello, World!</h1>, rootNode);
};
index();

export default index;
