import axios from 'axios';
import { USERS_API_URL } from '../constants';

/**
 * Represents a user with detailed information such as name, location, contact details, and more.
 * @interface User
 * @property {string} gender - The gender of the user.
 * @property {Object} name - The user's name.
 * @property {string} name.title - The user's title (e.g., Mr, Mrs).
 * @property {string} name.first - The user's first name.
 * @property {string} name.last - The user's last name.
 * @property {Object} location - The user's address details.
 * @property {Object} location.street - The street address.
 * @property {number} location.street.number - The street number.
 * @property {string} location.street.name - The street name.
 * @property {string} location.city - The city in which the user resides.
 * @property {string} location.state - The state in which the user resides.
 * @property {string} location.country - The country in which the user resides.
 * @property {string | number} location.postcode - The postcode or postal code.
 * @property {string} email - The user's email address.
 * @property {Object} login - The user's login credentials.
 * @property {string} login.uuid - The unique UUID identifier for the user.
 * @property {string} login.username - The user's username.
 * @property {string} login.password - The user's password.
 * @property {Object} dob - The user's date of birth details.
 * @property {string} dob.date - The user's date of birth.
 * @property {number} dob.age - The user's age.
 * @property {Object} registered - The user's registration details.
 * @property {string} registered.date - The registration date.
 * @property {number} registered.age - The age of the user at the time of registration.
 * @property {string} phone - The user's phone number.
 * @property {string} cell - The user's cell phone number.
 * @property {Object} id - The user's identification details.
 * @property {string} id.name - The type of identification (e.g., SSN).
 * @property {string | null} id.value - The identification number (nullable).
 * @property {Object} picture - The user's profile picture details.
 * @property {string} picture.large - URL of the large version of the user's picture.
 * @property {string} picture.medium - URL of the medium version of the user's picture.
 * @property {string} picture.thumbnail - URL of the thumbnail version of the user's picture.
 * @property {string} nat - The user's nationality code.
 */
export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

/**
 * Fetches a list of users from the API with pagination support.
 * @async
 * @function fetchUsers
 * @param {number} page - The page number for pagination.
 * @returns {Promise<User[]>} A promise that resolves to an array of users.
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchUsers = async (page: number): Promise<User[]> => {
  try {
    // Make an API request to fetch users with the specified page number
    const response = await axios.get(USERS_API_URL, {
      params: {
        results: 20, // Number of users to fetch per request
        page, // The current page number for pagination
      },
    });
    // Return the list of users from the API response
    return response.data.results;
  } catch (error) {
    console.error('Error while fetching users:', error);
    throw error; // Rethrow the error to propagate it
  }
};
