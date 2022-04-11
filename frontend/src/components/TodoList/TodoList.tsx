import './TodoList.css';

import React from 'react'
import { Todo } from '../../types';
import { TodoItem } from '../index';

type Props  = {
  todos: Todo[];
}


const TodoList: React.FC<Props> = ({ todos }: Props) => {
  return (
    <ul className="todo-list">
      {
        todos.length
        ? todos.map((todo, i) => <li key={i}><TodoItem todo={todo} /></li>)
        : <div className="todo-list-loader">Loading...</div>
      }
    </ul>
  );
}

export default TodoList;
