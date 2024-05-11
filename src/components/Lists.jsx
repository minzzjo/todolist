import React from "react";
import "../style/Todo.css";

export default function Lists({ todoList, onClickDone, onClickDelete }) {
	return (
		<section className='todo__lists'>
			<ul>
				{todoList.map((t) => (
					<div key={t.id} className='todo__list'>
						<div className='todo__list__content'>
							<button onClick={onClickDone} name={t.id} value={t.done} className='todo__list__checkbtn'>
								{/* {todo.done ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />} */}
								{t.done ? "✅" : "❎"}
							</button>
							<li>{t.todo}</li>
						</div>
						<button onClick={onClickDelete} name={t.id} value={t.todo} className='todo__delete__btn'>
							{/* <FaTrashCan /> */}
							del
						</button>
					</div>
				))}
			</ul>
		</section>
	);
}
