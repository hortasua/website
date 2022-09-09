import type { FC, ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
	buttonType?: "primary" | "secondary";
	type?: "button" | "reset" | "submit";
}

export const Button: FC<ButtonProps> = ({
	children,
	onClick,
	buttonType = "primary",
	className = "",
	type = "button",
}: ButtonProps) => {
	return (
		<button
			className={`${className} button ${
				buttonType === "primary" ? "button-primary" : "button-secondary"
			}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};
