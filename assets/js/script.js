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
        let cont = document.createElement("div");
        cont.classList.add("borde-bottom", "df", "cajita-header");
        cont.innerHTML = `
            <i class="bi bi-arrow-right"></i>
            <a href="${opcionesHeader[i].enlace}"><h4 class="item-header negro">${opcionesHeader[i].nombre}</h4></a>
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


