import styled from "@emotion/styled";

export type TextStyleProps = {
	isTitle?: boolean;
	todo?: boolean;
	// bgColor?: string;
	// primary: string[];
};
// export const Colors: TextStyleProps = {
// 	primary: ["#1D4D4F", "red", "blue", "green", "orange"],
// };
export const TextStyle = styled.p<TextStyleProps>`
	width: ${(props) => (props.todo ? "200px" : "fit-content;")};
	padding: 10px 20px;
	font-size: ${(props) => (props.isTitle ? "25px" : "16px")};
	font-weight: ${(props) => (props.isTitle ? "800" : "normal")};
	background-color: ${(props) => (props.todo ? "pink" : "transparent")};
	border-radius: 5px;
	white-space: normal;
`;
