import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 2rem;
	gap: 3rem;
`;

export const FormData = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: "Poppins";
`;

export const NumericStats = styled.h1`
	font-size: 2rem;
`;

export const StatsLabel = styled.h2`
	font-size: calc(2rem - 10px);
	color: ${({ theme }) => theme.GHOSTED};
`;

export const FormsSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const FormSection = styled.div`
	border: 1px solid black;
	border-radius: 20px;
	padding: 2rem;
`;
