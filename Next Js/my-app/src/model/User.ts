import mongoose, { Schema, Document, mongo } from "mongoose";

// Creating a interface named Message and extending to Doc as it will store in mongoose doc
export interface Message extends Document {
    content: string;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({

    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }

})


export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}


const UserSchema: Schema<User> = new Schema({

    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        // Regex Matching can chk more on regexr
        match: [/.+\@.+\..+/, "Please Enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "Verify Code is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        required: true,
        default: true
    },
    messages: {
        type: [MessageSchema]
    }
})

// If model is created in mongoose already or not, after as is type script 
const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema))

export default UserModel;