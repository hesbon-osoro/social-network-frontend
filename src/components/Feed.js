import React, { useEffect, useState } from "react";
import Stories from "./Stories";
import styled from "styled-components";
import Messenger from "./Messenger";
import Post from "./Post";
import axios from "../axios";
import Pusher from "pusher-js";

const pusher = new Pusher("bccd74f5e0fee3c302a4", { cluster: "mt1" });

const Feed = () => {
	const [posts, setPosts] = useState([]);

	const syncFeed = () => {
		axios.get("/posts").then((res) => {
			// console.log(res.data);
			setPosts(res.data);
		});
	};
	useEffect(()=>syncFeed(),[])
	
	useEffect(() => {
		const channel = pusher.subscribe("posts");
		channel.bind("inserted", (data) => {
			syncFeed();
		});
	}, []);

	return (
		<FeedWrapper>
			<Stories />
			<Messenger />
			{posts.map((post) => (
				<Post
					key={post.timestamp}
					profilePic={post.avatar}
					message={post.text}
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
