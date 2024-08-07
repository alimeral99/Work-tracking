const Working = require("../models/working");

const addWorking = async (req, res, next) => {
  const { name, duration, date } = req.body;

  const newWorks = new Working({
    name,
    duration,
    date,
  });
  try {
    await newWorks.save();

    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getWorking = async (req, res, next) => {
  try {
    const works = await Working.find();

    res.status(200).json(works);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  addWorking,
  getWorking,
};
/////dffdsfdsf
