var isRouteFIndOrNot = false;

const entirMetroLines = [
  pinkLine,
  redLine,
  blueLine1,
  blueLine2,
  yellowLine,
  greenLine,
  voiletLine,
  magentaLine,
  airportExpressLines,
];

//this function is calculation is there any direct route or not so we ca  avoid the dfs algorithm

var theRoute = [];
const getRouteForDirectStation = (startingStation, endStation) => {
  for (let i = 0; i < entirMetroLines.length; i++) {
    if (
      entirMetroLines[i].includes(startingStation) &&
      entirMetroLines[i].includes(endStation)
    ) {
      isRouteFIndOrNot = true;
      var indexOfStartingStation = entirMetroLines[i].indexOf(startingStation);
      var indexOfEndStation = entirMetroLines[i].indexOf(endStation);

      if (indexOfStartingStation < indexOfEndStation) {
        for (let j = indexOfStartingStation; j <= indexOfEndStation; j++) {
          theRoute.push(entirMetroLines[i][j]);
        }
      } else {
        for (let j = indexOfStartingStation; j >= indexOfEndStation; j--) {
          theRoute.push(entirMetroLines[i][j]);
        }
      }
    }
  }
  return [isRouteFIndOrNot, theRoute];
};

const entirMetroAdjacent = {
  //redline adjacent metro
  "Shaheed Sthal (New Bus Adda)": ["Hindon"],
  "Hindon": ["Shaheed Sthal (New Bus Adda)", "Arthala"],
  "Arthala": ["Hindon", "Mohan Nagar"],
  "Mohan Nagar": ["Arthala", "Shyam park"],
  "Shyam park": ["Mohan Nagar", "Major Mohit Sharma"],
  "Major Mohit Sharma": ["Shyam park", "Raj Bagh"],
  "Raj Bagh": ["Major Mohit Sharma", "Shaheed Nagar"],
  "Shaheed Nagar": ["Raj Bagh", "Dilshad Garden"],
  "Dilshad Garden": ["Shaheed Nagar", "Jhilmil"],
  "Jhilmil": ["Dilshad Garden", "Mansarovar Park"],
  "Mansarovar Park": ["Jhilmil", "Shahdara"],
  "Shahdara": ["Mansarovar Park", "Welcome"],
  "Welcome": ["Shahdara", "Seelampur", "Jaffrabad", "East Azad Nagar"],
  "Seelampur": ["Welcome", "Shastri Park"],
  "Shastri Park": ["Seelampur", "Kashmere Gate"],
  "Kashmere Gate": [
    "Shastri Park",
    "Tis Hazari",
    "Civil Lines",
    "Chandni Chowk",
    "Lal Qila",
  ],
  "Tis Hazari": ["Kashmere Gate", "Pul Bangash"],
  "Pul Bangash": ["Tis Hazari", "Pratap Nagar"],
  "Pratap Nagar": ["Pul Bangash", "Shastri Nagar"],
  "Shastri Nagar": ["Pratap Nagar", "Inderlok"],
  "Inderlok": ["Shastri Nagar", "Kanhiya Nagar", "Ashok Park Main"],
  "Kanhiya Nagar": ["Inderlok", "Keshav Puram"],
  "Keshav Puram": ["Kanhiya Nagar", "Netaji Subhash Place"],
  "Netaji Subhash Place": ["Keshav Puram", "Kohat Enclave", "Shakurpur"],
  "Kohat Enclave": ["Netaji Subhash Place", "Pitam Pura"],
  "Pitam Pura": ["Kohat Enclave", "Rohini East"],
  "Rohini East": ["Pitam Pura", "Rohini West"],
  "Rohini West": ["Rohini East", "Rithala"],
  "Rithala": ["Rohini West"],

  // pink line adjaentmetro
  "Majlis Park": ["Azadpur"],
  "Azadpur": ["Majlis Park", "Shalimar Bagh", "Model Town", "Adarsh Nagar"],
  "Shalimar Bagh": ["Azadpur", "Netaji Subhash Place"],
  "Netaji Subhash Place": [
    "Shalimar Bagh",
    "Shakurpur",
    "Keshav Puram",
    "Kohat Enclave",
  ],
  "Shakurpur": ["Netaji Subhash Place", "Punjabi Bagh West"],
  "Punjabi Bagh West": ["Shakurpur", "ESI Basaidarapur"],
  "ESI Basaidarapur": ["Punjabi Bagh West", "Rajouri Garden"],
  "Rajouri Garden": [
    "ESI Basaidarapur",
    "Maya Puri",
    "Ramesh Nagar",
    "Tagore Garden",
  ],
  "Maya Puri": ["Rajouri Garden", "Nariana Vihar"],
  "Nariana Vihar": ["Maya Puri", "Delhi Cantt"],
  "Delhi Cantt": ["Nariana Vihar", "Durgabai Deshmukh South Campus"],
  "Durgabai Deshmukh South Campus": [
    "Delhi Cantt",
    "Sir Vishweshwaraiah Moti Bagh",
  ],
  "Sir Vishweshwaraiah Moti Bagh": [
    "Durgabai Deshmukh South Campus",
    "Bhikaji Cama Place",
  ],
  "Bhikaji Cama Place": ["Sir Vishweshwaraiah Moti Bagh", "Sarojini Nagar"],
  "Sarojini Nagar": ["Bhikaji Cama Place", "Dilli Hat INA"],
  "Dilli Hat INA": ["Sarojini Nagar", "South Extension", "Jor Bagh", "AIIMS"],
  "South Extension": ["Dilli Hat INA", "Lajpat Nagar"],
  "Lajpat Nagar": ["South Extension", "Vinobapuri", "Jangpura", "Moolchand"],
  "Vinobapuri": ["Lajpat Nagar", "Ashram"],
  "Ashram": ["Vinobapuri", "Sarai Kale Khan Hazrat Nizamuddin"],
  "Sarai Kale Khan Hazrat Nizamuddin": ["Ashram", "Mayur Vihar - I"],
  "Mayur Vihar - I": [
    "Sarai Kale Khan Hazrat Nizamuddin",
    "Mayur Vihar Pocket 1",
    "Mayur Vihar Extension",
    "Akshardham",
  ],
  "Mayur Vihar Pocket 1": ["Mayur Vihar - I", "Trilokpuri Sanjay Lake"],
  "Trilokpuri Sanjay Lake": [
    "East Vinod Nagar Mayur Vihar II",
    "Mayur Vihar Pocket 1",
  ],
  "East Vinod Nagar Mayur Vihar II": [
    "Mandawali West Vinod Nagar",
    "Trilokpuri Sanjay Lake",
  ],

  "Mandawali West Vinod Nagar": [
    "East Vinod Nagar Mayur Vihar II",
    "IP Extension",
  ],
  "IP Extension": ["Mandawali West Vinod Nagar", "Anand Vihar"],
  "Anand Vihar": ["IP Extension", "Karkarduma", "Kaushambi"],
  "Karkarduma": ["Anand Vihar", "Karkarduma Court", "Preet Vihar"],
  "Karkarduma Court": ["Karkarduma", "Krishna Nagar"],
  "Krishna Nagar": ["Karkarduma Court", "East Azad Nagar"],
  "East Azad Nagar": ["Krishna Nagar", "Welcome"],
  "Welcome": ["East Azad Nagar", "Jaffrabad", "Shahdara", "Seelampur"],
  "Jaffrabad": ["Welcome", "Maujpur"],
  "Maujpur": ["Jaffrabad", "Gokul Puri"],
  "Gokul Puri": ["Maujpur", "Johri Enclave"],
  "Johri Enclave": ["Gokul Puri", "Shiv Vihar"],
  "Shiv Vihar": ["Johri Enclave"],

  //blueline 1 adjacent metro dwarka to nodia electronic
  "Noida Electronic City": ["Sec 62 Noida"],
  "Sec 62 Noida": ["Noida Electronic City", "Sec 59 Noida"],
  "Sec 59 Noida": ["Sec 62 Noida", "Sec 61 Noida"],
  "Sec 61 Noida": ["Sec 59 Noida", "Sec 52 Noida"],
  "Sec 52 Noida": ["Sec 61 Noida", "Sec 34 Noida"],
  "Sec 34 Noida": ["Sec 52 Noida", "Noida City Centre"],
  "Noida City Centre": ["Sec 34 Noida", "Noida Golf Course"],
  "Noida Golf Course": ["Noida City Centre", "Botanical Garden"],
  "Botanical Garden": [
    "Noida Golf Course",
    "Noida Sector 18",
    "Okhla Bird Sanctuary",
  ],
  "Noida Sector 18": ["Botanical Garden", "Noida Sector 16"],
  "Noida Sector 16": ["Noida Sector 18", "Noida Sector 15"],
  "Noida Sector 15": ["Noida Sector 16", "New Ashok Nagar"],
  "New Ashok Nagar": ["Noida Sector 15", "Mayur Vihar Extension"],
  "Mayur Vihar Extension": ["New Ashok Nagar", "Mayur Vihar - I"],
  "Mayur Vihar - I": [
    "Mayur Vihar Extension",
    "Akshardham",
    "Sarai Kale Khan Hazrat Nizamuddin",
    "Mayur Vihar Pocket 1",
  ],
  "Akshardham": ["Mayur Vihar - I", "Yamuna Bank"],
  "Yamuna Bank": ["Akshardham", "Indraprastha", "Laxmi Nagar"],
  "Indraprastha": ["Yamuna Bank", "Pragati Maidan"],
  "Pragati Maidan": ["Indraprastha", "Mandi House"],
  "Mandi House": ["Pragati Maidan", "Barakhambha Road", "ITO", "Janpath"],
  "Barakhambha Road": ["Mandi House", "Rajiv Chowk"],
  "Rajiv Chowk": [
    "Barakhambha Road",
    "Ramakrishna Ashram Marg",
    "New Delhi",
    "Patel Chowk",
  ],
  "Ramakrishna Ashram Marg": ["Rajiv Chowk", "Jhandewalan"],
  "Jhandewalan": ["Ramakrishna Ashram Marg", "Karol Bagh"],
  "Karol Bagh": ["Jhandewalan", "Rajendra Place"],
  "Rajendra Place": ["Karol Bagh", "Patel Nagar"],
  "Patel Nagar": ["Rajendra Place", "Shadipur"],
  "Shadipur": ["Patel Nagar", "Kirti Nagar"],
  "Kirti Nagar": ["Shadipur", "Moti Nagar", "Satguru Ram Singh Marg"],
  "Moti Nagar": ["Kirti Nagar", "Ramesh Nagar"],
  "Ramesh Nagar": ["Moti Nagar", "Rajouri Garden"],
  "Rajouri Garden": [
    "Ramesh Nagar",
    "Tagore Garden",
    "ESI Basaidarapur",
    "Maya Puri",
  ],
  "Tagore Garden": ["Rajouri Garden", "Subhash Nagar"],
  "Subhash Nagar": ["Tagore Garden", "Tilak Nagar"],
  "Tilak Nagar": ["Subhash Nagar", "Janakpuri East"],
  "Janakpuri East": ["Tilak Nagar", "Janakpuri West"],
  "Janakpuri West": [
    "Janakpuri East",
    "Uttam Nagar East",
    "Dabri Mor Janakpuri South",
  ],
  "Uttam Nagar East": ["Janakpuri West", "Uttam Nagar West"],
  "Uttam Nagar West": ["Uttam Nagar East", "Nawada"],
  "Nawada": ["Uttam Nagar West", "Dwarka Morh"],
  "Dwarka Morh": ["Nawada", "Dwarka"],
  "Dwarka": ["Dwarka Morh", "Dwarka Sector 14"],
  "Dwarka Sector 14": ["Dwarka", "Dwarka Sector 13"],
  "Dwarka Sector 13": ["Dwarka Sector 14", "Dwarka Sector 12"],
  "Dwarka Sector 12": ["Dwarka Sector 13", "Dwarka Sector 11"],
  "Dwarka Sector 11": ["Dwarka Sector 12", "Dwarka Sector 10"],
  "Dwarka Sector 10": ["Dwarka Sector 11", "Dwarka Sector 9"],
  "Dwarka Sector 9": ["Dwarka Sector 10", "Dwarka Sector 8"],
  "Dwarka Sector 8": ["Dwarka Sector 9", "Dwarka Sector 21"],
  "Dwarka Sector 21": ["Dwarka Sector 8", "Indira Gandhi Airport"],

  //blueline2 adjacent metro

  "Yamuna Bank": ["Laxmi Nagar", "Akshardham", "Indraprastha"],
  "Laxmi Nagar": ["Yamuna Bank", "Nirman Vihar"],
  "Nirman Vihar": ["Laxmi Nagar", "Preet Vihar"],
  "Preet Vihar": ["Nirman Vihar", "Karkarduma"],
  "Karkarduma": ["Preet Vihar", "Anand Vihar", "Karkarduma Court"],
  "Anand Vihar": ["Karkarduma", "Kaushambi", "IP Extension"],
  "Kaushambi": ["Anand Vihar", "Vaishali"],
  "Vaishali": ["Kaushambi"],

  //yellow line adjacent metro

  "Samaypur Badli": ["Rohini Sector 18, 19"],
  "Rohini Sector 18, 19": ["Samaypur Badli", "Haiderpur Badli Mor"],
  "Haiderpur Badli Mor": ["Rohini Sector 18, 19", "Jahangirpuri"],
  "Jahangirpuri": ["Haiderpur Badli Mor", "Adarsh Nagar"],
  "Adarsh Nagar": ["Jahangirpuri", "Azadpur"],
  "Azadpur": ["Adarsh Nagar", "Model Town", "Majlis Park", "Shalimar Bagh"],
  "Model Town": ["Azadpur", "GTB Nagar"],
  "GTB Nagar": ["Model Town", "Vishwa Vidyalaya"],
  "Vishwa Vidyalaya": ["GTB Nagar", "Vidhan Sabha"],
  "Vidhan Sabha": ["Vishwa Vidyalaya", "Civil Lines"],
  "Civil Lines": ["Vidhan Sabha", "Kashmere Gate"],
  "Kashmere Gate": [
    "Civil Lines",
    "Chandni Chowk",
    "Shastri Park",
    "Tis Hazari",
    "Lal Qila",
  ],
  "Chandni Chowk": ["Kashmere Gate", "Chawri Bazar"],
  "Chawri Bazar": ["Chandni Chowk", "New Delhi"],
  "New Delhi": ["Chawri Bazar", "Rajiv Chowk", "Shivaji Stadium"],
  "Rajiv Chowk": [
    "New Delhi",
    "Patel Chowk",
    "Barakhamba Road",
    "Ramakrishna Ashram Marg",
  ],
  "Patel Chowk": ["Rajiv Chowk", "Central Secretariat"],
  "Central Secretariat": [
    "Patel Chowk",
    "Udyog Bhawan",
    "Janpath",
    "Khan Market",
  ],
  "Udyog Bhawan": ["Central Secretariat", "Lok Kalyan Marg"],
  "Lok Kalyan Marg": ["Udyog Bhawan", "Jor Bagh"],
  "Jor Bagh": ["Lok Kalyan Marg", "Dilli Hat INA"],
  "Dilli Hat INA": ["Jor Bagh", "AIIMS", "Sarojini Nagar", "South Extension"],
  "AIIMS": ["Dilli Hat INA", "Green Park"],
  "Green Park": ["AIIMS", "Hauz Khas"],
  "Hauz Khas": ["Green Park", "Malviya Nagar", "IIT Delhi", "Panchsheel Park"],
  "Malviya Nagar": ["Hauz Khas", "Saket"],
  "Saket": ["Malviya Nagar", "Qutub Minar"],
  "Qutub Minar": ["Saket", "Chhatarpur"],
  "Chhatarpur": ["Qutub Minar", "Sultanpur"],
  "Sultanpur": ["Chhatarpur", "Ghitorni"],
  "Ghitorni": ["Sultanpur", "Arjan Garh"],
  "Arjan Garh": ["Ghitorni", "Guru Dronacharya"],
  "Guru Dronacharya": ["Arjan Garh", "Sikandarpur"],
  "Sikandarpur": ["Guru Dronacharya", "MG Road"],
  "MG Road": ["Sikandarpur", "IFFCO Chowk"],
  "IFFCO Chowk": ["MG Road", "Huda City Centre"],
  "Huda City Centre": ["IFFCO Chowk"],

  //green line adjacent metro
  "Kirti Nagar": ["Satguru Ram Singh Marg", "Shadipur", "Moti Nagar"],
  "Satguru Ram Singh Marg": ["Kirti Nagar", "Ashok Park Main"],
  "Ashok Park Main": ["Inderlok", "Punjabi Bagh", "Satguru Ram Singh Marg"],
  Inderlok: ["Ashok Park Main", "Shastri Nagar", "Kanhiya Nagar"],
  "Punjabi Bagh": ["Ashok Park Main", "Shivaji Park"],
  "Shivaji Park": ["Punjabi Bagh", "Madipur"],
  Madipur: ["Shivaji Park", "Paschim Vihar East"],
  "Paschim Vihar East": ["Madipur", "Paschim Vihar West"],
  "Paschim Vihar West": ["Paschim Vihar East", "Peera Garhi"],
  "Peera Garhi": ["Paschim Vihar West", "Udyog Nagar"],
  "Udyog Nagar": ["Peera Garhi", "Surajmal Stadium"],
  "Surajmal Stadium": ["Udyog Nagar", "Nangloi"],
  Nangloi: ["Surajmal Stadium", "Nangloi Railway Station"],
  "Nangloi Railway Station": ["Nangloi", "Rajdhani Park"],
  "Rajdhani Park": ["Nangloi Railway Station", "Mundka"],
  Mundka: ["Rajdhani Park", "Mundka Industrial Area"],
  "Mundka Industrial Area": ["Mundka", "Ghevra"],
  Ghevra: ["Mundka Industrial Area", "Tikri Kalan"],
  "Tikri Kalan": ["Ghevra", "Tikri Border"],
  "Tikri Border": ["Tikri Kalan", "Pandit Shree Ram Sharma"],
  "Pandit Shree Ram Sharma": ["Tikri Border", "Bahadurgarh City"],
  "Bahadurgarh City": ["Pandit Shree Ram Sharma", "Brigadier Hoshiyar Singh"],
  "Brigadier Hoshiyar Singh": ["Bahadurgarh City"],

  //voilet line adjacent line metro

  "Kashmere Gate": [
    "Shastri Park",
    "Tis Hazari",
    "Civil Lines",
    "Chandni Chowk",
    "Lal Qila",
  ],
  "Lal Qila": ["Kashmere Gate", "Jama Masjid"],
  "Jama Masjid": ["Lal Qila", "Delhi Gate"],
  "Delhi Gate": ["Jama Masjid", "ITO"],
  ITO: ["Delhi Gate", "Mandi House"],
  "Mandi House": ["Pragati Maidan", "Barakhambha Road", "ITO", "Janpath"],
  Janpath: ["Mandi House", "Central Secretariat"],
  "Central Secretariat": [
    "Patel Chowk",
    "Udyog Bhawan",
    "Janpath",
    "Khan Market",
  ],
  "Khan Market": ["Central Secretariat", "Jawaharlal Nehru Stadium"],
  "Jawaharlal Nehru Stadium": ["Khan Market", "Jangpura"],
  Jangpura: ["Jawaharlal Nehru Stadium", "Lajpat Nagar"],
  "Lajpat Nagar": ["Jangpura", "Moolchand", "South Extension", "Vinobapuri"],
  Moolchand: ["Lajpat Nagar", "Kailash Colony"],
  "Kailash Colony": ["Moolchand", "Nehru Place"],
  "Nehru Place": ["Kailash Colony", "Kalkaji Mandir"],
  "Kalkaji Mandir": [
    "Nehru Place",
    "Govind Puri",
    "Nehru Enclave",
    "Okhla NSIC",
  ],
  "Govind Puri": ["Kalkaji Mandir", "Harkesh Nagar"],
  "Harkesh Nagar": ["Govind Puri", "Jasola Apollo"],
  "Jasola Apollo": ["Harkesh Nagar", "Sarita Vihar"],
  "Sarita Vihar": ["Jasola Apollo", "Mohan Estate"],
  "Mohan Estate": ["Sarita Vihar", "Tughlakabad"],
  Tughlakabad: ["Mohan Estate", "Badarpur"],
  Badarpur: ["Tughlakabad", "Sarai"],
  Sarai: ["Badarpur", "NHPC Chowk"],
  "NHPC Chowk": ["Sarai", "Mewla Maharajpur"],
  "Mewla Maharajpur": ["NHPC Chowk", "Sector 28"],
  "Sector 28": ["Mewla Maharajpur", "Badkhal Mor"],
  "Badkhal Mor": ["Sector 28", "Faridabad Old"],
  "Faridabad Old": ["Badkhal Mor", "Neelam Chowk Ajronda"],
  "Neelam Chowk Ajronda": ["Faridabad Old", "Bata Chowk"],
  "Bata Chowk": ["Neelam Chowk Ajronda", "Escorts Mujesar"],
  "Escorts Mujesar": ["Bata Chowk", "Sant Surdas — Sihi (NCB Colony)"],
  "Sant Surdas — Sihi (NCB Colony)": [
    "Escorts Mujesar",
    "Raja Nahar Singh (Ballabhgarh)",
  ],
  "Raja Nahar Singh (Ballabhgarh)": ["Sant Surdas — Sihi (NCB Colony)"],

  //airpot line adjacent metro line

  "Dwarka Sector 21": ["Dwarka Sector 8", "Indira Gandhi Airport"],
  "Indira Gandhi Airport": ["Dwarka Sector 21", "Delhi Aerocity"],
  "Delhi Aerocity": ["Indira Gandhi Airport", "Dhaula Kuan"],
  "Dhaula Kuan": ["Delhi Aerocity", "Shivaji Stadium"],
  "Shivaji Stadium": ["Dhaula Kuan", "New Delhi"],
  "New Delhi": ["Shivaji Stadium", "Chawri Bazar", "Rajiv Chowk"],

  //magenta line adjacent metro

  "Janakpuri West": [
    "Dabri Mor Janakpuri South",
    "Janakpuri East",
    "Uttam Nagar East",
  ],
  "Dabri Mor Janakpuri South": ["Janakpuri West", "Dashrath Puri"],
  "Dashrath Puri": ["Dabri Mor Janakpuri South", "Palam"],
  Palam: ["Dashrath Puri", "Sadar Bazaar Cantonment"],
  "Sadar Bazaar Cantonment": ["Palam", "Terminal 1 Indira Gandhi Airport"],
  "Terminal 1 Indira Gandhi Airport": [
    "Sadar Bazaar Cantonment",
    "Shankar Vihar",
  ],
  "Shankar Vihar": ["Terminal 1 Indira Gandhi Airport", "Vasant Vihar"],
  "Vasant Vihar": ["Shankar Vihar", "Munirka"],
  Munirka: ["Vasant Vihar", "RK Puram"],
  "RK Puram": ["Munirka", "IIT Delhi"],
  "IIT Delhi": ["RK Puram", "Hauz Khas"],
  "Hauz Khas": ["Green Park", "Malviya Nagar", "IIT Delhi", "Panchsheel Park"],
  "Panchsheel Park": ["Hauz Khas", "Chirag Delhi"],
  "Chirag Delhi": ["Panchsheel Park", "Greater Kailash"],
  "Greater Kailash": ["Chirag Delhi", "Nehru Enclave"],
  "Nehru Enclave": ["Greater Kailash", "Kalkaji Mandir"],
  "Kalkaji Mandir": [
    "Nehru Place",
    "Govind Puri",
    "Nehru Enclave",
    "Okhla NSIC",
  ],
  "Okhla NSIC": ["Kalkaji Mandir", "Sukhdev Vihar"],
  "Sukhdev Vihar": ["Okhla NSIC", "Jamia Millia Islamia"],
  "Jamia Millia Islamia": ["Sukhdev Vihar", "Okhla Vihar"],
  "Okhla Vihar": ["Jamia Millia Islamia", "Jasola Vihar Shaheen Bagh"],
  "Jasola Vihar Shaheen Bagh": ["Okhla Vihar", "Kalindi Kunj"],
  "Kalindi Kunj": ["Jasola Vihar Shaheen Bagh", "Okhla Bird Sanctuary"],
  "Okhla Bird Sanctuary": ["Kalindi Kunj", "Botanical Garden"],
  "Botanical Garden": [
    "Noida Golf Course",
    "Noida Sector 18",
    "Okhla Bird Sanctuary",
  ],
};

function getNeighbors(node) {
  return entirMetroAdjacent[node] || [];
}


function findPaths(startNode, endNode, maxPaths=2) {
  console.log("findPaths called");
  const allPaths = [];
  const queue = [[startNode, []]]; 

  const theRightRoute = getRouteForDirectStation(startNode, endNode);
  if (!theRightRoute[0]) {
    while (queue.length > 0 && allPaths.length < maxPaths) {
      const [currentNode, path] = queue.shift();

      if (currentNode === endNode) {
        allPaths.push(path.concat(endNode));
      }

      for (const neighbor of getNeighbors(currentNode)) {
        if (!path.includes(neighbor)) {
          queue.push([neighbor, path.concat(currentNode)]);
        }
      }
    }

    return allPaths.length > 0 ? allPaths : null;
  }
  return [theRightRoute[1], null];
}
