/**
 * Represents a user with detailed information such as name, email, picture.
 * @interface IUserData
 * @property {Object} name - The user's name.
 * @property {string} name.title - The user's title (e.g., Mr, Mrs).
 * @property {string} name.first - The user's first name.
 * @property {string} name.last - The user's last name.
 * @property {string} email - The user's email address.
 * @property {Object} picture - The user's profile picture details.
 * @property {string} picture.large - URL of the large version of the user's picture.
 * @property {string} picture.medium - URL of the medium version of the user's picture.
 * @property {string} picture.thumbnail - URL of the thumbnail version of the user's picture.
 */
export default interface IUserData {
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  }