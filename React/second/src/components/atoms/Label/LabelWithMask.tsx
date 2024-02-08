import { CSSProperties } from "react";
import { maskNumber } from "../../../utils/MaskNumber";

export type LabelWithMaskProps = {
	content: string;
};

const LabelWithMask = ({ content }: LabelWithMaskProps) => {
	const labelStyle: CSSProperties = {
		color: "black",
		fontSize: "16px",
		fontWeight: "bold",
		fontFamily: "sans-serif",
	};

	return <span style={labelStyle}>{maskNumber(content)}</span>;
};
export default LabelWithMask;
