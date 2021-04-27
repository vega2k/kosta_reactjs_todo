import React, { Component } from 'react';

import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoListTemplate from './components/TodoListTemplate';

const initialTodos = new Array(500).fill(0).map(
  (item, idx) => ({ id: idx, text: `일정 ${idx}`, checked: true })
 );

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정
  //상태변수 선언
  state = {
    todo: '',
    todos: initialTodos
    // todos: [
    //   { id: 0, text: '리액트 소개', checked: false },
    //   { id: 1, text: '리액트 구조', checked: true },
    //   { id: 2, text: '리액트 사용', checked: false }
    // ]
  };
  //Event Handler Method 선언
  handleChange = (e) => {
    this.setState({
      todo: e.target.value // todo 의 다음 바뀔 값
    });
  };
  handleCreate = () => {
    const { todo, todos } = this.state;
    this.setState({
      todo: '', // todo 초기화
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: todo,
        checked: false
      })
    });
  };
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 이면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };
  handleToggle = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
    });
  };
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { todo, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this;

    return (
      <div>
        <TodoListTemplate form={
          <Form
            todo={todo}
            myChange={handleChange}
            myKeyPress={handleKeyPress}
            myCreate={handleCreate}
          />}>
          <TodoItemList todos={todos} 
                        myToggle={handleToggle} 
                        myRemove={handleRemove} />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;