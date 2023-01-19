<template>
    <h3 class="text-gray-700 text-3xl font-medium">Upcoming Sessions</h3>
  <ul class="mt-4">
<li class="listIt">
  <font-awesome-icon class="text-xl font-bold"
  icon="fa-regular fa-calendar-check" />
  <div class="lg:text-xl">Session</div>
  <div class="lg:text-xl">Time</div>
  <div class="lg:text-xl">attendance%</div>
  <div class="lg:text-xl"> date</div>
</li>

<li class="listIt">
  <font-awesome-icon class="text-xl font-bold"
  icon="fa-regular fa-calendar-check" />
  <div class="lg:text-xl">Session</div>
  <div class="lg:text-xl">Time</div>
  <div class="lg:text-xl">attendance%</div>
  <div class="lg:text-xl"> date</div>
</li>

<li class="listIt">
  <font-awesome-icon class="text-xl font-bold"
  icon="fa-regular fa-calendar-check" />
  <div class="lg:text-xl">Session</div>
  <div class="lg:text-xl">Time</div>
  <div class="lg:text-xl">attendance%</div>
  <div class="lg:text-xl"> date</div>
</li>

  </ul>

  <button class="add_button"  @click="buttonClicked">+</button>

    <button
    type="button"
    class="btn"
    @click="showModal"
  >
    Open Modal!
  </button>

  <AddSessionForm
   :open="open"
   :onclose="onclose"
  />
    
  </template>
  
  <script setup >
import AddSessionForm from '../components/AddSessionForm.vue';
import { ref } from 'vue';
//const modal = document.getElementById("defaultModal");
const open =ref(false)
function buttonClicked(){
  open.value = !open.value
  console.log("modal should have opened")
}

function onclose() {
  open.value = false
}


  </script>
  
  <style scoped>
  .ico {
  @apply text-gray-500 text-3xl font-medium m-2
  }
.listIt{
  @apply
  p-4 bg-gray-100 font-semibold
  text-gray-600 flex flex-row
  justify-evenly
}
.add_button{
@apply py-3  px-5 rounded-full
 bg-green-500 font-extrabold text-white 
 text-4xl hover:bg-green-300 focus:bg-green-400
 absolute bottom-10 right-14

}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}




  </style>
  