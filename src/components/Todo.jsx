import React, { useState } from "react";
import "../style/Todo.css";
import { nanoid } from "nanoid";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FaTrashCan } from "react-icons/fa6";

export default function Todo() {
	let id = nanoid();
	const [mode, setMode] = useState(false);
	const onClickMode = () => {
		console.log("mode switch!");
		if (mode === false) {
			setMode(true);
		} else {
			setMode(false);
		}
	};

	const [done, setDone] = useState(false);
	const onClickDone = (e) => {
		const targetId = e.target.name;
		todoList.map((t) => {
			if (t.id === targetId) {
				setDone(!t.done);
			}
		});
	};

	const [todoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState({ id: "", todo: "" });

	const onChangeTodo = (e) => {
		const { name, value, done } = e.target;
		setTodo({ ...todo, id, [name]: value, done });
	};

	const onClickAdd = (e) => {
		e.preventDefault();
		console.log(todo);
		setTodoList([...todoList, todo]);
		console.log(todoList);
		setTodo({ todo: "" });
	};

	const onClickDelete = (e) => {
		const targetId = e.target.name;
		const result = todoList.filter((todo) => todo.id !== targetId);
		setTodoList(result);
	};

	return (
		<div className='todo__container'>
			{/* Header - State */}
			<header className='header__container'>
				<div className='header__mode'>
					<button className='header__mode__btn' onClick={onClickMode}>
						{mode ? <MdDarkMode /> : <MdLightMode />}
					</button>
				</div>
				<nav className='header__nav'>
					<button className='header__nav__btn' id='all'>
						All
					</button>
					<button className='header__nav__btn' id='active'>
						Active
					</button>
					<button className='header__nav__btn' id='completed'>
						Completed
					</button>
				</nav>
			</header>

			{/* Main - Lists */}
			<section className='todo__lists'>
				<ul>
					{todoList.map((t) => (
						<div key={t.id} className='todo__list'>
							<button onClick={onClickDone} name={t.id} value={t.todo} done={t.done} className='todo__list__checkbtn'>
								{/* {done ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />} */}
								{done ? "✅" : "❎"}
							</button>
							<li>{t.todo}</li>
							<button onClick={onClickDelete} name={t.id} value={t.todo} className='todo__delete__btn'>
								{/* <FaTrashCan /> */}
								del
							</button>
						</div>
					))}
				</ul>
			</section>

			{/* Footer - Add */}
			<footer className='todo__add'>
				<form className='todo__add__form' onSubmit={onClickAdd}>
					<input type='text' className='todo__add__input' onChange={onChangeTodo} name='todo' value={todo.todo} id='todo' placeholder='Add Todo' />
					<button className='todo__add__btn'>Add</button>
				</form>
			</footer>
		</div>
	);
}
