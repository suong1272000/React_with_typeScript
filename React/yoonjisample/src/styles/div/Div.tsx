import styled from "@emotion/styled";

type TodoBoxStyleProps = {
	checked: boolean;
};

export const TodoListStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 350px;
	padding: 20px;
	margin: 30px auto;
	background-color: #f3f3f3;
	border-radius: 10px;
`;
export const TodoBoxStyle = styled.div<TodoBoxStyleProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	width: 100%;
	color: ${(props) => (props.checked ? "grey" : "black")};
`;
