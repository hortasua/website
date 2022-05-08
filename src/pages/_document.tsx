import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Poppins&family=Ubuntu&display=swap"
					rel="stylesheet"
				/>
				<meta name="theme-color" content="#697DFA" />
				<meta name="name" content="HortaSua" />
				<meta name="description" content="Uma empresa sustentável" />
				<meta name="twitter:card" content="summary" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
