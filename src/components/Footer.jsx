import React from "react";
import "../style/Todo.css";

export default function Footer({ todo, onClickAdd, onChangeTodo }) {
	return (
		<footer className='todo__add'>
			<form className='todo__add__form' onSubmit={onClickAdd}>
				<input type='text' className='todo__add__input' onChange={onChangeTodo} name='todo' value={todo.todo} id='todo' placeholder='Add Todo' />
				<button className='todo__add__btn'>Add</button>
			</form>
		</footer>
	);
}
