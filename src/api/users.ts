import axios from 'axios';
import { INCLUDED_FIELDS, USERS_API_URL } from '../constants';
import  IUserData  from '../interfaces/IUserData';

/**
 * Fetches a list of users from the API with pagination support.
 * @async
 * @function fetchUsers
 * @param {string} inc - The data fields to response
 * @param {number} page - The page number for pagination.
 * @returns {Promise<IUserData[]>} A promise that resolves to an array of users.
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchUsers = async (page: number): Promise<IUserData[]> => {
  try {
    const response = await axios.get(USERS_API_URL, {
      params: {
        inc: INCLUDED_FIELDS,
        results: 20, 
        page, 
      },
    });
    
    return response.data.results;
  } catch (error) {
    console.error('Error while fetching users:', error);
    throw error; 
  }
};
