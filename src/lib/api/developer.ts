import clientPromise from '@/lib/mongodb';
import SkillProps from '@/lib/interfaces/skillProps';
import DeveloperProps from '@/lib/interfaces/developerProps';
import Dev_SkillsProps from '@/lib/interfaces/dev_skillsProps';


export async function getAllDevelopers(): Promise<DeveloperProps[]> {
    // let result: DeveloperProps[] = [];
    let client = await clientPromise;
    let collection = client.db('SAP').collection('developers');
    let query = {isActive: true}
    // let cursor = collection.aggregate(result, {$sort: {name: 1}});
    let cursor = collection.find(query, {sort: {name: 1}});
    return await cursor.toArray();
}

export async function getAllDevelopers_Skills(): Promise<Dev_SkillsProps[]> {
    let client = await clientPromise;
    let collection = client.db('SAP').collection('dev_skills');
    let query = { isActive: true};
    let cursor = collection.find(query, {sort: {name: 1}});
    return await cursor.toArray();
}


export async function getDevsCount(): Promise<number> {
    let client = await clientPromise;
    const collection = client.db('SAP').collection('developers');
    return await collection.countDocuments();
}

export async function getDevelopersByName( value: string): Promise<DeveloperProps[]> {
    let client = await clientPromise;
    let collection = client.db('SAP').collection('developers');
    let regexComparison = RegExp(".*" + value + ".*", "i");
    let query = { name: regexComparison, isActive: true};
    let cursor = collection.find(query);
    return await cursor.toArray();
}

export async function getDevelopers_SkillByName( value: string | string[]): Promise<Dev_SkillsProps[]> {
    let client = await clientPromise;
    let collection = client.db('SAP').collection('dev_skills');
    let regexComparison = RegExp(".*" + value + ".*", "i");
    let query = { name: regexComparison, isActive: true};
    let cursor = collection.find(query);
    return await cursor.toArray();
}