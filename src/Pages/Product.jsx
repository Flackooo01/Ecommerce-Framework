import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
// import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DesciptionBox/DescriptionBox";
import Footer from "../Components/Footer/Footer";
import SimilarProduct from "../Components/SimilarProduct/SimilarProduct";



const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {ProductId} = useParams();
    const product = all_product.find((e)=> e.id === Number(ProductId))
    return (
    <>
    {/* <BreadCrum product={product}/> */}
    <ProductDisplay product={product}/>
    <DescriptionBox/>
    <SimilarProduct product={product}/>
    <Footer/>
    </>
    )
}

Product.propTypes = {
    category: PropTypes.node.isRequired,
}

export default Product