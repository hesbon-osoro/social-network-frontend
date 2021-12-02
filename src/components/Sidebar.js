import React from "react";
import SidebarRow from "./SidebarRow";
import {
	LocalHospital,
	EmojiFlags,
	People,
	Chat,
	Storefront,
	VideoLibrary,
	ExpandMoreOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Sidebar = () => {
	return (
		<SidebarWrapper>
			<SidebarRow
				src="https://i.postimg.cc/RFYn9wvk/portfolio.png"
				title="Wazimu"
			/>
			<SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
			<SidebarRow Icon={EmojiFlags} title="Pages" />
			<SidebarRow Icon={People} title="Friends" />
			<SidebarRow Icon={Chat} title="Messenger" />
			<SidebarRow Icon={Storefront} title="Marketplace" />
			<SidebarRow Icon={VideoLibrary} title="Videos" />
			<SidebarRow Icon={ExpandMoreOutlined} title="More" />
		</SidebarWrapper>
	);
};

const SidebarWrapper = styled.div``;
export default Sidebar;
