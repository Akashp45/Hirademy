const express = require('express');
const assistantController = require('../Controllers/assistintController');

const router = express.Router();

router
  .route('/')
  .post(assistantController.createAssistant)
  .get(assistantController.getAllAssistant);

// router.post("/", assistintController.CreateAssistint).get();

router
  .route('/:id')
  .get(assistantController.getAssistant)
  .patch(assistantController.updateAssistant)
  .delete(assistantController.deleteAssistant);

module.exports = router;
