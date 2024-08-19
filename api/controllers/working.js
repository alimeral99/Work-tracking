const Works = require("../models/works");

const createWorking = async (req, res, next) => {
  const { date, name, duration } = req.body;

  const newWorks = new Works({ date, name, duration });

  console.log(newWorks);
  try {
    await newWorks.save();
    res.status(201).json("success");
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  getWorking,
  createWorking,
};
