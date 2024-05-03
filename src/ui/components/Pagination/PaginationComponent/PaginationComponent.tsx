import './PaginationComponent.css'

interface PaginationProps {
    totalPage: number,
    pageNumber: number,
    setPage: (pageNumber: number) => void
}


export const PaginationComponent = ({totalPage, pageNumber, setPage}: PaginationProps) => {

    const pagePagination = new Set()

    pagePagination.add(1)
    pagePagination.add(totalPage)
    pagePagination.add(pageNumber)

    if(pageNumber > 1) pagePagination.add(pageNumber - 1)
    if(pageNumber < totalPage) pagePagination.add(pageNumber + 1)

    pagePagination.add(pageNumber)

    const paginationSort = [...pagePagination].sort((a, b) => Number(a) - Number(b))

    return (
        <div className='pagination'>
            <nav>
                <ul>
                    <li className={pageNumber === 1 ? "disabled" : ''}
                        onClick={() => setPage(Number(pageNumber - 1))}>{'<'}</li>
                    {paginationSort.map((item, index) => (
                        <li key={index} onClick={() => setPage(Number(item))}
                            className={item === pageNumber ? 'active' : ''}>{Number(item)}</li>
                    ))}
                    <li className={pageNumber === totalPage ? "disabled" : ''}
                        onClick={() => setPage(Number(pageNumber + 1))}>{'>'}</li>
                </ul>
            </nav>
        </div>
    )
}