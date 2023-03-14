import pkg from 'pg';

const {Client} = pkg;

export const client = new Client({
    host: "db.micqmfrkdftslvsjgpec.supabase.co",
    user: "postgres",
    password: "Putmul12345,,",
    database: "postgres",
})

await client.connect();
console.log("Connection");