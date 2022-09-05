import { Html, Head as Header, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html>
			<Header>
				<meta name="og:title" content="HortaSua: uma empresa sustentável" />
				<meta
					name="og:description"
					content="
					A HortaSua é uma empresa focada em fornecer saúde, sustentabilidade e
					qualidade para a alimentação do seu dia-a-dia"
				/>
				<meta name="theme-color" content="#12aaaf" />
			</Header>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
