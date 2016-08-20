const index = () => {
  const rootNode = document.getElementById('root');
  const headingNode = document.createElement('h1');
  const greetings = document.createTextNode('Hello, World!');

  headingNode.appendChild(greetings);
  rootNode.appendChild(headingNode);
};
index();

export default index;
