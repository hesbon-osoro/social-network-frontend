import React from "react";
import Story from "./Story";
import styled from "styled-components";

const Stories = () => {
	return (
		<StoriesWrapper>
			<Story
				image="https://i.postimg.cc/fR2KxrH0/lady.jpg"
				profileSrc="https://i.postimg.cc/RFYn9wvk/portfolio.png"
				title="Wazimu"
			/>
			<Story
				image="https://i.postimg.cc/Pf6TW2mL/dating-app-frontend.png"
				profileSrc="https://i.postimg.cc/RFYn9wvk/portfolio.png"
				title="Wazimu"
			/>
			<Story image profileSrc title="Hesbon" />
		</StoriesWrapper>
	);
};

const StoriesWrapper = styled.div`
	display: flex;
`;
export default Stories;
