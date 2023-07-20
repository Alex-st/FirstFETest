var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(
  'h1',
  null,
  'Hello world'
));
//development here, after
// npx babel --watch src --out-dir . --presets react-app/prod
// script.js in root folder will be generated