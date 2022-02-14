import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import './styles/bootstrap.min.css';
import './styles/common.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					exact
					path="/cart"
					element={
						<Suspense fallback={<div className="loader"></div>}>
							<Cart />
						</Suspense>
					}
				/>
				<Route
					exact
					path="/checkout"
					element={
						<Suspense fallback={<div className="loader"></div>}>
							<Checkout />
						</Suspense>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
