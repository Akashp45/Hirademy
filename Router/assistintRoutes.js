const express = require('express');
const assistintController = require('../Controllers/assistintController');

const router = express.Router();

router
  .route('/')
  .post(assistintController.CreateAssistint)
  .get(assistintController.getAllAssistints);

// router.post("/", assistintController.CreateAssistint).get();

router
  .route('/:id')
  .get(assistintController.getAssistint)
  .patch(assistintController.updateAssistants)
  .delete(assistintController.deleteAssistant);

module.exports = router;
