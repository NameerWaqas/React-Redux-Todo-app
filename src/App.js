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
      todoText:"",
      inputDefVal:""
    }
  }
handleInput = (param)=>{
  this.setState({
    todoText:param.target.value
  })
}
handleAddTodoBtn = ()=>{
  if(this.state.todoText=="")
  {
    return;
  }
  else{
    this.props.addTodo(this.state.todoText);
    // this.setState({
    // inputDefVal:""
    // })    
   
  }
}
  render() {
    return (
      <div className="App" style={{backgroundColor:"lightGray",height:"100vh"}}>
        <h1>TODO APP</h1>
        <h5>Using React-Redux</h5>
        {
          this.props.mainState.todos.map(
            (param,id) => {
              return <div 
              style={{ textAlign: "left", margin: "1%",display:"flex",border:"1px solid orange",height:"40px",borderRadius:"10px",
            }}
              >
                <div style={{flex:"9",margin:"auto",arginLeft:"2%" }}>{param}</div>                
                <div style={{ flex:"1",height:"inherit"}}>
                  <button style={{ height:"30px",width:"100%",height:"inherit",borderRadius:"10px",backgroundColor:"yellow"
                }} onClick={()=>this.props.delTodo(id)}>DELETE</button>
                </div>
              </div>
            }
          )
        }
        <div><input type="text" onChange={this.handleInput} defaultValue={this.state.inputDefVal}/></div>
        <div><button onClick={()=>this.handleAddTodoBtn()}>ADD Todo</button></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
