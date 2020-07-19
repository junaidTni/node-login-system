const jsonResponse = require('../utils/jsonResponse');
const User = require('../models/User');




exports.registerView = async (req, res, next) => {
    return res.render('register.ejs');
}

exports.register = async (req, res, next) => {
    const { email, password, phone, name } = req.body;
    if (!email || !password || !phone || !name) {
        return jsonResponse(res, 0, 'Please provide details');
    }
    const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!checkEmail.test(email)) {
        return jsonResponse(res, 0, 'Invalid email');
    }

    const user = await User.findOne({ email });
    if (user) {
        return jsonResponse(res, 0, 'User already exists with this email');
    }
    await User.create({ email: email, password: password, phone: phone, name: name });
    return jsonResponse(res, 1, 'User registered successfully');
}


exports.loginView = async (req, res, next) => {
    if (req.session.user) {
        return res.redirect('/');
    }
    return res.render('login.ejs');
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email) {
        return jsonResponse(res, 0, 'Email is required.');
    }
    if (!password) {
        return jsonResponse(res, 0, 'Password is required.');
    }

    const user = await User.findOne({ email });
    if (!user) {
        return jsonResponse(res, 0, 'Invalid credentials');
    }
    const checkPass = await user.matchPassword(password);

    if (!checkPass) {
        return jsonResponse(res, 0, 'Invalid credentials');
    }


    req.session.user = user;
    return jsonResponse(res, 1, 'Logged In successfully...');

}

exports.logout = async (req, res, next) => {
    req.session.user = null;
    return res.redirect('/login');
}

exports.homeView = async (req, res, next) => {
    return res.render('index.ejs');
}

















