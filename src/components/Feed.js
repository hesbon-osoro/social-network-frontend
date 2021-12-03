import React, { useEffect, useState } from "react";
import Stories from "./Stories";
import styled from "styled-components";
import Messenger from "./Messenger";
import Post from "./Post";
import axios from "../axios";

const Feed = () => {
	const [posts, setPosts] = useState([]);

	const syncFeed = () => {
		axios.get("/posts").then((res) => {
			console.log(res.data);
			setPosts(res.data);
		});
	};
	useEffect(() => {
		syncFeed();
	}, []);
	return (
		<FeedWrapper>
			<Stories />
			<Messenger />
			{posts.map((post) => (
				<Post
					key={post.timestamp}
					profilePic={post.avatar}
					messafe={post.text}
					timestamp={post.timestamp}
					imgName={post.imgName}
					username={post.user}
				/>
			))}
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
