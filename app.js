let url = "http://universities.hipolabs.com/search?name=";

async function getCollege(country){
    try{
        let rep = await axios.get(url+country);
    return rep.data;
    } catch(e) {
        return [];

    }

}

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    let colArr = await getCollege(country);
    show(colArr);
    let inp = document.querySelector("input");
    inp.value = "";
})

function show(colArr){
    let list = document.querySelector(".list");
    list.innerText = ""
    for(cola of colArr){
        let li = document.createElement("li");
        li.innerText = cola.name;
        li.style.color = "purple"
        list.appendChild(li);
    }
}