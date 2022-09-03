import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "web/components/header";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>HortaSua - Uma empresa sustentável</title>
			</Head>
			<Header />
			<main className="flex flex-col mt-10 gap-64">
				<div className="flex flex-col-reverse justify-center gap-96 items-center md:flex-row md:mx-20">
					<div className="flex flex-col gap-3 justify-self-start md:items-start md:text-left">
						<div className="flex flex-col items-center md:items-start">
							<h1 className="text-center w-screen px-5 md:w-[30rem] md:text-left">
								Sempre cuidando de você
							</h1>
							<div className="relative left-6 bottom-2 w-20 h-[.7rem] rounded-sm bg-brown md:left-24 md:w-28 pre-md:left-[1.6rem] 1/2md:left-[.15rem] 767:left-[10.9rem]"></div>
						</div>
						<p className="flex text-center mx-4 md:mx-0 md:text-left md:ml-5">
							A HortaSua Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua.
						</p>
						<div className="flex items-center justify-center">
							<a href="#product" className="button text-base mt-4 md:ml-5">
								Saiba mais
							</a>
						</div>
					</div>
					<img
						src="/logo.png"
						alt="Logo"
						width="400"
						height="400"
						className="hidden md:flex"
					/>
				</div>
				<div id="product" className="selection:bg-blue-600	">
					<img
						src="/top-wave.svg"
						alt="Wave"
						className="relative top-1 md:top-0"
					/>
					<div className="bg-brown flex flex-col items-center justify-center text-white gap-5 py-10">
						<div className="flex flex-col items-center justify-center gap-3">
							<h1 className="text-center">Conheça a TerraNossa!</h1>
							<p className="min-w-1/2 w-[80vw] text-center md:w-[50vw]">
								O produto que vai garantir conforto, qualidade e
								sustentabilidade à alimentação do seu dia-a-dia. Lorem ipsum
								dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
						<button className="bg-transparent border border-white px-5 py-4 rounded-md transition-all hover:bg-white hover:text-brown focus:outline-none focus:bg-white focus:text-brown">
							Saiba o tamanho exato para você
						</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
