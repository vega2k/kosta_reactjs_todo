import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    //true반환하면 Re렌더링이 되고, false를 반환하면 Re렌더링을 생략한다
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, myToggle, myRemove } = this.props;
        return (
            <div className="todo-item" onClick={() => myToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // myToggle 이 실행되지 않도록 함
                    myRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}
export default TodoItem;
