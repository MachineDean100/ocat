import { useEffect, useState } from 'react';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  useEffect(() => {
    fetchAssessments();
  }, []);

  async function fetchAssessments() {
    try {
      const fetchedAssessments = await AssessmentService.getList();
      console.log(`assessments:`, fetchedAssessments);

      if (!fetchedAssessments) {
        throw new Error(`No assessments found`);
      }

      setAssessments(fetchedAssessments);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteAssessment(id) {
    try {
      await AssessmentService.delete(id); // Assuming AssessmentService has a delete method
      fetchAssessments(); // Refetch the assessments after deleting
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Cat Date of Birth</th>
          <th>Cat Name</th>
          <th>Instrument Type</th>
          <th>Risk Level</th>
          <th>Score</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {assessments.map((assessment) =>
          <tr key={assessment.id}>
            <td>{assessment.catDateOfBirth}</td>
            <td>{assessment.catName}</td>
            <td>{assessment.instrumentType}</td>
            <td>{assessment.riskLevel}</td>
            <td>{assessment.score}</td>
            <td>
              <button onClick={() => deleteAssessment(assessment.id)}>Delete</button>
            </td>
          </tr>)}
      </tbody>
    </table>
  );
};
