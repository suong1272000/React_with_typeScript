import { TodoListStyle } from "../../../styles/div/Div";
import NewTodo from "../../atoms/newTodo/NewTodo";
import Text from "../../atoms/text/Text";

const TodoList = () => {
	return (
		<TodoListStyle>
			<Text content="Todo" isTitle={true} />
			<NewTodo />
		</TodoListStyle>
	);
};
export default TodoList;
