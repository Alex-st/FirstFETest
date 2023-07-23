const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
const arr1 = ['value1', 'value2', 'value3'];
const arr2 = ['red', 'blue', 'green'];
const objects = [
    {
        id: 0,
        name: 'admin',
        role: 'IT'
    },
    {
        id: 1,
        name: 'CEO',
        role: 'manager'
    }
]
const showText = true;

// creating new component as a function
const List = (props) => {
    console.log(props)
    return <ul>
        {props.arr.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
}

// if arr argument is absent use empty array
const ListAdvanced = ({arr=[], tag="ol"}) => {
    const CustomTag = `${tag}`; //<ul>, <ol>
    return arr.length != 0
        ? <CustomTag>
            {arr.map((item, index) => <LiAdvanced index ={index} item={item}/>)}
        </CustomTag>
        : null
}

// List that could be dynamically updated by react, need to use state
const DynamicallyUpdatedList = ({arr=[], tag="ol"}) => {
    const CustomTag = `${tag}`; //<ul>, <ol>

    return arr.length != 0
        ? <CustomTag>
            {arr.map((item, index) => <LiAdvanced index ={index} item={item}/>)}
        </CustomTag>
        : null
}

const LiAdvanced = ({index, item}) => {
    return <li key={index}>{item}</li>;
}

const Button = ({text}) => {
    return <button>{text}</button>
}

setTimeout(() => {
    console.log(`After 1000ms`);
    arr1.push('value4');
    console.log(arr1)
}, 1000)

const App = <React.Fragment>
    <h1 className="heading">Hello world</h1>
    <h2>h2 text</h2>

    <List arr ={arr1}/>
    <ListAdvanced arr ={arr2} tag={"ol"}/>
    <DynamicallyUpdatedList arr ={arr1} tag={"ul"}/>

    <table className="users">
        <thead>
            <tr>
                <th>Role</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {objects.map((item,index) => <tr key={item.id}>
                {Object.keys(item).filter(el => el !== 'id')
                    .map((el,i)=> <td key={i}>{item[el]}</td>)}
            </tr>)}
        </tbody>
    </table>

    {/*    conditional text two variants, first is prefferable*/}
    {showText ? <h3>Conditional text </h3> : null}
    {showText && <h3>Conditional text </h3> }

    <Button text="Delete"/>

</React.Fragment>;


root.render(App);
//development here, after
// npx babel --watch src --out-dir . --presets react-app/prod
// script.js in root folder will be generated