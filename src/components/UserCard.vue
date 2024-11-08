<script setup lang="ts">
import  IUser  from "../interfaces/IUser";

/**
 * Interface for the component props.
 * @interface IProps
 * @property {IUser} user - The user object to be displayed in the user card.
 */
interface IProps {
  user: IUser;
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="user-card">
    <img
      :src="props.user.picture.thumbnail"
      :alt="`${props.user.name.first} ${props.user.name.last}`"
    />
    <h3>{{ props.user.name.first }} {{ props.user.name.last }}</h3>
    <p>{{ props.user.email }}</p>
  </div>
</template>

<style scoped>

.user-card {
  width: 15%;
  min-height: 200px;
  min-width: 200px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.user-card img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-bottom: 8px;
}

.user-card h3 {
  font-size: 1.2rem;
  margin: 8px 0;
  border-top: solid 2px #2b2a283a;
}

.user-card p {
  font-size: 1rem;
  color: #666;
  overflow-wrap: break-word;
}
</style>
