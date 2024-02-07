import { CSSProperties } from "react";

const Button = () => {
	const buttonStyle: CSSProperties = {
		color: "#FFFFFF",
		backgroundColor: "#F83758",
		borderRadius: "8px",
		border: "1px solid #F83758",
		fontSize: "22px",
		fontWeight: "800",
		width: "100%",
		height: "60px",
	};
	return <button style={buttonStyle}>버튼</button>;
};
export default Button;
