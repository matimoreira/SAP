"use client"
import { Collapse, Grid, Input, Spacer, } from '@nextui-org/react';
import useSWR from 'swr';
import { useEffect, useState} from 'react';
import DeveloperProps from '@/lib/interfaces/developerProps';
import { useDebounce } from "@/lib/hooks/use-debounce";
import fetcher from '@/lib/helper/fetcher';
import CollapaseItem from '@/components/collapseItem/collapseItem';
import Dev_SkillsProps from '@/lib/interfaces/dev_skillsProps';


export default function Developers(){
    const [query, setQuery] = useState('');
    
    //fetch by useSWE de Vercel
    const debouncedQuery = useDebounce(query, 200);
    const { data: searchedDevelopers } = useSWR<Dev_SkillsProps[] | null>(
        debouncedQuery.length > 0 && `/api/developer?search=${debouncedQuery}`,
        fetcher,
        {
          keepPreviousData: true
        }
    );
    const { data: allDevelopers } = useSWR<Dev_SkillsProps[] | null>(
        '/api/developer',
        fetcher
    );
            
    //fetch tradicional
            
    // const [allDevelopers, setAllDevelopers] = useState([]);
    // const [searchedDevelopers, setSearchedDevelopers] = useState([]);
    // useEffect(() =>{
    //     fetch('/api/developer')
    //     .then(res => res.json())
    //     .then(data =>{ 
    //         setAllDevelopers(data);
    //     })
    // });

    // useEffect(() =>{
    //     if (debouncedQuery.length > 0){
    //         fetch(`/api/developer?search=${debouncedQuery}`)
    //         .then(res => res.json())
    //         .then(data =>{ 
    //             setSearchedDevelopers(data);
    //         })
    //     }
    // });
       
    return (
        <>
            <Grid.Container gap={2} justify="center">
                <Grid xs={0} md={3} xl={6}>
                </Grid>
                <Grid xs={12} md={5} xl={2} >
                    <Grid.Container gap={2} >
                        {/* <Spacer y={1}/> */}
                        <Grid xs={12} md={12} xl={12} justify="center">
                            <Input  
                                clearable bordered 
                                labelPlaceholder="Search"
                                initialValue=""
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}/>
                        </Grid>
                        <Grid>
                            <Collapse.Group>
                            {
                                debouncedQuery.length > 0 ?
                                    <CollapaseItem items={searchedDevelopers}></CollapaseItem>
                                    : <CollapaseItem items={allDevelopers}></CollapaseItem>   
                            }
                            </Collapse.Group>
                        </Grid>
                    </Grid.Container>
                </Grid>
                <Grid xs={0} md={3} xl={6}>
                </Grid>
            </Grid.Container>
        </>
        
    )
}