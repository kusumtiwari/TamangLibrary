"use client";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { auth } from "../../../../firebase";
import LoadingSpinner from "../../../common/LoadingSpinner";

export default function Signin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	//@ts-ignore
	const [signInWithEmailAndPassword, , , loginError] =
		useSignInWithEmailAndPassword(auth);

	// const router = useLocation();
	const navigate = useNavigate();

	const handleKeydown = async (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault();
			setLoading(true);
			await signInWithEmailAndPassword(email, password);

			const user = auth.currentUser;
			if (user) {
				toast.success("Successfully logged in");
				navigate("/admin/projects");
			} else {
				toast.error("Error logging in");
			}

			setLoading(false);
		}
	};

	const handleSignIn = async () => {
		setLoading(true);
		const response = await signInWithEmailAndPassword(email, password);
		if (response) {
			toast.success("Successfully logged in");
			navigate("/admin/projects");
		} else {
			toast.error("Error logging in");
		}
		setLoading(false);
	};

	// useEffect(() => {
	// 	setInitialRenderComplete(true);
	// }, []);

	return (
		<>
			{loading && <LoadingSpinner />}

			{/* {initialRenderComplete && ( */}
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<div className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-black"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									onChange={(e) => setEmail(e.target.value)}
									required
									className="block w-full rounded-md p-2 border-0 bg-black/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-black"
								>
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									onKeyDown={handleKeydown}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="block w-full p-2 rounded-md border-0 bg-black/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								onClick={handleSignIn}
								disabled={!email || !password}
								className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								Sign in
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* )} */}
		</>
	);
}
