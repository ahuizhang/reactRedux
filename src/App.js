import React, { Component } from 'react';
import { connect } from 'react-redux'
import {add,inc} from './store/createActions/ageAction'
import './App.css';
@connect(
  state => ({ age: state.Age }),
  {add, inc}
)
class App extends Component {

  render() {
    const { age, count } = this.props.age
    return (
      <div className="App">
        <span>{age}</span>
        <button onClick={this.props.add} key={1}>+</button>
        <button onClick={this.props.inc} key={2}>-</button>
        <span>{count}</span>
      </div>
    );
  }
}


// function mapStateToProps(state) {  //从store中取出想要的值
//   return { age: state.Age }
// }
// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     add: () => dispatch({   //测试  redux-promise-middleware
//       type: "ADD_AGE",
//       payload: new Promise(reslove => setTimeout(() => reslove(), 1000))
//     }),
//     inc: () => dispatch({ type: "SUB_AGE" })
//   }
// }

export default App;
// export default connect(mapStateToProps,mapDispatchToProps)(App);