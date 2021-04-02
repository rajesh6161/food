import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Rajesh Ranjan',
    email: 'rajesh@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jayesh Tripathi',
    email: 'jayesh@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Hemant Patel',
    email: 'hemant@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
