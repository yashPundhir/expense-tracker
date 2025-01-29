import { useAtom } from "jotai";

import { themeAtom } from "@/atoms/theme/store";

import "@/css/themeToggler.css";

const ThemeToggler = () => {
	const [theme, setTheme] = useAtom(themeAtom);

	const handleThemeToggle = () => {
		document.getElementById("htmlRoot").classList.remove("light", "dark");
		if (theme === "dark") {
			document.getElementById("htmlRoot").classList.add("light");
			setTheme("light");
		} else {
			document.getElementById("htmlRoot").classList.add("dark");
			setTheme("dark");
		}
	};

	return (
		<div>
			<label className="switch rounded-full ring-1 ring-zinc-300 dark:ring-zinc-700 shadow-md shadow-zinc-300 dark:shadow-zinc-700">
				<input type="checkbox" onChange={handleThemeToggle} defaultChecked />
				<span className="slider"></span>
			</label>
		</div>
	);
};

export default ThemeToggler;
