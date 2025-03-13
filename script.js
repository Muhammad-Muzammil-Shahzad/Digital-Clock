function clock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  let date = now.getDate();
  let year = now.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let monthname = months[now.getMonth()];
  let daysname = days[now.getDay()];

  document.getElementById(
    "currentDate"
  ).innerText = `${daysname}, ${date} ${monthname}, ${year} `;

  document.getElementById("hour").innerText = hours;
  document.getElementById("minute").innerText = minutes;
  document.getElementById("second").innerText = seconds;

  requestAnimationFrame(clock);
}

clock();
