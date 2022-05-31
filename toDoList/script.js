
// 1. Set Real Time Clock
const clockTitle = document.querySelector(".js-clock");
function countingClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clockTitle.innerText = `${hours} : ${minutes} : ${seconds}`;
}
countingClock();
setInterval(countingClock, 1000); //1 second

// 2. Login 
const login = document.querySelector("#login");
const inputLogin = document.querySelector("#login input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event) {
  event.preventDefault();
  login.classList.add(HIDDEN_CLASSNAME);
  const username = inputLogin.value;
  localStorage.setItem(USERNAME_KEY, username);
  showGreeting(username);
}
function showGreeting(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  login.classList.remove(HIDDEN_CLASSNAME);
  login.addEventListener("submit", onSubmit);
} else {
  showGreeting(savedUsername);
}

// 3. To-do List
const todo = document.getElementById("todo");
const inputTodo = todo.querySelector("input");
const todoList = document.getElementById("todo-list");
let todos=[];

function saveTodos() {
   localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
   saveTodos();
}

function paintTodo(newTodo){
  const list = document.createElement("li");
  list.id = newTodo.id;
  const span = document.createElement("span");
    span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText="X";
  button.addEventListener("click", deleteTodo);
  list.appendChild(span);
  list.appendChild(button);
  todoList.appendChild(list);
}

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = inputTodo.value;
  inputTodo.value = "";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  }
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}
todo.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem("todos");
if(savedTodos !==null){
  const parsedTodos = JSON.parse(savedTodos);
  todos=parsedTodos;
  parsedTodos.forEach(paintTodo);
}

// 4. Random Background Images
const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImages = images[Math.floor(Math.random() * images.length)];

document.body.background = 'img/'+chosenImages;
document.body.style.backgroundSize = "cover";

// 5. Weather API and Location
const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");
const API_KEY = "fe781e059e25c50f460f226e052aaa0d";
function GeoSuccess(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) => response.json())
  .then((data) => {
      city.innerText = `${data.name} : `;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} degrees in Celsius`;
     });
}
function GeoError(){
  alert("Cannot locate you.");
}

navigator.geolocation.getCurrentPosition(GeoSuccess, GeoError);
