import React from "react";
import Stories from "./Stories";
import styled from "styled-components";
import Messenger from "./Messenger";
import Post from "./Post";

const Feed = () => {
	return (
		<FeedWrapper>
			<Stories />
			<Messenger />
			<Post
				profilePic="https://i.postimg.cc/SRRNxqs3/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg"
				message="I found this art worth sharing. I hope you like it."
				timestamp="2021-12-03T08:06:34.036Z"
				imgName="https://i.postimg.cc/fR2KxrH0/lady.jpg"
				a
				username="Wazimu"
			/>
			<Post
				profilePic="https://i.postimg.cc/RFYn9wvk/portfolio.png"
				message="This is an awesome hair style. "
				timestamp="2021-12-03T08:05:33.429Z"
				imgName="https://i.postimg.cc/G3gmSBgC/cesar-rincon-XHVp-Wcr5gr-Q-unsplash.jpg"
				username="Hesbon"
			/>
		</FeedWrapper>
	);
};
const FeedWrapper = styled.div`
	flex: 1;
	padding: 30px 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export default Feed;
