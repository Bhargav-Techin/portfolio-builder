import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        validator: function (value) {
            const re = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/
            return re.test(value);
        },
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    }
});

const User = mongoose.model('User', UserSchema);

export default User;