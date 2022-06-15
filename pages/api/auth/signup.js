import { hashPassword } from 'helpers/auth';
import dbConnect from 'helpers/dbConnect';
import userInfo from 'models/userInfo';
import users from 'models/users';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { email, password, userRole } = data;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long.',
    });
    return;
  }

  await dbConnect();

  const existingUser = await users.findOne({ email: email }).exec();

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    return;
  }

  const hashedPassword = await hashPassword(password);


  const result = await users.create({
    role: userRole,
    email: email,
    password: hashedPassword,
  });

  const result2 = await userInfo.create({userId:result._id})

  res.status(201).json({ message: 'Created user!', data:result2 });
}

export default handler;