import Axios from '../utils/http.config';

export class AssessmentService {
  static async submit(assessment) {
    try {
      const response = await Axios.post(`/assessment/submit`, { assessment });
      return response.data;
      // Choose the correct method, url, and data to send
      // in a request to the express packages/api/src/routes/assessment.js
      // NOTE: the http.config file automatically adds /api to the front of your url
    } catch (err) {
      if (err.response && err.response.data) {
        throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
      } else {
        // Handle cases where the error structure is not as expected
        throw new Error(`An unexpected error occurred`);
      }
    }
  }

  static async getList() {
    try {
      const response = await Axios.get(`/assessment/list`);
      return response.data.data.assessment;
      // Choose the correct method, url, and data to send
      // in a request to the express packages/api/src/routes/assessment.js
      // NOTE: the http.config file automatically adds /api to the front of your url
    } catch (err) {
      if (err.response && err.response.data) {
        throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
      } else {
        throw new Error(`An unexpected error occurred`);
      }
    }
  }
}
