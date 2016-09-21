import express from 'express';
import Sequelize from 'sequelize';

const app = express();
const sequelize = new Sequelize('postgres://localhost/testing');
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('./index.html');
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

app.get('/data', (req, res) => {
  User.findOne({
    where: { lastName: 'Hancock' },
  }).then((project) => {
    // project will be the first entry of the Projects table with the title 'aProject' || null
    // project.title will contain the name of the project
    res.json(project);
  });
});

app.put('/data', (req, res) => {
  User.update(
    {
      firstName: 'James'
    },
    {
      where: { firstName: 'John' }
    }
  )
    .then((result) => {
      res.send(result);
    }, (rejectedPromiseError) => {
      console.log(rejectedPromiseError);
    });
});

app.delete('/data', (req, res) => {
  User.destroy(
    {
      where: { firstName: 'John' }
    }
  )
    .then((result) => {
      if (result) {
        res.send('Entry deleted');
      } else {
        res.send('Entry not found');
      }
    });
});

app.listen(3000, () => {
  console.log('Server listening at port 3000');
});

