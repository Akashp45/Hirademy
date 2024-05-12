const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const { Model } = require('mongoose');

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    //   console.log(req.body);
    const doc = await Model.create(req.body);
    // console.log(newAssistint);
    res.status(201).json({
      status: 'success',
      body: {
        data: doc,
      },
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
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

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let assistants = await Model.find();
    res.status(200).json({
      status: 'Success',
      body: {
        assistants,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    // console.log(req.params.id);
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
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

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No Document With That Id', 404));
    }

    res.status(204).json({
      status: 'Success',
      data: null,
    });
  });
