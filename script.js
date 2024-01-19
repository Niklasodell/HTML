{
    async function onsubmit(event){
        event.preventDefault();
    }

    document.getElementById("pokemonForm").onsubmit = async (event) => {
        event.preventDefault();
        await getPokemonData(); 
    };

    async function getPokemondata() {
        const pokemonId = document.getElementById("pokemonInput").value;
        
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
            ); 

        const pokemonData = await response.json(); 

        createPokemonBlock(pokemonData);     

    }


    function createPokemonBlock(pokemonData) {
        const container = document.getElementById("gridContainer")

        const pokemonBlock = document.createElement("div"); 

        pokemonBlock.innerHTML = `
        <div> Id: ${pokemonData.id} </div>
        <div> Name: ${pokemonData.name} </div>
        <div> Height : ${pokemoneData.height} </div>    
        `;

        container.appendChild(pokemonBlock); 

    }

    // Alternativt sätt
    // document.getElementById("pokemonForm").onsubmit = onsubmit();  
}