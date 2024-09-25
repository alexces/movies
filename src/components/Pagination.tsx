import React from "react";
type PaginationProps = {
    currentPage: number
    totalPages: number
    onPageChange: (selectedPage: number) => void
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
        <>
            {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                    <React.Fragment key={index}>
                        {currentPage === page ? <span key={index}>{page}</span> :
                            <button key={index} onClick={() => {
                                onPageChange(page)
                            }}>{page}</button>
                        }
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default Pagination