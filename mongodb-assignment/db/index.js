const mongoose = require('mongoose');

//connect ot mongoo db
mongoose.connect('mongodb+srv://nigamman:Rishi20@100xdevs.bgvyutl.mongodb.net/mongo_assign_one');

//define schema
const AdminSchema = new mongoose.AdminSchema({
    username: String,
    password: String
});
const UserSchema = new mongoose.UserSchema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});
const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
});
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin, 
    User,
    Course
}
