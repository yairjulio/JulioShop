import { useState, useContext } from 'react';
import ItemCount from './ItemCount.js';
import ShowCart from './ShowCart.js';
import { CartContext } from './CartContext.js';
import { DetailContainer, WrapperDetail, ProductCardDetail, CardDetailImage, CardDetailImageType, ProductCardInfo, 
    ProductCardType, ProductCardCategory, ProductCardTitle, ProductCardDescription, ProductCardPrice, 
    ProductCardStock, ProductCardValue} from '../utils/StyledComp.js';


const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (cantidad) => {
        alert("Items agregados");
        setItemCount(cantidad);
        test.addToCart(item, cantidad);
    }

    return(
        <>
            {
                item.picture
                ?
                <DetailContainer>
                    <WrapperDetail>
                        <ProductCardDetail>
                            <CardDetailImage>
                                <CardDetailImageType src={item.picture} alt="producto" />
                            </CardDetailImage>
                            <ProductCardInfo>
                                <ProductCardType>{item.type}</ProductCardType>
                                <ProductCardCategory>{item.category}</ProductCardCategory>
                                <ProductCardTitle>{item.title}</ProductCardTitle>
                                <ProductCardDescription>{item.description}</ProductCardDescription>
                                <ProductCardPrice>Precio: ${item.price}</ProductCardPrice>
                                <ProductCardStock>
                                    <ProductCardValue>Stock: {item.stock}</ProductCardValue>
                                </ProductCardStock>
                                {
                                    itemCount === 0
                                    ? <ItemCount stock={item.stock} onAdd={onAdd} initial={itemCount}/>
                                    : <ShowCart/>
                                }
                            </ProductCardInfo>
                        </ProductCardDetail>
                    </WrapperDetail>
                </DetailContainer>
                : <p>Cargando....</p>
            }
        </>
    )
}

export default ItemDetail