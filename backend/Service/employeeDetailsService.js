const { findRelevantContacts } = require('./hunterService');
const { searchEmployeesByCompany } = require('./rockerService');
const axios = require('axios');
require('dotenv').config();

const fetchFromHunter = async (domain) => {
  try {
    const data = await findRelevantContacts(domain);
    return { source: 'Response-1', data };
  } catch (err) {
    console.error('Hunter Error:', err.message);
    return { source: 'Response-1', data: [] };
  }
};

const fetchFromRocket = async (company) => {
  try {
    const data = await searchEmployeesByCompany(company);
    return { source: 'Response-2', data };
  } catch (err) {
    console.error('RocketReach Error:', err.message);
    return { source: 'Response-2', data: [] };
  }
};

const fetchFromPDL = async (company) => {
  const sql = `
    SELECT *
    FROM person
    WHERE experience.company.name = '${company}'
      AND location_country = 'India'
      AND experience.end_date IS NULL
    LIMIT 10
  `;

  try {
    const response = await axios.get('https://api.peopledatalabs.com/v5/person/search', {
      params: {
        api_key: process.env.PDL_API_KEY,
        sql,
      },
    });
    return { source: 'Response-3', data: response.data.data || [] };
  } catch (err) {
    console.error('PDL Error:', err.response?.data || err.message);
    return { source: 'Response-3', data: [] };
  }
};

const getEmployeeDetails = async (company, domain) => {
  const [hunterRes, rocketRes, pdlRes] = await Promise.all([
    fetchFromHunter(domain),
    fetchFromRocket(company),
    fetchFromPDL(company)
  ]);

  const allEmpty = [hunterRes, rocketRes, pdlRes].every(res => res.data.length === 0);

  if (allEmpty) {
    return {
      message: 'Details of this Company is not available currently.',
      data: []
    };
  }

  return {
    message: 'Success',
    data: [hunterRes, rocketRes, pdlRes]
  };
};

module.exports = {
  getEmployeeDetails
};
