import Link from "next/link";
import type { FC } from "react";

export const Header: FC = () => {
	return (
		<header className="flex items-center justify-center w-screen h-[7rem] shadow-lg">
			<Link href="/" passHref>
				<a className="flex items-center justify-center">
					<img
						src="/logo.png"
						alt="Logo"
						width="100"
						height="100"
						className="p-0 m-0"
					/>
					<h2 className="font-bold">HortaSua</h2>
				</a>
			</Link>
		</header>
	);
};
