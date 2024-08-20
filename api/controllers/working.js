const Works = require("../models/works");

const createWorking = async (req, res, next) => {
  const { date, name, duration } = req.body;
  if ((!date, !name, !duration)) {
    return res.status(400).send("Please fill in all field.");
  }
  if (duration <= 0) {
    return res.status(400).send("Please enter a positive number.");
  }
  const newWorks = new Works({ date, name, duration });
  try {
    await newWorks.save();
    res.status(201).json("Post process successful");
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
  getWorking,
  createWorking,
};
