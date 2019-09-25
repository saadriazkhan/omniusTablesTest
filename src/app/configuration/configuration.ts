interface TableConfig {
    theme?: string
    pageSizes: number[],
    defaultPageSize: number,
    editTableButtonClass?: string
    editTableButtonContainerClass?: string
    hideColumnButtonClass?: string
    showColumnButtonClass?: string
    hideColumnButtonIconClass?: string
    showColumnButtonIconClass?: string
    tableContainerClass?: string
    tableHeadContainerClass?: string
    tableHeaderItemClass?: string
    tableHeaderTextClass?: string
    tableBodyContainerClass?: string
    tableRowClass?: string
    tableRowCheckboxClass?: string
    tableRowDataClass?: string
    tableRowEditInputClass?: string
}
interface SortingConfig {
    enabled: boolean,
    sortingContainerClass?: string
    sortingButtonClass?: string
    sortingUpClass?: string
    sortingDownClass?: string
}
interface FilterConfig {
    enabled: boolean,
    rangeEnabled: boolean,
    equalsEnabled: boolean,
    filterButtonClass?: string,
    dropdownContainerClass?: string
    formContainerClass?: string
    formFilterKeyClass?: string
    formFilterButton?: string
    formClearButton?: string
    formInputClass?: string
}
interface SearchConfig {
    searchEnabled: boolean,
    searchContainerClass?: string,
    formContainerClass?: string,
    inputClass?: string,
    buttonClass?: string,
    clearButtonClass?: string
}
interface PaginationConfig {
    pageSizesEnabled: boolean,
    paginationEnabled: boolean,
    buttonClass?: string
    pageSizeClass?: string
    pagesText?: string
}

export interface TablesConfig {
    TableConfig: TableConfig
    SortingConfig: SortingConfig
    FilterConfig: FilterConfig
    SearchConfig: SearchConfig
    PaginationConfig: PaginationConfig
}

