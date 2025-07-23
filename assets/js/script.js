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

/*PROJECTS*/

const categorias = [
    {
        nombre: "Web Development",
        proyectos: [
            { nombre: "Portfolio", enlace: "" },
            { nombre: "E-commerce", enlace: "https://example.com/e-commerce" }
        ]
    },
    {
        nombre: "Branding",
        proyectos: [
            { nombre: "Logo Design", enlace: "" },
            { nombre: "Brand Manual", enlace: "" }
        ]
    },
    {
        nombre: "Audiovisual Production",
        proyectos: [
            { nombre: "Short Film", enlace: "" },
            { nombre: "Commercial Video", enlace: "" }
        ]
    },
    {
        nombre: "Graphic Design",
        proyectos: [
            { nombre: "Poster", enlace: "" },
            { nombre: "Brochure", enlace: "" }
        ]
    },
    {
        nombre: "UX/UI Design",
        proyectos: [
            { nombre: "App Prototype", enlace: "" },
            { nombre: "Website Redesign", enlace: "" }
        ]
    },
    {
        nombre: "2D Animation",
        proyectos: [
            { nombre: "Animated Explainer", enlace: "" },
            { nombre: "Character Animation", enlace: "" }
        ]
    }
]

function armarCategorias(){

    for(let i=0; i<categorias.length; i++){

        let contenedor = document.createElement("div");
        contenedor.classList.add("categoria", "df", "centerX", "centerY");

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

            cajaHard.appendChild(cont);
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


