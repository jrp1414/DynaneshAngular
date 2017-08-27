"use strict";
var user_profile_component_1 = require("./user_profile.component");
var login_component_1 = require("./login.component");
var user_signup_component_1 = require("./user_signup.component");
exports.userRoutes = [
    { path: "profile", component: user_profile_component_1.ProfileComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "register", component: user_signup_component_1.UserSignUpComponent }
];
//# sourceMappingURL=user.routes.js.map