import applei13 from './applei13.jpg';
import applew2 from './applew2.jpg';
import ears_pods from './ears_pods.jpg';
import glasses from './glasses.jpg';
import logos from './logos.jpg';
import macbook from './macbook.jpg';
import speaker from './speaker.jpg';
import tv from './tv_set.webp';
import monitor from './monitor.jpg';
import * as actionTypes from './actions'

const initialState = {
    products:[
        {
          id: 1,
          title: "macbook",
          description:
            `This smartphone is not just a sight to behold but also comes equipped with innovative features
             that will keep you productive and entertained. Its Helio G85 Gaming Processor ensures that you stay
              on top of the leaderboard while gaming. Its 16.5 cm (6.5) Mini-drop Fullscreen ensures an immersive
               experience while gaming, streaming content, and more. `,
          price: 167000,
          image:macbook,
        },
        {
          id: 2,
          title: "Bluetooth",
          description:
              `With the Bluetooth speaker, you can enjoy motivational, dance, or instrumental music whenever you want. 
            It ensures an immersive listening experience with its 52 mm full-range driver so that you can stay entertained
             wherever you are. With an IPX7 rating, it ensures water resistance so that you can listen to music by
              the poolside without a worry in the world.`,
          price: 4999,
          image:speaker,
        },
        {
          id: 3,
          title: "Watch 2",
          description:
            `The land of Meluha is an empire created by Lord Rama, and it is ruled by the Suryavanshis. This empire 
            is powerful and proud, however, the Saraswati river that is their source of water is slowing drying up. 
            On top of that, the empire is at war with the Chandravanshis who have allied with The Nagas, a group of 
            sinister and deformed human beings who have extraordinary martial art skills.`,
          price: 49000,
          image:applew2
        },
        {
          id: 4,
          title: "I Phone 13 pro",
          description:
            `The land of Meluha is an empire created by Lord Rama, and it is ruled by the Suryavanshis. This empire 
            is powerful and proud, however, the Saraswati river that is their source of water is slowing drying up. 
            On top of that, the empire is at war with the Chandravanshis who have allied with The Nagas, a group of 
            sinister and deformed human beings who have extraordinary martial art skills.`,
          price: 135000,
          image:applei13
        },
        {
          id: 5,
          title: "Pods",
          description:
            `The land of Meluha is an empire created by Lord Rama, and it is ruled by the Suryavanshis. This empire 
            is powerful and proud, however, the Saraswati river that is their source of water is slowing drying up. 
            On top of that, the empire is at war with the Chandravanshis who have allied with The Nagas, a group of 
            sinister and deformed human beings who have extraordinary martial art skills.`,
          price: 49000,
          image:ears_pods
        },
        {
          id: 6,
          title: "Aplle TV",
          description:
            `The land of Meluha is an empire created by Lord Rama, and it is ruled by the Suryavanshis. This empire 
            is powerful and proud, however, the Saraswati river that is their source of water is slowing drying up. 
            On top of that, the empire is at war with the Chandravanshis who have allied with The Nagas, a group of 
            sinister and deformed human beings who have extraordinary martial art skills.`,
          price: 89000,
          image:tv
        },
        {
          id: 7,
          title: "Glass",
          description:
            `The land of Meluha is an empire created by Lord Rama, and it is ruled by the Suryavanshis. This empire 
            is powerful and proud, however, the Saraswati river that is their source of water is slowing drying up. 
            On top of that, the empire is at war with the Chandravanshis who have allied with The Nagas, a group of 
            sinister and deformed human beings who have extraordinary martial art skills.`,
          price: 42000,
          image:glasses
        },
        {
          id: 8,
          title: "Logo",
          description:
            `The land of Meluha is an empire created by Lord Rama, and it is ruled by the Suryavanshis. This empire 
            is powerful and proud, however, the Saraswati river that is their source of water is slowing drying up. 
            On top of that, the empire is at war with the Chandravanshis who have allied with The Nagas, a group of 
            sinister and deformed human beings who have extraordinary martial art skills.`,
          price: 999,
          image:logos
        },
        {
          id: 9,
          title: "Monitor",
          description:
            `The land of Meluha is an empire created by Lord Rama, and it is ruled by the Suryavanshis. This empire 
            is powerful and proud, however, the Saraswati river that is their source of water is slowing drying up. 
            On top of that, the empire is at war with the Chandravanshis who have allied with The Nagas, a group of 
            sinister and deformed human beings who have extraordinary martial art skills.`,
          price: 69000,
          image:monitor
        },
      ],
    currentItem:null,
    cart:[]
}

const shopReducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART : 
            const item = state.products.find((product)=>product.id==action.payload.id)
            const inCart = state.cart.find((product)=>product.id==action.payload.id?true:false)
            return{
                ...state,
                cart : inCart ?
                        state.cart.map((product)=>product.id==action.payload.id?{...product,qty:product.qty+1}:product) : 
                        [...state.cart,{...item,qty:1}]
            }
        case actionTypes.LOAD_CURRENT_ITEM : 
            return {
                ...state,
                currentItem : action.payload.item
            }

        case actionTypes.UPDATE_QTY : 
            return{
                ...state,
                cart : state.cart.map((product)=>product.id==action.payload.id?{...product,qty:parseInt(action.payload.qty)}:product)
            }
        case actionTypes.REMOVE_FROM_CART : 
            return{
                ...state,
                cart : state.cart.filter((product)=>product.id!=action.payload.id)
            }
        default : return state
    }
}

export default shopReducer