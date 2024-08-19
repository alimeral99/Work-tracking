const Works = require("../models/works");

const addWorking = async (req, res, next) => {
  const { date, name, durations } = req.body;

  console.log(date, name, durations);

  const newWorks = new Works({
    date,
    name,
    durations,
  });

  try {
    await newWorks.save();
    res.status(201).json("success");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getWorking = async (req, res, next) => {
  try {
    const works = await Works.find();

    res.status(200).json(works);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  addWorking,
  getWorking,
};
