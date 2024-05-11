import React, { useState } from "react";
import "../style/Todo.css";
import { nanoid } from "nanoid";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FaTrashCan } from "react-icons/fa6";
import Header from "./Header";
import Footer from "./Footer";
import Lists from "./Lists";

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
	const [done, setDone] = useState(false);
	// create
	const onChangeTodo = (e) => {
		const { name, value, done } = e.target;
		console.log(e.target);
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
			<Header mode={mode} onClickMode={onClickMode} todoList={todoList} onClickAll={onClickAll} onClickActive={onClickActive} onClickComplete={onClickComplete} />

			<Lists todoList={todoList} onClickDone={onClickDone} onClickDelete={onClickDelete} />

			<Footer todo={todo} onClickAdd={onClickAdd} onChangeTodo={onChangeTodo} />
		</div>
	);
}
