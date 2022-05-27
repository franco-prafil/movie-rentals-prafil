    const productos = 
        [
        {
            id: 1,
            title : 'Star Wars: The Force Awakens',
            category: 'Película',
            description: '',
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