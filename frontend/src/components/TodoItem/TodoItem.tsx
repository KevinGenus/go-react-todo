import './TodoItem.css';

import React from 'react';
import { Todo } from '../../types';

type Props = {
  todo: Todo;
}

const TodoItem: React.FC<Props> = (props) => {
  const {title, description, isComplete} = props.todo
  return (
    <article className='todo-item'>
      <section className='todo-item-text'>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
      <input type="checkbox" defaultChecked={isComplete} />
    </article>
  );
}

export default TodoItem;
