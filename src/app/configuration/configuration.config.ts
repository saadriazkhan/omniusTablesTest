import { TablesConfig } from './configuration';

export const config: TablesConfig = {
    TableConfig: {
        theme: 'primary',
        pageSizes: [5, 10, 15, 20],
        editTableButtonClass: 'px-2',
        editTableButtonContainerClass: '',
        hideColumnButtonClass: 'px-1 py-1 has-font-4',
        showColumnButtonClass: 'px-1 py-1 has-font-4',
        tableContainerClass: 'is-10',
        tableHeadContainerClass: 'p-2',
        tableHeaderItemClass: 'p-2 text-center has-height-10',
        tableRowCheckboxClass :'button',
        tableBodyContainerClass: '',
        tableRowClass: 'p-2',
        tableRowDataClass: 'p-2 text-center',
        tableRowEditInputClass: 'p-0'
    },
    SortingConfig: {
        enabled: true,
        sortingContainerClass: '',
        sortingButtonClass: 'px-2 white-button py-1',
        sortingUpClass: 'fa fa-caret-up',
        sortingDownClass: 'fa fa-caret-down',
    },
    FilterConfig: {
        enabled: true,
        rangeEnabled: true,
        equalsEnabled: true,
        filterButtonClass: 'ml-2 px-2 py-1 white-button',
        dropdownContainerClass: 'p-4 has-border-radius-2',
        formContainerClass: 'p-2',
        formFilterClass: 'is-4',
        formFilterButton: 'mt-4',
        formClearButton: ''
    },
    SearchConfig: {
        searchEnabled: true,
        searchContainerClass: '',
        formContainerClass: '',
        inputClass: '',
        buttonClass: '',
        clearButtonClass: ''
    },
    PaginationConfig: {
        pageSizesEnabled: true,
        paginationEnabled: true,
        buttonClass: 'secondary-button mx-2 py-2 px-5',
        pageSizeClass: 'primary-button mr-10',
        pagesText: 'has-font-6 px-3 mt-2'
    }
}