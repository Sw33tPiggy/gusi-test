import { Store } from "../common/store/store";
import { Registry } from "../common/store/registry";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
const login = "SweetPiggy";
const password = "123456";

const AuthStore = new Store("auth", {
	data: {
		isAuthorized: false,
	},
	options: {
		shouldInitFromState: true,
		stateKey: "auth",
	},
	reducers: [
		{
			type: LOG_IN,
			action(state, payload) {
				const isAuthorized =
					payload.login == login && payload.password == password;
				if (isAuthorized) {
					document.cookie = "isAuthorized=true;";
				}

				return {
					...state,
					isAuthorized: isAuthorized,
				};
			},
		},
		{
			type: LOG_OUT,
			action(state, payload) {
				document.cookie = "isAuthorized=false;";

				return {
					...state,
					isAuthorized: false,
				};
			},
		},
	],
});

Registry.addStore(AuthStore);

export { AuthStore };
