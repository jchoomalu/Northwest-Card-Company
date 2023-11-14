import db from '../database/connection.js'

async function addSeeds () {


const cardSeed = db.collection('cards')

await cardSeed.drop()

const cardSeeds = [{ 
    player: "Ken Griffey Jr.",
    year: "1990",
    team: "Seattle Mariners",
    brand: "Upper Deck",
    sport: "Baseball",
    cardNumber: "009445678",
    condition: "Very good",
    price: 19.99,
    grade: {
        PSA: 9,
        BGS: 9
     },
    imageURL: "/images/griffeyUpperDeck.jpg",
    description: "Classic high gloss showcase card by Upper Deck. Slight printing defect on player details portion of the back has this otherwise perfect card graded at a solid 9."
},
{
    player: "Derek Jeter",
    year: "1991",
    team: "New York Yankees",
    brand: "Bowman",
    sport: "Baseball",
    cardNumber: "3394585",
    condition: "Mint",
    price: 399.99,
    grade: {
        PSA: 10,
        BGS: 10
     },
    imageURL: "/images/derekJeterBowman.jpg",
    description: "Graded at a perfect 10, this early Bowman Jeter is a must have for any serious collector."
},
{
    player: "Mark McGwire",
    year: "1987",
    team: "OaKland Athletics",
    brand: "Donruss",
    sport: "Baseball",
    cardNumber: "8859433",
    condition: "Near Mint",
    price: 69.99,
    grade: {
        PSA: 9.5,
        BGS: 9
     },
    imageURL: "/images/markMcguire.jpg",
    description: "Early rookie card for one of the best hitters of all time. Near mint condition."
},
{
    player: "Ken Griffey Jr.",
    year: "1992",
    sport: "Baseball",
    team: "Seattle Mariners",
    brand: "Upper Deck",
    cardNumber: "1122434",
    condition: "Very Good",
    price: 12.99,
    grade: {
        PSA: 8.5,
        BGS: 9
     },
    imageURL: "/images/griffeyUD.jpeg",
    description: "Rookie of the year, and boy was he about to shake up the sport. Slightly grainy print has this card graded well below value."
},
{
    player: "Nolan Ryan",
    year: "1989",
    sport: "Baseball",
    team: "Texas Rangers",
    brand: "Topps",
    cardNumber: "785648876",
    condition: "Near Mint",
    price: 39.99,
    grade: {
        PSA: 9.5,
        BGS: 9.5
     },
    imageURL: "/images/nolanRyanTopps.jpg",
    description: "Excellent item for any collector, ships in protective UV plastic case."
},
{
    player: "Greg Maddux",
    year: "1987",
    sport: "Baseball",
    brand: "Topps",
    team: "Chicago Cubs",
    cardNumber: "54656",
    condition: "Mint",
    price: 12.99,
    grade: {
        PSA: 10,
        BGS: 10,
     },
    imageURL: "/images/gregMaddux.jpg",
    description: "Topps official rookie card in Mint condition."
},
];

const result = await cardSeed.insertMany(cardSeeds)

}

export default addSeeds
