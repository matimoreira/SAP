"use client"
import { useEffect, useState} from 'react';
import { useDebounce } from "@/lib/hooks/use-debounce";
import SkillProps from '@/lib/interfaces/skillProps';
import fetcher from '@/lib/helper/fetcher';
import useSWR from 'swr';
import {Avatar, Card, Grid, Input, Spacer, Text, User } from '@nextui-org/react';

export default function Skills(){
    const [query, setQuery] = useState('');
    //fetch by useSWE de Vercel
    const debouncedQuery = useDebounce(query, 200);
    const { data: searchedSkills } = useSWR<SkillProps[] | null>(
        debouncedQuery.length > 0 && `/api/skill?search=${debouncedQuery}`,
        fetcher,
        {
          keepPreviousData: true
        }
    );
    const { data: allSkills } = useSWR<SkillProps[] | null>(
        '/api/skill',
        fetcher
    );

    // const [skills, setSkills] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/skill')
    //     .then(res => res.json())
    //     .then(data => {
    //         setSkills(data)
    //     })
    // })

    return (
        <>
            <Grid.Container gap={2} justify="center">
                <Grid xs={0} md={1} xl={6}>
                </Grid> 
                <Grid xs={12} md={10} xl={2} >
                    <Grid.Container gap={2} >
                        <Grid xs={12} md={12} xl={12} justify="center">
                            <Input  
                                clearable bordered 
                                labelPlaceholder="Search"
                                initialValue=""
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}/>
                        </Grid>
                        {
                            debouncedQuery.length > 0 ?
                                searchedSkills?.map( skill => (
                                    <Grid xs={6} md={4} xl={2} key={skill._id} >
                                        <User text={skill.name} name={skill.name} color={skill.tag} squared ></User>
                                    </Grid>                              
                                ))
                                :
                                allSkills?.map( skill => (
                                    <Grid xs={6} md={4} xl={2} key={skill._id} >
                                        <User text={skill.name} name={skill.name} color={skill.tag} squared ></User>
                                    </Grid>                              
                                ))

                        }
                    </Grid.Container>  
                </Grid>
                <Grid xs={0} md={1} xl={6}>
                </Grid>
            </Grid.Container>
        </>
    )
}