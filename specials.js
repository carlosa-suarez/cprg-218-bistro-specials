const JSON = [   
    {
        "day": "Wednesday",
        "name": "$12 BBQ Wings",
        "description": "With celeries and carrots"
    },
    {
        "day": "Friday",
        "name": "$16 Ribbs",
        "description": "BBQ and Spicy"
    },
    {
        "day": "Thursday",
        "name": "$12 Fish 'n ships",
        "description": "Mayo cheese"
    },
];


const currentDate = new Date();
const weekday = currentDate.toLocaleDateString('enS-EN', { weekday: 'long' });
// const specials = JSON;
const specials = fetch('specials.json')
    .then((response) => response.json())
    .then((json) => processDay(weekday, json));


function processDay(weekday, specials) {
    let special = specials.filter(x => x.day.toLowerCase == weekday.toLowerCase)[0];
    //console.log(special);

    // fill up with data
    special_image.src = `images/${special.day.toLowerCase}.jpg`;
    special_name.innerHTML = `${special.day} ${special.name}`;
    special_description.innerHTML = special.description;
}



