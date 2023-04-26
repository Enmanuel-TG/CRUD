let users = [];

function createUser(user) {
  users = [...users, user];
}

function readUser() {
  console.log(users);
}

function upDataUser(id, newUser) {
  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...newUser,
      };
    }
    return user;
  });
}

function deleteUser(id) {
  users = users.filter((user) => user.id !== id);
}

createUser({
  id: 1,
  name: "Enmanuel",
  Apellido: "Gómez",
  email: "Un correo",
  password: "123456789",
});
createUser({
  id: 2,
  name: "Jose",
  Apellido: "Pereira",
  email: "Un correo",
  password: "987654321",
});
upDataUser(1, {
  id: 5,
  name: "Alfonzo",
  Apellido: "Mata",
  email: "Un correo",
  password: "135792468",
});
deleteUser(2);
readUser();
