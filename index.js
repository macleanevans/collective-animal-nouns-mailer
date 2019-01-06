module.exports = function (cb) {
    cb(null, sendFact());
};


function sendFact(){   
    const sendmail = require('sendmail')();
    const factOfTheDay = getFactOfTheDay();

    sendmail({
        from: 'billnye@collectiveanimalnouns.com',
        to: 'samswinnea@gmail.com',
        subject: 'Your Daily Collective Animal Noun!',
        html: `A group of ${factOfTheDay.animal} is called a ${factOfTheDay.collectiveNoun}! Have a great day. `,
    }, function(err) {
        console.log(err && err.stack);
    });
}

function getFactOfTheDay(){
    const list = Object.keys(animalData);
    const max = list.length - 1;
    const min = 0;
    const randomIndex = Math.floor(Math.random() * ( max - min + 1) + min);
    const selection = list[randomIndex];
    return {
        animal: selection, 
        collectiveNoun: animalData[selection]
    };
}

const animalData = {
    Albatross: "rookery",
    Alligators: "congregation",
    Apes: "troop or shrewdness",
    Baboons: "troop or flange",
    Badgers: "cete",
    Bats: "colony or cauldron",
    Bears: "sleuth or sloth",
    Beavers: "colony or family",
    Bloodhounds: "sute",
    Boars: "sounder",
    Buffalo: "obstinacy or gang",
    Camels: "caraven, flock, train, or herd",
    Cats: "clowder, pounce, glaring, or destruction (if they're wild)",
    Cattle: "mob",
    Cheetas: "coalition",
    Colts: "rag or rake",
    Deer: "herd or parcel",
    Dogs: "litter (if they're puppies), pack (if they're wild), or cowardice (if they're curs)",
    Dolphins: "pod",
    Donkeys: "pace",
    Elephants: "herd, parade, or memory",
    Elk: "gang",
    Ferrets: "business, hob (male), jill (female), kit (babies)",
    Fox: "leash, skulk, or earth (this is the oddest of all group names in my opinion)",
    Giraffes: "tower",
    Gnus: "implausibility",
    Goats: "trip, drove, herd, flock, tribe",
    Gorillas: "troop or band",
    Hedgehogs: "array",
    Hippopotamuses: "thunder or bloat",
    Hyenas: "clan or cackle",
    Jaguars: "prowl or shadow",
    Kangaroos: "mob or troop",
    Kittens: "kindle, litter, or intrigue",
    Lemurs: "conspiracy",
    Leopards: "leap",
    Lions: "pride or sawt",
    Martens: "richness",
    Moles: "labor",
    Monkeys: "troop or barrel",
    Mules: "pack, span, or barren",
    Narwhals: "blessing",
    Otters: "raft or romp",
    Oxen: "drove, team, yoke",
    Pandas: "embarrassment",
    Pigs: "drift, drove, sounder, team, or passel",
    Polar_Bear: "pack, aurora, or celebration",
    Porcupines: "prickle",
    Porpoises: "turmoil, pod, school, or herd",
    Prairie_Dogs: "colonies or coteries",
    Rabbits: "colony, nest, warren, husk, down or herd",
    Raccoons: "gaze, boars (group of males), sows (group of females)",
    Rhinoceroses: "stubbodrnness or crash",
    Seals: "harem",
    Sloths: "bed",
    Squirrels: "scurry or dray (a nest of mother and her babies)",
    Tigers:" streak or ambush",
    Whales: "pod, gam, or herd",
    Wolves: "pack, rout, or route (when in movement)",
    Wombats: "wisdom",
    Zebra: "herd, zeal, or dazzle"
}