import { CSSProperties } from "react";

export type LabelProps = {
	content: string;
};

const Label = ({ content }: LabelProps) => {
	const labelStyle: CSSProperties = {
		color: "black",
		fontSize: "16px",
		fontWeight: "bold",
		fontFamily: "sans-serif",
	};
	return <span style={labelStyle}>{content}</span>;
};

export default Label;
