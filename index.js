// Sample restaurants based on food type
const restaurants = {
    Bread: [
        {
            name: "Wildflour Café + Bakery",
            description: "Wildflour Café + Bakery is a popular dining spot known for its artisanal bread, pastries, and brunch items. They offer a variety of bread such as sourdough, baguettes, and croissants, along with delicious dishes like eggs benedict and salads.",
            locations: ["4th Ave. corner 26th Street, Bonifacio Global City, Taguig City", "Ground Floor, V Corporate Center, 125 L.P. Leviste Street, Salcedo Village, Makati City", "Podium Mall, 18 ADB Ave., Ortigas Center, Mandaluyong City"],
            imageURL: "wildflour.jpg" , // Image URL source
        },
        {
          name: "Eric Kayser",
          description: "Eric Kayser is a French bakery and café known for its authentic French bread and pastries. They use high-quality ingredients and traditional baking techniques to produce a variety of bread such as baguettes, sourdough, and specialty loaves.",
          locations: ["Greenbelt 5, Legazpi Street, Legazpi Village, Makati City" , "Power Plant Mall, Rockwell Drive, Makati City" , "SM Aura Premier, McKinley Parkway, Bonifacio Global City, Taguig City"],
          imageURL: "eric.jpg", // Image URL source
        },
        {
          name: "Tous Les Jours",
          description: "Tous Les Jours is a Korean bakery chain offering a wide range of freshly baked bread, cakes, and pastries. They are known for their soft bread loaves, croissants, and sweet treats.",
          locations: ["SM Megamall, Mandaluyong City" , "Eastwood City Walk, Quezon City" , "SM North EDSA, Quezon City"],
          imageURL: "tous.jpg", // Image URL source
        },
        {
          name: "Pan de Manila",
          description: "Pan de Manila is a local bakery chain specializing in Filipino bread favorites such as pandesal, Spanish bread, and ensaymada. They also offer a selection of local pastries and coffee.",
          locations: ["Various branches across Metro Manila, commonly found in major malls and commercial areas."],
          imageURL: "pandemanila.jpg", // Image URL source
        },
        {
          name: "Purple Oven",
          description: "Purple Oven is known for its delectable cakes and desserts, but they also offer a selection of artisan bread including baguettes, ciabatta, and whole grain loaves.",
          locations: ["63 St. Peter St. Oranbo, Pasig City" , "G/F The Enterprise Center, Ayala Ave. corner Paseo de Roxas, Makati City"],
          imageURL: "purpleoven.jpg", // Image URL source
        },
        {
          name: "Boulangerie22",
          description: "Boulangerie22 is a bakery café inspired by French baking traditions. They offer a variety of bread and pastries including baguettes, croissants, and flavored bread rolls.",
          locations: ["SM North EDSA, Quezon City" , "SM Mall of Asia, Pasay City" , "SM Megamall, Mandaluyong City,"],
          imageURL: "boulangerie22.jpg", // Image URL source
        },
    ],
    Pasta: [
        {
            name: "La Nuova Pastileria",
            description: "La Nuova Pastileria is a cozy Italian restaurant known for its fresh, homemade pasta dishes like carbonara, lasagna, and squid ink pasta with seafood. They offer a warm ambiance and a selection of wines.",
            locations: ["5761 Ebro Street, Poblacion, Makati City"],
            imageURL: "nuova.jpg" , // Image URL source
        },
        {
          name: "Va Bene Pasta Deli",
          description: "Va Bene Pasta Deli specializes in authentic Italian pasta dishes, including homemade tagliatelle, ravioli, and gnocchi. The restaurant offers a relaxed atmosphere.",
          locations: ["2/F Petron Gas Station, EDSA corner Pasay Road, Dasmarinas Village, Makati City"],
          imageURL: "vabene.jpg", // Image URL source
        },
        {
          name: "Trattoria da Gianni",
          description: "Trattoria da Gianni is a charming Italian restaurant known for classic pasta favorites like spaghetti carbonara and penne arrabbiata. The ambiance is rustic and welcoming.",
          locations: ["53 Maginhawa Street, UP Village, Quezon City"],
          imageURL: "gianni.jpg", // Image URL source
        },
        {
          name: "Pasta Roni",
          description: "Pasta Roni offers customizable pasta dishes where you can choose your pasta type, sauce, and toppings. It's a casual dining spot in Ortigas Center.",
          locations: ["G/F Greenfield Tower, Greenfield District, Mandaluyong City"],
          imageURL: "roni.jpg", // Image URL source
        },
        {
          name: "Linguini Fini",
          description: "Linguini Fini serves artisanal pasta made in-house paired with creative sauces like truffle cream and spicy vodka sauce. The restaurant has a trendy ambiance.",
          locations: ["3/F SM Aura Premier, McKinley Parkway, Taguig City"],
          imageURL: "fini.jpg", // Image URL source
        },
        {
          name: "Cibo",
          description: "Cibo is a popular Italian restaurant chain offering a diverse menu of pasta specialties such as fettuccine alfredo and ricotta ravioli. They provide a modern Italian dining experience.",
          locations: ["Multiple branches including Greenbelt 5, Power Plant Mall, and Shangri-La Plaza"],
          imageURL: "cibo.jpg", // Image URL source
        },
        {
          name: "Pasta Zanmai",
          description: "Pasta Zanmai offers Japanese-style pasta dishes with a fusion twist. They serve unique pasta creations in a casual dining setting.",
          locations: ["G/F Greenhills Promenade, Greenhills Shopping Center, San Juan City"],
          imageURL: "zanmai.jpg", // Image URL source
        },
        {
          name: "Gino's Brick Oven Pizza",
          description: "While known for pizza, Gino's Brick Oven Pizza also offers delicious pasta dishes like carbonara and truffle pasta using fresh ingredients.",
          locations: ["Multiple branches including Serendra, BGC, and Katipunan, Quezon City"],
          imageURL: "gino.jpg", // Image URL source
        },
    ],
    Chicken: [
        {
            name: "BonChon Chicken",
            description: "BonChon offers Korean-style crispy fried chicken known for its crunchy texture and flavorful soy garlic or spicy glazes.",
            locations: ["SM Megamall, Greenbelt 1 (Makati), Ayala Malls Manila Bay, Glorietta 2 (Makati)"],
            imageURL: "bonchon.jpg" , // Image URL source
        },
        {
          name: "Max's Restaurant",
          description: "Max's is famous for its Filipino-style fried chicken, served with banana ketchup and Worcestershire sauce.",
          locations: ["Quezon City (Scout Tuason), Makati (Greenbelt 1), Pasay (Baclaran)"],
          imageURL: "Max's.jpg", // Image URL source
        },
        {
          name: "Manang's Chicken",
          description: "Manang's offers flavorful fried chicken marinated in a secret blend of spices and served with unique dipping sauces.",
          locations: ["Katipunan (Quezon City), SM Megamall, Ortigas Home Depot (Pasig)"],
          imageURL: "manang.jpg", // Image URL source
        },
        {
          name: "Nene Chicken",
          description: "Nene Chicken specializes in Korean-style fried chicken with a choice of original or flavored varieties like snowing cheese or bulgogi.",
          locations: ["SM North EDSA, SM Megamall, Robinsons Galleria (Quezon City), SM Mall of Asia,"],
          imageURL: "nene.jpg", // Image URL source
        },
        {
          name: "Rackshack",
          description: "Rackshack serves succulent roast chicken with flavorful glazes and delicious side dishes.",
          locations: ["SM Aura Premier (Taguig), Poblacion (Makati), and Estancia Mall (Pasig)"],
          imageURL: "rackshack.jpg", // Image URL source
        },
        {
          name: "Bad Bird",
          description: "Bad Bird offers Japanese-inspired fried chicken with options for different spice levels and unique umami flavors.",
          locations: ["Serendra (Bonifacio Global City), SM Mega Fashion Hall (Mandaluyong), and Ortigas (Pasig)"],
          imageURL: "badbird.jpg", // Image URL source
        },
        {
          name: "Chicken Charlie",
          description: "Chicken Charlie serves up crispy fried chicken with a variety of tasty sauces and sides.",
          locations: ["SM City North EDSA (Quezon City), SM Mall of Asia (Pasay)"],
          imageURL: "chickencharlie.jpg", // Image URL source
        },
        {
          name: "Wingstop",
          description: "Wingstop specializes in wings with a variety of flavors ranging from classic buffalo to spicy Korean.",
          locations: ["Glorietta 2 (Makati), Estancia Mall (Pasig), Uptown Mall (Taguig)"],
          imageURL: "wingstop.jpg", // Image URL source
        },
        {
          name: "Kko Kko",
          description: "Kko Kko offers Korean-style fried chicken with a range of sauce options and Korean dishes.",
          locations: ["Bonifacio High Street (Taguig), SM Megamall, and Ayala Malls Vertis North (Quezon City)"],
          imageURL: "kkokko.jpg", // Image URL source
        },
        {
          name: "Kyochon",
          description: "Kyochon is known for its Korean-style fried chicken with a signature soy garlic sauce.",
          locations: ["SM Megamall, Robinsons Place Manila, SM City Fairview"],
          imageURL: "kyochon.jpg", // Image URL source
        },
    ],
    Seafood: [
        {
            name: "The Red Crab Alimango House",
            description: "Known for their delicious crabs and seafood dishes, The Red Crab offers a variety of crab preparations alongside other seafood favorites",
            locations: ["Greenbelt 3, Makati City; Resorts World Manila, Pasay City"],
            imageURL: "redcrab.jpg" , // Image URL source
        },
        {
          name: "Blackbeard's Seafood Island",
          description: "A themed restaurant serving boodle feasts featuring Filipino and Asian-inspired seafood dishes.",
          locations: ["SM Mall of Asia, Pasay City; Eastwood City, Quezon City."],
          imageURL: "seafoodisland.jpg", // Image URL source
        },
        {
          name: "Clawdaddy's Great American Picnic",
          description: "Specializes in Cajun-inspired seafood boils and American seafood classics.",
          locations: ["SM Mall of Asia, Pasay City; Bonifacio High Street, Taguig City"],
          imageURL: "clawdaddy.jpg", // Image URL source
        },
        {
          name: "Fish & Co.",
          description: "A casual dining spot offering a wide selection of seafood dishes, including fish and chips, grilled fish, and seafood pasta.",
          locations: ["SM Megamall, Mandaluyong City; Greenbelt 3, Makati City"],
          imageURL: "fishco.jpg", // Image URL source
        },
        {
          name: "Blue Posts Boiling Crabs and Shrimps",
          description: "Famous for their seafood boils with a variety of sauces and flavors.",
          locations: ["SM Mall of Asia, Pasay City; Greenhills, San Juan City"],
          imageURL: "boilcrab.jpg", // Image URL source
        },
        {
          name: "The Shrimp Shack",
          description: "Offers shrimp-centric dishes prepared with different sauces and flavors.",
          locations: ["Ayala Malls Manila Bay, Parañaque City; U.P. Town Center, Quezon City"],
          imageURL: "shrimp.jpg", // Image URL source
        },
    ],
    Vegetables: [
        {
            name: "Green Bar",
            description: "Green Bar offers a variety of vegan comfort food such as burgers, wraps, and salads. They use plant-based ingredients creatively to appeal to both vegans and non-vegans alike.",
            locations: ["Kapitolyo, Pasig City and Eastwood City, Quezon City"],
            imageURL: "greenbar.jpg" , // Image URL source
        },
        {
          name: "Pipino Vegetarian Food by Pino",
          description: "Pipino serves vegetarian Filipino dishes with a modern twist. They focus on using fresh, local vegetables and meat alternatives to recreate traditional Filipino flavors.",
          locations: ["Malingap Street, Teachers Village, Quezon City"],
          imageURL: "pipino.jpg", // Image URL source
        },
        {
          name: "Corner Tree Café",
          description: "Corner Tree Café is known for its diverse vegetarian and vegan menu, offering global cuisine ranging from Thai curries to Mediterranean dishes. They also have a selection of desserts and fresh juices.",
          locations: ["Jupiter Street, Makati City"],
          imageURL: "tree.jpg", // Image URL source
        },
        {
          name: "The Wholesome Table",
          description: "The Wholesome Table emphasizes organic and sustainable ingredients in their dishes, catering to both vegetarian and non-vegetarian preferences. They serve hearty salads, vegetable bowls, and vegan-friendly options.",
          locations: ["Salcedo Village and Bonifacio Global City (BGC), Taguig City"],
          imageURL: "table.jpg", // Image URL source
        },
        {
          name: "Green Pastures",
          description: "Green Pastures is a farm-to-table concept restaurant offering a wide range of vegetarian and vegan dishes made from locally sourced produce. Their menu includes innovative salads, pastas, and grain bowls.",
          locations: ["Shangri-La Plaza, Mandaluyong City and BGC, Taguig City"],
          imageURL: "green.jpg", // Image URL source
        },
    ],
    Pork: [
        {
            name: "Livestock Restaurant and Bar",
            description: "Livestock is known for its delicious pork dishes and hearty servings. They offer a variety of pork specialties like crispy pata and lechon kawali.",
            locations: ["34 Sgt. Esguerra Avenue, South Triangle, Quezon City"],
            imageURL: "livestock.jpg" , // Image URL source
        },
        {
          name: "Gerry's Grill",
          description: "Gerry's Grill is a popular Filipino restaurant that serves a wide array of pork dishes, from sizzling sisig to grilled pork belly.",
          locations: ["Various branches across Metro Manila including SM Mall of Asia, Greenbelt, and Quezon City"],
          imageURL: "gerrys.jpg", // Image URL source
        },
        {
          name: "Rico's Lechon",
          description: "Rico's Lechon offers mouthwatering Cebu-style lechon that's crispy on the outside and juicy inside.",
          locations: ["Ground Floor, The Fort Strip, 5th Avenue corner 28th Street, Bonifacio Global City, Taguig"],
          imageURL: "rico.jpg", // Image URL source
        },
        {
          name: "Pepita's Kitchen",
          description: "Pepita's Kitchen is known for its artisanal lechon dishes and innovative takes on Filipino pork favorites.",
          locations: ["105 C. Scout Castor Street, Barangay Laging Handa, Quezon City"],
          imageURL: "pepita.jpg", // Image URL source
        },
        {
          name: "Sarsa Kitchen + Bar",
          description: "Sarsa specializes in modern Filipino cuisine, offering delectable pork dishes like pork adobo and crispy pata.",
          locations: ["Various branches including SM Mall of Asia and Bonifacio High Street, Taguig"],
          imageURL: "sarsa.jpg", // Image URL source
        },
        {
          name: "Torch Restaurant",
          description: "Torch serves contemporary comfort food including pork belly dishes and pork ribs.",
          locations: ["Various branches in Quezon City, Makati, and Greenhills, San Juan"],
          imageURL: "torch.jpg", // Image URL source
        },
        {
          name: "El Chupacabra",
          description: "El Chupacabra is known for its Mexican-inspired dishes, including pork tacos and burritos.",
          locations: ["5782 Felipe Street, Poblacion, Makati City"],
          imageURL: "chupacabra.jpg", // Image URL source
        },
        {
          name: "Romulo Café",
          description: "Romulo Café offers traditional Filipino dishes including pork adobo and crispy pata in a cozy setting.",
          locations: ["Various branches in Quezon City and Makati City"],
          imageURL: "romulo.jpg", // Image URL source
        },
    ],
    Beef: [
        {
            name: "Wolfgang's Steakhouse",
            description: "Known for its high-quality USDA Prime Black Angus beef, Wolfgang's Steakhouse offers a classic steakhouse experience with elegant ambiance and top-notch service.",
            locations: ["Resorts World Manila (Pasay City) and The Podium (Mandaluyong City)"],
            imageURL: "wolfgang.jpg" , // Image URL source
        },
        {
          name: "Rub Ribs & BBQ",
          description: "While they offer a variety of meats, Rub Ribs & BBQ is famous for their mouthwatering beef ribs. Their dishes are known for bold flavors and generous portions.",
          locations: ["64 Scout Rallos Street, Quezon City"],
          imageURL: "rub.jpg", // Image URL source
        },
        {
          name: "Mamou",
          description: "Mamou is celebrated for its steaks, particularly the Angus Ribeye USDA Prime Grade which is dry-aged for 21 days. They also offer other beef dishes showcasing the owner's passion for quality ingredients and classic flavors.",
          locations: ["Serendra, Bonifacio Global City, Taguig"],
          imageURL: "mamou.jpg", // Image URL source
        },
        {
          name: "Carnivore Cookery",
          description: "This spot is a gem for meat enthusiasts, specializing in various beef cuts prepared with different techniques, including grilling and slow-cooking.",
          locations: ["1810 Mother Ignacia Ave, Quezon City"],
          imageURL: "carnivore.jpg", // Image URL source
        },
        {
          name: "Buta Wagyu",
          description: "While primarily known for their Wagyu beef dishes, Buta Wagyu also serves excellent beef cuts like ribeye and sirloin. Their focus is on delivering authentic Japanese-style meat dishes.",
          locations: ["5149 P. Burgos Street, Poblacion, Makati City"],
          imageURL: "buta.jpg", // Image URL source
        },
        {
          name: "La Cabrera",
          description: "A popular Argentine steakhouse offering a wide range of beef cuts prepared using traditional Argentine grilling techniques. They are known for their flavorful steaks and vibrant atmosphere.",
          locations: ["Ayala Tower One & Exchange Plaza, Ayala Avenue, Makati City"],
          imageURL: "cabrera.jpg", // Image URL source
        },
    ],
    Fastfood: [
        {
            name: "Jollibee",
            description: "Jollibee is the largest and most popular fast food chain in the Philippines, known for its Filipino-style menu featuring fried chicken, spaghetti, burgers, and local dishes.",
            locations: ["Jollibee has numerous branches across Metro Manila, including standalone outlets, mall food courts, and drive-thru locations"],
            imageURL: "jollibee.jpg" , // Image URL source
        },
        {
          name: "McDonald's",
          description: "McDonald's is a globally recognized fast food brand offering burgers, fries, chicken nuggets, breakfast items, and beverages.",
          locations: ["McDonald's has multiple branches throughout Metro Manila, including standalone restaurants, drive-thru outlets, and stores within shopping malls"],
          imageURL: "mcdo.jpg", // Image URL source
        },
        {
          name: "KFC (Kentucky Fried Chicken)",
          description: "KFC is known for its fried chicken, as well as sides like mashed potatoes, coleslaw, and biscuits.",
          locations: ["KFC has numerous locations in Metro Manila, including standalone stores and outlets within commercial centers"],
          imageURL: "kfc.jpg", // Image URL source
        },
        {
          name: "Chowking",
          description: "Chowking specializes in Chinese-style fast food, serving noodle soups, dim sum, rice meals, and desserts.",
          locations: ["Chowking has outlets in key locations across Metro Manila, often found in shopping malls and busy streets"],
          imageURL: "chowking.jpg", // Image URL source
        },
        {
          name: "Shakey's Pizza",
          description: "Shakey's is a popular pizza chain offering a variety of pizzas, chicken, pasta dishes, and appetizers like mojos.",
          locations: ["Shakey's has multiple branches in Metro Manila, with restaurants located in prominent areas and near universities"],
          imageURL: "shakeys.jpg", // Image URL source
        },
        {
          name: "Greenwich",
          description: "Greenwich is known for its pizza and pasta offerings, including Filipino-style pizza variations and pasta dishes.",
          locations: ["Greenwich has numerous branches in Metro Manila, particularly in shopping malls and commercial districts"],
          imageURL: "greenwich.jpg", // Image URL source
        },
        {
          name: "Yellow Cab Pizza Co.",
          description: "Yellow Cab offers New York-style pizzas, pasta dishes, and appetizers.",
          locations: ["Yellow Cab has multiple branches across Metro Manila, including standalone restaurants and outlets in popular areas"],
          imageURL: "yellowcab.jpg", // Image URL source
        },
        {
          name: "Army Navy",
          description: "Army Navy serves American-Mexican fusion cuisine, including burgers, burritos, tacos, and nachos.",
          locations: ["Army Navy has branches in various locations within Metro Manila, with presence in business centers and shopping districts"],
          imageURL: "Army-navy.jpg", // Image URL source
        },
        {
          name: "Burger King",
          description: "Burger King is known for flame-grilled burgers, fries, and sandwiches.",
          locations: ["Burger King has several outlets in Metro Manila, with presence in major shopping centers and along main roads"],
          imageURL: "BK.jpg", // Image URL source
        },
    ],
};


