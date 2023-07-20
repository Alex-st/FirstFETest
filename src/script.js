const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<h1>Hello world</h1>);
//development here, after
// npx babel --watch src --out-dir . --presets react-app/prod
// script.js in root folder will be generated