import { ObjectId } from 'mongodb';  
import clientPromise from '@/lib/mongodb';
import SkillProps from '@/lib/interfaces/skillProps';
import Dev_SkillsProps from '@/lib/interfaces/dev_skillsProps';

export async function getAllSkills(): Promise<SkillProps[]> {
    let result: SkillProps[] = [];
    let client = await clientPromise;
    let collection = client.db('SAP').collection('skills');
    let query = {isActive: true}
    // let cursor = collection.aggregate(result, {$sort: {name: 1}});
    let cursor = collection.find(query, {sort: {name: 1}});
    return await cursor.toArray();
}

export async function getSkillsByName( value: string | string[]): Promise<SkillProps[]> {
    let client = await clientPromise;
    let collection = client.db('SAP').collection('skills');
    let regexComparison = RegExp(".*" + value + ".*", "i");
    let query = { name: regexComparison, isActive: true};
    let cursor = collection.find(query, {sort: {name: 1}});
    return await cursor.toArray();;
}

export async function getSkillsByIdDev( value: string | string[]): Promise<Dev_SkillsProps[]> {
    let client = await clientPromise;
    let collection = client.db('SAP').collection('dev_skills');
    let query = {_id: new ObjectId(value && ""), isActive: true};
    // const agg = [
    //     {
    //       '$lookup': {
    //         'from': 'skills', 
    //         'localField': 'skills', 
    //         'foreignField': '_id', 
    //         'as': 'dev_skills'
    //       }
    //     }
    //   ];
    // let cursor = collection.aggregate(agg);
    let cursor = collection.find(query, {sort: {name: 1}});
    let result = await cursor.toArray();
    console.log(result);
    return result;
}