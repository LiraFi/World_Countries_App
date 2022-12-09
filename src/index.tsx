import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const container = document.getElementById("root")!;
const root = createRoot(container);

const renderApp = () => {
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	);
};

if (process.env.NODE_ENV !== "production" && module.hot) {
	module.hot.accept("./App", renderApp);
}

renderApp();
