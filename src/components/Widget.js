import React from "react";
import styled from "styled-components";

const Widget = () => {
	return (
		<WidgetWrapper>
			<iframe
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fapple&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
				width="340"
				height="1500"
				style={{ border: "none", overflow: "hidden" }}
				scrolling="no"
				frameborder="0"
				allow="encrypted-media"
				title="Facebook Widget"
			></iframe>
		</WidgetWrapper>
	);
};
const WidgetWrapper = styled.div``;

export default Widget;
