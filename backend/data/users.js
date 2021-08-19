import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mohamed Ibrahim',
    email: 'mohamed@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Anna Simonyan',
    email: 'anna@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
