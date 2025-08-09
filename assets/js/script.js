/*HEADER 1*/

const opcionesHeader = [
    { nombre: "About Me", enlace: "#about" },
    { nombre: "Projects", enlace: "#projects" },
    { nombre: "Expierence", enlace: "#expierence" },
    { nombre: "Skills", enlace: "#skills" },
    { nombre: "Contact", enlace: "#contact" }
]

const header1 = document.getElementById("header1");

function llenarHeader1(){

    for (let i = 0; i < opcionesHeader.length; i++) {
        let cont = document.createElement("a");
        cont.setAttribute("href", opcionesHeader[i].enlace);
        cont.classList.add("borde-bottom", "df", "cajita-header");
        cont.innerHTML = `
            <i class="bi bi-arrow-right negro"></i>
            <h4 class="item-header negro">${opcionesHeader[i].nombre}</h4>
        `;

        header1.appendChild(cont);
    }
}

llenarHeader1()

/*HEADER 2*/

const header2 = document.querySelector("header");
const volver = document.getElementById("volver");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        header2.classList.remove("invisible");
        volver.classList.remove("invisible");
    } else {
        header2.classList.add("invisible");
        volver.classList.add("invisible");
    }

});

/*PROJECTS*/

const categorias = [
    {
        nombre: "Web Development",
        id: "web",
        imagen: ""
    },
    {
        nombre: "Branding",
        id: "branding",
        imagen: ""
    },
    {
        nombre: "Audiovisual Production",
        id: "audiovisual",
        imagen: ""
    },
    {
        nombre: "Graphic Design",
        id: "graphic",
        imagen: ""
    },
    {
        nombre: "UX/UI Design",
        id: "uxui",
        imagen: ""
    },
    {
        nombre: "Motion Graphics",
        id: "motion",
        imagen: ""
    }
]

function armarCategorias(){

    for(let i=0; i<categorias.length; i++){

        let contenedor = document.createElement("a");
        contenedor.classList.add("categoria", "df", "centerX", "centerY");
        contenedor.setAttribute("href", `projects.html?id=${categorias[i].id}`)
        contenedor.setAttribute("target", "_blank");

        let titulo = document.createElement("h3");
        titulo.classList.add("blanco");
        titulo.textContent = categorias[i].nombre;
        contenedor.appendChild(titulo);

        document.getElementById("sliderCategorias").appendChild(contenedor);
    }

}

armarCategorias();


/*SKILLS*/

const softs = [
    {name: "Communication", icon: "bi bi-chat-left-text"},
    {name: "Teamwork", icon: "bi bi-people"},
    {name: "Problem Solving", icon: "bi bi-lightbulb"},
    {name: "Adaptability", icon: "bi bi-arrows-move"},
    {name: "Creativity", icon: "bi bi-brush"},
    {name: "Time Management", icon: "bi bi-clock"}
]

const contenedorSofts = document.getElementById("softSkills");

function armarSoft(){

    for(let i=0; i<softs.length; i++){

        let boxSkill = document.createElement("div");
        boxSkill.classList.add("df", "centerY", "w50", "boxSkill");

        boxSkill.innerHTML = `
            <i class="${softs[i].icon} blanco"></i>
            <h4 class="blanco fuente">${softs[i].name}</h4>
        `;

        contenedorSofts.appendChild(boxSkill);

    }

}

armarSoft();

