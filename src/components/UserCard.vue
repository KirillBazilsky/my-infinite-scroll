<script setup lang="ts">
import { IUser } from "./InfiniteScroll.vue";

/**
 * Interface for the component props.
 * @interface IProps
 * @property {IUser} user - The user object to be displayed in the user card.
 */
interface IProps {
  user: IUser;
}

// Define the props passed to the component, typed according to IProps
const props = defineProps<IProps>();
</script>

<template>
  <div class="user-card">
    <!-- Display the user's thumbnail image with alt text based on the user's name -->
    <img
      :src="props.user.picture.thumbnail"
      :alt="`${props.user.name.first} ${props.user.name.last}`"
    />
    <!-- Display the user's first and last name -->
    <h3>{{ props.user.name.first }} {{ props.user.name.last }}</h3>
    <!-- Display the user's email address -->
    <p>{{ props.user.email }}</p>
  </div>
</template>

<style scoped>
/**
 * Styles for the user card container, including border, padding, and box-shadow.
 */
.user-card {
  width: 10%;
  min-height: 200px;
  min-width: 200px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/**
 * Styles for the user image, making it circular and adjusting size.
 */
.user-card img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-bottom: 8px;
}

/**
 * Styles for the user's name (h3), including font size, margin, and border styling.
 */
.user-card h3 {
  font-size: 1.2rem;
  margin: 8px 0;
  border-top: solid 2px #2b2a283a;
}

/**
 * Styles for the user's email (p), including font size and color.
 */
.user-card p {
  font-size: 1rem;
  color: #666;
  overflow-wrap: break-word; /* Ensures long emails break correctly */
}
</style>