function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function suggestRestaurant(foodType) {
    showLoading();

    const restaurantsList = restaurants[foodType];
    const randomIndex = Math.floor(Math.random() * restaurantsList.length);
    const randomRestaurant = restaurantsList[randomIndex];

    const resultElement = document.getElementById('result');

    // Clear previous content in the result element
    resultElement.innerHTML = '';

    // Create and append the restaurant image
    const imageElement = document.createElement('img');
    imageElement.src = randomRestaurant.imageURL; // Set image source
    imageElement.alt = randomRestaurant.name; // Set image alt text
    imageElement.style.maxWidth = '50%'; // Ensure image fits within parent container
    resultElement.appendChild(imageElement);

    // Create and append the restaurant details
    const detailsContainer = document.createElement('div');

    const restaurantName = document.createElement('h2');
    restaurantName.textContent = `Try ${randomRestaurant.name}`;

    const restaurantDescription = document.createElement('p');
    restaurantDescription.textContent = randomRestaurant.description;

    const locationHeading = document.createElement('p');
    locationHeading.innerHTML = '<strong>Location:</strong>';

    const locationList = document.createElement('ul');
    // Loop through locations and add them as list items
    if (randomRestaurant.locations && Array.isArray(randomRestaurant.locations)) {
        randomRestaurant.locations.forEach(location => {
            const locationItem = document.createElement('li');
            locationItem.textContent = location;
            locationList.appendChild(locationItem);
        });
    }

    // Append elements to details container
    detailsContainer.appendChild(restaurantName);
    detailsContainer.appendChild(restaurantDescription);
    detailsContainer.appendChild(locationHeading);
    detailsContainer.appendChild(locationList);

    // Append details container to result element
    resultElement.appendChild(detailsContainer);

    // Display the result and hide loading indicator after delay
    setTimeout(() => {
        hideLoading();
        resultElement.style.display = 'block';
        // Show the "Back to Randomizer" button
        document.getElementById('backButton').style.display = 'block';
        // Hide unnecessary elements
        document.querySelector('.container').style.display = 'none';
    }, 1500); // Adjust the delay in milliseconds
}

function goBackToRandomizer() {
    // Hide result, image, and back button, show container
    document.getElementById('result').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}
