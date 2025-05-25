const User =require("../models/user");



module.exports.renderSignupForm  =(req, res) => {
    res.render("users/signup");
};

module.exports.signup =async (req, res) => {
    try { 
        let { username, email, Password } = req.body;
        const newUser = new User({ email, username });
        const registerUser = await User.register(newUser, Password);
        req.login(registerUser, (err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Find Your Place!");
            res.redirect("/listings");
        });    
    } catch (err) {router.route("/",(re))
        console.error("Signup Error:", err);
        req.flash("error", "Signup failed. Please try again.");
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm= (req,res)=>{
    res.render("users/login.ejs");
};

module.exports.login= async(req,res)=>{
    //  res.send(" welcome to the Find Your Place");
    req.flash("success", "welcome back to Find Your Place ! ")
    let redirectUrl ="/listings";
    res.redirect(redirectUrl);
};

module.exports.logout=(req, res, next)=>{
    req.logout((err)=>{
        if(err){
            return next (err);
        }
        req.flash("success","you are logged out");
        res.redirect("/listings");
    })
};