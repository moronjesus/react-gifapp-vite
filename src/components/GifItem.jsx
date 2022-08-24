

export const GifItem = ( {title, url}) => {
    return (
        <div className="card">
            <img src={ url } alt={ title} className='img__detail' />
            <div>{ title }</div>
        </div>
    )
}
