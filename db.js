const postgres = require('postgres');
require('dotenv').config();

const sql = postgres('postgresql://shreya_wd0c_user:WJMg8vlqftLK1EjI8rOcU0NU3x7AigcF@dpg-cvlrbsp5pdvs73fdbuvg-a.oregon-postgres.render.com/shreya_wd0c', {
    ssl: 'require'
});

// Create tables
// 1. Create a users table
sql`CREATE TABLE IF NOT EXISTS users (age INTEGER, name TEXT)`.then(res => {
    console.log('users table created');
}).catch(err => {
    console.log(err);
});

// create table task
sql`CREATE TABLE IF NOT EXISTS tasks (name TEXT)`.then(res => {
    console.log('tasks table created');
}).catch(err => {
    console.log(err);
});

module.exports = sql;