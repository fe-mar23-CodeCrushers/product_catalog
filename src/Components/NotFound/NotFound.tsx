import './NotFound.scss';

export const NotFound = () => {
    return (
        <div className="container">
            <div className="container__header"></div>
            <div className="container__middle middle">
                <h1 className="middle__title">Oops!</h1>
                <h2 className="middle__error">Error 404</h2>
                <image className="middle__image" href=""></image>
            </div>
            <div className="container__footer footer">
                <h2 className="footer__tiltle"><b>Error:</b> Page you requested not found!</h2>
                <h3 className="footer__text">Please try again later.</h3>
            </div>
        </div>
    )
}