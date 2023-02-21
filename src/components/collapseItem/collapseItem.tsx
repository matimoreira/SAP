'use client'
import { Avatar, Collapse, User, Text, Container, Row} from "@nextui-org/react"
import useSWR from 'swr';
import Link from "next/link";
import { useEffect, useState} from 'react';
import { useDebounce } from "@/lib/hooks/use-debounce";
import fetcher from "@/lib/helper/fetcher";
import DeveloperProps from "@/lib/interfaces/developerProps";
import Dev_SkillsProps from "@/lib/interfaces/dev_skillsProps";



export function CollapseItem({ items }: { items: Dev_SkillsProps[] | null | undefined}){
    // const [collapsedId, setColapsedId] = useState('');
    // const debouncedId = useDebounce(collapsedId, 200);
    // const [collapsed, setColapsed] = useState(false);
    // const { data: dev_skills } = useSWR<Dev_SkillsProps[] | null>(
    //     collapsed && debouncedId.length > 0 && `/api/skill?id=${debouncedId}`,
    //     fetcher,
    //     {
    //       keepPreviousData: true
    //     }
    // );



    return (
        <>
            {
                items !== null ?
                items?.map( dev => (
                    <Collapse
                        key={dev._id}
                        title={<Text h4>{dev.name}</Text>}
                        subtitle={dev.seniority}
                        // onClick={(e) => {
                        //     setColapsed(collapsed ? false : true);
                        //     setColapsedId(dev._id);
                        //  } }
                        contentLeft={
                            <Avatar
                                size="lg"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                color="secondary"
                                bordered
                                squared
                            />
                        }>
                        <Text css={{textAlign:"left"}}>
                            {dev.presentation}
                        </Text>
                        {/* <Container justify='flex-end' css={{"width": "100%"}}>
                            <Row justify="flex-end" align="center">
                            <Link href="">View Profile</Link> */}
                                {/* <Link href={`/Developers/${dev._id}/skills`}>View Profile</Link> */}
                            {/* </Row>
                        </Container> */}

                        {
                            dev.dev_skills?.length > 0 ?
                                <Avatar.Group key={dev._id} count={dev.dev_skills.length < 3 ? undefined : dev.dev_skills.length-3} css={{paddingLeft: "$10", paddingTop:"$10"}}>
                                {
                                    dev.dev_skills.slice(0, 3)?.map( skill =>(
                                        <Avatar key={skill._id} size="lg" pointer text={skill.name} color={skill.tag} alt={skill.name} squared/>
                                    ))
                                }
                                </Avatar.Group> :
                                 <div></div>
                        }
                        
                    </Collapse>
                )) : <div></div>
            }
        </>
    )
}


export default CollapseItem