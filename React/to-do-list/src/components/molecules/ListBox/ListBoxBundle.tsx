import CheckBox from "../../atoms/CheakBox/CheckBox";
import { ListBoxStyle } from "./ListBox.style";
import { TextBundle } from "./TextBundle";

export const ListBoxBundle = () => {
	return (
		<ListBoxStyle>
			<CheckBox />
			<TextBundle />
		</ListBoxStyle>
	);
};
