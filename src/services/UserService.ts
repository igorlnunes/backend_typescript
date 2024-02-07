const db = [
  {
    name: 'Joana',
    email: 'joanag@gmail.com',
  }
];

export class UserService {
  createUser = (name: string, email: string) => {
    const user = {
      name,
      email
    }
    db.push(user);
    console.log("Database updated", db);
  }

  getAllUsers = () => {
    return db;
  }
}