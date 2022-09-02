import type { FC, ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	className: string;
}

export const Button: FC<ButtonProps> = ({
	children,
	className,
}: ButtonProps) => {
	return <button className={`button ${className}`}>{children}</button>;
};
