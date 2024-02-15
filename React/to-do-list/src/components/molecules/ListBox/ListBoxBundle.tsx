import { useState } from "react";
import CheckBox from "../../atoms/CheakBox/CheckBox";
import { ListBoxStyle } from "./ListBox.style";
import TextBundle from "./TextBundle";

const ListBoxBundle = () => {
	const [isSelect, setIsSelect] = useState(false);
	return (
		<ListBoxStyle>
			<CheckBox
				action={() => setIsSelect((prev) => !prev)}
				isSelect={isSelect}
			/>
			<TextBundle isSelect={isSelect} />
		</ListBoxStyle>
	);
};

export default ListBoxBundle;
