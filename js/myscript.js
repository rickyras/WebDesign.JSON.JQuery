var map;


$.ajax({
		type: "GET", url: "torontoWeather.json", dataType:"json",
		success: getWeather //function used. 
	});	
 function getWeather(data) {
		console.log(data);
		$("#sheader").html ("");
		//HEADER
		
		start = data.query.results;
	
			$("#sheader").append( " <img src='images/weather.jpg' width='100%' height='200'> <br>" +  
				 "Last Build Date: " +  start.lastBuildDate   
	);		

////CONTENT
        //Location		CITY COUNTRY REGION
		$("#sdata1").html("");
								
			startLocation = data.query.results.location;
			$("#sdata1").append(
													"<td>" + startLocation.city + "</td>" +
													"<td>" + startLocation.country + "</td>" +
													"<td>" + startLocation.region + "</td>" 
												
								);
		//PANEL WIND ATMOSPHERE ASTRONOMY
		
		
							startWind = data.query.results.wind;
			$("#windPanel").append("<tr>" +
										"<tr>" + "<th>Chill:</th>"+"<td>" + startWind.chill + "</td>" + "</tr>" +
										"<tr>" + "<th>Direction:</th>" +"<td>" + startWind.direction + "</td>" + "</tr>" +
										"<tr>" + "<th>Speed:</th>" + "<td>" + startWind.speed + "</td>" + "</tr>" 						
									);
								
			startAtmo = data.query.results.atmosphere;
			$("#atmoPanel").append("<tr>" +
										"<tr>" + "<th>Humidity:</th>"+"<td>" + startAtmo.humidity + "</td>" + "</tr>" +
										"<tr>" + "<th>Pressure:</th>" +"<td>" + startAtmo.pressure + "</td>" + "</tr>" +
										"<tr>" + "<th>Visibility:</th>" + "<td>" + startAtmo.rising + "</td>" + "</tr>" +
										"<tr>" + "<th>Visibility:</th>" + "<td>" + startAtmo.visibility + "</td>" + "</tr>" 
									);
			startAstro = data.query.results.astronomy;
			$("#astroPanel").append("<tr>" +
										"<tr>" + "<th>Sunrise:</th>"+"<td>" + startAstro.sunrise + "</td>" + "</tr>" +
										"<tr>" + "<th>Direction:</th>" +"<td>" + startAstro.sunset + "</td>" + "</tr>" 							
									);		

			/////////////////////////////MAP

			startMap = data.query.results.item;

				/* $("#mapDrop").append("<h1>" +
									  startMap.title + "</h1>"  
														 			
									);	 */	

        var tdot = {lat: parseFloat(data.query.results.item.lat) , lng: parseFloat(data.query.results.item.long)};
        
        var marker = new google.maps.Marker({
          position: tdot,
          map: map
        });
		
		var mapOptions = { 
		center: tdot,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.roadmap,
		resize: 95
		};		 
		
		map = new google.maps.Map(document.getElementById("map"), mapOptions);
		
        google.maps.event.trigger(document.getElementById("map"), 'resize');
		mapLocation = data.query.results.location;
		// Info Window
		var info = new google.maps.InfoWindow({
			content: startMap.title  			
			 
		});

			var tdot = {lat: parseFloat(data.query.results.item.lat), lng: parseFloat(data.query.results.item.long)};

			var myLoc = new google.maps.Marker ({
			map: map, 
			//icon: "pushpin.gif" , //optional
			animation: google.maps.Animation.DROP, 
			position: tdot 
		});
		
		google.maps.event.addListener(myLoc, "click", function() {
			
			info.open(map, myLoc);
		});		
			//////////////////////Forecast

		startFor = data.query.results.item.forecast;

			
$("#14info").append("<tr>" +
										"<tr>" + "<th>Date:</th>"+"<td>" + startFor[0].date + "</td>" + "</tr>" +
										"<tr>" + "<th>Day</th>" +"<td>" + startFor[0].day + "</td>" + "</tr>" +
										"<tr>" + "<th>High:</th>" + "<td>" + startFor[0].high + "</td>" + "</tr>" +
										"<tr>" + "<th>Low</th>" + "<td>" + startFor[0].low + "</td>" + "</tr>"  +
										"<tr>" + "<th>Description:</th>" + "<td>" + startFor[0].text + "</td>" + "</tr>" 
												);


$("#15info").append("<tr>" +
										"<tr>" + "<th>Date:</th>"+"<td>" + startFor[1].date + "</td>" + "</tr>" +
										"<tr>" + "<th>Day</th>" +"<td>" + startFor[1].day + "</td>" + "</tr>" +
										"<tr>" + "<th>High:</th>" + "<td>" + startFor[1].high + "</td>" + "</tr>" +
										"<tr>" + "<th>Low</th>" + "<td>" + startFor[1].low + "</td>" + "</tr>"  +
										"<tr>" + "<th>Description:</th>" + "<td>" + startFor[1].text + "</td>" + "</tr>" 
												);
$("#16info").append("<tr>" +
										"<tr>" + "<th>Date:</th>"+"<td>" + startFor[2].date + "</td>" + "</tr>" +
										"<tr>" + "<th>Day</th>" +"<td>" + startFor[2].day + "</td>" + "</tr>" +
										"<tr>" + "<th>High:</th>" + "<td>" + startFor[2].high + "</td>" + "</tr>" +
										"<tr>" + "<th>Low</th>" + "<td>" + startFor[2].low + "</td>" + "</tr>"  +
										"<tr>" + "<th>Description:</th>" + "<td>" + startFor[2].text + "</td>" + "</tr>" 
												);
$("#17info").append("<tr>" +
										"<tr>" + "<th>Date:</th>"+"<td>" + startFor[3].date + "</td>" + "</tr>" +
										"<tr>" + "<th>Day</th>" +"<td>" + startFor[3].day + "</td>" + "</tr>" +
										"<tr>" + "<th>High:</th>" + "<td>" + startFor[3].high + "</td>" + "</tr>" +
										"<tr>" + "<th>Low</th>" + "<td>" + startFor[3].low + "</td>" + "</tr>"  +
										"<tr>" + "<th>Description:</th>" + "<td>" + startFor[3].text + "</td>" + "</tr>" 
												);
		/* } END OF CONTENT*/
		 
		 };
		 //MAKE SURE JSON SCRIPT IS ERROR FREE
	$.getJSON("profile.json", function(data) {
		console.log(data);
		console.log("is it working?");
		//HEADER 
		
		
		start = data.query.results;
		

			$("#me2").append("<tr>" +    "<tr>" + "<th>Picture:</th>"+"<td>" + "<img src='images/rich.jpg' width=100px>" + "</td>" + "</tr>" +
										"<tr>" + "<th>Name:</th>"+"<td>" + start.name + "</td>" + "</tr>" +
										"<tr>" + "<th>Student Number:</th>" +"<td>" + start.studentnumber + "</td>" + "</tr>" +
										"<tr>" + "<th>Program:</th>" + "<td>" + start.program + "</td>" + "</tr>" +
										"<tr>" + "<th>Quote:</th>" + "<td>" + start.quote + "</td>" + "</tr>" 

									);
			 

  

		 });  //END OF MAIN PAGE

//CONTACT
$(document).on("pagebeforeshow","#localstorage", function() {
	 jQuery.ready();
    console.log("contact.html");

	$("#register").click(function() {
console.log("Submitted");

	remail = $("#email").val();
	   
	
	rtho = $("#thoughts").val();
	
	rtype = $("input[name='type']:checked").attr("value");
	
	localStorage.setItem("lsEmail", remail);
	localStorage.setItem("lsThoughts", rtho); //creating variable and what goes in it
	localStorage.setItem("lsType", rtype);

	alert("Data Saved");// alert will be on exam. 
	

 location.reload(); //to help load local storage
	}); 
 
	
 
	$("#retrieve").click(function() {

		// pulling items individually
console.log("Retrieved");
head = "Submitted Comment<br>";


$("#me2").html("EMAIL: " + localStorage.getItem("lsEmail")+ "<br>" ); 
$("#me2").append("SUBMISSION: "+localStorage.getItem("lsThoughts") + "<br>"); 
$("#me2").append("MESSAGE FOR: " + localStorage.getItem("lsType") + "<br>");  
//.length finds lengths	
	});  
});
		 								 //end of CONTACT

		
 






