import React from "react";
import styled from "styled-components";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";

function App() {
	return (
		<AppWrapper>
			<Header />
			<div className="app__body">
				<Sidebar />
				<Feed />
				<Widget />
			</div>
		</AppWrapper>
	);
}

const AppWrapper = styled.div`
	background-color: #f1f2f5;
	overflow-x: hidden;
	.app__body {
		display: flex;
	}
`;
export default App;
