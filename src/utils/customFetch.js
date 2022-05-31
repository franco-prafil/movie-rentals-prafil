    const productos = 
        [
        {
            id: 1,
            title : 'Star Wars: The Force Awakens',
            category: 'Película',
            description: 'Tres décadas después de la derrota del Imperio, surge una nueva amenaza en la Primera Orden militante. El soldado de asalto Finn y Rey están atrapados en la búsqueda de la Resistencia por el desaparecido Luke Skywalker.',
            image: 'star_wars_1.jpg',
            stock: '5',
        },

        {
            id: 2,
            title : 'Star Wars: The Last Jedi',
            category: 'Película',
            description: '',
            image: 'star_wars_2.jpg',
            stock: '5',
        },

        {
            id: 3,
            title : 'Star Wars: The Rise Of Skywalker',
            category: 'Película',
            description: '',
            image: 'star_wars_3.jpg',
            stock: '5',
        },

        {
            id: 4,
            title : 'Estreno 1',
            category: 'Estreno',
            description: '',
            image: 'top_gun.jpg',
            stock: '5',
        },

        {
            id: 5,
            title : 'Estreno 2',
            category: 'Estreno',
            description: '',
            image: 'thor.jpg',
            stock: '5',
        },

        {
            id: 6,
            title : 'Estreno 3',
            category: 'Estreno',
            description: '',
            image: 'animales_fantasticos.jpg',
            stock: '5',
        },

        {
            id: 7,
            title : 'Serie 1',
            category: 'Series',
            description: '',
            image: 'stranger_things.jpg',
            stock: '5',
        },

        {
            id: 8,
            title : 'Serie 2',
            category: 'Series',
            description: '',
            image: 'andor.jpg',
            stock: '5',
        },

        {
            id: 9,
            title : 'Serie 3',
            category: 'Series',
            description: '',
            image: 'game_of_throne.jpg',
            stock: '5',
        }
        ]

        const producto = {
            id: 1,
            title : 'Star Wars: The Force Awakens',
            category: 'Película',
            description: 'Tres décadas después de la derrota del Imperio, surge una nueva amenaza en la Primera Orden militante. El soldado de asalto Finn y Rey están atrapados en la búsqueda de la Resistencia por el desaparecido Luke Skywalker.',
            image: 'star_wars_1.jpg',
            stock: '5',
        }
        
        const getProducts = () =>{
            return new Promise ((resolve, reject)=> {
                setTimeout(() => {
                    resolve(productos)
                }, 2000);
            })
        }

export default getProducts

export {producto}