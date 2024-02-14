import Label from "../../atoms/Label/Label";
import { ButtonBox } from "../../molecules/ButtonBox/ButtonBox";
import { ListBoxBundle } from "../../molecules/ListBox/ListBoxBundle";
import { ListFormStyle } from "./ListForm.style";

const ListForm = () => {
	return (
		<ListFormStyle>
			<Label content="Todo" />
			<ListBoxBundle />
			<ButtonBox />
		</ListFormStyle>
	);
};

export default ListForm;
