let url = "http://universities.hipolabs.com/search?name=";

async function getCollege(country){
    let rep = await axios.get(url+country);
    console.log(rep.data[0].name);
    return rep.data;

}


let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getCollege(country);
    show(colArr);
})

function show(colArr){
    let list = document.querySelector(".list");
    list.innerText = ""
    for(cola of colArr){
        console.log(cola.name);
        let li = document.createElement("li");
        li.innerText = cola.name;
        list.appendChild(li);
    }
}