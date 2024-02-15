import Ellipsis from "../../atoms/Ellipsis/Ellipsis";
import Sentence from "../../atoms/Sentence/Sentence";
import { TextBundleStyle } from "./TextBundle.style";
import { linkedCheckTextProps } from "../../../styles/Icons/WrapCheckBox";

type TextBundleProps = linkedCheckTextProps;

const TextBundle = ({ isSelect }: TextBundleProps) => {
	return (
		<TextBundleStyle>
			<Sentence isSelect={isSelect} content="ABCD" />
			<Ellipsis />
		</TextBundleStyle>
	);
};
export default TextBundle;
