import Label from "../../atoms/Label/Label";
import { ButtonBox } from "../../molecules/ButtonBox/ButtonBox";
import { ListBoxBundleCollection } from "../../molecules/ListBox/ListBoxBundleCollection";
import { ListFormStyle } from "./ListForm.style";

const ListForm = () => {
	return (
		<ListFormStyle>
			<Label content="Todo" />
			<ListBoxBundleCollection />
			<ButtonBox />
		</ListFormStyle>
	);
};

export default ListForm;
