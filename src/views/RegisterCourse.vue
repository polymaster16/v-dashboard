<template>
    <div class="bg-gray-200 p-4">
      <form @submit.prevent="register" class="bg-white p-6 rounded-lg shadow-md">
        <label class="block font-medium text-gray-700 mb-2">
          Name:
          <input class="form-input w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue" type="text" v-model="name" />
        </label>
        <br />
        <label class="block font-medium text-gray-700 mb-2">
          Email:
          <input class="form-input w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue" type="email" v-model="email" />
        </label>
        <br />
        <label class="block font-medium text-gray-700 mb-2">
          Course:
          <select class="form-select py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue" v-model="course">
            <option v-for="c in courses" :value="c.value" :key="c.value" class="text-gray-700">
              {{ c.text }}
            </option>
          </select>
        </label>
        <br />
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" type="submit">Register</button>
      </form>
    </div>
  </template>

  <script setup>
</script>