const hardSkills = [
    {
        nombre: "Web Development",
        herramientas: [
            { nombre: "HTML", nivel: 5 },
            { nombre: "CSS", nivel: 5 },
            { nombre: "JavaScript", nivel: 4 },
            { nombre: "Python", nivel: 1 },
            { nombre: "Scratch", nivel: 2 }
        ]
    },
    {
        nombre: "Graphic Design",
        herramientas: [
            { nombre: "Adobe Photoshop", nivel: 4 },
            { nombre: "Adobe Illustrator", nivel: 4 },
            { nombre: "Adobe Express", nivel: 4 },
            { nombre: "Canva", nivel: 4 }
        ]
    },
    {
        nombre: "2D Animation",
        herramientas: [
            { nombre: "After Effects", nivel: 3 },
            { nombre: "Animate", nivel: 3 }
        ]
    },
    {
        nombre: "Branding",
        herramientas: [
            { nombre: "Adobe Illustrator", nivel: 4 }
        ]
    },
    {
        nombre: "Audiovisual Production",
        herramientas: [
            { nombre: "Premiere Pro", nivel: 4 },
            { nombre: "Lightroom", nivel: 4 },
            { nombre: "Capcut", nivel: 4 },
            { nombre: "Ableton", nivel: 2 }
        ]
    },
    {
        nombre: "UX/UI Design",
        herramientas: [
            { nombre: "Figma", nivel: 4 }
        ]
    }
]

const cajaHard = document.getElementById("hardSkills");

function llenarHard(){

        for (let i = 0; i < hardSkills.length; i++) {
                
            let cont = document.createElement("div");
            cont.classList.add("borde-bottom", "df", "cajita-header");
            
            cont.innerHTML = `
                <i class="bi bi-arrow-right"></i>
                <h4 class="item-header negro">${hardSkills[i].nombre}</h4>
            `;

            const toolsBox = document.createElement("div");
            toolsBox.classList.add("invisible")
            cont.appendChild(toolsBox);

            cajaHard.appendChild(cont);

            let tools = hardSkills[i].herramientas
            
            cont.addEventListener("mouseenter", ()=>{
                showHerramientas(tools, toolsBox)
            })
            cont.addEventListener("mouseleave", ()=>{
                hideHerramientas(toolsBox)
            })
        }

        function showHerramientas(tools, toolsBox) {

            toolsBox.innerHTML = ""
            
            for (let i=0; i<tools.length; i++){

                let cont = document.createElement("div")

                let dots = document.createElement("div")

                let nivel = tools[i].nivel

                //armar los puntos
                for (let j=1; j<6; j++){

                    let dot = document.createElement("i")
                    dot.classList.add("bi", "bi-dot")

                    if (j <= nivel) {
                        dot.classList.add("violeta");
                    } else {
                        dot.classList.add("grisClaro");
                    }

                    dots.appendChild(dot)

                }

                cont.innerHTML = `
                    <h4>${tools[i].nombre}</h4>
                `
                //agrego los puntos de cada tool
                cont.appendChild(dots)
                
                toolsBox.appendChild(cont)

            }
            

            toolsBox.classList.remove("invisible")

        }

        function hideHerramientas (toolsBox){
            toolsBox.innerHTML = ""
            toolsBox.classList.add("invisible")
        }

}

llenarHard();

/*FOOTER*/

const datosFooter = [
    {
        icon: "bi bi-envelope",
        dato: "villalbavictoria120@gmail.com",
        enlace: "mailto:villalbavictoria120@gmail.com"
    },
    {
        icon: "bi bi-whatsapp",
        dato: "+54 291 5043 053",
        enlace: "https://wa.me/542915043053"
    },
    {
        icon: "bi bi-linkedin",
        dato: "Victoria Villalba",
        enlace: "https://www.linkedin.com/in/vvillalba/"
    },
    {
        icon: "bi bi-github",
        dato: "vickyvillalba22",
        enlace: "https://github.com/vickyvillalba22"
    }
]

const cajaFooter = document.getElementById("contactos");

function llenarFooter() {
    
    for(let i = 0; i < datosFooter.length; i++) {

        let cont = document.createElement("a");
        cont.setAttribute("href", datosFooter[i].enlace);
        cont.setAttribute("target", "_blank");
        cont.classList.add("df", "centerY", "caja-footer");

        cont.innerHTML = `
            <i class="${datosFooter[i].icon} blanco"></i>
            <p class="blanco">${datosFooter[i].dato}</p>
        `;

        cajaFooter.appendChild(cont);
    }

}

llenarFooter();


