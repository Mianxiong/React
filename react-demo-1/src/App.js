import React from "react";
import ReactDOM from "react-dom";
//PureComponent发现对象不一样，但里面值是一样的,都是一样的就不render
//PureComponent在render之前，对新旧state进行对比，对比只对比一层，最外面那一层，不会递归
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      n: 1,
      array: [1,2,3]
    };
  }
  onClick = () => {
    // this.setState((state) => {
    //   return {
    //     n: state.n - 1,
    //   };
    // });
    this.setState((state) => ({
      n: state.n + 1,
    }));
  };
  //PureComponent发现对象不一样，但里面值是一样的,都是一样的就不render
  // shouldComponentUpdate(newProps, newState) {
  //   if(newState.n === this.state.n) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  render() {
    // console.log('render了一次')
    // return (
    //   <div>
    //     App
    //     <div>
    //       {this.state.n}
    //       <button onClick={this.onClick}>+1</button>
    //     </div>
    //   </div>
    // );
    // let message;
    // if (this.state.n % 2 === 0) {
    //   message = <div>偶数</div>;
    // } else {
    //   message = <span>奇数</span>;
    // }
    // return (
      // <React.Fragment>
      //   {/* {message} */}
      //   {this.state.n % 2 === 0 ? <div>偶数</div> : <span>奇数</span>}
      //   <button onClick={this.onClick}>+1</button>
      // </React.Fragment>
    // );

    //推荐写法
    return this.state.array.map(n=><span key={n}>{n}</span>)

    // let result = []
    // for(let i = 0;i<this.state.array.length; i++) {
    //   result.push(this.state.array[i])
    // }
    // return result
  }
}
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {x:1}
//   }
//   onClick = () => {
//     this.setState({
//       x:this.state.x+1
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//         App <button onClick={this.onClick}>+1</button>
//         <B name={this.state.x}/>
//       </div>
//     )
//   }
// }

// class B extends React.Component {
//   render() {
//     return (
//       <div>{this.props.name}</div>
//     )
//   }
// }

export default App;
// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       爸爸
//       <Son />
//     </div>
//   );
// }

// class Son extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       n: 0,
//     };
//   }
//   add() {
//     //this.state.n += 1
//     this.setState({ n: this.state.n + 1 });
//   }
//   render() {
//     return (
//       <div className="Son">
//         儿子 n: {this.state.n}
//         <button onClick={() => this.add()}>+1</button>
//         <Grandson />
//       </div>
//     );
//   }
// }
// const GrandSon = () => {
//   // const array = React.useState(0);
//   // const n = array[0];
//   // const setN = array[1];
//   //setN之后是得到一个新的n，而不是改变原有的n

//   const [n, setN] = React.useState(0);
//   return (
//     <div className="Grandson">
//       孙子 n:{n}
//       <button onClick={() => setN(n + 1)}>+1</button>
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
