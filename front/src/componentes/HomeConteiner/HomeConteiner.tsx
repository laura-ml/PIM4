import Cards from "../Cards"
import { getProductsDB } from "@/helpers/product.peticion"

const HomeConteiner = async () => {
    const products = await getProductsDB()
    return (
<div>

    <Cards products={products}/>
</div>
    )
}

export default HomeConteiner