import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FaTrashCan } from "react-icons/fa6";

export default function Map() {
	return (
		<div>
			<div className='todo__list__box' key={item.id}>
				<div className='todo__list'>
					<button className='todo__list__checkbtn' onClick={onClickDone}>
						{done ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
					</button>
					<li className='todo__list__item'>{item.item}</li>
				</div>
				<button className='todo__delete__btn' onClick={onClickDelete} key={item.id}>
					<FaTrashCan />
				</button>
			</div>
		</div>
	);
}
