// this file is reusable file for all CRUD Operations
const asyncHandler = require('../utils/asyncHandler');
const ApplicationError = require('../utils/ApplicationError');
const { Model } = require('mongoose');

// C- Create Document
exports.createOne = (Model) =>
  asyncHandler(async (req, res, next) => {
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

// R- Read Document
exports.getOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    const doc = await query;
    if (!doc) {
      return next(new ApplicationError('No Document With That Id', 404));
    }
    res.status(200).json({
      status: 'Success',
      body: {
        doc,
      },
    });
  });

// R- Read Document
exports.getAll = (Model) =>
  asyncHandler(async (req, res, next) => {
    let assistants = await Model.find();
    res.status(200).json({
      status: 'Success',
      body: {
        assistants,
      },
    });
  });

// U- Update Document
exports.updateOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    // console.log(req.params.id);
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new ApplicationError('No Document With That Id', 404));
    }
    res.status(201).json({
      status: 'Success',
      data: {
        doc,
      },
    });
  });

//   D- Delete Document
exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new ApplicationError('No Document With That Id', 404));
    }

    res.status(204).json({
      status: 'Success',
      data: null,
    });
  });
