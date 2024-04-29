import express from 'express';
import { AssessmentService } from './path/to/index';

const app = express();

app.get(`/api/assessment/`, async (req, res, next) => {
  try {
    const assessments = await AssessmentService.getList();
    res.json(assessments);
  } catch (err) {
    next(err);
  }
});

app.listen(4000, () => {
  console.log(`Server is running on port 4000 `);
});
