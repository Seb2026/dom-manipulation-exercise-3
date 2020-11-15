console.log('script.js connected');

// ****************************** part 1 ******************************

document.querySelector('#new-task-form').addEventListener('submit', e => {
  e.preventDefault();
  
  // 1: get the input from user related to the new task and the owner of the task
  
  // 2: append it to the DOM
  
  // 3: clear the form after the submission
  
  // ... your code here

const inputs = document.querySelectorAll(`input`);
const taskContent = inputs[0].value;
const ownerContent = inputs[1].value;

const parentTask = document.querySelector(`#tasks-list`);
const newLiTag = document.createElement(`li`);
newLiTag.innerHTML = `${taskContent} by ${ownerContent}`;
parentTask.appendChild(newLiTag);

inputs[0].value = ``;
inputs[1].value = ``;
  
});

// ****************************** part 2 ******************************

// 1: get the DOM element that represents 'Update gif' button
// 2: add to click handler to it
// 3: get the DOM element that represents 'iframe tag'
// 4. change the attribute source to point to 'https://giphy.com/embed/1MTLxzwvOnvmE' after clicking on the 'Update gif' button

// 5: bonus: make it so every time you  click on the 'Update gif' button, a different gif (one of these two) appears

const gifButton = document.querySelector(`#update-button`);
const iframeTag = document.querySelector(`iframe`);
gifButton.addEventListener(`click`, () => {
    iframeTag.setAttribute(`src`, `https://giphy.com/embed/1MTLxzwvOnvmE`);



});