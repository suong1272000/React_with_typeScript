import { CSSProperties } from "react";
export type IconProps = {
	src: string;
};

const Icon = ({ src }: IconProps) => {
	const imgStyle: CSSProperties = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	};
	return (
		<div>
			<img style={imgStyle} src={src} alt="로고이미지" />
		</div>
	);
};
export default Icon;
