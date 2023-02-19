'use client'
import { Input } from "@nextui-org/react"
import { useState } from "react"
import { DeveloperProps } from '@/lib/api/developer';
import { useDebounce } from "@/lib/hooks/use-debounce";



export function Filter({ search }: { search: (value: string) => DeveloperProps[];}){
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 200);

    return (
        <Input  clearable bordered labelPlaceholder="Search" value={query} initialValue="" onChange={(e) => setQuery(e.target.value)}/>
    )
}


export default Filter