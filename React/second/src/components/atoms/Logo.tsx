import { useState } from "react";

type LogoProps = {
	image: string;
};
const Logo = ({ image }: LogoProps) => {
	return <img src={image} alt="Logo" />;
};
export default Logo;
