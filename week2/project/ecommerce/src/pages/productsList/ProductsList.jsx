import Categories from './categories/Categories'
import Products from './products/Products'
import getCategories from '../../handlers/categories'
import getProducts from '../../handlers/products'
import { useState, useEffect } from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'

function ProductsList() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState([]);
    const [loadingObjectName, setLoadingObjectName] = useState('');
    const [error, setError] = useState({ isError: false, message: '' })

    useEffect(() => {
        (async () => {
            try {
                setLoadingObjectName('Categories');
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                setError({ isError: true, message: error.message })
            } finally {
                setLoadingObjectName('');
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                setLoadingObjectName('Products');
                const data = await getProducts(selectedCategory);
                setProducts(data);
            } catch (error) {
                setError({ isError: true, message: error.message })
            } finally {
                setLoadingObjectName('');
            }
        })()
    }, [selectedCategory])

    return (
        <>
            {error.isError && <ErrorMessage msg={error.message} />}
            <div>
                <h1>Products</h1>
                {loadingObjectName === 'Categories' && <Loading />}
                {loadingObjectName !== 'Categories' && (
                    <Categories
                        categories={categories}
                        state={selectedCategory}
                        setState={setSelectedCategory}
                    />
                )}
                {loadingObjectName === 'Products' && <Loading />}
                {!loadingObjectName && <Products products={products} />}
            </div>
        </>
    )
}

export default ProductsList;