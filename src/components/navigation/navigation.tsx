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
        <Navbar isBordered variant="sticky">
            <Navbar.Toggle />
                <Navbar.Brand
                    css={{
                        "@xs": {
                        w: "12%",
                        },
                    }}
                >                
                <EAPLogo />
                {/* <Text b color="inherit" hideIn="xl">
                    Easy Assignment Proyect
                </Text> */}
                <Text b color="inherit">
                    EAP
                </Text>
            </Navbar.Brand>
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
                    <Link href="/" onClick={ e => (setPage("/"))}>Home</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Link href="/Developers" onClick={ e => (setPage("/Developers"))}>Developers</Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Link href="/Skills" onClick={ e => (setPage("/Skills"))}>Skills</Link>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}
