import Homescreen from "../../components/element/Homescreen"
import { About } from "../../components/element/about"
import { ProductsPreview } from "../../components/productPreview"


const Home =()=>{
    return(
        <>
        <Homescreen/>
        <ProductsPreview/>
        <About/>
        </>
    )
}

export default Home