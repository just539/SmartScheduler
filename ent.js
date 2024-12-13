//to do list
//remainder with location
//Dairy or journal
//inspirational quotes
//voice note to todolist with remainder


// To-Do List with Reminder
function addTask() {
  const taskInput = document.getElementById("task-input").value;
  const taskTime = document.getElementById("task-time").value;
  if (taskInput && taskTime) {
      const taskDiv = document.createElement("div");
      taskDiv.innerHTML = `<strong>${taskInput}</strong> - Reminder: ${taskTime}`;
      document.getElementById("todo-list").appendChild(taskDiv);
      setTimeout(() => alert(`Reminder: ${taskInput}`), new Date(taskTime) - new Date());
  } else {
      alert("Please enter a task and time.");
  }
}

// Journal Section
function saveJournal() {
  const journalEntry = document.getElementById("journal-input").value;
  const entryDiv = document.createElement("div");
  entryDiv.innerText = `${new Date().toLocaleString()}: ${journalEntry}`;
  document.getElementById("journal-entries").appendChild(entryDiv);
}

// Quotes Section
const quotes = ["Stay positive!", "Work hard, dream big!", "Believe in yourself!"];
function newQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}

// Voice-to-Do Converter
function startVoiceTask() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.onresult = function(event) {
      const task = event.results[0][0].transcript;
      document.getElementById("voice-task-output").innerText = `Added: ${task}`;
  };
  recognition.start();
}

// Location-Based Reminder (simplified example)
function setLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
      document.getElementById("location-output").innerText = `Location set: ${position.coords.latitude}, ${position.coords.longitude}`;
  });
}

// Focus Mode Songs
function playFocusSong() {
  document.getElementById("focus-audio").play();
}

// Mood-Based Task Suggestions
const tasks = ["Do some stretching", "Meditate for 5 minutes", "Take a short walk"];
function suggestTask() {
  const task = tasks[Math.floor(Math.random() * tasks.length)];
  document.getElementById("mood-task-output").innerText = `Suggestion: ${task}`;
}

// Rewards System
let rewardPoints = 0;
function addReward() {
  rewardPoints += 10;
  document.getElementById("rewards-output").innerText = `You have earned ${rewardPoints} points!`;
}
