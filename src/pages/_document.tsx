import { Html, Head as Header, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html>
			<Header>
				<title></title>
				<meta name="og:title" content="HortaSua: uma empresa sustentável" />
				<meta name="og:description" content="..." />
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
