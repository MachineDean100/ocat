const { Assessment } = require(`../database/models`);

exports.submit = async (assessment) => {
  try {
    // Use the sequelize model `Assessment` to save the assessment data in the database
    const result = await Assessment.create(assessment);
    return result; // Return the newly created database entry
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error saving assessment:`, error);
    throw error; // Re-throw the error to be handled by the caller
  }
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
};

exports.getList = async () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database
  try {
    // Use the sequelize model `Assessment` to fetch all assessment data from the database
    const assessments = await Assessment.findAll();
    return assessments; // Return the list of assessments
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fetching assessments:`, error);
    throw error; // Re-throw the error to be handled by the caller
  }
  // const assessments = [];

  // return assessments;
};
