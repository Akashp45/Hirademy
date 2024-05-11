const Assistant = require("../Models/assistantModel");

exports.CreateAssistint = async (req, res, next) => {
  //   console.log(req.body);
  try {
    const newAssistint = await Assistant.create(req.body);
    // console.log(newAssistint);
    res.status(200).json({
      status: "success",
      body: {
        data: newAssistint,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      error: err,
    });
  }
};

exports.getAssistint = async (req, res, next) => {
  try {
    let query = Assistant.findById(req.params.id);
    const doc = await query;
    if (!doc) {
      throw err;
    }
    res.status(200).json({
      status: "Success",
      body: {
        doc,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(404).json({
      status: "Failed",
      message: err,
    });
  }
};

exports.getAllAssistints = async (req, res, next) => {
  try {
    let assistants = await Assistant.find();
    res.status(200).json({
      status: "Success",
      body: {
        assistants,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err,
    });
  }
};

exports.updateAssistants = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const doc = await Assistant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      throw err;
    }

    res.status(201).json({
      status: "Success",
      data: {
        doc,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: "No document with that id",
    });
  }
};

exports.deleteAssistant = async (req, res, next) => {
  try {
    const doc = await Assistant.findByIdAndDelete(req.params.id);

    if (!doc) {
      throw err;
    }

    res.status(204).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: "No document with that id",
    });
  }
};
