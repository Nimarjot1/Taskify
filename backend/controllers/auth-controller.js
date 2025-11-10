import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser=async(req,res)=>{
    try {
       const {email,name,password} = req.body;

       const existingUSer = await User.findOne({email});

         if(existingUSer){
            return res.status(400).json({message:"User already exists"});
         }

         const salt = await bcrypt.genSalt(10);

         const hashPassword = await bcrypt.hash(password,salt);

         const newUser = await User.create({
            email,
            password:hashPassword,
            name,
         });




         // TODO: SEND email
         const verificationToken = jwt.sign(
            { userId: newUser._id, property: "emailVerification" },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
         );

         await Verification.create({
            userId: newUser._id,
            token: verificationToken,
            expiresAt: new Date(Date.now() + 1*60*60*1000) // 1 hour
         });

         //send email
         const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;
         const emailBody = `<p>Click <a href="${verificationLink}">here</a> to verify your email</p>`;
         const emailSubject = "Verify your email";





            res.status(201).json({
                message:"Verification email sent to your email. Please check and verify your account.",
            });
} catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal Server Error" });
}
};


const loginUser=async(req,res)=>{
    try {

} catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal Server Error" });
}
};

export { registerUser, loginUser };