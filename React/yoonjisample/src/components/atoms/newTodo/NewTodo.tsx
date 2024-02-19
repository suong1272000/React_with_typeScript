import { ChangeEvent, useState } from "react";
import AddBtn from "../btn/AddBtn";
import TodoBox from "../../molecules/todoBox/TodoBox";

const NewTodo = () => {
	const [newTodo, setNewTodo] = useState<string>("");
	const [arrTodo, setArrTodo] = useState<string[]>([]);
	const newTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	};
	const addTodoClick = () => {
		setArrTodo([...arrTodo, newTodo]);
		setNewTodo("");
	};
	const delTodoClick = (x: number) => {
		window.confirm("삭제하시겠습니까?")
			? setArrTodo(arrTodo.filter((v, i) => i !== x))
			: setArrTodo(arrTodo);
	};
	return (
		<>
			{arrTodo.map((v, i) => (
				<TodoBox
					key={v + 1}
					content={v}
					delAction={() => delTodoClick(i)}
				/>
			))}
			<input onChange={newTodoChange} type="text" value={newTodo} />
			<AddBtn addAction={addTodoClick} />
		</>
	);
};
export default NewTodo;
