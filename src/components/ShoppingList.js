import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem";
import Categories from "./Categories";

function ShoppingList({cart, updateCart}) {
    /*
    * extraire la liste des categories
    * avec les plantes
    */
    /*const categories = plantList.reduce((acc,obj)=>{
       let cle = obj['category']
        if(!acc[cle]){
            acc[cle] = []
        }
        acc[cle].push(obj)
        return acc
    },[])*/

    /*
     * extraire la liste des catégories
     */
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart(name,price){
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if(currentPlantSaved){
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name  !== name
            )
            updateCart([...cartFilteredCurrentPlant,{name,price,amount: currentPlantSaved.amount + 1}])
        }else{
            updateCart([...cart,{name,price,amount:1}])
        }
    }
    return (
        <div className='lmj-shopping-list'>
            <Categories categories={categories}/>
            <ul className='lmj-plant-list'>
                {
                    plantList.map(({id, cover, name, water, light,price}) => (
                            <div key={id}>
                                <PlantItem
                                    cover={cover}
                                    name={name}
                                    water={water}
                                    light={light}
                                />
                                <button onClick={() => addToCart(name,price)}>Ajouter</button>
                            </div>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default ShoppingList