import Axios from '../utils/http.config';

export class AssessmentService {
  static async submit(assessment) {
    try {
      console.log(`Submitting assessment:`, assessment);
      const response = await Axios.post(`/assessment/submit`, { assessment });
      console.log(`Received response:`, response.data);
      return response.data;
    } catch (err) {
      console.error(`An error occurred:`, err);
      if (err.response && err.response.data) {
        throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
      } else {
        throw new Error(`An unexpected error occurred`);
      }
    }
  }

  static async getList() {
    try {
      const response = await Axios.get(`/assessment/list`);
      console.log(`Received response:`, response.data); // Log the data field of the response

      if (response.data && response.data.data && response.data.data.assessments) {
        console.log(`Returning assessments:`, response.data.data.assessments); // Log the assessments before returning them
        return response.data.data.assessments;
      }
      console.log(`No assessments found in response:`, response.data); // Log the response data if no assessments were found
      throw new Error(`No assessments found`);

    } catch (err) {
      console.error(`An error occurred:`, err); // Log any errors that occur
      if (err.response && err.response.data) {
        throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
      } else {
        throw new Error(`An unexpected error occurred`);
      }
    }
  }
}
