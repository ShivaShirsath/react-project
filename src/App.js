import React from "react";
import Account from "./components/Account";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";

function App() {
	return (
		<>
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={2}
				toastOptions={{
					icon: "✅",
					style: {
						borderRadius: "1.5vmin",
						background: "hsla(0, 0%, 0%, 0.5)",
						backdropFilter: "blur(.25vmin)",
						color: "#fff",
					},
				}}
			/>
			<AuthContextProvider>
				<Routes>
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/account"
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/editor"
						element={
							<ProtectedRoute>
								<EditorPage />
							</ProtectedRoute>
						}
					/>
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</AuthContextProvider>
		</>
	);
}

export default App;
