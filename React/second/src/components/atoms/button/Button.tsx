import { CSSProperties } from "react";
import { ButtonStyleProps } from "./ButtonStyle";
export type ButtonActionProps = {
	action: () => void;
};

const Button = ({ isSelect, action }: ButtonActionProps & ButtonStyleProps) => {
	const buttonStyle: CSSProperties = {
		color: "#FFFFFF",
		backgroundColor: `${isSelect ? "#F83758" : "#BFBFBF"}`,
		borderRadius: "8px",
		border: `1px solid ${isSelect ? "#F83758" : "#BFBFBF"}`,
		fontSize: "22px",
		fontWeight: "800",
		width: "100%",
		height: "60px",
	};
	return (
		<button onClick={action} style={buttonStyle}>
			버튼
		</button>
	);
};
export default Button;
