import React from "react";
import Story from "./Story";
import styled from "styled-components";

const Stories = () => {
	return (
		<StoriesWrapper>
			<Story
				image="https://i.postimg.cc/fR2KxrH0/lady.jpg"
				profileSrc="https://i.postimg.cc/G3gmSBgC/cesar-rincon-XHVp-Wcr5gr-Q-unsplash.jpg"
				title="Wazimu"
			/>
			<Story
				image="https://i.postimg.cc/rmQwTz85/charles-deluvio-Mv9hjn-EUHR4-unsplash.jpg"
				profileSrc="https://i.postimg.cc/RFYn9wvk/portfolio.png"
				title="Hesbon"
			/>
			<Story
				image="https://i.postimg.cc/SRRNxqs3/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg"
				profileSrc="https://i.postimg.cc/SRRNxqs3/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg"
				title="Hb"
			/>
		</StoriesWrapper>
	);
};

const StoriesWrapper = styled.div`
	display: flex;
`;
export default Stories;
