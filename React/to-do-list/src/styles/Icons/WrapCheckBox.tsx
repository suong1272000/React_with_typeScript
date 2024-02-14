import styled from "@emotion/styled";

export type WrapCheckBoxProps = {
	isClicked: boolean;
};

export const WrapCheckBox = styled.div`
	width: 36px;
	height: 36px;
	border-radius: 24px;
	border: 4px solid #e6e6e6;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #e6e6e6;
`;
