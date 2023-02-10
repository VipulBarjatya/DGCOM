import bcrypt from "bcryptjs";
const users = [
  {
    name: "Vipul",
    email: "vipul@dgcom.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Dipti",
    email: "dipti@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Laveena",
    email: "laveena@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
