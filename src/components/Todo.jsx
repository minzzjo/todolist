import React, { useState } from "react";
import "../style/Todo.css";
import { nanoid } from "nanoid";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FaTrashCan } from "react-icons/fa6";

export default function Todo() {
	let id = nanoid();
	// Mode
	const [mode, setMode] = useState(false);
	const onClickMode = () => {
		console.log("mode switch!");
		if (mode === false) {
			setMode(true);
		} else {
			setMode(false);
		}
	};

	const [todoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState({ id: "", todo: "" });
	// create
	const onChangeTodo = (e) => {
		const { name, value, done } = e.target;
		setTodo({ ...todo, id, [name]: value, done });
	};
	// read
	const onClickAdd = (e) => {
		e.preventDefault();
		console.log(todo);
		setTodoList([...todoList, todo]);
		console.log(todoList);
		setTodo({ todo: "" });
	};
	// delete
	const onClickDelete = (e) => {
		const targetId = e.target.name;
		const result = todoList.filter((todo) => todo.id !== targetId);
		setTodoList(result);
	};
	// check
	const onClickDone = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		todoList.map((todo) => {
			if (todo.id === name) {
				todo.done = !value;
			}
			return todo;
		});
		setTodo({ ...todo, todo });
	};

	// navBtn
	const onClickAll = (e) => {
		console.log(e.target.value);
	};

	const onClickActive = (e) => {
		console.log(e.target.value);
	};

	const onClickComplete = (e) => {
		console.log(e.target.value);
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
					<button onClick={onClickAll} className='header__nav__btn' id='all' value='all'>
						All
					</button>
					<button onClick={onClickActive} className='header__nav__btn' id='active' value='active'>
						Active
					</button>
					<button onClick={onClickComplete} className='header__nav__btn' id='completed' value='completed'>
						Completed
					</button>
				</nav>
			</header>

			{/* Main - Lists */}
			<section className='todo__lists'>
				<ul>
					{todoList.map((t) => (
						<div key={t.id} className='todo__list'>
							<button onClick={onClickDone} name={t.id} value={t.done} className='todo__list__checkbtn'>
								{/* {todo.done ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />} */}
								{t.done ? "✅" : "❎"}
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
