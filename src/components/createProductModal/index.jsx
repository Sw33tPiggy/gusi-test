import { useState } from "react";
import "./modal.scss";
import {
	ProductsStore as Store,
	ADD_PRODUCT,
} from "../../state/stores/ProductsStore";

const validate = (id, desc, price) => {
	return !!id && !!desc && !!price;
};

const Modal = ({ visiable, askToBeClosed }) => {
	const [ID, setID] = useState("");
	const [desc, setDesc] = useState("");
	const [price, setPrice] = useState("");
	const [title, setTitle] = useState("");
	if (!visiable) {
		return null;
	}
	return (
		<div className="container">
			<main>
				<label htmlFor="id">ID</label>
				<input
					id="id"
					onChange={(e) => {
						setID(e.target.value);
					}}
					value={ID}
				/>
				<label htmlFor="description">Описание</label>
				<input
					id="description"
					onChange={(e) => {
						setDesc(e.target.value);
					}}
					value={desc}
				/>
				<label htmlFor="price">Цена</label>
				<input
					id="price"
					onChange={(e) => {
						setPrice(e.target.value);
					}}
					value={price}
				/>
				<label htmlFor="title">Название</label>
				<input
					id="title"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					value={title}
				/>
				<button
					onClick={() => {
						if (validate(ID, desc, price)) {
							Store.dispatch(ADD_PRODUCT, {
								product: {
									id: ID,
									title: title,
									description: desc,
									price: price,
								},
							});
							setID("");
							setTitle("");
							setPrice("");
							setDesc("");
							askToBeClosed();
						}
					}}
				>
					Добавить
				</button>
				<button
					onClick={() => {
						askToBeClosed();
					}}
				>
					Закрыть
				</button>
			</main>
		</div>
	);
};

export default Modal;
