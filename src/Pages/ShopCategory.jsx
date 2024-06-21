import './Css/ShopCategory.css'
import { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext';
// import Item from '../Components/Item/Item';
// import FeaturedProduct from '../Components/Featured Product/FeaturedProduct';
import FeaturedProduct from '../Components/ItemProduct/ItemProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router-dom';

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return (
        <>
        <section id="product1" className="section-p2">
            <h2 style={{fontWeight: 600}}>{props.banner}</h2>
                <div className="pro-container2">
                    {all_product.map((item, index)=>{
                        if(props.category===item.category){
                            return <FeaturedProduct key={index} id={item.id} image={item.image} brand={item.brand} name={item.name} price={item.price}/>
                        }
                    })}
                </div>
        </section>

        <section id="pagination" className="section-p1">
                <Link style={{marginRight:5}}>1</Link>
                <Link style={{marginRight:5}}>2</Link>
                <Link style={{marginRight:5}}><FontAwesomeIcon icon={faArrowRight}/></Link>
            </section>
            
        <Footer/>


        </>
    )
}
ShopCategory.propTypes = {
    category: PropTypes.node.isRequired,
    banner: PropTypes.node.isRequired,
}

export default ShopCategory