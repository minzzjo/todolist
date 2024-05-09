import React, { useState } from "react";
import "../style/Todo.css";
import { v4 as uuidv4 } from "uuid";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FaTrashCan } from "react-icons/fa6";

export default function Todo() {
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
	const onClickDone = () => {
		console.log("clicked!");
		if (done === false) {
			setDone(true);
		} else {
			setDone(false);
		}
	};

	const [show, setShow] = useState(false);

	const [id, setId] = useState();
	const uuidFromUUIDV4 = () => {
		const newID = uuidv4();
		setId(newID);
	};

	const [item, setItem] = useState({ id: "", item: "" });
	const [todo, setTodo] = useState([]);
	const onChangeItem = (e) => {
		const { name, value } = e.target;
		uuidFromUUIDV4();
		setItem({ ...item, id: id, [name]: value });
		setShow(true);
	};

	const onClickAdd = (e) => {
		setTodo([...todo, item]);
		e.preventDefault();
		console.log("input value", item);
		console.log(todo);
		setItem({ id: "", item: "" });
	};

	// TODO: 삭제 기능 구현
	const onClickDelete = () => {
		console.log("delete");
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
				{/* TODO: 버튼 눌렀을 때 상태별로 나눠서 보여주기 */}
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
					{/* FIXME: map돌려서 붙기는 하는데 체크박스 상태가 전부 연결되어있음.. */}
					{show && (
						<>
							{todo.map((list) => {
								if (todo !== "" && todo.length !== 0) {
									return (
										<div className='todo__list__box' key={list.id}>
											<div className='todo__list'>
												<button className='todo__list__checkbtn' onClick={onClickDone}>
													{done ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
												</button>
												<li className='todo__list__item'>{list.item}</li>
											</div>
											<button className='todo__delete__btn' onClick={onClickDelete}>
												<FaTrashCan />
											</button>
										</div>
									);
								} else {
									return "";
								}
							})}
						</>
					)}
				</ul>
			</section>

			{/* Footer - Add */}
			<footer className='todo__add'>
				<form className='todo__add__form' onSubmit={onClickAdd}>
					<input type='text' className='todo__add__input' onChange={onChangeItem} name='item' value={item.item} id='item' placeholder='Add Todo' />
					<button className='todo__add__btn'>Add</button>
				</form>
			</footer>
		</div>
	);
}
