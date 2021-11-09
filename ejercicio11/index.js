const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const main = async () => {
let response = await axios.get('https://rickandmortyapi.com/api/character');
let {
    data:{results},
    } = response;

let characters = results
    .map((character)=>{
    return{
        id: character.id,
        name: character.name,
        species: character.species,
        status: character.status
    };
})
.map((personaje)=>Object.values(personaje).join(','))
.join('\n')

const litles = "id,name,status,species\n"
//Create new data + titles
const charactersTitles = (litles + characters);
//chance variable "charteres" for "charactersTitles"
await fs.writeFile(path.join(__dirname, 'data.csv'), charactersTitles)

//await fs.writeFile(path.join(__dirname, 'data.csv'), characters)
//console.log(path.join(__dirname, 'data.csv'));
//console.log(characters);


}
//Create titles


main()