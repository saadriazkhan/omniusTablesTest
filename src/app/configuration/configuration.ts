interface TableConfig {
    theme?: string
    pageSizes: number[]
    editTableButtonClass?: string
    editTableButtonContainerClass?: string
    hideColumnButtonClass?: string
    showColumnButtonClass?: string
    tableContainerClass?: string
    tableHeadContainerClass?: string
    tableHeaderItemClass?: string
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
    formFilterClass?: string
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

