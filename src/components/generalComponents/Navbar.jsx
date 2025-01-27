import { useAtomValue } from "jotai";

import { themeAtom } from "@/atoms/theme/store";

import ThemeToggler from "./ThemeToggler";

import logoDark from "@/assets/generalAssets/logoDark.svg";
import logoLight from "@/assets/generalAssets/logoLight.svg";

const Navbar = () => {
	const theme = useAtomValue(themeAtom);

	return (
		<header className="text-foreground bg-background body-font">
			<div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row justify-between items-center">
				<a className="flex title-font font-medium items-center mb-4 md:mb-0">
					<img
						src={theme === "dark" ? logoDark : logoLight}
						alt="logo"
						className="w-[35px]"
					/>
					<span className="ml-2 text-xl">Expense Tracker</span>
				</a>
				{/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
					<a className="mr-5 hover:text-white">First Link</a>
					<a className="mr-5 hover:text-white">Second Link</a>
					<a className="mr-5 hover:text-white">Third Link</a>
					<a className="mr-5 hover:text-white">Fourth Link</a>
				</nav> */}
				<ThemeToggler />
			</div>
		</header>
	);
};

export default Navbar;
