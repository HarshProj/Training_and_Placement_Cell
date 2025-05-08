// hunterService.js
const axios = require('axios');
require('dotenv').config();

const HUNTER_API_KEY = process.env.HUNTER_API_KEY;

const relevantKeywords = [
  "hr",
  "human resources",
  "talent",
  "acquisition",
  "recruit",
  "campus",
  "university",
  "people operations",
  "sourcing",
  "hiring",
  "manager",
  "director",
  "head",
  "lead",
  "staff",
  "engineering manager",
  "tech lead",
  "sde",
  "software engineer",
  "software developer"
];

const findRelevantContacts = async (domain) => {
  try {
    const response = await axios.get(`https://api.hunter.io/v2/domain-search`, {
      params: {
        domain,
        api_key: HUNTER_API_KEY
      }
    });

    const people = response.data.data.emails || [];

    const filteredPeople = people.filter(person => {
      const position = (person.position || '').toLowerCase();
      return relevantKeywords.some(keyword => position.includes(keyword));
    });

    return filteredPeople;

  } catch (error) {
    console.error("Hunter API Error:", error.message);
    throw new Error("Failed to fetch contacts from Hunter.io");
  }
};

module.exports = {
  findRelevantContacts
};
