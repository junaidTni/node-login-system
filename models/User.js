let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let Schema = mongoose.Schema;

let UserSchema = new Schema({

    name: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    }
});


UserSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        let  salt, hash;
        salt = await bcrypt.genSalt(10);
        hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
    } else {
        return next();
    }
});

UserSchema.methods.matchPassword = function (password) {
    return bcrypt.compare(password, this.password);
};


module.exports = mongoose.model('User', UserSchema);
