import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import {
	Button,
	Container,
	Text,
	Li,
	Nav,
	Title,
	Ul,
	DrawerLink,
	Divider,
} from "./styles";

export const Header: NextPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Container>
			<Title>Logo</Title>
			<Nav>
				<Ul>
					<Li>
						<Link href="/products">Produtos</Link>
					</Li>
					<Li>
						<Link href="/about-us">Sobre nós</Link>
					</Li>
				</Ul>
				<Button onClick={onOpen}>
					<Image
						src="/menu-button.svg"
						alt="menu button"
						width="24px"
						height="24px"
					/>
				</Button>
			</Nav>

			<Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth={"1px"}>
						<Text>Links</Text>
					</DrawerHeader>
					<DrawerBody>
						<Link href="/products" passHref>
							<DrawerLink>Produtos</DrawerLink>
						</Link>
						<Divider />
						<Link href="/about-us" passHref>
							<DrawerLink>Sobre nós</DrawerLink>
						</Link>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Container>
	);
};
