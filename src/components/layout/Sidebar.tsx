import { cn } from "@/lib/utils";
import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { Button, buttonVariants } from "../ui/button";

const NAVBAR_ITEMS = [
	{
		title: "Projects",
		href: "/admin/projects",
	},
	{
		title: "Events",
		href: "/admin/events",
	},
	{
		title: "New Arrivals",
		href: "/admin/newarrivals",
	},
	{
		title: "Publications",
		href: "/admin/publications",
	},
	{
		title: "Notice",
		href: "/admin/notice",
	},
];

const Sidebar = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleMenuClick = () => setIsOpen(!isOpen);

	const router = useLocation();
	const auth = getAuth();
	// @ts-ignore
	const [signOut, , error] = useSignOut(auth);

	return (
		<>
			<div className="xl:flex flex-col space-y-8 lg:flex-row w-full">
				<aside className="p-8 flex flex-wrap flex-row xl:flex-col justify-center items-center xl:items-start xl:flex-nowrap xl:sticky top-0 z-20 overflow-y-auto xl:h-[85vh] xl:justify-between w-full xl:w-1/5">
					<div
						className="xl:hidden cursor-pointer my-auto w-full"
						role="button"
						onClick={handleMenuClick}
					>
						{isOpen ? (
							<RxCross2 className="h-8 w-8 transition duration-500 ease-in-out opacity-100 hover:opacity-60" />
						) : (
							<RxHamburgerMenu className="h-8 w-8 transition duration-500 ease-in-out opacity-60 hover:opacity-100" />
						)}
					</div>
					<nav className="hidden xl:flex space-x-2 flex-col lg:space-x-0 lg:space-y-1 mt-12">
						{NAVBAR_ITEMS.map((item) => (
							<Link
								key={item.href}
								to={item.href}
								className={cn(
									buttonVariants({ variant: "ghost" }),
									router.pathname === item.href
										? "bg-muted hover:bg-muted"
										: "hover:bg-transparent hover:underline",
									"justify-start py-8"
								)}
							>
								{item.title}
							</Link>
						))}
					</nav>
					{isOpen && (
						<nav className="flex xl:hidden flex-col py-6">
							{NAVBAR_ITEMS.map((item) => (
								<Link
									key={item.href}
									to={item.href}
									className={cn(
										buttonVariants({ variant: "ghost" }),
										router.pathname === item.href
											? "bg-muted hover:bg-muted"
											: "hover:bg-transparent hover:underline",
										"justify-start"
									)}
									onClick={handleMenuClick}
								>
									{item.title}
								</Link>
							))}
							<div className="xl:hidden mt-4">
								<Button
									className="w-40 bg-black hover:bg-black"
									onClick={async () => {
										const success = await signOut();
										toast.success("Logged out successfully !!!!!!");
										if (success) {
											toast.success("Logged out successfully");
										}
									}}
								>
									Logout
								</Button>
							</div>
						</nav>
					)}

					<div className="hidden xl:block xl:mt-auto">
						<Button
							className="w-24 bg-black"
							onClick={async () => {
								const success = await signOut();
								toast.success("Logged out successfully !!!!!!");
								if (success) {
									toast.success("Logged out successfully");
								}
							}}
						>
							Logout
						</Button>
					</div>
				</aside>
				<div className="hidden xl:block flex-1 sm:p-8 h-full">{children}</div>
			</div>
			<div className="xl:hidden sm:p-8">{children}</div>
		</>
	);
};

export default Sidebar;
