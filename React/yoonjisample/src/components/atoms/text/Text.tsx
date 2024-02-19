import { TextStyle, TextStyleProps } from "../../../styles/p/P";

export type TextProps = {
	content: string;
} & TextStyleProps;
const Text = ({ content, isTitle, todo }: TextProps) => {
	return (
		<TextStyle isTitle={isTitle} todo={todo}>
			{content}
		</TextStyle>
	);
};
export default Text;
