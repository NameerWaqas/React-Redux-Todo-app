import React from 'react';
import { AddTodo, DeleteTodo } from "./Redux/actionCreater";
import { connect } from "react-redux";
import './App.css';

const mapDispatchToProps = (dispatch) => ({
  addTodo: (e) => dispatch(AddTodo(e)),
  delTodo: (e) => dispatch(DeleteTodo(e))
})

const mapStateToProps = (state) => ({
  mainState: state.mainState
})


class App extends React.Component {
  constructor(){
    super();
    this.state={
      todoText:""
    }
  }
handleInput = (param)=>{
  this.setState({
    todoText:param.target.value
  })
}
  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <h5>Using React-Redux</h5>
        {
          this.props.mainState.todos.map(
            (param,id) => {
              return <div 
              style={{ textAlign: "left", margin: "1%",display:"flex",border:"1px solid orange",height:"30px",borderRadius:"10px"}}
              >
                <div style={{flex:"9",margin:"auto",arginLeft:"2%" }}>{param}</div>                
                <div style={{ flex:"1"}}>
                  <button style={{ height:"30px",width:"inherit"}} onClick={()=>this.props.delTodo(id)}>DELETE</button>
                </div>
              </div>
            }
          )
        }
        <div><input type="text" onChange={this.handleInput}/></div>
        <div><button onClick={()=>this.props.addTodo(this.state.todoText)}>ADD Todo</button></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
