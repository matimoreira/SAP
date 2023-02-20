'use client'
import Link from "next/link";
import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import { EAPLogo } from "./EAPLogo";

export default function Navigation({page, setPage}: {page: string | null, setPage: (value: string) => void})
{
    const collapseItems = [
        "Home",
        "Developers",
        "Skills"
      ];

    return (
        <>
        <Navbar isBordered shouldHideOnScroll variant="floating">
            <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                        w: "12%",
                        },
                    }}
                >                
                <EAPLogo />
                <Text b color="inherit" hideIn="md">
                    Easy Assignment Proyect
                </Text>
                <Text b color="inherit" showIn="md">
                    EAP
                </Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight activeColor="primary" hideIn="xs" variant="highlight">
                    <Link href="/" legacyBehavior passHref >                    
                        <Navbar.Link onClick={ e => (setPage("/"))} isActive={page === "/"}>Home</Navbar.Link>
                    </Link>
                    <Link href="/Developers" legacyBehavior passHref >
                        <Navbar.Link onClick={ e => (setPage("/Developers"))} isActive={page === "/Developers"}>Developers</Navbar.Link>
                    </Link>
                    <Link href="/Skills" legacyBehavior passHref >
                        <Navbar.Link onClick={ e => (setPage("/Skills"))} isActive={page === "/Skills"}>Skills</Navbar.Link>
                    </Link>
            </Navbar.Content>
            <Navbar.Content 
                css={{
                    "@xs": {
                    w: "12%",
                    jc: "flex-end",
                    },
                }}
            >
                <Dropdown placement="bottom-right">
                    <Navbar.Item>
                        <Dropdown.Trigger>
                            <Avatar
                                bordered
                                as="button"
                                color="gradient"
                                size="md"
                                text="MM"
                                textColor="white"
                            />
                        </Dropdown.Trigger>
                    </Navbar.Item>    
                    <Dropdown.Menu
                        aria-label="User menu actions"
                        color="warning"
                        onAction={(actionKey) => console.log({ actionKey })}
                    >
                        <Dropdown.Item key="profile" css={{ height: "$18" }}>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                Signed in as
                            </Text>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                zoey@example.com
                            </Text>
                        </Dropdown.Item>
                        <Dropdown.Item key="settings" withDivider>
                            My Settings
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Content>
            <Navbar.Collapse disableAnimation>
                <Navbar.CollapseItem>
                    <Link href="/">Home</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Link href="/Developers">Developers</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Link href="/Skills">Skills</Link>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}
