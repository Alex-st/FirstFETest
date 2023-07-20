var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);
var helloWorldConst = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hello world'
  ),
  React.createElement(
    'h2',
    null,
    'h2 text'
  )
);
root.render(helloWorldConst);
//development here, after
// npx babel --watch src --out-dir . --presets react-app/prod
// script.js in root folder will be generated