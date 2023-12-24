import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        minlength: 5
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        trim: true,
        minlength: 6,
        select: false
    },
});

const User = models.User || model("User", userSchema);
export default User;