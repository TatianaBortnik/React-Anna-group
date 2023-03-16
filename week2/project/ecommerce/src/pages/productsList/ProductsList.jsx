import Categories from './categories/Categories'
import Products from './products/Products'
import getCategories from '../../data/categories'
import getProducts from '../../data/products'
import { useState, useEffect } from 'react'
import ErrorMessage from '../../components/ErrorMessage'

function ProductsList() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ isError: false, message: '' })

    useEffect(() => {
        (async () => {
            const data = await getCategories();
            setCategories(data);
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const data = await getProducts(selectedCategory);
                setProducts(data);
            } catch (error) {
                setError({ isError: true, message: error.message })
            } finally {
                setIsLoading(false);
            }
        })()
    }, [selectedCategory])

    return (
        <>
            {error.isError && <ErrorMessage msg={error.message} />}
            <div>
                <h1>Products</h1>
                <Categories
                    categories={categories}
                    state={selectedCategory}
                    setState={setSelectedCategory}
                    setIsLoading={setIsLoading} />
                <Products products={products} isLoading={isLoading} />
            </div>
        </>
    )
}

export default ProductsList;