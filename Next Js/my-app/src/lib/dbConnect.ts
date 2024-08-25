import mongoose, { mongo } from "mongoose";


type ConnctionObject = {
    isConnected?: number
}

const connction: ConnctionObject = {}

// void here is mrko farq nahi padta kis type ka data hai 
async function dbConnect(): Promise<void> {

    if (connction.isConnected) {
        console.log("Alredy connected to databse");
        return
    }


    try {

        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
        connction.isConnected = db.connections[0].readyState
        console.log("DB connected successfully")

    } catch (error) {

        console.log("DB connection failed ", error)
        process.exit(1)

    }
}

export default dbConnect;