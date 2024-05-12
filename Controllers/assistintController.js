const Assistant = require('../Models/assistantModel');
const factory = require('./handlerFactory');

exports.CreateAssistint = factory.createOne(Assistant);
exports.getAssistint = factory.getOne(Assistant);
exports.getAllAssistints = factory.getAll(Assistant);
exports.updateAssistants = factory.updateOne(Assistant);
exports.deleteAssistant = factory.deleteOne(Assistant);
