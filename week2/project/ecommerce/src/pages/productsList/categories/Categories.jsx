import './Categories.css';
import Category from './Category'

function Categories({ categories, state, setState }) {

    function changeFilter(newCategory) {
        setState(prevState => prevState === newCategory ? '' : newCategory);
    }

    return (
        <div className="categories">
            {categories.map((item, index) => {
                const className = ((item === state) ? 'category-selected' : '')
                return (
                    <Category
                        key={index}
                        className={className}
                        categoryName={item}
                        onClick={changeFilter}
                    />
                )
            })}
        </div>
    )
}

export default Categories;