const Works = require("../models/works");

const createWorking = async (req, res, next) => {
  const { date, name, duration } = req.body;

  if ((!date, !name, !duration)) {
    return res.status(400).send("Please fill in all field.");
  }

  if (duration <= 0) {
    return res.status(400).send("Please enter a positive number.");
  }

  const newWorks = new Works({ date: new Date(date), name, duration });

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

const searchWorking = async (req, res, next) => {
  const date = req.params.query;

  if (!date) {
    return res.status(404).json("please fill in the entire field");
  }

  const queryDate = new Date(date);
  queryDate.setHours(0, 0, 0, 0);

  const getDate = await Works.find({
    date: queryDate,
  });

  if (getDate) {
    return res.status(404).json("There is no study on this date");
  }

  if (getDate) {
    res.status(200).json(getDate);
  }
};

module.exports = {
  getWorking,
  createWorking,
  searchWorking,
};
