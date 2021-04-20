// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  //Take the relevant data points from the Object and put them in human-readable format
  let rideinfo = `Noober X Passenger: ${ride.passengerDetails.first} ${ride.passengerDetails.last} - ${ride.passengerDetails.phoneNumber}. Pickup at ${ride.pickupLocation.address}, ${ride.pickupLocation.city}, ${ride.pickupLocation.state}, ${ride.pickupLocation.zip}. Drop-off at ${ride.dropoffLocation.address}, ${ride.dropoffLocation.city}, ${ride.dropoffLocation.state}, ${ride.dropoffLocation.zip}.`
  
  //Put rideinfo to console. 
  console.log(rideinfo)
  
  //Create well-named variables for each data point in the Object
  let firstname = ride.passengerDetails.first
  let lastname = ride.passengerDetails.last
  let phone = ride.passengerDetails.phoneNumber

  let pickupaddress = ride.pickupLocation.address
  let pickupcity = ride.pickupLocation.city
  let pickupstate = ride.pickupLocation.state
  let pickupzip = ride.pickupLocation.zip

  let dropaddress = ride.dropoffLocation.address
  let dropcity = ride.dropoffLocation.city
  let dropstate = ride.dropoffLocation.state
  let dropzip = ride.dropoffLocation.zip

  let people = ride.numberOfPassengers
  let purple = ride.purpleRequested

  //Create a string of output to be written to the JavaScript console. 
  let NooberX = `Noober X Passenger: ${firstname} ${lastname} is requesting a pickup at ${pickupaddress}, ${pickupcity}, ${pickupstate}, ${pickupzip}. There are ${people} in the party. The desired drop-off location is at ${dropaddress}, ${dropcity}, ${dropstate}, ${dropzip}. `
  let NooberPurple = `Noober Purple Passenger: ${firstname} ${lastname} is requesting a pickup at ${pickupaddress}, ${pickupcity}, ${pickupstate}, ${pickupzip}. There are ${people} in the party. The desired drop-off location is at ${dropaddress}, ${dropcity}, ${dropstate}, ${dropzip}.`
  let NooberXL = `Noober XL Passenger: ${firstname} ${lastname} is requesting a pickup at ${pickupaddress}, ${pickupcity}, ${pickupstate}, ${pickupzip}. There are ${people} in the party. The desired drop-off location is at ${dropaddress}, ${dropcity}, ${dropstate}, ${dropzip}.`
  
  //Use conditional logic for Purple level request
  if (purple == true) {
    console.log(NooberPurple)
  } else {
    console.log(NooberX)
  }

  //Use conditional logic for number of people > 3
  if (people > 3) {
    console.log(NooberXL)
  } else {
    console.log(NooberX)
  }

  //Final constructed message that has all considerations above, including Noober Purple superceding Noober XL Logic.
  if (purple == true) {
    console.log(NooberPurple)
  } else if (purple == false && people > 3) {
    console.log(NooberXL)
  } else {
    console.log(NooberX)
  }


  // 🔥 YOUR CODE ENDS HERE 🔥
})
