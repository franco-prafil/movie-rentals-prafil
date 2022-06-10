    const productos = 
        [
        {
            id: 1,
            title : 'Star Wars: The Force Awakens',
            category: 'Peliculas',
            description: 'Tres décadas después de la derrota del Imperio, surge una nueva amenaza en la Primera Orden militante. El soldado de asalto Finn y Rey están atrapados en la búsqueda de la Resistencia por el desaparecido Luke Skywalker.',
            image: 'star_wars_1.jpg',
            price: 800,
            stock: 5,

        },

        {
            id: 2,
            title : 'Star Wars: The Last Jedi',
            category: 'Peliculas',
            description: 'Rey desarrolla sus habilidades con la guía de Luke Skywalker, quien está desconcertado por la fuerza de sus poderes. Mientras tanto, la Resistencia se prepara para la batalla con la Primera Orden.',
            image: 'star_wars_2.jpg',
            price: 800,
            stock: 5,

        },

        {
            id: 3,
            title : 'Star Wars: The Rise Of Skywalker',
            category: 'Peliculas',
            description: 'La resistencia sobreviviente se enfrenta una vez más a la Primera Orden en el último capítulo de la saga de Skywalker.',
            image: 'star_wars_3.jpg',
            price: 800,
            stock: 5,

        },

        {
            id: 4,
            title : 'Top Gun: Maverick',
            category: 'Estrenos',
            description: '',
            image: 'top_gun.jpg',
            price: 800,
            stock: 5,

        },

        {
            id: 5,
            title : 'Thor: Love and Thunder',
            category: 'Estrenos',
            description: '',
            image: 'thor.jpg',
            price: 800,
            stock: 5,

        },

        {
            id: 6,
            title : 'Animales Fantastios: Los Secretos de Dumbledore',
            category: 'Estrenos',
            description: '',
            image: 'animales_fantasticos.jpg',
            price: 800,
            stock: 5,

        },

        {
            id: 7,
            title : 'Stranger Things',
            category: 'Series',
            description: '',
            image: 'stranger_things.jpg',
            price: 800,
            stock: 5,

        },

        {
            id: 8,
            title : 'Andor',
            category: 'Series',
            description: '',
            image: 'andor.jpg',
            price: 800,
            stock: 5,

        },

        {
            id: 9,
            title : 'Game of Thrones',
            category: 'Series',
            description: '',
            image: 'game_of_throne.jpg',
            price: 800,
            stock: 5,

        }
        ]

        
        const getProducts = () =>{
            return new Promise ((resolve, reject)=> {
                setTimeout(() => {
                    resolve(productos)
                }, 2000);
            })
        }

export default getProducts

export {productos}