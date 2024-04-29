const { Assessment } = require(`../database/models`);

exports.submit = async (assessmentData) => {
  try {
    const newAssessment = await Assessment.create(assessmentData);
    return newAssessment;
  } catch (error) {
    throw new Error(`Error creating new assessment: ${error.message}`);
  }
};
// Define a function to fetch all assessment data
exports.getAllAssessments = async () => {
  try {
    const assessments = await Assessment.findAll();
    return assessments;
  } catch (error) {
    throw new Error(`Error fetching assessments: ${error.message}`);
  }
};
exports.getList = async () => {
  try {
    // Fetch all assessments from the database
    const assessments = await Assessment.findAll();
    return assessments; // This returns an array of assessments
  } catch (error) {
    // Handle any errors that occur during the fetching of assessments
    throw new Error(`Error fetching assessments: ${error.message}`);
  }

};
exports.delete = async (id) => {
  try {
    // Find the assessment with the given id
    const assessment = await Assessment.findOne({ where: { id } });

    // If no assessment is found, throw an error
    if (!assessment) {
      throw new Error(`No assessment found with id: ${id}`);
    }

    // Delete the assessment
    await assessment.destroy();

    // Return a success message
    return { message: `Assessment deleted successfully` };
  } catch (error) {
    // Handle any errors that occur during the deletion of the assessment
    throw new Error(`Error deleting assessment: ${error.message}`);
  }
};
