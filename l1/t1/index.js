const rootElem = document.querySelector('#root');
console.log(rootElem);

const newElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(newElem, rootElem);
