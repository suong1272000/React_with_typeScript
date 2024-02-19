import { useState } from "react";
import CheckBox from "../../atoms/CheakBox/CheckBox";
import { ListBoxStyle } from "./ListBox.style";
import TextBundle from "./TextBundle";
import ButtonBox from "../ButtonBox/ButtonBox";

const ListBoxBundle = () => {
	const [isSelect, setIsSelect] = useState(false);
	const [content, setContent] = useState<string>("");

	const getMsg = () => {
		const msg = prompt("할 일 적기");
		if (msg) {
			setContent(msg);
		}
	};

	return (
		<ListBoxStyle>
			<CheckBox
				action={() => setIsSelect((prev) => !prev)}
				isSelect={isSelect}
			/>
			<TextBundle isSelect={isSelect} content={content} />
			<ButtonBox action={getMsg} />
		</ListBoxStyle>
	);
};

export default ListBoxBundle;
