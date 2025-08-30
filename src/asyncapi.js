const misLibros = [
  {
    id: "1",
    nombre: "Cien años de soledad",
    author: "Gabriel García Márquez",
    precio: 420,
    foto: "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
    genero: "novela",
    año_publicacion: 1967,
    stock: 6
  },
  {
    id: "2",
    nombre: "El señor de los anillos (Trilogía)",
    author: "J. R. R. Tolkien",
    precio: 800,
    foto: "https://images.cdn3.buscalibre.com/fit-in/360x360/54/49/5449ba87a3e457a22dd6d0972b5c261e.jpg",
    genero: "fantasia",
    año_publicacion: 1954,
    stock: 5
  },
  {
    id: "3",
    nombre: "1984",
    author: "George Orwell",
    precio: 390,
    foto: "https://images.cdn1.buscalibre.com/fit-in/360x360/b0/39/b039af065268818b7bd3b0e016f8db65.jpg",
    genero: "cienciaficcion",
    año_publicacion: 1949,
    stock: 2
  },
  {
    id: "4",
    nombre: "Un mundo feliz",
    author: "Aldous Huxley",
    precio: 380,
    foto: "https://images.cdn1.buscalibre.com/fit-in/360x360/c1/8c/c18cdeb80fa6f9a212a1cc5639e94c6d.jpg",
    genero: "cienciaficcion",
    año_publicacion: 1932,
    stock: 2
  },
  {
    id: "5",
    nombre: "Orgullo y prejuicio",
    author: "Jane Austen",
    precio: 410,
    foto: "https://i.pinimg.com/originals/2e/f9/91/2ef991edd4d4039895031544ed0c561a.png",
    genero: "novela",
    año_publicacion: 1813,
    stock: 5
  },
  {
    id: "6",
    nombre: "Crimen y castigo",
    author: "Fiódor Dostoyevski",
    precio: 380,
    foto: "https://resumen.club/wp-content/uploads/2022/04/crimen-y-castigo-resumen-y-personajes-360x500.jpg",
    genero: "novela",
    año_publicacion: 1866,
    stock: 4
  },
  {
    id: "7",
    nombre: "Lolita",
    author: "Vladimir Nabokov",
    precio: 270,
    foto: "https://images.cdn3.buscalibre.com/fit-in/360x360/0f/b5/0fb582c596c8701fe79db731e07e7524.jpg",
    genero: "novela",
    año_publicacion: 1955,
    stock: 7
  },
  {
    id: "8",
    nombre: "Ulises",
    author: "James Joyce",
    precio: 200,
    foto: "https://images.cdn3.buscalibre.com/fit-in/360x360/b8/e8/b8e89e23530ae62c5cb91a62dc69ac0c.jpg",
    genero: "novela",
    año_publicacion: 1922,
    stock: 7
  },
  {
    id: "9",
    nombre: "Madame Bovary",
    author: "Gustave Flaubert",
    precio: 360,
    foto: "https://images.cdn2.buscalibre.com/fit-in/360x360/19/32/1932823e770385461223bc24d4c039b6.jpg",
    genero: "novela",
    año_publicacion: 1857,
    stock: 4
  },
  {
    id: "10",
    nombre: "En busca del tiempo perdido",
    author: "Marcel Proust",
    precio: 340,
    foto: "https://images.cdn3.buscalibre.com/fit-in/360x360/da/2e/da2ef30eaa323ac831fb9375112914a8.jpg",
    genero: "novela",
    año_publicacion: 1913,
    stock: 4
  },
  {
    id: "11",
    nombre: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes.",
    precio: 280,
    foto: "https://www.libreriasinopsis.com/imagenes/9788469/978846980757.JPG",
    genero: "cienciaficcion",
    año_publicacion: 1605,
    stock: 2
  },
  {
    id: "12",
    nombre: "El retrato de Dorian Gray",
    author: "Oscar Wilde",
    precio: 450,
    foto: "https://images.cdn2.buscalibre.com/fit-in/360x360/91/18/9118645bef1e527a3e1f14e7187ac89e.jpg",
    genero: "cienciaficcion",
    año_publicacion: 1890,
    stock: 5
  },
  {
    id: "13",
    nombre: "El Principito",
    author: "Antoine de Saint-Exupéry.",
    precio: 300,
    foto: "https://i.pinimg.com/originals/9a/a4/b1/9aa4b16195770cbb27ef3b2447d11afc.jpg",
    genero: "cienciaficcion",
    año_publicacion: 1943,
    stock: 5
  },
  {
    id: "14",
    nombre: "El proceso",
    author: "Franz Kafka",
    precio: 350,
    foto: "https://images.cdn1.buscalibre.com/fit-in/360x360/86/31/8631f67503db12c77b8dc8b50665c705.jpg",
    genero: "novela",
    año_publicacion: 1925,
    stock: 6
  },
  {
    id: "15",
    nombre: "El ruido y la furia",
    author: "William Faulkner",
    precio: 420,
    foto: "https://images.cdn3.buscalibre.com/fit-in/360x360/45/f7/45f783e74d96b443913ce98f57287148.jpg",
    genero: "fantasia",
    año_publicacion: 1929,
    stock: 4
  },
  {
    id: "16",
    nombre: "Hamlet",
    author: "William Shakespeare",
    precio: 320,
    foto: "https://images.cdn3.buscalibre.com/fit-in/360x360/83/e6/83e6ea9ca39310715d3b2b20be3dcd2f.jpg",
    genero: "fantasia",
    año_publicacion: 1603,
    stock: 4
  },
  {
    id: "17",
    nombre: "Lo que el viento se llevó",
    author: "Margaret Mitchell.",
    precio: 330,
    foto: "https://images.cdn2.buscalibre.com/fit-in/360x360/0d/51/0d513cf67ac3461fd0da21c25efb1a5a.jpg",
    genero: "novela",
    año_publicacion: 1936,
    stock: 2
  },
  {
    id: "18",
    nombre: "La Odisea",
    author: "Homero",
    precio: 280,
    foto: "https://www.loqueleo.com/co/uploads/2021/01/resized/200_la-odisea-1.JPG",
    genero: "fantasia",
    año_publicacion: -700,
    stock: 3
  },
  {
    id: "19",
    nombre: "Las uvas de la ira",
    author: "John Steinbeck.",
    precio: 350,
    foto: "https://images.cdn3.buscalibre.com/fit-in/360x360/d5/cf/d5cf867e1bbaef171c4f0b4243351aff.jpg",
    genero: "novela",
    año_publicacion: 1939,
    stock: 6
  },
  {
    id: "20",
    nombre: "El guardián entre el centeno",
    author: "J. D. Salinger.",
    precio: 300,
    foto: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7IwVsVdjx6tH8vjHqgc3hta4RP3J9HmN4cCczSK9sCJYdtiZS",
    genero: "novela",
    año_publicacion: 1951,
    stock: 3
  }
]

export const getLibros = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(misLibros)
        }, 100)
    })
}

export const getUnLibro = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const libro = misLibros.find(item => item.id === id)
            resolve(libro)
        }, 100)
    })
}

export const getLibrosCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const librosCategoria = misLibros.filter(item => item.genero === idCategoria)
            resolve(librosCategoria)
        }, 100)
    })
}
