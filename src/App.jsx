import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import YMForm from "./pages/YMForm";

function App() {
	return (
		<HashRouter basename="/ymedu">
			<Routes>
				<Route path="/" element={<YMForm />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
