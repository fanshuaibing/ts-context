import * as React from "react";
import MyTheme from "./context";
import "./styles.css";

function Theme() {
	const [bgColor, setBgColor] = React.useState("white");
	const [color, setColor] = React.useState("white");
	return (
		<MyTheme.Consumer>
			{({ theme, toggleTheme }) => (
				<div>
					<label htmlFor="bg">
						bgColor：
						<input
							type="text"
							id="bg"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setBgColor(e.target.value)
							}
						/>
					</label>
					<label htmlFor="color">
						fontColor：
						<input
							type="text"
							id="color"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setColor(e.target.value)
							}
						/>
					</label>

					<div style={{ background: theme.background, color: theme.color }}>
						这是字体
					</div>
					<button
						onClick={() => toggleTheme({ background: bgColor, color: color })}
					>
						change
					</button>
				</div>
			)}
		</MyTheme.Consumer>
	);
}

export default function App() {
	const [theme, setTheme] = React.useState({
		background: "pink",
		color: "white"
	});

	return (
		<MyTheme.Provider value={{ theme, toggleTheme: setTheme }}>
			<Theme />
		</MyTheme.Provider>
	);
}
