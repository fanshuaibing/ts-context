import react from "react";

interface Theme {
	background: string;
	color: string;
}
const MyTheme = react.createContext({
	theme: { background: "red", color: "blue" },
	toggleTheme: (theme: Theme) => {}
});
export default MyTheme;
