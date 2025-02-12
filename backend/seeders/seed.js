const fs = require('fs');
const path = require('path');
const sequelize = require('../config/db');
const Course = require('../models/course');

const seedCourses = async () => {
  await sequelize.sync({ force: true });

  const categories = ['law', 'medicine', 'IT'];
  for (const category of categories) {
    const filePath = path.join(__dirname, `../data/${category}.json`);
    const fileData = fs.readFileSync(filePath, 'utf8');
    const courses = JSON.parse(fileData);

    await Course.bulkCreate(courses);
  }

  console.log('db seeded');
  process.exit();
};

seedCourses();