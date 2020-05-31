$("#city-form").submit(function(event){ 
    event.preventDefault();

    var cityName = $("#city-name").val();
    getWeather(cityName);  
  
});

function getWeather(city){

  
    $.ajax("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=7fc47b3ccb638da06477edc61fd72299", function(data){
      console.log(data);

        $("#city").html(data.main.name);
        $("#description").html(data.weather[0].description);
        $("#icon").html("<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
        $("#temp").html("Temperatue: " + data.main.temp + " °F");
        $("#humidity").html("Humidity: " + data.main.humidity + "%");
        $("#speed").html("Wind Speed: " + data.wind.speed + " mph");
    });



    $.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid=7fc47b3ccb638da06477edc61fd72299", function(data){
    console.log(data);

  var dayOne = moment().format("M/D/YYYY");
  var dayOneTemp = data.list[0].main.temp + " °F";
  var dayOneTempFar = (dayOneTemp - 273.15) * 1.8 + 32;
  var dayOneHum = data.list[0].main.humidity + "%";

  var dayOneDateEl = $("<p>").text(dayOne);
  var dayOneTempEl = $("<p>").text("Temp: " + dayOneTemp);
  var dayOneHumEl = $("<p>").text("Humidity: " + dayOneHum);

    $(".dayOne").append(dayOneDateEl);
    $(".dayOne").append(dayOneTempEl);
    $(".dayOne").append(dayOneHumEl);

/* DAY TWO */
  var dayTwo = moment().add(1, "days").format("M/D/YYYY");
  var dayTwoTemp = data.list[8].main.temp + " °F";
  var dayTwoTempFar = (dayTwoTemp - 273.15) * 1.8 + 32;
  var dayTwoTempFixed = dayTwoTempFar.toFixed(1); 
  var dayTwoHum = data.list[8].main.humidity + "%";

  var dayTwoDateEl = $("<p>").text(dayTwo);
  var dayTwoTempEl = $("<p>").text("Temp: " + dayTwoTemp);
  var dayTwoHumEl = $("<p>").text("Humidity: " + dayTwoHum);

    $(".dayTwo").append(dayTwoDateEl);
    $(".dayTwo").append(dayTwoTempEl);
    $(".dayTwo").append(dayTwoHumEl);

/* DAY THREE */
  var dayThree = moment().add(2, "days").format("M/D/YYYY");
  var dayThreeTemp = data.list[16].main.temp + " °F";
  var dayThreeTempFar = (dayThreeTemp - 273.15) * 1.8 + 32;
  var dayThreeTempFixed = dayThreeTempFar.toFixed(1); 
  var dayThreeHum = data.list[16].main.humidity + "%";

  var dayThreeDateEl = $("<p>").text(dayThree);
  var dayThreeTempEl = $("<p>").text("Temp: " + dayThreeTemp);
  var dayThreeHumEl = $("<p>").text("Humidity: " + dayThreeHum);

    $(".dayThree").append(dayThreeDateEl);
    $(".dayThree").append(dayThreeTempEl);
    $(".dayThree").append(dayThreeHumEl);

/* DAY FOUR */
  var dayFour = moment().add(3, "days").format("M/D/YYYY");
  var dayFourTemp = data.list[24].main.temp + " °F";
  var dayFourTempFar = (dayFourTemp - 273.15) * 1.8 + 32;
  var dayFourTempFixed = dayFourTempFar.toFixed(1); 
  var dayFourHum = data.list[24].main.humidity + "%";


  var dayFourDateEl = $("<p>").text(dayFour);
  var dayFourTempEl = $("<p>").text("Temp: " + dayFourTemp);
  var dayFourHumEl = $("<p>").text("Humidity: " + dayFourHum);

    $(".dayFour").append(dayFourDateEl);
    $(".dayFour").append(dayFourTempEl);
    $(".dayFour").append(dayFourHumEl);

/* DAY FIVE */
  var dayFive = moment().add(4, "days").format("M/D/YYYY");
  var dayFiveTemp = data.list[32].main.temp + " °F";
  var dayFiveTempFar = (dayFiveTemp - 273.15) * 1.8 + 32;
  var dayFiveTempFixed = dayFiveTempFar.toFixed(1); 
  var dayFiveHum = data.list[32].main.humidity + "%";

  var dayFiveDateEl = $("<p>").text(dayFive);
  var dayFiveTempEl = $("<p>").text("Temp: " + dayFiveTemp);
  var dayFiveHumEl = $("<p>").text("Humidity: " + dayFiveHum);

    $(".dayFive").append(dayFiveDateEl);
    $(".dayFive").append(dayFiveTempEl);
    $(".dayFive").append(dayFiveHumEl);

})
}
/* added moment.js for current day's date */
  var currentDate = moment().format('M/D/YYYY');
  var mainDate = document.getElementById('currentDay');
  date.innerHTML = currentDate;
