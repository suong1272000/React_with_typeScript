import styled from "@emotion/styled";

export type MyButtonProps = {
	isPrimary: boolean;
	bgColor: string;
};

export const MyButton = styled.button<MyButtonProps>`
	color: ${(props) => (props.isPrimary ? "black" : "skyblue")};
	background-color: ${(props) => props.bgColor};
	padding: 8px 15px;
	border: 1px solid skyblue;
	border-radius: 8px;
`;
