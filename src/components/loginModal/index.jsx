import { useState } from "react";
import "./modal.scss";
import { LOG_IN } from "../../state/stores/AuthStore";
import { withStore } from "../../state/withStore";

const Modal = ({ visiable, askToBeClosed, dispatch, isAuthorized }) => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	if (isAuthorized) {
		askToBeClosed();
	}

	if (!visiable) {
		return null;
	}
	return (
		<div className="container">
			<main>
				<label htmlFor="login">ID</label>
				<input
					id="login"
					onChange={(e) => {
						setLogin(e.target.value);
					}}
					value={login}
				/>
				<label htmlFor="password">Описание</label>
				<input
					id="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					value={password}
				/>

				<button
					onClick={() => {
						dispatch(LOG_IN, {
							password,
							login,
						});
					}}
				>
					Войти
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

export default withStore("auth", (data) => data)(Modal);
