const {log} = console
const planets = [
    {
        name:'Earth',
        gravity: 9.8
    },
    {
        name:'Mercury',
        gravity: 3.61
    },
    {
        name:'Venus',
        gravity: 8.83
    },
    {
        name:'Mars',
        gravity: 3.75
    },
    {
        name:'Jupiter',
        gravity: 26.0
    },
    {
        name:'Saturn',
        gravity: 11.2
    },
    {
        name:'Uranus',
        gravity: 10.5
    },
    {
        name:'Neptune',
        gravity: 13.3
    },
    {
        name:'Pluto',
        gravity: 0.61
    },
    {
        name:'Moon',
        gravity:1.62
    }
]

    const submitBtn =document.getElementById("cal");
    submitBtn.addEventListener("click",calculateGravity)
    
    
    function calculateGravity(e){
        
        const inputEl  = Number(document.querySelector("#input-El").value);
        const selectEl = document.getElementById("planet").value;
        const calculateInput = document.getElementById("results")
        log(inputEl, selectEl)
        let result;
        for(let i =0;i <planets.length;i++){
            let planetName = planets[i].name;
            let gravity = planets[i].gravity
  
            // log('planets', planetName)
 if(planetName.toLowerCase() == selectEl.toLowerCase()){
     result =inputEl*gravity
     log(result)

      calculateInput.innerHTML = `
      <div id="result">
           ${result}N
      </div>
      `
        }
      
        
}
if(isNaN(inputEl) ||inputEl ==="" ||selectEl===""){
    alert("input fields must be filled")
}

    }
                           
 
