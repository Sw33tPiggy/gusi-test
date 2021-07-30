import React, { useState } from "react";
import "./state/stores/ProductsStore";
import "./index.scss";
import Modal from "./components/createProductModal";
import LoginModal from "./components/loginModal";
import { withStore } from "./state/withStore";
import { LOG_OUT } from "./state/stores/AuthStore";

import ProductList from "./components/productList";

export const App = () => {
	const [modalVisable, setModalVisasble] = useState(false);
	const [loginModalVisable, setLoginModalVisasble] = useState(false);
	return (
		<main>
			<Modal
				visiable={modalVisable}
				askToBeClosed={() => {
					setModalVisasble(false);
				}}
			></Modal>
			<LoginModal
				visiable={loginModalVisable}
				askToBeClosed={() => {
					setLoginModalVisasble(false);
				}}
			></LoginModal>
			<div className="header">
				<h1>Frontend Test Task</h1>
				<div>
					<AddButton onClick={() => setModalVisasble(true)}>Добавить</AddButton>
					<LogInButton
						onClick={() => {
							setLoginModalVisasble(true);
						}}
					></LogInButton>
				</div>
			</div>
			<ProductList />
		</main>
	);
};

const AddButton = withStore(
	"auth",
	(data) => data
)(({ isAuthorized, onClick, children }) => {
	if (isAuthorized) {
		return <button onClick={onClick}>{children}</button>;
	} else {
		return null;
	}
});

const LogInButton = withStore(
	"auth",
	(data) => data
)(({ dispatch, isAuthorized, onClick }) => {
	if (isAuthorized) {
		return (
			<button
				onClick={() => {
					dispatch(LOG_OUT, {});
				}}
			>
				Выйти
			</button>
		);
	} else {
		return <button onClick={onClick}>Войти</button>;
	}
});
