import React, { useContext } from "react";
import { ShopContext } from '../Contexts/ShopContext'
import { useParams } from "react-router-dom";
import Breadcrum from '../Components/Breadcrums/Breadcrums'

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div>
            <Breadcrum product={product}/>
        </div>
    )
}

export default Product