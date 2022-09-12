const baseUrl = "https://swapi.dev/api";
const peopleList = $("#people-list");
const planetsList = $("#planets-list");
const shipsList = $("#starships-list");

$("#people-search-button").click(() => {
  getPeople($("#people-search").val());
});
$("#planets-search-button").click(() => {
  getPlanets($("#planets-search").val());
});
$("#starships-search-button").click(() => {
  getStarships($("#starships-search").val());
});

function getPeople(search = "") {
  peopleList.empty();
  $.ajax({
    method: "get",
    url: `${baseUrl}/people/?search=${search}`,
    success: (response) => {
      const peopleItems = response.results.map((person) => {
        return createPeopleCard(person);
      });
      peopleList.append(peopleItems);
    },
  });
}

function getStarships(search = "") {
  shipsList.empty();
  $.ajax({
    method: "get",
    url: `${baseUrl}/starships/?search=${search}`,
    success: (response) => {
      const shipsItems = response.results.map((ship) => {
        return createShipsCard(ship);
      });
      shipsList.append(shipsItems);
    },
  });
}

function getPlanets(search = "") {
  planetsList.empty();
  $.ajax({
    method: "get",
    url: `${baseUrl}/planets/?search=${search}`,
    success: (response) => {
      const planetsItems = response.results.map((planet) => {
        return createPlanetCard(planet);
      });
      planetsList.append(planetsItems);
    },
  });
}

function createPlanetCard(planet) {
  const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population } = planet;
  return $(`<li class="card">
                  <div class="card__head">
                      ${name}
                  </div>
                  <div class="card__body" style="display:none">
                    Rotation_period: ${rotation_period}<br>
                    Orbital_period: ${orbital_period}<br>
                    Diameter: ${diameter}<br>
                    Climate: ${climate}<br>
                    Gravity: ${gravity}<br>
                    Terrain: ${terrain}<br>
                    Surface_water: ${surface_water}<br>
                    Population: ${population}<br>
                  </div>
              </li>`).click(function () {
    $(this).find(".card__body").slideToggle(1000);
  });
}

function createPeopleCard(person) {
  const { name, gender, height, mass, hair_color, skin_color, eye_color, birth_year } = person;
  return $(`<li class="card">
                <div class="card__head">
                    ${name} <br> ${gender} 
                </div>
                <div class="card__body" style="display:none">
                    Height: ${height} <br>
                    Mass: ${mass} info <br>
                    Hair_color: ${hair_color}<br>
                    Skin_color: ${skin_color}<br>
                    Eye_color: ${eye_color} <br>
                    Birth_year: ${birth_year} <br>
                </div>
            </li>`).click(function () {
    $(this).find(".card__body").slideToggle(1000);
  });
}

function createShipsCard(ship) {
  const {name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class } = ship;
  return $(`<li class="card">
                <div class="card__head">
                    ${name}
                </div>
                <div class="card__body" style="display:none">
                Model: ${model}  <br>
                Manufacturer: ${manufacturer} <br>
                Cost in credits: ${cost_in_credits} <br>
                Length: ${length} <br>
                Max atmosphering speed: ${max_atmosphering_speed} <br>
                Crew: ${crew} <br>
                Passengers: ${passengers} <br>
                Cargo capacity: ${cargo_capacity} <br>
                Consumables: ${consumables} <br>
                Hyperdrive_rating: ${hyperdrive_rating} <br>
                MGLT: ${MGLT} <br>
                Starship class: ${starship_class} <br>
                </div>
            </li>`).click(function () {
    $(this).find(".card__body").slideToggle(1000);
  });
}
