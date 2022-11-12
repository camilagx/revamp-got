let jsonData=
{
    
    "kingdoms":{
        "name": [
            "Astapor",
            "Braavos",
            "Capital",
            "Dorne",
            "Iron Islands",
            "Meereen",
            "North",
            "Reach",
            "Riverlands",
            "Stormlands",
            "Vale",
            "Vaes Dothrak",
            "Yunkai"
        ],
        "houses": [],//[],
        "characters": [],//[],
        "rulers": [], //CONSIDER OBJECTS change in rulers by seas/ep
    },
    "characters":{
        "name": "",
        "house": "",
        "affiliates": {},
        "sigil":"",
        "allegiance":  {}//{"character":"", "season"}
    },
    "houses":{
        "name": "",
        "characters": [],
        "head_of_house":{
            "season":"",
            "name":""
        },
        "affiliates": {},
        "allegiance":  {},
        "role":{},
        "sigil":"",
        "thumbnail":""
    }
}

export const allKingdoms = [
    {
        "name": "Astapor",
        "houses": [],
        "characters": [
            "Missandei",
            "Kraznys",
            "Grey Worm"
        ],
        "rulers": "Good Masters"
    },
    {
        "name": "Braavos",
        "houses": [
            "Iron Bank",
            "House of Black and White"
        ],
        "characters": [
            "Syrio Forel",
            "Jaqen H'ghar"
        ],
        "rulers": "Sealords"
    },
    {
        "name": "Crownlands",
        "houses": [],
        "characters": [
        ],
        "rulers": "The King"
    },
    {
        "name": "Dorne",
        "houses": [
            "Martell",
            "Dayne"
        ],
        "characters": [
            "Oberyn Martell",
            "Obara Sand",
            "Nymeria Sand",
            "Tyene Sand",
            "Ellaria Sand"
        ],
        "rulers": "Martell",
        "mapImage": "map.jpg"
    },
    {
        "name": "Iron Islads",
        "houses": [
            "Greyjoy",
            "Botley"
        ],
        "characters": [
            "Theon Greyjoy",
            "Balon Greyjoy",
            "Euron Greyjoy",
            "Yara Greyjoy"
        ],
        "rulers": "Sealords",
        "mapImage": "map.jpg"
    },
    {
        "name": "Meereen",
        "houses": [
            "Loraq",
            "Pahl"
        ],
        "characters": [
            "Hizdahr zo Loraq",
            "Daario Naharis"
        ],
        "rulers": "Great Masters"
    },
    {
        "name": "Beyond the Wall",
        "houses": [],
        "characters": [
            "Night King",
            "Three-Eyed Raven",
            "Gilly",
            "Tormund Giantsbane",
            "Mag the Mighty",
            "Ygritte",
            "Craster",
            "Mance Rayder"
        ],
        "rulers": "Martell",
        "mapImage": "map.jpg"
    },
    {
        "name": "North",
        "houses": [
            "Stark",
            "Mormont",
            "Bolton",
            "Reed",
            "Karstark",
            "Umber"
        ],
        "characters": [
            "Rob Stark",
            "Ned Stark",
            "Bran Stark",
            "Jon Snow",
            "Arya Stark",
            "Sansa Stark",
            "Catlin Stark",
            "Jorah Mormont",
            "Jeor Mormont",
            "Lyanna Mormont",
            "Roose Bolton",
            "Ramsey Bolton",
            "Howland Reed",
            "Meera Reed",
            "Jojen Reed",
            "Harald Karstark",
            "Big Jon Umber",
            "Little Jon Umber"
        ],
        "rulers": "Stark",
        "mapImage": "map.jpg"
    },
    {
        "name": "Reach",
        "houses": [
            "Tyrell",
            "Tarly"
        ],
        "characters": [
            "Olenna Tyrell",
            "Margaery Tyrell",
            "Loras Tyrell",
            "Mace Tyrell",
            "Randyll Tarly",
            "Sam Tarly",
            "Dickon Tarly"
        ],
        "rulers": "Tyrell",
        "mapImage": "map.jpg"
    },
    {
        "name": "Riverlands",
        "houses": [
            "Tully",
            "Frey"
        ],
        "characters": [
            "Edmure Tully",
            "Brynden Tully",
            "Walder Frey"
        ],
        "rulers": "Tully",
        "mapImage": "map.jpg"
    },
    {
        "name": "Stormlands",
        "houses": [
            "Baratheon",
            "Tarth"
        ],
        "characters": [
            "Roberth Baratheon",
            "Stannis Baratheon",
            "Renly Baratheon",
            "Gendry",
            "Brienne Tarth"
        ],
        "rulers": "Baratheon",
        "mapImage": "map.jpg"
    },
    {
        "name": "Vale",
        "houses": [
            "Arryn",
            "Royce"
        ],
        "characters": [
            "Jon Arryn",
            "Robin Arryn",
            "Lysa Arryn",
            "Yohn Royce"
        ],
        "rulers": "Arryn",
        "mapImage": "map.jpg"
    },
    {
        "name": "Vaes Dothrak",
        "houses": [],
        "characters": [
            "Khal Drogo"
        ],
        "rulers": "The Khal"
    },
    {
        "name": "The Wall",
        "houses": [],
        "characters": [
            "Maester Aemon",
            "Alliser Thorne",
            "Qhorin Halfhand",
            "Ed Tollett",
            "Grenn",
            "Karl Tanner"
        ],
        "mapImage": "map.jpg",
        "rulers": "Lord Commanders of the Night's Watch"
    },
    {
        "name": "Yunkai",
        "houses": [
            "Eraz"
        ],
        "characters": [
            "Razdal mo Eraz"
        ],
        "rulers": "Wise Masters"
    }
];

