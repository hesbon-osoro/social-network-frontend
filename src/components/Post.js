import React from "react";
import { Avatar } from "@material-ui/core";
import {
	ThumbUp,
	ChatBubbleOutline,
	NearMe,
	AccountCircle,
	ExpandMoreOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Post = ({ profilePic, message, timestamp, imgName, username }) => {
	return (
		<PostWrapper>
			<PostTop>
				<Avatar src={profilePic} className="post__avatar" />
				<div className="post__topInfo">
					<h3>{username}</h3>
					<p>{new Date(parseInt(timestamp)).toUTCString()}</p>
				</div>
			</PostTop>
			<PostBottom>
				<p>{message}</p>
			</PostBottom>
			{imgName ? (
				<div className="post__image">
					<img
						src={`https://social-network-mern-hb.herokuapp.com/images/single?name=${imgName}`}
						alt="Posts"
					/>
				</div>
			) : (
				console.log("DEBUG >>> no image here")
			)}
			<PostOptions>
				<div className="post__option">
					<ThumbUp />
					<p>Like</p>
				</div>
				<div className="post__option">
					<ChatBubbleOutline />
					<p>comment</p>
				</div>
				<div className="post__option">
					<NearMe />
					<p>Share</p>
				</div>
				<div className="post__option">
					<AccountCircle />
					<ExpandMoreOutlined />
				</div>
			</PostOptions>
		</PostWrapper>
	);
};

const PostWrapper = styled.div`
	width: 100%;
	margin-top: 15px;
	border-radius: 15px;
	background-color: white;
	box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
	.post__image {
		img {
			width: 100%;
		}
	}
`;
const PostTop = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	padding: 15px;
	.post__avatar {
		margin-right: 10px;
	}
	.post___topInfo {
		h3 {
			font-size: medium;
		}
		p {
			font-size: small;
			color: gray;
		}
	}
`;
const PostBottom = styled.div`
	margin-bottom: 10px;
	margin-bottom: 10px;
	padding: 15px 25px;
`;
const PostOptions = styled.div`
	padding: 10px;
	border-top: 1px solid lightgray;
	display: flex;
	justify-content: space-evenly;
	font-size: medium;
	color: gray;
	cursor: pointer;
	padding: 15px;

	.post__option {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		flex: 1;
		p {
			margin-left: 10px;
		}
		&:hover {
			background-color: #eff2f5;
			border-radius: 10px;
		}
	}
`;
export default Post;
