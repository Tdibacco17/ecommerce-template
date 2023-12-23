import { connect, connection } from "mongoose";

const conn = {
    isConnected: false
}

async function connectDB() {
    try {
        if (conn.isConnected) return;

        if (process.env.MONGODB_URI) {
            const db = await connect(process.env.MONGODB_URI);
            console.log('Connected to MongoDB', db.connection.db.databaseName);
            conn.isConnected = db.connections[0].readyState === 1 //hover readyState to status
        } else {
            console.log('Please add your Mongo URI to .env.local');
        }
    } catch (error) {
        console.log('Catch error in connectDB', error);
    }
}

connection.on('connected', () => {
    console.log('Mongoose is connected')
})

connection.on('error', (error) => {
    console.log('Mongoose connection error: ', error)
})

export default connectDB