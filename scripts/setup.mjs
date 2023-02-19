import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = "mongodb+srv://matiasm:<password>@cluster0.endccuv.mongodb.net/?retryWrites=true&w=majority";
const setup = async () => {
    let client;
    client = new MongoClient(uri);
  
    try {
        await client.connect();
        
        const hasData = await client
            .db('SAP')
            .collection('developers')
            .countDocuments();
  
        if (hasData) {
            console.log('Database already exists with data');
            client.close();
            return;
        }
  
        console.log('Database is empty')
    } catch (error) {
        return 'Database is not ready yet';
    } finally {
        if (client) {
            await client.close();
        }
    }
};
  
try {
    setup();
} catch {
    console.warn('Database is not ready yet. Skipping seeding...');
}