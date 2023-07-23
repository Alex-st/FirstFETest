var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);
var arr1 = ['value1', 'value2', 'value3'];
var arr2 = ['red', 'blue', 'green'];
var objects = [{
    id: 0,
    name: 'admin',
    role: 'IT'
}, {
    id: 1,
    name: 'CEO',
    role: 'manager'
}];
var showText = true;

// creating new component as a function
var List = function List(props) {
    console.log(props);
    return React.createElement(
        'ul',
        null,
        props.arr.map(function (item, index) {
            return React.createElement(
                'li',
                { key: index },
                item
            );
        })
    );
};

// if arr argument is absent use empty array
var ListAdvanced = function ListAdvanced(_ref) {
    var _ref$arr = _ref.arr,
        arr = _ref$arr === undefined ? [] : _ref$arr,
        _ref$tag = _ref.tag,
        tag = _ref$tag === undefined ? "ol" : _ref$tag;

    var CustomTag = '' + tag; //<ul>, <ol>
    return arr.length != 0 ? React.createElement(
        CustomTag,
        null,
        arr.map(function (item, index) {
            return React.createElement(LiAdvanced, { index: index, item: item });
        })
    ) : null;
};

// List that could be dynamically updated by react, need to use state
var DynamicallyUpdatedList = function DynamicallyUpdatedList(_ref2) {
    var _ref2$arr = _ref2.arr,
        arr = _ref2$arr === undefined ? [] : _ref2$arr,
        _ref2$tag = _ref2.tag,
        tag = _ref2$tag === undefined ? "ol" : _ref2$tag;

    var CustomTag = '' + tag; //<ul>, <ol>

    return arr.length != 0 ? React.createElement(
        CustomTag,
        null,
        arr.map(function (item, index) {
            return React.createElement(LiAdvanced, { index: index, item: item });
        })
    ) : null;
};

var LiAdvanced = function LiAdvanced(_ref3) {
    var index = _ref3.index,
        item = _ref3.item;

    return React.createElement(
        'li',
        { key: index },
        item
    );
};

var Button = function Button(_ref4) {
    var text = _ref4.text;

    return React.createElement(
        'button',
        null,
        text
    );
};

setTimeout(function () {
    console.log('After 1000ms');
    arr1.push('value4');
    console.log(arr1);
}, 1000);

var App = React.createElement(
    React.Fragment,
    null,
    React.createElement(
        'h1',
        { className: 'heading' },
        'Hello world'
    ),
    React.createElement(
        'h2',
        null,
        'h2 text'
    ),
    React.createElement(List, { arr: arr1 }),
    React.createElement(ListAdvanced, { arr: arr2, tag: "ol" }),
    React.createElement(DynamicallyUpdatedList, { arr: arr1, tag: "ul" }),
    React.createElement(
        'table',
        { className: 'users' },
        React.createElement(
            'thead',
            null,
            React.createElement(
                'tr',
                null,
                React.createElement(
                    'th',
                    null,
                    'Role'
                ),
                React.createElement(
                    'th',
                    null,
                    'Name'
                )
            )
        ),
        React.createElement(
            'tbody',
            null,
            objects.map(function (item, index) {
                return React.createElement(
                    'tr',
                    { key: item.id },
                    Object.keys(item).filter(function (el) {
                        return el !== 'id';
                    }).map(function (el, i) {
                        return React.createElement(
                            'td',
                            { key: i },
                            item[el]
                        );
                    })
                );
            })
        )
    ),
    showText ? React.createElement(
        'h3',
        null,
        'Conditional text '
    ) : null,
    showText && React.createElement(
        'h3',
        null,
        'Conditional text '
    ),
    React.createElement(Button, { text: 'Delete' })
);

root.render(App);
//development here, after
// npx babel --watch src --out-dir . --presets react-app/prod
// script.js in root folder will be generated