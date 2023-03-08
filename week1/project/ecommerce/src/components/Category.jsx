function Category  ({data, className, onClick})  {
    return (
        <div className={className} onClick={() => onClick(data)}>{data}</div>
    )
}

export default Category;