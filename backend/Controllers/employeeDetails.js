const { getEmployeeDetails } = require('../Service/employeeDetailsService');

const getEmployeeInfo = async (req, res) => {
  const { company, domain } = req.body;

  if (!company || !domain) {
    return res.status(400).json({ error: 'Company and Domain are required' });
  }

  try {
    const result = await getEmployeeDetails(company, domain);

    if (result.data.length === 0) {
      return res.status(200).json({ message: result.message, data: [] });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error('Controller Error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getEmployeeInfo
};
