import { hashPassword } from 'helpers/auth';
import dbConnect from 'helpers/dbConnect';
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
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    role: userRole,
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created user!' });
  client.close();
}

export default handler;