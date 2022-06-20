import { Link } from 'react-router-dom';
import { ItemContainer, ItemCard, ItemCardImage, ItemCardPrice, ItemCardStock, ItemCardStockValue, ItemCardTitle, ItemCardType } from '../utils/StyledComp.js';

const Item = (props) => {
    return(
    <>
        <ItemContainer>
            <ItemCard>
                <ItemCardImage>
                    <img src={props.picture} className="img-fluid" alt="producto" />
                </ItemCardImage>
                <ItemCardType>{props.type}</ItemCardType>
                <ItemCardTitle>{props.title}</ItemCardTitle>
                <ItemCardPrice>Precio: ${props.price}</ItemCardPrice>
                <ItemCardStock>
                    <Link to={`/item/${props.id}`} style={{ color: 'white', textDecoration:'none' }}>
                        <ItemCardStockValue>Mas Detalles</ItemCardStockValue>
                    </Link>
                </ItemCardStock>
            </ItemCard>
        </ItemContainer>
    </>
    )
}

export default Item