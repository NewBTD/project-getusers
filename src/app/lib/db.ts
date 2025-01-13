/** @format */

// This is a mock database. In a real application, you'd use a proper database.
let users = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Doe", email: "jane@example.com" },
];

export function getUsers() {
  return users;
}

export function getUser(id: string) {
  return users.find((user) => user.id === id);
}

export function createUser(user: { name: string; email: string }) {
  const newUser = { ...user, id: String(users.length + 1) };
  users.push(newUser);
  return newUser;
}

export function updateUser(
  id: string,
  update: { name?: string; email?: string }
) {
  const user = users.find((user) => user.id === id);
  if (user) {
    Object.assign(user, update);
    return user;
  }
  return null;
}

export function deleteUser(id: string) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const [deletedUser] = users.splice(index, 1);
    return deletedUser;
  }
  return null;
}
