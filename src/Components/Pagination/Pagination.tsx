import React from 'react';
import './Pagination.scss';
import classNames from 'classnames';
import { getNumbers } from '../../Helpers/getnumbers';

interface PaginationProps {
    onPageChange: (page: number) => void,
    pageSize: number,
    setPageSize: (numberOfPages: number) => void,
    totalCount: number,
    currentPage: number,
    totalPages: number,
    isLastPage: boolean,
};

export const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    onPageChange,
    currentPage,
    totalCount,
    pageSize,
    setPageSize,
    isLastPage,
}) => {
    const range = getNumbers(1, totalPages);

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const onNext = () => {
        onPageChange(currentPage + 1);
    }

    return (
        <div className="pagination">

            <select 
                className="pagination__selector"
                defaultValue={`Items per page`}
                onChange={(event) => setPageSize(Number(event?.target.value))}
            >
                <option value="Items per page" disabled>Items per page</option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value={totalCount}>all</option>
            </select>

            {pageSize !== totalCount && (
                <ul className="pagination__container" >

                <li
                    className={classNames('pagination__item', {
                    disabled: currentPage === 1
                    })}
                    onClick={onPrevious}
                >
                    <div className="arrow__left"><img src={require(`../../assets/arrow-left.png`)} alt="arrow left"></img></div>
                </li>

                {range.map(pageNumber => {
                    return (
                    <li
                        className={classNames('pagination__item', {
                        selected: pageNumber === currentPage
                        })}
                            onClick={() => onPageChange(pageNumber)}
                            key={pageNumber}
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
                    <div className="arrow__right"><img src={require(`../../assets/arrow-right.png`)} alt="arrow right"></img></div>
                </li>
            </ul>
            )}
        </div>
    )
};