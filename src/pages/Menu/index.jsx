import React from "react";
import { useDispatch } from "react-redux";
import { ProductPreviewCard } from "../../components/productPreviewCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { addToCart } from "../../stores/cart/cartslice";
import products from "../../restaurent.products"
const Menu = () => {
    //const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



    // useEffect(() => {
    //     fetch('https://res-back.onrender.com/api/products')
    //         .then(response => response.json())
    //         .then(data => setProducts(data?.data))
    //         .catch(e => console.log(e))
    // }, [])

    const onAddProduct = (product) => {
      dispatch(addToCart(product))
    }

    return(
        <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
            
            <Carousel responsive={responsive}>
            {
                products.length > 0 && products.map((product, index) => {
                    return (
                        <ProductPreviewCard key={index} product={product} onAddProduct={onAddProduct}  />
                    )
                })
            }
            </Carousel>
        </div>
    )
}

export default Menu

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, selectAllProducts } from "../../stores/menu/producSlice";
// import ProductDetailCard from "../../components/ProductDetailcard";
// import { Tabs } from "../../components/tabs";
// import { addToCart } from "../../stores/cart/cartslice";

// const Menu = () => {
//     const dispatch = useDispatch();
//     const products = useSelector(selectAllProducts);
//     const [activeTab, setActiveTab] = useState('');
//     const [activeTabIndex, setActiveTabIndex] = useState(0);

//     useEffect(() => {
//         dispatch(fetchProducts())
//     }, [])

//     const onAddProduct = (product) => {
//         dispatch(addToCart(product))
//     }

//     const onTabSwitch = (newActiveTab) => {
//         setActiveTab(newActiveTab);
//         let categories = products.products.map((product) => product.name.name);
//         let index = categories.findIndex(category => newActiveTab === category);
//         console.log(index);
//         if (index > -1) {
//             setActiveTabIndex(index);
//         } else {
//             setActiveTabIndex(0);
//         }
//     }

//     return (
//         <div className="bg-white">
//            {
//             products.status !== 'fulfilled' ?
//             <div>loading...</div> :
//             <div className="menu-wrapper">
//                 {
//                     products.products &&
//                     <Tabs
//                         list={products.products.map((product) => product.name.name)}
//                         activeTab={activeTab}
//                         onTabSwitch={onTabSwitch}
//                         />
//                 }
//                 <div className="flex flex-row mx-3">
//                 {
//                     products.products && products.products[activeTabIndex].products.map((product, index) => {
//                         return (
//                            <ProductDetailCard key={index} product={product} onAddProduct={onAddProduct}/>
//                         )
//                     })
//                 }
//                 </div>
//             </div>
//            }
//         </div>
//     )
// }

// export default Menu;