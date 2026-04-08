const connectDB = require("./config/db");
const User = require("./apis/models/userModel");

connectDB();

User.findOne({ email: "admin@gmail.com" })
  .then((data) => {

    if (data == null) {

      let userObj = new User();

      userObj.name = "Admin";
      userObj.email = "admin@gmail.com";
      userObj.password = "123456";
      userObj.userType = "admin";

      userObj.save()
        .then(() => {
          console.log("Admin created");
          process.exit();
        })
        .catch((err) => {
          console.log(err);
          process.exit(1);
        });

    } else {
      console.log("Admin already exists");
      process.exit();
    }

  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });