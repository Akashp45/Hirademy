const Assistant = require('../Models/assistantModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.CreateAssistint = catchAsync(async (req, res, next) => {
  //   console.log(req.body);
  const newAssistint = await Assistant.create(req.body);
  // console.log(newAssistint);
  res.status(200).json({
    status: 'success',
    body: {
      data: newAssistint,
    },
  });
});

exports.getAssistint = catchAsync(async (req, res, next) => {
  let query = Assistant.findById(req.params.id);
  const doc = await query;
  if (!doc) {
    return next(new AppError('No Document With That Id', 404));
  }
  res.status(200).json({
    status: 'Success',
    body: {
      doc,
    },
  });
});

exports.getAllAssistints = catchAsync(async (req, res, next) => {
  let assistants = await Assistant.find();
  res.status(200).json({
    status: 'Success',
    body: {
      assistants,
    },
  });
});

exports.updateAssistants = catchAsync(async (req, res, next) => {
  console.log(req.params.id);
  const doc = await Assistant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError('No Document With That Id', 404));
  }
  res.status(201).json({
    status: 'Success',
    data: {
      doc,
    },
  });
});

exports.deleteAssistant = catchAsync(async (req, res, next) => {
  const doc = await Assistant.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No Document With That Id', 404));
  }

  res.status(204).json({
    status: 'Success',
    data: null,
  });
});
