import styled from "@emotion/styled";

export type ButtonStyleProps = {
	isSelect: boolean;
};
export const Button = styled.button<ButtonStyleProps>`
	background-color: ${(props) => (props.isSelect ? "#F83758" : "#BFBFBF")};
	color: "#FFFFFF";
	border-radius: "8px";
	font-size: "22px";
	font-weight: "800";
	width: "100%";
	height: "60px";
`;
