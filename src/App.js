import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
	return (
		<AppWrapper>
			<Header />
		</AppWrapper>
	);
}

const AppWrapper = styled.div`
	background-color: #f1f2f5;
`;
export default App;
