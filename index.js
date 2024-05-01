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
          name: "Conti's Bakeshop and Restaurant",
          description: "Offers a wide selection of cakes, pastries, and desserts.",
          locations: ["Multiple branches across Metro Manila"],
          imageURL: "contis.jpg", // Image URL source
        },
        {
          name: "Mary Grace Café",
          description: "Mary Grace is known for its comforting and homey desserts like ensaymada, chocolate cake, and other Filipino-inspired pastries",
          locations: ["Multiple branches including Greenbelt, Bonifacio High Street, and Ayala Malls"],
          imageURL: "marygrace.jpg", // Image URL source
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
    Chinese:[
      {
        name: "Din Tai Fung",
        description: "Din Tai Fung is renowned for its high-quality Taiwanese dishes, especially its steamed dumplings (xiao long bao).",
        locations: ["Din Tai Fung has branches in Bonifacio High Street (Bonifacio Global City) and SM Megamall (Mandaluyong)"],
        imageURL: "", // Image URL source
      },
      {
        name: "Panda Express",
        description: "Panda Express offers American-Chinese fast casual dining, featuring dishes like Orange Chicken and Beijing Beef.",
        locations: ["SM Megamall (Mandaluyong) and SM Mall of Asia (Pasay)"],
        imageURL: "", // Image URL source
      },   
      {
        name: "Crystal Dragon",
        description: "Crystal Dragon is an upscale Chinese restaurant known for its refined Cantonese cuisine and elegant ambiance.",
        locations: ["City of Dreams Manila (Parañaque)"],
        imageURL: "crystal.jpg", // Image URL source
      },
      {
        name: "Luk Foo Cantonese Kitchen",
        description: "Luk Foo offers a wide array of Cantonese dishes, including dim sum and other classic Chinese favorites.",
        locations: ["Branches in Puregold QI Central (Quezon City) and Lucky Chinatown Mall (Binondo)"],
        imageURL: "lukfoo.jpg", // Image URL source
      },
      {
        name: "TuanTuan Chinese Brasserie",
        description: "TuanTuan serves Hong Kong comfort food such as baked rice dishes, noodle soups, and specialty teas.",
        locations: ["TuanTuan can be found in Promenade Greenhills (San Juan) and SM Megamall (Mandaluyong)"],
        imageURL: "", // Image URL source
      },      
      {
        name: "Fortune Hong Kong Seafood Restaurant",
        description: "Fortune Hong Kong specializes in seafood-centric Chinese dishes, offering a range of fresh and flavorful options.",
        locations: ["Fortune Hong Kong has branches in Banawe (Quezon City) and in SM Center Pasig (Pasig)"],
        imageURL: "tuantuan.jpg", // Image URL source
      },      
      {
        name: "Causeway Seafood Restaurant",
        description: "Causeway is known for its wide selection of affordable Chinese dishes, including dim sum and seafood specialties.",
        locations: ["Timog Avenue (Quezon City) and in Glorietta 3 (Makati)"],
        imageURL: "causeway.jpg", // Image URL source
      },
      {
        name: "Super Bowl of China",
        description: "Super Bowl of China serves classic Chinese dishes with a focus on rice bowls and noodle soups.",
        locations: ["Super Bowl of China is located in SM Megamall (Mandaluyong) and SM Mall of Asia (Pasay)"],
        imageURL: "bowl.jpg", // Image URL source
      },
      {
        name: "Golden Fortune Seafood Restaurant",
        description: "Golden Fortune offers a variety of Chinese dishes, especially known for its seafood and family-style dining.",
        locations: ["Golden Fortune is situated in Manila Ocean Park (Manila) and in Quezon City"],
        imageURL: "golden.jpg", // Image URL source
      },
      {
        name: "Tim Ho Wan",
        description: "Tim Ho Wan is famous for its Michelin-starred dim sum, offering a variety of delicious and affordable options.",
        locations: ["Find Tim Ho Wan in SM Megamall (Mandaluyong) and Glorietta 3 (Makati)."],
        imageURL: "", // Image URL source
      },
      {
        name: "Modern Shanghai",
        description: "Modern Shanghai specializes in Shanghainese cuisine, featuring classic dishes like xiao long bao (soup dumplings) and la mian (hand-pulled noodles).",
        locations: ["You can visit Modern Shanghai in SM Mall of Asia (Pasay) and SM Megamall (Mandaluyong)"],
        imageURL: "tim.jpg", // Image URL source
      },
      {
        name: "Peking Garden",
        description: "Peking Garden is known for its Peking duck and other Northern Chinese specialties.",
        locations: ["Look for Peking Garden in Greenbelt 5 (Makati) and SM Aura Premier (Bonifacio Global City)"],
        imageURL: "peking.jpg", // Image URL source
      },
      {
        name: "Shi Lin",
        description: "Shi Lin offers Taiwanese cuisine with a focus on street food favorites and classic dishes.",
        locations: ["Shi Lin has branches in Power Plant Mall (Makati) and Podium (Ortigas)"],
        imageURL: "shilin.jpg", // Image URL source
      },
      {
        name: "Wang Fu",
        description: "Wang Fu serves a mix of Chinese and Filipino dishes, specializing in comforting and flavorful meals.",
        locations: ["Visit Wang Fu in Serendra (Bonifacio Global City) and Evia Lifestyle Center (Las Piñas)"],
        imageURL: "wangfu.jpg", // Image URL source
      },
      {
        name: "Crystal Jade Dining IN",
        description: "Crystal Jade Dining IN serves contemporary Cantonese dishes in a refined setting.",
        locations: ["Crystal Jade has a branch in Bonifacio High Street Central (Bonifacio Global City)"],
        imageURL: "jade.jpg", // Image URL source
      },
      {
        name: "Shanghai Bistro",
        description: "Shanghai Bistro serves a variety of Chinese dishes including noodles, rice meals, and dim sum.",
        locations: ["Shanghai Bistro has outlets in Lucky Chinatown Mall (Binondo) and Fisher Mall (Quezon Avenue)"],
        imageURL: "bistro.jpg", // Image URL source
      },
      {
        name: "King Chef Seafood Restaurant",
        description: "King Chef offers a wide selection of Chinese dishes with an emphasis on seafood specialties.",
        locations: ["Visit King Chef in Lucky Chinatown Mall (Binondo) and Fisher Mall (Quezon Avenue)"],
        imageURL: "king.jpg", // Image URL source
      },
    ],
    Japanese: [
      {
        name: "Ooma",
        description: "Contemporary sushi and Japanese dishes with a twist.",
        locations: ["SM Mega Fashion Hall, Bonifacio High Street Central"],
        imageURL: "ooma.jpg", // Image URL source
      },
      {
        name: "Sushi Nori",
        description: "Casual sushi bar offering affordable sushi rolls and bowls.",
        locations: ["Multiple branches including SM Mall of Asia, Uptown Mall BGC"],
        imageURL: "sushinori.jpg", // Image URL source
      },
      {
        name: "Sushi Ninja",
        description: "Japanese restaurant specializing in sushi and sashimi.",
        locations: ["Makati Cinema Square, BGC Stopover Pavilion"],
        imageURL: "sushininja.jpg", // Image URL source
      },
      {
        name: "Ippudo",
        description: "Famous for authentic Hakata-style ramen.",
        locations: ["SM Mega Fashion Hall, Uptown Mall BGC, Power Plant Mall"],
        imageURL: "ippudo.jpg", // Image URL source
      },
      {
        name: "Ramen Nagi",
        description: "Customize your ramen with various toppings and broth flavors.",
        locations: ["SM Mall of Asia, Robinsons Place Manila, Greenbelt 3"],
        imageURL: "nagi.jpg", // Image URL source
      },
      {
        name: "Watami",
        description: "Izakaya-style dining with a wide range of Japanese dishes and drinks.",
        locations: ["Glorietta 1, Uptown Mall BGC, Ayala Malls the 30th"],
        imageURL: "watami.jpg", // Image URL source
      },
      {
        name: "Kikufuji",
        description: "Known for authentic Japanese grilled dishes and sake.",
        locations: ["Little Tokyo, Makati"],
        imageURL: "kikufuji.jpg", // Image URL source
      },
      {
        name: "Mitsuyado Sei-Men",
        description: "Teppanyaki and modern Japanese cuisine.",
        locations: ["Jupiter Street, Makati"],
        imageURL: "mitsuyado.jpg", // Image URL source
      },
      {
        name: "Coco Ichibanya",
        description: "Specializes in Japanese-style curry dishes.",
        locations: ["Multiple branches including SM Megamall, SM Mall of Asia"],
        imageURL: "ichiban.jpg", // Image URL source
      },
      {
        name: "Yakitori One",
        description: "Grilled skewers and Japanese small plates.",
        locations: ["Tomas Morato, Quezon City"],
        imageURL: "yakitori.jpg", // Image URL source
      },
      {
        name: "Yabu: House of Katsu",
        description: "Tonkatsu (breaded pork cutlet) restaurant.",
        locations: ["SM Aura, Robinsons Magnolia, Alabang Town Center, SM North, Vertis North"],
        imageURL: "yabu.jpg", // Image URL source
      },
      {
        name: "Tokyo Bubble Tea",
        description: "Offers a fusion of Japanese and Taiwanese cuisine.",
        locations: ["Multiple branches including SM North EDSA, Eastwood City"],
        imageURL: "tokyobubble.jpg", // Image URL source
      },
      {
        name: "Kimpura",
        description: "Japanese restaurant known for sushi, tempura, and grilled dishes.",
        locations: ["Greenbelt 5, Trinoma Mall"],
        imageURL: "kimpura.jpg", // Image URL source
      },
      {
        name: "Tenya Tempura Tendon",
        description: "Specializes in tempura and tendon (tempura rice bowls).",
        locations: ["SM Megamall, Market! Market!, SM Mall of Asia"],
        imageURL: "tenya.jpg", // Image URL source
      },
      {
        name: "Marugame Udon",
        description: "Offers freshly made udon noodles with various toppings and tempura.",
        locations: ["Bonifacio High Street, Glorietta 3, SM Megamall"],
        imageURL: "marugame.jpg", // Image URL source
      },
      {
        name: "Hanamaruken Udon",
        description: "Serves hot and cold udon noodles in flavorful broth.",
        locations: ["Trinoma Mall, Alabang Town Center, SM North EDSA"],
        imageURL: "hanamaru.jpg", // Image URL source
      },
      {
        name: "Dohtonbori",
        description: "Specializes in okonomiyaki (savory Japanese pancakes) and other teppanyaki dishes.",
        locations: ["SM Mall of Asia, Greenhills Promenade, SM North EDSA"],
        imageURL: "dohtonbori.jpg", // Image URL source
      },
      {
        name: "Yurakuen",
        description: "Offers authentic Japanese kaiseki cuisine in an elegant setting.",
        locations: ["Diamond Hotel, Roxas Boulevard, Manila"],
        imageURL: "yarakuen.jpg", // Image URL source
      },
      {
        name: "Tong Yang Shabu-Shabu & BBQ",
        description: "All-you-can-eat shabu-shabu and yakiniku (grilled meat).",
        locations: ["SM Megamall, SM Mall of Asia, Quezon City"],
        imageURL: "tongyang.jpg", // Image URL source
      },
      {
        name: "Pablo Cheesecake",
        description: "Famous for freshly baked Japanese-style cheesecakes and cheese tarts.",
        locations: ["SM Aura Premier, Robinsons Place Manila, Glorietta 3"],
        imageURL: "pablo.jpg", // Image URL source
      },
      {
        name: "Akira",
        description: "Modern Japanese restaurant with teppanyaki grills and sushi bar.",
        locations: ["Alabang Town Center, Robinsons Place Manila, UP Town Center"],
        imageURL: "akira.jpg", // Image URL source
      },
      {
        name: "Tori Ichi Yakitori & Bar",
        description: "ffers a variety of grilled yakitori skewers and Japanese bar snacks.",
        locations: ["BGC Stopover Pavilion, Makati City"],
        imageURL: "toriichi.jpg", // Image URL source
      },
      {
        name: "Sambo Kojin",
        description: "Eat-all-you-can Japanese and Korean buffet with a wide selection of dishes.",
        locations: ["SM Megamall, Eastwood City, SM Southmall"],
        imageURL: "sambo.jpg", // Image URL source
      },
      {
        name: "Tsujiri",
        description: "Specializes in matcha desserts, drinks, and Japanese sweets.",
        locations: ["S Maison, Bonifacio High Street Central, SM Aura Premier"],
        imageURL: "", // Image URL source
      },
    ],
    Drinks: [
      {
        name: "Milkbox Ice Creamery",
        description: "Famous for their artisanal ice cream and milkshakes with creative flavors.",
        locations: ["UP Town Center, Katipunan Avenue, Quezon City"],
        imageURL: "milkbox.jpg", // Image URL source
      },
      {
        name: "The Lost Bread",
        description: "Known for its inventive milkshakes and unique dessert creations.",
        locations: ["Glorietta 4, Makati City; SM Megamall, Mandaluyong City"],
        imageURL: "lostbread.jpg", // Image URL source
      },
      {
        name: "Le Petit Soufflé",
        description: "A French-Japanese dessert café offering delightful soufflés and pastries.",
        locations: ["SM Aura Premier, Bonifacio Global City, Taguig City"],
        imageURL: "petit.jpg", // Image URL source
      },
      {
        name: "Starbucks",
        description: "A popular coffeehouse chain serving coffee, tea, pastries, and desserts.",
        locations: ["Starbucks has numerous locations across Metro Manila, including malls, business districts, and major streets. Some notable locations include Ayala Malls, SM Malls, Bonifacio Global City, Makati CBD, and more"],
        imageURL: "starbuck.jpg", // Image URL source
      },
      {
        name: "Moonleaf Tea Shop",
        description: "Known for its wide selection of milk teas and fruit teas.",
        locations: ["Various branches across Metro Manila including Katipunan, Makati, and Quezon City"],
        imageURL: "moonleaf.jpg", // Image URL source
      },
      {
        name: "Dakasi",
        description: "Offers a range of fruit teas, milk teas, and smoothies.",
        locations: ["SM Mall of Asia, Quezon City, and other malls across Metro Manila"],
        imageURL: "dakasi,jpg", // Image URL source
      },
      {
        name: "Infinitea",
        description: "Popular for its affordable milk teas and fruit tea blends.",
        locations: ["Multiple branches in Quezon City, Manila, and Pasig."],
        imageURL: "infinitea.jpg", // Image URL source
      },
      {
        name: "Macao Imperial Tea",
        description: "Known for its unique tea flavors and cream cheese series.",
        locations: ["Various branches including SM Megamall, Bonifacio Global City, and Quezon City"],
        imageURL: "macao.jpg", // Image URL source
      },
      {
        name: "Happy Lemon",
        description: "Specializes in flavored teas, milk teas, and bubble teas.",
        locations: ["Several branches in major malls and commercial areas in Metro Manila"],
        imageURL: "happylemon.jpg", // Image URL source
      },
      {
        name: "Serendipitea",
        description: "Offers a variety of tea-based drinks and blends.",
        locations: ["Quezon City and San Juan"],
        imageURL: "serendipitea.jpg", // Image URL source
      },
      {
        name: "Chatime",
        description: "Known for its extensive menu of milk teas and refreshing drinks.",
        locations: ["Several branches including Makati, Taguig, and Mandaluyong."],
        imageURL: "chatime.jpg", // Image URL source
      },
      {
        name: "CoCo Fresh Tea & Juice",
        description: "Famous for its pearl milk tea and other beverage options.",
        locations: ["Various branches in Metro Manila including Quezon City and Taguig"],
        imageURL: "coco.jpg", // Image URL source
      },
      {
        name: "Serenitea",
        description: "Known for its premium tea blends and customizable drinks.",
        locations: ["Various branches across Metro Manila"],
        imageURL: "serenitea.jpg", // Image URL source
      },
      {
        name: "Gong Cha",
        description: "Offers a wide variety of milk teas, fruit teas, and bubble teas.",
        locations: ["Multiple branches in Metro Manila"],
        imageURL: "goncha.jpg", // Image URL source
      },
      {
        name: "Jamba Juice",
        description: "Specializes in fresh fruit smoothies and juice blends.",
        locations: ["SM Megamall, Bonifacio Global City, and other malls"],
        imageURL: "", // Image URL source
      },
      {
        name: "Sip and slice",
        description: "Known for its selection of coffee, tea, and specialty drinks.",
        locations: ["Various branches across Metro Manila"],
        imageURL: "", // Image URL source
      },
      {
        name: "Tim Hortons",
        description: "Offers a range of coffee, iced beverages, and specialty drinks.",
        locations: ["Multiple branches in Metro Manila"],
        imageURL: "horton.jpg", // Image URL source
      },
      {
        name: "Seattle's Best Coffee",
        description: "Known for its premium coffee blends and specialty drinks.",
        locations: ["Various branches including Makati, Quezon City, and Taguig"],
        imageURL: "seattle.jpg", // Image URL source
      },
    ],
    Dessert: [
      {
         name: "Slice",
         description: "Slice offers delectable cakes and desserts with unique flavors and designs. They are known for their innovative takes on classic desserts.",
         locations: ["Bonifacio High Street Central Square, Taguig City"],
        imageURL: "slice.jpg", // Image URL source
      },
      {
        name: "Dulcelin",
        description: "Dulcelin is famous for its delicious cheesecakes, tarts, and other desserts made with high-quality ingredients.",
        locations: ["Pasig (Katipunan Ave), Quezon City (New Manila), and Makati (Rockwell)"],
        imageURL: "dulcelin.jpg", // Image URL source
      },
      {
        name: "Paper Moon Café",
        description: "Paper Moon Café is renowned for its Mille Crêpe cakes—delicate and multi-layered cakes made of paper-thin crêpes and cream.",
        locations: ["Various branches including SM Megamall, Trinoma, and Glorietta"],
        imageURL: "paper.jpg", // Image URL source
      },
      {
        name: "Farmacy",
        description: "Farmacy offers nostalgic desserts and ice cream treats in a vintage-themed setting.",
        locations: ["Bonifacio Global City (Net Park)"],
        imageURL: "farmacy.jpg", // Image URL source
      },
      {
        name: "Tsoko.Nut",
        description: "Tsoko.Nut is a dessert café specializing in chocolate-based treats like champorado (chocolate rice porridge) and chocolate drinks",
        locations: ["Century City Mall, Makati City"],
        imageURL: "tsoko.jpg", // Image URL source
      },
      {
        name: "La Lola Churreria",
        description: "La Lola Churreria offers Spanish-style churros and various dips and toppings.",
        locations: ["Various branches including Power Plant Mall, SM Aura, and SM Megamall"],
        imageURL: "lola.jpg", // Image URL source
      },
      {
        name: "Le Sucre Lab",
        description: "Le Sucre Lab specializes in intricate and visually stunning desserts like their signature unicorn cakes and macarons.",
        locations: ["Tomas Morato, Quezon City"],
        imageURL: "sucre.jpg", // Image URL source
      },
      {
        name: "Workshop Bespoke Bakery",
        description: "Workshop Bespoke Bakery offers artisanal bread, cakes, and pastries made with natural and organic ingredients.",
        locations: ["Tuscany at McKinley Hill, Taguig City"],
        imageURL: "bespoke.jpg", // Image URL source
      },
      {
        name: "Poison Coffee & Doughnuts",
        description: "Poison Coffee & Doughnuts serves gourmet doughnuts with unique flavors and excellent coffee.",
        locations: ["Poblacion, Makati City"],
        imageURL: "poison.jpg", // Image URL source
      },
      {
        name: "Bucky's",
        description: "Bucky's is known for their decadent chocolate cake and other innovative desserts.",
        locations: ["Poblacion, Makati City"],
        imageURL: "bucky.jpg", // Image URL source
      },
      {
        name: "Cara Mia Gelateria",
        description: "Cara Mia Gelateria specializes in Italian gelato and also offers a wide selection of cakes and pastries.",
        locations: ["Various branches including Greenhills, Katipunan, and SM Megamall"],
        imageURL: "", // Image URL source
      },
      {
        name: "Scarsdale Artisanal Delights",
        description: "Scarsdale is famous for their New York-style crinkles, cookies, and other baked treats.",
        locations: ["Various branches including SM Megamall and BGC."],
        imageURL: "scarsdale.jpg", // Image URL source
      },
      {
        name: "Aperitif",
        description: "Aperitif is a dessert bar offering indulgent plated desserts and a selection of wines and cocktails.",
        locations: ["Ayala Malls The 30th, Pasig City"],
        imageURL: "aperitif.jpg", // Image URL source
      },
      {
        name: "BLK 513",
        description: "BLK 513 specializes in activated charcoal frozen yogurt with a variety of toppings.",
        locations: ["Various branches including SM Megamall and SM North EDSA"],
        imageURL: "blk.jpg", // Image URL source
      },
      {
        name: "Hatch 22 Café & Bakery",
        description: "Hatch 22 offers a mix of comfort food and delightful desserts including their famous cronuts.",
        locations: ["Rockwell Center, Makati City"],
        imageURL: "22.jpg", // Image URL source
      },
      {
        name: "Sophie's Mom",
        description: "Sophie's Mom is a nostalgic bakery serving classic Filipino desserts like ensaymada, cupcakes, and cookies.",
        locations: ["Various branches including SM Mall of Asia and SM Aura"],
        imageURL: "sophie.jpg", // Image URL source
      },
      {
        name: "St. Louis House of Fine Ice Cream and Dessert",
        description: "St. Louis specializes in premium ice cream flavors and indulgent desserts like sundaes and waffles.",
        locations: ["Various branches including SM Megamall and SM Mall of Asia"],
        imageURL: "louis.jpg", // Image URL source
      },
      {
        name: "Afters Espresso & Desserts",
        description: "Afters Espresso & Desserts is known for their delicious coffee drinks and homemade desserts.",
        locations: ["Multiple branches including Tomas Morato, Quezon City"],
        imageURL: "after.jpg", // Image URL source
      },
      {
        name: "Maitre Chocolatier Boutique Café",
        description: "Maitre Chocolatier offers a selection of gourmet chocolates, cakes, and pastries in a cozy café setting.",
        locations: ["Multiple branches including Greenbelt 5, Makati City"],
        imageURL: "maitier", // Image URL source
      },
      {
        name: "Yoh Froz",
        description: "Yoh Froz serves Korean-style frozen yogurt with a variety of toppings and flavors.",
        locations: ["Ayala Malls Feliz, Pasig City"],
        imageURL: "yoh.jpg", // Image URL source
      },
      {
        name: "Larcy's Cupcakery Café",
        description: "Larcy's is known for their beautifully decorated cupcakes in various flavors, perfect for sweet cravings.",
        locations: ["Multiple branches including BF Homes, Parañaque City"],
        imageURL: "larcy.jpg", // Image URL source
      },
      {
        name: "Lia's Cakes in Season",
        description: "Lia's Cakes in Season offers locally inspired cakes and desserts made with fresh and seasonal ingredients.",
        locations: ["Kapitolyo, Pasig City"],
        imageURL: "", // Image URL source
      },
      {
        name: "Dessert Museum",
        description: "A unique interactive museum offering dessert-themed exhibits and sweet treats.",
        locations: ["S Maison, Conrad Manila, Pasay City"],
        imageURL: "museum.jpg", // Image URL source
      },
      {
        name: "Dairy Queen",
        description: "Known for its soft-serve ice cream, Blizzards, and ice cream cakes.",
        locations: ["Various malls and commercial areas across Metro Manila"],
        imageURL: "dq.jpg", // Image URL source
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
    locationList.style.listStyleType = 'none'; // Remove bullet points
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

    // Function to toggle the sidebar
    function toggleSidebar() {
      var sidebar = document.getElementById('mySidebar');
      var sidebarToggle = document.getElementById('sidebar-toggle');
      sidebar.classList.toggle('sidebar-open');
      if (sidebar.classList.contains('sidebar-open')) {
        sidebar.style.left = '0';
        sidebarToggle.textContent = '☰';
      } else {
        sidebar.style.left = '-200px';
        sidebarToggle.textContent = '☰';
      }
    }

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
      var sidebar = document.getElementById('mySidebar');
      var sidebarToggle = document.getElementById('sidebar-toggle');
      if (!sidebar.contains(event.target) && event.target !== sidebarToggle) {
        sidebar.style.left = '-200px';
        sidebarToggle.textContent = '☰';
        sidebar.classList.remove('sidebar-open');
      }
    });