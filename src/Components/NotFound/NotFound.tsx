import './NotFound.scss';

export const NotFound = () => {
    return (
        <div className="container">
            <div className="container__header"></div>
            <div className="container__middle middle">
                <h1 className="middle__title">Oops!</h1>
                <h2 className="middle__error">Error 404</h2>
                <img alt='error' className="middle__image" src='https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/notfound/public/img/computer.png'></img>
            </div>
            <div className="container__footer footer">
                <h2 className="footer__title"><b>Error:</b> Page you requested not found!</h2>
                <h3 className="footer__text">Please try again later.</h3>
            </div>
        </div>
    )
}