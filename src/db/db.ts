import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage("./localStorageDb");


export const getValue = (key: string) => {
	const item = localStorage.getItem(key);
	if (item) {
		return JSON.parse(item);
	}
	return null;
};

export const setValue  = (key: string, value: string) => {
	return localStorage.setItem(key, JSON.stringify(value));
};
