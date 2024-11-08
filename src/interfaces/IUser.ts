
/**
 * Represents a user with their name, email, and picture.
 * @interface IUser
 * @property {Object} name - The user's name.
 * @property {string} name.first - The user's first name.
 * @property {string} name.last - The user's last name.
 * @property {string} email - The user's email address.
 * @property {Object} picture - The user's profile picture.
 * @property {string} picture.thumbnail - URL of the user's thumbnail picture.
 */
export default interface IUser {
  name: { first: string; last: string };
  email: string;
  picture: { thumbnail: string };
}


