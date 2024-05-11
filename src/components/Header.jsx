import React from "react";
import "../style/Todo.css";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function Header({ mode, onClickMode, todoList, onClickAll, onClickActive, onClickComplete }) {
	return (
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
	);
}
