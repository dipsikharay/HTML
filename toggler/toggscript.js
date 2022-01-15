const toggles = document.querySelectorAll(".toggle")

const good = document.querySelector("#good")
const cheap = document.querySelector("#bad")
const fast = document.querySelector("#average")

console.log(good)
toggles.forEach((toggle)=>toggle.addEventListener("change",(e)=>{
    console.log(e)
    console.log(e.target)
    transitionFunc(e.target)}))


function transitionFunc(theClickedOne){

    if(good.checked && bad.checked && average.checked){
        if(good === theClickedOne){
            average.checked = false
        }
        if(bad === theClickedOne){
            good.checked = false
        }
        if(average === theClickedOne){
            average.checked = false
        }
    }

}