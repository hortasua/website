import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "web/components/header";

export const Home: NextPage = () => {
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
						<p className="flex text-center mx-4 md:mx-0 md:text-left md:ml-5 md:text-xl">
							A HortaSua é uma empresa focada em fornecer saúde,
							sustentabilidade e qualidade para a alimentação do seu dia-a-dia.
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
							<h1 className="text-center">Conheça a Terracota!</h1>
							<p className="min-w-1/2 w-[80vw] text-center md:w-[50vw] md:text-xl">
								Pensando no propósito da empresa, criamos nosso carro chefe: a
								Terracota. Ao perceber que a maioria das pessoas não tem
								acessibilidade a uma alimentação saudável, seja por falta de
								espaço ou por condições financeiras, criamos este produto que
								oferece, de forma sustentável e compacta, tudo que você precisa
								para manter uma boa alimentação.
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
