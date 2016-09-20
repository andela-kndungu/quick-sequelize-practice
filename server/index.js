import express from 'express';
import Sequelize from 'sequelize';

const app = express();
const sequelize = new Sequelize('postgres://localhost/testing');

app.get('/', (req, res) => {
  res.send('Hello World.');
});

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true
});

User.sync({ force: true }).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

app.listen(3000, () => {
  console.log('Server listening at port 3000');
});

