import { useState } from "react";
import { TodoBoxStyle } from "../../../styles/div/Div";
import DeleteBtn, { DeleteBtnProps } from "../../atoms/btn/DeleteBtn";
import CheckBox from "../../atoms/checkBox/CheckBox";
import Text, { TextProps } from "../../atoms/text/Text";

type TodoBoxProps = TextProps & DeleteBtnProps;

const TodoBox = ({ content, delAction }: TodoBoxProps & DeleteBtnProps) => {
	const [isCheck, setIsCheck] = useState<boolean>(false);
	const checkChange = () => setIsCheck(!isCheck);
	const data = {
		checkChange,
		isCheck,
		content,
	};
	return (
		<TodoBoxStyle checked={isCheck}>
			<CheckBox {...data} />
			<Text {...data} todo={true} />
			<DeleteBtn delAction={delAction} />
		</TodoBoxStyle>
	);
};
export default TodoBox;
