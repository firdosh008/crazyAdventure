import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

function createConnection() {
    const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    });

    db.connect((err) => {
        if (err) {
            console.error('Database connection failed:', err.message);
            setTimeout(createConnection, 2000);  // Retry connection after 2s
        } else {
            console.log('Connected to MySQL Database.');
        }
    });

    db.on('error', (err) => {
        console.error('MySQL error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Reconnecting to MySQL...');
            createConnection();  // Auto-reconnect on lost connection
        } else {
            throw err;
        }
    });

    return db;
}

const db = createConnection();

export default db;
