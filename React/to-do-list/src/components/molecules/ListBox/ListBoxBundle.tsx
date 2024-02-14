import CheckBox from "../../atoms/CheakBox/CheckBox";
import { ListBoxStyle } from "./ListBox.style";
import { ListTextBundle } from "./TextBundle";

export const ListBoxBundle = () => {
	return (
		<ListBoxStyle>
			<CheckBox />
			<ListTextBundle />
		</ListBoxStyle>
	);
};
