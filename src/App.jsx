import React, { useState } from "react";
import "./state/stores/ProductsStore";
import "./index.scss";
import Modal from "./components/createProductModal";

import ProductList from "./components/productList";

export const App = () => {
	const [modalVisable, setModalVisasble] = useState(false);
	return (
		<main>
			<Modal
				visiable={modalVisable}
				askToBeClosed={() => {
					setModalVisasble(false);
				}}
			></Modal>
			<div className="header">
				<h1>Frontend Test Task</h1>
				<button onClick={() => setModalVisasble(true)}>Добавить</button>
			</div>
			<ProductList />
		</main>
	);
};
