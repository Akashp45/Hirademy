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
