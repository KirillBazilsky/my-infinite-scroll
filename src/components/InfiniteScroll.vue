<script setup lang="ts">
import { ref, onMounted } from "vue";
import UserCard from "./UserCard.vue";
import { fetchUsers } from "../api/users";
import  IUser from "../interfaces/IUser";
import IUserData from "../interfaces/IUserData";

/** @type {IUser[]} 
* Reactive reference to hold the list of users,
*/
const users = ref<IUser[]>([]);

/** @type {number} 
* Reactive reference for the current page number, used for paginated loading
*/
const page = ref(1);

/** @type {boolean} 
* Reactive reference to track the loading state
*/
const loading = ref(false);

/** @type {HTMLElement | null}
* Reactive reference to hold the user list container element for scroll handling
*/
const userList = ref<HTMLElement | null>(null);

/**
 * Asynchronously loads a list of users and appends them to the existing list.
 * Sets the loading state to true while the data is being fetched.
 * @returns {Promise<void>} - A promise that resolves when the data is loaded.
 */
const loadUsers = async (): Promise<void> => {
  loading.value = true;
  try {
    const newUsers: IUserData[] = await fetchUsers(page.value);
    if (newUsers.length) {
      users.value = [...users.value, ...newUsers];
    }
  } catch (error) {
    console.error("Failed to load users:", error);
  } finally {
    loading.value = false;
  }
};

/**
 * Loads the next page of users when the user scrolls near the bottom of the list.
 * Calls `loadUsers()` to fetch more users.
 */
const loadMore = (): void => {
  if (!loading.value) {
    page.value += 1;
    loadUsers();
  }
};

/**
 * Handles the scroll event on the user list. If the user has scrolled near the bottom,
 * it triggers loading more users.
 */
const handleScroll = (): void => {
  if (userList.value && !loading.value) {
    const { scrollTop, scrollHeight, clientHeight } = userList.value;

    if (scrollHeight - scrollTop <= clientHeight + 100) {
      loadMore();
    }
  }
};

onMounted(() => {
  loadUsers();
});
</script>

<template>
  <div class="wrapper">
    <h1>Users</h1>
    <div class="user-list" @scroll="handleScroll" ref="userList">
      <UserCard v-for="user in users" :key="user.email" :user="user" />
      <div v-if="loading" class="loading-indicator">Loading...</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  border: solid 4px #dddddd80;
  border-radius: 10px;
  min-width: 90vw;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  margin: 0;
  padding-bottom: 5px;
  background-color: #dddddd80;
}

.user-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  height: 80vh;
  overflow-y: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
}

.loading-indicator {
  text-align: center;
  width: 100%;
  margin-top: 16px;
  font-size: 1.2rem;
}
</style>
