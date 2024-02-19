import Ellipsis from "../../atoms/Ellipsis/Ellipsis";
import Sentence from "../../atoms/Sentence/Sentence";
import { TextBundleStyle } from "./TextBundle.style";
import { linkedCheckTextProps } from "../../../styles/Icons/WrapCheckBox";

type TextBundleProps = linkedCheckTextProps & { content: string };

const TextBundle = ({ isSelect, content }: TextBundleProps) => {
	return (
		<TextBundleStyle>
			<Sentence isSelect={isSelect} content={content} />
			<Ellipsis />
		</TextBundleStyle>
	);
};
export default TextBundle;
