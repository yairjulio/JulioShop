import styled from "styled-components";

//ItemList.js

const ProdContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

//ItemDetail.js

const DetailContainer = styled.div`
`;

const CheckoutButton = styled.button`
    width: 40%;
    position: absolute;
    top: 85%;
`;

const WrapperDetail = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 600px;
`;

const ProductCardDetail = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%; 
    background: white;
    margin: auto;
    border-radius: 19px;
    text-align: center;
    box-shadow: -1px 15px 30px -12px black;
    z-index: 1;
`;

const CardDetailImage = styled.div`
    position: relative;
    height: 500px;
    width: 50%;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`;

const CardDetailImageType = styled.img`
    height: 100%;
`;

const ProductCardInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 40px;
    position: relative;
`;

const ProductCardType = styled.div`
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 3px;
    color: #EC9B3B;
    width: 100%;
    position: absolute;
    top: 5%;
`;

const ProductCardCategory = styled.div`
    font-size: 20px;
    color: black;
    font-weight: 900;
    margin-bottom: 5px;
    width: 100%;
    position: absolute;
    top: 15%;
`;

const ProductCardTitle = styled.div`
    font-size: 40px;
    color: black;
    font-weight: 900;
    margin-bottom: 5px;
    width: 100%;
    position: absolute;
    top: 25%;
`;

const ProductCardDescription = styled.div`
    font-size: 20px;
    color: black;
    font-weight: 100;
    margin-bottom: 5px;
    width: 100%;
    position: absolute;
    top: 40%;
`;

const ProductCardPrice = styled.div`
    color: white;
    background: #EC9B3B;
    height: 30px;
    font-weight: 400;
    font-size: 20px;
    border-radius: 14px;
    width: 60%;
    position: absolute;
    top: 55%;
`;

const ProductCardStock = styled.div`
    font-weight: 500;
    font-size: 15px;
    width: 60%;
    position: absolute;
    top: 65%;
`;

const ProductCardValue = styled.div`
`;

//ItemCount.js

const NumberContainer = styled.div`
    margin:10px;
    align-items: center;
`;

const MinusButton = styled.button`
    width:40px;
    height:40px;
    background:#f2f2f2;
    border-radius:4px;
    padding:5px 5px 5px 5px;
    border:1px solid #ddd;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    position: absolute;
    top: 75%;
    left: 30%;
`;

const PlusButton = styled.button`
    width:40px;
    height:40px;
    background:#f2f2f2;
    border-radius:4px;
    padding:5px 5px 5px 5px;
    border:1px solid #ddd;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    position: absolute;
    top: 75%;
    right: 30%;
`;

const Input = styled.span`
    height:40px;
    width: 24%;
    text-align: center;
    font-size: 26px;
    border:1px solid #ddd;
    border-radius:4px;
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    top: 75%;
    left: 38%;
`;

const AddToCartButton = styled.button`
    width: 40%;
    position: absolute;
    top: 85%;
`;

//Item.js

const ItemContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`;

const ItemCard = styled.div`
    background: white;
    width: 300px;
    display: inline-block;
    margin: auto;
    border-radius: 19px;
    position: relative;
    text-align: center;
    box-shadow: -1px 15px 30px -12px black;
    z-index: 1;
`;

const ItemCardImage = styled.div`
    position: relative;
    height: 250px;
    margin-bottom: 55px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`;

const ItemCardType = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 3px;
    color: #EC9B3B;
`;

const ItemCardTitle = styled.div`
    font-size: 26px;
    color: black;
    font-weight: 900;
    margin-bottom: 5px;
`;

const ItemCardPrice = styled.div`
    padding: 20px;
    margin-bottom: 10px;  
`;

const ItemCardStock = styled.div`
    color: white;
    background: #EC9B3B;
    height: 40px;
    font-weight: 700;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
`;

const ItemCardStockValue = styled.div`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
`;

//CartRender.js

const CartProduct = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: white;
    width: 90%;
    left: 5%;
    border-radius: 19px;
    margin-bottom: 15px;
    position: relative;
    text-align: center;
    box-shadow: -1px 15px 30px -12px black;
    z-index: 1;
`;

