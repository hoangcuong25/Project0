import React, { useContext } from "react";
import { ShopContext } from '../Contexts/ShopContext'
import { useParams } from "react-router-dom";
import Breadcrum from '../Components/Breadcrums/Breadcrums'
import ProducDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div>
            <Breadcrum product={product}/>
            <ProducDisplay product={product}/>
            <DescriptionBox/>
        </div>
    )
}

export default Product