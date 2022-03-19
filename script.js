// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets)
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)

       let form  = this.document.querySelector('form')
       form.addEventListener('submit', event => {

       let list = this.document.getElementById('FaultyItems')
       let pilotName = this.document.getElementById('input[name=pilotName')
       let copilotName = this.document.getElementById('input[name=copilotName')
       let fuelLevel = this.document.getElementById('input[name=fuelLevel')
       let cargoMass = this.document.getElementById('input[name=cargoMass')
    

       let input = [pilotName, copilotName, fuelLevel, cargoMass]
       event.preventDefault()

            })
        })
    });