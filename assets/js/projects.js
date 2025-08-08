const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get("id");

console.log(id);

fetch('assets/js/projects-data.json')
    .then(res => res.json())
    .then(data => {

        console.log(data)

        const categoria = data.categorias.find(cat => cat.id === id);
        llenarHtml(categoria)

        const proyectos = categoria.proyectos
        console.log(proyectos);
        armarSlider(proyectos)
        
    })
    .catch(err => console.error(err));

//llenar html

const catDesc = document.getElementById("catDesc")

function llenarHtml (categoria){

    console.log(categoria);

    let divDesc = document.createElement("div");
    divDesc.innerHTML = `
    
        <h2>${categoria.nombre}</h2>
        <p>${categoria.descripcion}</p>

    `

    catDesc.appendChild(divDesc)

}

const card = document.getElementById("card")
const botonDer = document.querySelector(".botonDer")
const botonIzq = document.querySelector(".botonIzq")

function armarSlider (proyectos){

    let current = 0

    function update (){

        card.innerHTML = `
        
            <div class="w80 h88 df columna spaceb">
                <img src="assets/imgs/about-prueba.jpg" alt="" class="vh30 w100 objCover">
                <h3 class="blanco">${proyectos[current].nombre}</h3>
                <p class="blanco">${proyectos[current].descripcion}</p>
                <div class="df fEnd w100">
                    <button class="ajusteBoton sinBorde fondoVioleta blanco fuente">See project</button>
                </div>
            </div>

        `

    }

    update()

    botonDer.addEventListener('click', ()=>{
        current++
        if(current>proyectos.length-1){
            current=0
        }
        update()
    })


    botonIzq.addEventListener('click', ()=>{
        current--
        if(current<0){
            current=proyectos.length-1
        }
        update()
    })

}

    
