function Category  ({categoryName, className, onClick})  {
    return (
        <div className={`category-item ${className}`} onClick={() => onClick(categoryName)}>{categoryName}</div>
    )
}

export default Category;