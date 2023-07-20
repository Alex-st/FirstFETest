const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
const helloWorldConst = <div><h1>Hello world</h1><h2>h2 text</h2></div>;
root.render(helloWorldConst);
//development here, after
// npx babel --watch src --out-dir . --presets react-app/prod
// script.js in root folder will be generated