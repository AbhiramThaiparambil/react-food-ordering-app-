import { useParams } from "react-router";
import Shimmer from "./shimmerUi";
import useMenu from "../utils/useMenu";


const MenuItem=()=>{
    const param=useParams()

    const resInfo =useMenu(param.id)

{if(resInfo.length===0 )
   return <Shimmer></Shimmer>
}

    const {name,locality,city} = resInfo.cards[2]?.card?.card?.info

     

    return(
        <div className="menu-container"> 
          <div className="menu-header">

          <h1>{name}</h1>
           

            <h3 className="location-manu" >{locality} {"  ,  " }{city},</h3>
              
          </div>
  <hr />
          <div className="menu-body">

          <ul> 
                <h1 > to day special's </h1>
              {resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel.map((item)=>{
                          return <li className="dish-list" key={item.dish?.info?.id} >{item.dish?.info?.name}</li>
                    })}
            </ul>
          </div>
        </div>
    )
}
export default MenuItem;