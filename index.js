let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
  let speakInput = new SpeechSynthesisUtterance(input);
  //speakInput.rate = 1;
  //speakInput.pitch = 1;
  //speakInput.volume = 1;
  speakInput.lang = "en-IN";
  window.speechSynthesis.speak(speakInput);
};

window.onload = () => {
  //speakFunc("hello users");
  //greetingFunc();
};

const greetingFunc = () => {
  let date = new Date();
  let hour = date.getHours();
  if (hour >= 0 && hour < 12) {
    speakFunc("Good morning sir, How can I help you !");
  } else if (hour >= 12 && hour < 16) {
    speakFunc("Good afternoon sir, How can I help you !");
  } else {
    speakFunc("Good evening sir, How can I help you !");
  }
};

const startVoiceInput = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    let recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (e) => {
      let spokenText = e.results[0][0].transcript;
      handleCommands(spokenText.toLowerCase());
      box.classList.remove("btn-box");
      btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
    };
    recognition.start();
  } else {
    alert("Your Browser does not support voice input !");
  }
};

btn.onclick = () => {
  box.classList.add("btn-box");
  btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
  startVoiceInput();
};

const handleCommands = (command) => {
  console.log(command);
  if (
    command.includes("hello") ||
    command.includes("hey") ||
    command.includes("hi")
  ) {
    speakFunc("Hello sir, How can I help you !");
  } else if (
    command.includes("who are you") ||
    command.includes("developed") ||
    command.includes("hu r u") ||
    command.includes("who r u")
  ) {
    speakFunc("I am Virtual assistance, Developed By Pranjal Tamta!");
  } else if (
    command.includes("open take u forward youtube channel") ||
    command.includes("take u forward") ||
    command.includes("channel")
  ) {
    speakFunc("opening take u forward youtube channel!");
    window.open(
      "https://www.youtube.com/watch?v=0bHoB32fuj0&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&ab_channel=takeUforward"
    );
  } else if (
    command.includes("open take u forward website") ||
    command.includes("sde2 sheet") ||
    command.includes("website")
  ) {
    speakFunc("opening take u forward website!");
    window.open(
      "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2"
    );
  } else if (
    command.includes("open google") ||
    command.includes("google") ||
    command.includes("please open google")
  ) {
    speakFunc("opening google!");
    window.open("https://www.google.com");
  } else if (
    command.includes("open facebook") ||
    command.includes("facebook") ||
    command.includes("please open facebook")
  ) {
    speakFunc("opening Facebook!");
    window.open("https://www.facebook.com/");
  } else if (
    command.includes("open instagram") ||
    command.includes("instagram") ||
    command.includes("please open instagram")
  ) {
    speakFunc("opening instagram!");
    window.open("https://www.instagram.com/");
  } else if (
    command.includes("open youtube") ||
    command.includes("please open youtube")
  ) {
    speakFunc("opening youtube!");
    window.open("https://www.youtube.com/");
  } else if (
    command.includes("open calculator") ||
    command.includes("calculator") ||
    command.includes("please open calculator")
  ) {
    speakFunc("opening calculator!");
    window.open("calculator://");
  } else if (
    command.includes("tell me time") ||
    command.includes("time") ||
    command.includes("please tell me time")
  ) {
    let time = new Date().toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speakFunc(time);
  } else if (
    command.includes("tell me date") ||
    command.includes("date") ||
    command.includes("please tell me date")
  ) {
    let time = new Date().toLocaleDateString(undefined, {
      day: "numeric",
      month: "long",
    });
    speakFunc(time);
  } else if (
    command.includes("open chat gpt") ||
    command.includes("chat gpt") ||
    command.includes("please open chat gpt")
  ) {
    speakFunc("opening chat gpt");
    window.open("https://chatgpt.com/");
  } else if (command.includes("search youtube for")) {
    let searchQuery = command.replace("search youtube for", "").trim();
    speakFunc(`Searching YouTube for ${searchQuery}`);
    window.open(
      `https://www.youtube.com/results?search_query=${encodeURIComponent(
        searchQuery
      )}`
    );
  } else if (
    command.includes("play") ||
    command.includes("search") ||
    command.includes("open")
  ) {
    speakFunc(`This is what I found on the youtube regarding ${command}`);
    window.open(
      `https://www.youtube.com/search?q=${encodeURIComponent(command)}`
    );
  } else {
    speakFunc(`This is what I found on the internet regarding ${command}`);
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(command)}`
    );
  }
};
