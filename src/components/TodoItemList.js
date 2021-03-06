import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllTodos } from '../actions';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    componentDidMount() {
        //action 생성함수 호출
        this.props.fetchAllTodos();
    }

    //true반환하면 Re렌더링이 되고, false를 반환하면 Re렌더링을 생략한다
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, myToggle, myRemove } = this.props;
        const todoList = todos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    myToggle={myToggle}
                    myRemove={myRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps, {fetchAllTodos})(TodoItemList);