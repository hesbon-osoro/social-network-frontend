import React from "react";
import Stories from "./Stories";
import styled from "styled-components";

const Feed = () => {
	return (
		<FeedWrapper>
			<Stories />
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
