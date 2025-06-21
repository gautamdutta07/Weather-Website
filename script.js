const apiKey = "110eb72cb182728acb2ffb4178817d82";

document.getElementById("weather-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const city = document.getElementById("city").value;
  if (city.trim() === "") return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById("weather-info").classList.remove("hidden");
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("temp").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("desc").textContent = `Condition: ${data.weather[0].description}`;
        document.getElementById("feels").textContent = `Feels like: ${data.main.feels_like}°C`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `Wind: ${data.wind.speed} m/s`;
      } else {
        alert("City not found!");
      }
    })
    .catch(() => alert("Error fetching data"));
});
