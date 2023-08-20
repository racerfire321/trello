import { Client,Account,Databases,Storage,ID } from 'appwrite';



const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

    const account= new Account(client);
    export const databases = new Databases(client);
    const storage = new Storage(client);

    export default { client,account,databases,storage } ;
