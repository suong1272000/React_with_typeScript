import styled from "@emotion/styled";
import { linkedCheckTextProps } from "../../../styles/Icons/WrapCheckBox";

export const List = styled.div<linkedCheckTextProps>`
	color: ${(props) => (props.isSelect ? "#000000" : "#c7c7c7")};
	font-size: 24px;
	font-weight: 600;
	text-decoration: ${(props) => (props.isSelect ? "none" : "line-through")};
`;
