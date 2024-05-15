const Assistant = require('../Models/assistantModel');
const factory = require('./handlerFactory');

// CRUD Operations
exports.createAssistant = factory.createOne(Assistant);
exports.getAssistant = factory.getOne(Assistant);
exports.getAllAssistant = factory.getAll(Assistant);
exports.updateAssistant = factory.updateOne(Assistant);
exports.deleteAssistant = factory.deleteOne(Assistant);
