<template>
  <div>
    <h3 class="text-3xl font-bold text-gray-700">{{course.name}}</h3>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-orange-600 bg-opacity-75 rounded-full">
              <font-awesome-icon icon="fa-solid fa-graduation-cap"
              class="text-white text-2xl" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{course.population}}</h4>
              <div class="text-gray-500">Enrolled students</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
              <font-awesome-icon icon="fa-solid fa-chart-simple"
              class="text-white text-2xl" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{course.attendance}}%</h4>
              <div class="text-gray-500">Percentage Attendance</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{course.population}}</h4>
              <div class="text-gray-500">Other stats</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
    </div>

    
    </div>
 
</template>

<script setup >
import { reactive, onMounted } from "vue";
import {database} from "../supabase.js"

const course = reactive({
  name:"You're not Logged in",
  population:0,
  attendance:0,
})

const getCourse= async() =>{
  try {
    const {data, error} = await database
  .from('course')
  .select()
  .eq('name', course.name)

  console.log("courses fetched successfully");
  console.log(data);
  course.population = data[0].population;
  course.attendance =data[0].percentage_attendance;
  } catch (error) {
    console.warn(error.message)
  }
}
  onMounted(()=>{
  course.name = localStorage.getItem("@course_name") ;
  getCourse();
  console.log("mounted home");
});
</script>
