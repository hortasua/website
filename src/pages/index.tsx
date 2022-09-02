import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "web/components/header";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>HortaSua - Uma empresa sustentável</title>
			</Head>
			<Header />
			<main className="flex flex-col mt-10">
				<div className="flex flex-col-reverse justify-center gap-96 items-center md:flex-row md:mx-20">
					<div className="flex flex-col gap-3 justify-self-start md:items-start md:text-left">
						<div className="flex flex-col items-center md:items-start">
							<h1 className="font-semibold text-center w-screen px-5 md:w-[30rem] md:text-left">
								Sempre cuidando de você
							</h1>
							<div className="relative left-6 bottom-2 w-20 h-[.7rem] rounded-sm bg-brown md:left-24 md:w-28"></div>
						</div>
						<p className="flex text-center mx-4 md:mx-0 md:text-left md:ml-5">
							A HortaSua Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua.
						</p>
						<Link href="/product" passHref>
							<a className="button text-base mt-4 md:ml-5">
								Conheça nosso produto
							</a>
						</Link>
					</div>
					<img
						src="/logo.png"
						alt="Logo"
						width="400"
						height="400"
						className="hidden md:flex"
					/>
				</div>
			</main>
		</>
	);
};

export default Home;
