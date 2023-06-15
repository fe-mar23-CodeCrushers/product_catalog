import './Pagination.scss';
import classNames from 'classnames';

interface PaginationProps {
    totalCount: number;
    currentPage: number;
    pageElements: number[];
    isLastPage: boolean;
    firstElement: number;
    lastElement: number;
    handlePageSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleSelectedPageChange: (selectedPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    totalCount, pageElements, currentPage, isLastPage, firstElement, lastElement, handlePageSizeChange, handleSelectedPageChange
}) => {
    const onNext = () => {
        handleSelectedPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        handleSelectedPageChange(currentPage - 1);
    };

    return (
        <div className="pagination">

            <select 
                className="pagination__selector"
                defaultValue={`Items per page`}
                onChange={handlePageSizeChange}
            >
                <option value="4">Items per page</option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="all">all</option>
            </select>

            <ul className="pagination__container" >

                <li
                    className={classNames('pagination__item', {
                    disabled: currentPage === 1
                    })}
                    onClick={onPrevious}
                >
                    <div className="arrow__left" />
                </li>

                {pageElements.map(pageNumber => {
                    return (
                    <li
                        className={classNames('pagination__item', {
                        selected: pageNumber === currentPage
                        })}
                        onClick={() => handleSelectedPageChange(pageNumber)}
                    >
                    {pageNumber}
                    </li>
                    );
                })}

                <li
                    className={classNames('pagination__item', {
                    disabled: isLastPage
                    })}
                    onClick={onNext}
                >
                    <div className="arrow__right" />
                </li>
            </ul>
        </div>
    )
};