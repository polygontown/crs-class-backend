import bcrypt from "bcryptjs";

let hpp = bcrypt.hash("Admin@123",10);
hpp.then(hp => console.log(hp));
