let url = "https://universities.hipolabs.com/search?name=";
let country = "Nepal"

async function getCollege(){
    let rep = await axios.get(url+country);
    console.log(rep);

}