export const allHouses = [
    {
        "name": "Greyjoy",
        "characteres": [],
        "head_of_house": {
            "season": [
                1,2,3,4,5,6,7,8
            ],
            "name": [
                "Balon Greyjoy",
                "Balon Greyjoy",
                "Balon Greyjoy",
                "Balon Greyjoy",
                "Balon Greyjoy",
                "Euron Greyjoy",
                "Euron Greyjoy",
                "Yara Greyjoy"
            ]
        },
        "sigil": "./HouseGreyjoy.png",
        "allegiance": "A great house ruling over the Iron Islands that has bent the knee to House Baratheon. The people of the Iron Islands often declare themselves independent of the other kingdoms.",
        "city": "Pyke",
        "words": "We do not sow",
        "id": 2
    },
    {
        "name": "Stark",
        "characteres": [
            "Rob Stark",
            "Ned Stark",
            "Bran Stark",
            "Jon Snow",
            "Arya Stark",
            "Sansa Stark",
            "Catlin Stark"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Ned Stark"]
        },
        "sigil": "./HouseStark.png",
        "allegiance": "The royal house ruling the North that pledged fealty to the crown. House Bolton, House Karstark, House Mormont, House Umber, House Tully, House Arryn, and House Baratheon are all in allegiance with House Stark.",
        "city": "Winterfell",
        "words": "Winter is coming",
        "id": 3
    },
    {
        "name": "Tyrell",
        "characteres": [],
        "head_of_house": {
            "season": [1],
            "name": ["Mace Tyrell"]
        },
        "sigil": "./HouseTyrell.png",
        "allegiance": "The royal house that rules over the Reach pledging fealty to the crown. House Tarly is one of the noble houses that has sworn allegiance to them.",
        "city": "Highgarden",
        "words": "Growing strong",
        "id": 4
    },
    {
        "name": "Tully",
        "characteres": [
            "Edmure Tully",
            "Brynden Tully"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Edmure Tully"]
        },
        "sigil": "./HouseTully.png",
        "allegiance": "A great house of the Riverlands that pledges fealty to the crown. House Frey is in allegiance with House Tully as another great house of the Riverlands. House Stark is also in allegiance with them as the Lady Catelyn is daughter to the Lord of Riverrun.",
        "city": "Riverrun",
        "words": "Family, Duty, Honor",
        "id": 5
    },
    {
        "name": "Martell",
        "characteres": [
            "Oberyn Martell"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Prince Martell"]
        },
        "sigil": "./HouseMartell.png",
        "allegiance": "A great house of Westeros that pledge allegiance to the Iron Throne.",
        "city": "Dorne",
        "words": "Unbowed, Unbent, Unbroken",
        "id": 6
    },
    {
        "name": "Arryn",
        "characteres": [
            "Jon Arryn",
            "Robin Arryn",
            "Lysa Arryn"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Lysa Arryn"]
        },
        "sigil": "./HouseArryn.png",
        "allegiance": "A royal house of Westeros that rules over the Eyrie. In allegiance with house Stark and house Tully as Lady Lysa was born a Tully.",
        "city": "Vale",
        "words": "As High as Honor",
        "id": 7
    },
    {
        "name": "Mormont",
        "characteres": [
            "Jorah Mormont",
            "Jeor Mormont",
            "Lyanna Mormont"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Lyanna Mormont"]
        },
        "sigil": "./HouseMormont.png",
        "allegiance": "A house in the North that pledge fealty to House Stark.",
        "city": "Bear Island",
        "words": "Here We Stand",
        "id": 8
    },
    {
        "name": "Bolton",
        "characteres": [
            "Roose Bolton",
            "Ramsey Bolton"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Roose Bolton"]
        },
        "sigil": "./HouseBolton.png",
        "allegiance": "A northern house with allegiance to the Iron Throne.",
        "city": "Dreadfort",
        "words": "Our Blades Are Sharp",
        "id": 9
    },
    {
        "name": "Reed",
        "characteres": [
            "Howland Reed",
            "Meera Reed",
            "Jojen Reed"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Howland Reed"]
        },
        "sigil": "./HouseReed.png",
        "allegiance": "A northern house and great friend to House Stark.",
        "city": "Greywater",
        "words": "",
        "id": 10
    },
    {
        "name": "Karstark",
        "characteres": [
            "Rickard Karstark",
            "Harold Karstark"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Rickard Karstark"]
        },
        "sigil": "./HouseKarstark.png",
        "allegiance": "A northern house that swore fealty and is family to House Stark.",
        "city": "Karhold",
        "words": "The Sun of Winter",
        "id": 11
    },
    {
        "name": "Umber",
        "characteres": [
            "Greatjon Umber",
            "Smalljon Umber"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Greatjon Umber"]
        },
        "sigil": "./HouseUmber.png",
        "allegiance": "A great house in the North that pledges fealty to House Stark.",
        "city": "Last Hearth",
        "words": "",
        "id": 12
    },
    {
        "name": "Tarly",
        "characteres": [
            "Samwell Tarly",
            "Randyll Tarly",
            "Dickon Tarly"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Randyll Tarly"]
        },
        "sigil": "./HouseTarly.png",
        "allegiance": "A noble house of the Reach that has sworn allegiance to House Tyrell.",
        "city": "Horn Hill",
        "words": "First in Battle",
        "id": 13
    },
    {
        "name": "Baratheon",
        "characteres": [
            "Roberth Baratheon",
            "Stannis Baratheon",
            "Renly Baratheon",
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Roberth Baratheon"]
        },
        "sigil": "./HouseBaratheon.png",
        "allegiance": "The great house and lord of the Stormlands. Sits on the Iron Throne and rules over the Seven Kingdoms. A great friend to House Stark.",
        "city": "Storms End",
        "words": "Ours is the Fury",
        "id": 14
    },
    {
        "name": "Tarth",
        "characteres": [
            "Selwyn Tarth",
            "Brienne Tarth"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Selwyn Tarth"]
        },
        "sigil": "./HouseTarth.png",
        "allegiance": "A house in the Stormlands pledging fealty to House Baratheon. In allegiance to the Crown and is good friends with Lannisters and Starks.",
        "city": "Evenfall Hall",
        "words": "",
        "id": 15
    },
    {
        "name": "Frey",
        "characteres": [
            "Walder Frey"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Walder Frey"]
        },
        "sigil": "./HouseFrey.png",
        "allegiance": "Robb and all of his bannermen arrive at the Twins where Lord Walder Frey begins preparations for the wedding. All the northern lords of Robb's host attend the wedding while the northern army camps outside during the feast. After Edmure and Roslin are taken away for the bedding, the Freys and Boltons betray King Robb and massacre them in an event known as the Red Wedding.",
        "city": "Twins",
        "words": "We Stand Together",
        "id": 16
    },
    {
        "name": "Lannister",
        "characteres": [
            "Tywin Lannister",
            "Tyrion Lannister",
            "Jamie Lannister",
            "Cersei Lannister"
        ],
        "head_of_house": {
            "season": [1],
            "name": ["Tywin Lannister"]
        },
        "sigil": "./HouseLannister.png",
        "allegiance": "A royal house of Westeros and Lords of the Westerlands.",
        "city": "Casterly Rock",
        "words": "Hear Me Roar",
        "id": 17
    },
    {
        "name": "House of Black and White",
        "characteres": ["Jaqen H'ghar"],
        "head_of_house": {
            "season": [
                1,2,3,4,5,6,7,8
            ],
            "name": [
                "Jaqen H'ghar"
            ]
        },
        "sigil": "./Faceless_Man.png",
        "allegiance": "In allegiance to people who serve the many face god.",
        "city": "Braavos",
        "words": "",
        "id": 1
    },
    {
        "name": "Targaryen",
        "characteres": [],
        "head_of_house": {
            "season": [1],
            "name": ["Daenerys Targaryen"]
        },
        "sigil": "./HouseTargaryen.png",
        "allegiance": "The royal house that ruled over the seven kingdoms and sat on the Iron Throne until Robert Baratheon's Rebellion.",
        "city": "DragonStone",
        "words": "Fire and Blood",
        "id": 18
    },
]