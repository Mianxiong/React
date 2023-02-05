import React from "react";
import ReactDOM from "react-dom";

function App() {
  const a = 10;
  return (
    <div className="App">
      爸爸
      <Son messageForSon="儿子你好" />
      <Son messageForSon={a} />
    </div>
  );
}

class Son extends React.Component {
  constructor() {
    super();
    this.state = {//只会合并第一层，不会合并第二层
      n: 0,
      m: 0,
      user: {
        name: "John",
        age: 18
      }
    };
    
  }
  addN = ()=>this.setState((state) => {
    return { n: state.n + 1 };
  }); //箭头函数的this是不会变的
  // addN() {
  //   //this.state.n += 1 //为什么不行
  //   // this.setState({ n: this.state.n + 1 });
    
  // }
  addM() {
    this.setState((state) => {
      return { m: this.state.m + 1 };
    });
  }
  changeUser(){
    this.setState({
      //m和n不会被置空
      user: {
        ...this.state.user,
        name: "jack"
        //age被置空
      }
    })
  }
  render() {
    return (
      <div className="Son">
        儿子 n: {this.state.n}
        m: {this.state.m}
        {this.props.messageForSon}
        <button onClick={() => this.addN()}>n+1</button>
        <button onClick={() => this.addM()}>m+1</button>
        <hr/>
        <div>user.name: {this.state.user.name}</div>
        <div>user.age: {this.state.user.age}</div>
        <button onClick={()=> this.changeUser()}>change user</button>
        <Grandson messageForGrandson="孙子你好" />
      </div>
    );
  }
}
const Grandson = (props) => {
  // const array = React.useState(0);
  // const n = array[0];
  // const setN = array[1];
  //setN之后是得到一个新的n，而不是改变原有的n

  const [n, setN] = React.useState(0); //初始值，如何读，如何写
  const [m, setM] = React.useState(0);
  return (
    <div className="Grandson">
      孙子 n:{n}
      {props.messageForGrandson}
      <button onClick={() => setN(n + 1)}>n+1</button>
      m: {m}
      <button onClick={() => setM(m + 1)}>m+1</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from './App';

// let div = document.getElementById('root')
// ReactDOM.render(<App/>,div)

// ReactDOM.render(<div>hi</div>, div);

// const root = document.querySelector('#root')

// let n = 0
// const App = ()=> React.createElement('div', {
//     className: 'red'
// }, [n, React.createElement('button', {
//     onClick: () => {
//         n += 1
//         ReactDOM.render(App(), root)
//     }
// }, '+1')])
// ReactDOM.render(App(), root)
// let n = 0;
// //函数组件
// const App = () => {
//   return (
//     <div className="red">
//       {n}
//       <button
//         onClick={() => {
//           n += 1;
//           render();
//         }}
//       >
//         +1
//       </button>
//       {n % 2 == 0 ? <div>n是偶数</div> : <div>n是奇数</div>}
//       <Component3 numbers={[1,2,3]}/>
//     </div>
//   );
// };
// const Component = () => {
//   const content = (
//     <div>{n % 2 == 0 ? <div>n是偶数</div> : <div>n是奇数</div>}</div>
//   );
//   return content;
// };
// const Component1 = (props) => {
//   return props.numbers.map((n, index) => {
//     return (
//       <div>
//         下标{index}值为{n}
//       </div>
//     );
//   });
// };
// const Component2 = (props) => {
//   return (
//     <div>
//       {props.numbers.map((n, index) => {
//         return (
//           <div>
//             下标{index}值为{n}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// const Component3 = (props) => {
//     const array = []
//     for(let i = 0;i<props.numbers.length;i++) {
//         array.push(<div>下标{i}值为{props.numbers[i]}</div>)
//     }
//     return <div>{array}</div>
// }
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }
// <Welcome name="frank"/>
//组件直接当标签用,它会主动去调用App这个函数的
// const render = () => ReactDOM.render(<App />, document.querySelector("#root"));
// render();
// let i
// for (i = 0; i < 6; i++) {
//     // setTimeout(()=>console.log(i),1000)
//     setTimeout(console.log(i), 1000)
// }
