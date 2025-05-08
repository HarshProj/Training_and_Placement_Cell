// services/rocketreach.js
const axios = require('axios');
require('dotenv').config();

const BASE_URL = 'https://api.rocketreach.co/v1/api';

async function searchEmployeesByCompany(companyName) {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        company: companyName,
        api_key: process.env.ROCKETREACH_API_KEY
      }
    });

    const allProfiles = response.data.profiles || [];

    const indianProfiles = allProfiles.filter(profile => {
      const country = (profile.country || '').toLowerCase().trim();
      const code = (profile.country_code || '').toUpperCase().trim();
      return country === 'india' || code === 'IN';
    });

    return indianProfiles;
  } catch (error) {
    console.error("RocketReach Error:", error.response?.data || error.message);
    throw new Error('Failed to fetch employee data from RocketReach');
  }
}

module.exports = {
  searchEmployeesByCompany
};
