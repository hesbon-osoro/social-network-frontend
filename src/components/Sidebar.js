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
import {useStateValue} from "../StateProvider";

const Sidebar = () => {

	const [{user},dispatch] = useStateValue();

	return (
		<SidebarWrapper>
			<SidebarRow
				src={user.photoURL}
				title={user.displayName}
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

const SidebarWrapper = styled.div`
	position: sticky;
	top: 0;
`;
export default Sidebar;
