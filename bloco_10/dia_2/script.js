//Requisito 1
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

//Requisito 2 e 3 (utilizando o mesmo código abaixo)
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

module.exports = {
  uppercase,
  getUserName
}