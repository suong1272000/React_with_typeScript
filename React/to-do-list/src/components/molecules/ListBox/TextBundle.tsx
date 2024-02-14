import Ellipsis from "../../atoms/Ellipsis/Ellipsis";
import Sentence from "../../atoms/Sentence/Sentence";
import { TextBundleStyle } from "./TextBundle.style";

export const ListTextBundle = () => {
	return (
		<TextBundleStyle>
			<Sentence content="ABCD" />
			<Ellipsis />
		</TextBundleStyle>
	);
};