const CartProductImage = styled.div`
    position: absolute;
    height: 100px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    left: 5%;
`;

const CartProductImageType = styled.img`
    height: 100%;
`;

const CartProductTitle = styled.div`
    font-size: 20px;
    color: black;
    font-weight: 700;
    margin-bottom: 5px;
    position: absolute;
    left: 20%;
`;

const CartProductQuantity = styled.div`
    font-size: 15px;
    color: black;
    font-weight: 400;
    margin-bottom: 5px;
    position: absolute;
    left: 45%;
    top: 30%;
`;

const CartProductPrice = styled.div`
    font-size: 15px;
    color: black;
    font-weight: 400;
    margin-bottom: 5px;
    position: absolute;
    left: 55%;
    top: 30%;
`;

const CartProductTotal = styled.div`
    font-size: 15px;
    color: black;
    font-weight: 400;
    margin-bottom: 5px;
    position: absolute;
    left: 50%;
    top: 60%;
`;

const DeleteCart = styled.button`
    position: absolute;
    left: 80%;
`;

//Cart.js

const CartContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

const CartRenderContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 150px;
    width: 70%;
`;

const CartInfoContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    flex:1;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 400px;
    width: 30%;
`;

const CartInfo = styled.div`
    background: white;
    width: 90%;
    display: flex;
    border-radius: 19px;
    position: relative;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100%;
    box-shadow: -1px 15px 30px -12px black;
    z-index: 1;
`;

const CartInfoTitle = styled.div`
    font-size: 25px;
    color: black;
    font-weight: 900;
    margin-bottom: 5px;
    width: 100%;
    position: absolute;
    top: 10%;
`;

const CartInfoSubtotal = styled.div`
    font-size: 15px;
    color: black;
    font-weight: 450;
    margin-bottom: 5px;
    width: 100%;
    position: absolute;
    top: 30%;
`;

const CartInfoTaxes = styled.div`
    font-size: 15px;
    color: black;
    font-weight: 450;
    margin-bottom: 5px;
    width: 100%;
    position: absolute;
    top: 45%;
`;

const CartInfoTotal = styled.div`
    font-size: 15px;
    color: black;
    font-weight: 450;
    margin-bottom: 5px;
    width: 100%;
    position: absolute;
    top: 60%;
`;

const CartCheckoutButton = styled.button`
    position: absolute;
    top: 85%;
`;

const DeleteAllItemsButton = styled.button`
    position: absolute;
    left: 79%;
`;

const Wrapper = styled.div`
`;

const ContinueButton = styled.button`
`;

const Title = styled.h1`
    font: 45px "Lato", Arial, sans-serif;
    font-weight: 700;
`;

//CartWidget.js

const CartImage = styled.img`
    height: 50px;
    width: 50px;
`;

const CartSpan = styled.span`
    cursor: pointer; 
`;

export  { 
    ProdContainer, CheckoutButton, WrapperDetail, DetailContainer, ProductCardDetail, CardDetailImage, CardDetailImageType,
    ProductCardInfo, ProductCardType, ProductCardCategory, ProductCardTitle, ProductCardDescription, ProductCardPrice, ProductCardStock, ProductCardValue,
    NumberContainer, MinusButton, PlusButton, Input, AddToCartButton,
    ItemContainer, ItemCard, ItemCardImage, ItemCardPrice, ItemCardStock, ItemCardStockValue, ItemCardTitle, ItemCardType,
    CartProduct, CartProductImage, CartProductImageType, CartProductPrice, CartProductQuantity, CartProductTitle, CartProductTotal, DeleteCart,
    CartContainer, CartRenderContainer, CartInfoContainer, CartInfo, CartInfoSubtotal, CartInfoTitle, CartInfoTaxes, CartInfoTotal, CartCheckoutButton, DeleteAllItemsButton,
    Wrapper, ContinueButton, Title, CartImage, CartSpan
}