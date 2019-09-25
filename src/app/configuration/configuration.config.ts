import { TablesConfig } from './configuration';

export const config: TablesConfig = {
    TableConfig: {
        theme: 'primary',
        pageSizes: [5, 10, 15, 20],
        defaultPageSize: 25,
        editTableButtonClass: 'px-2',
        editTableButtonContainerClass: '',
        hideColumnButtonClass: 'px-1 py-1 has-font-4 transparent-button',
        showColumnButtonClass: 'px-1 py-1 has-font-4 transparent-button',
        hideColumnButtonIconClass: 'fa fa-remove',
        showColumnButtonIconClass: 'fa fa-plus',

        // width of tableHeaderItemClass and tableRowDataClass should be same for alignment
        tableHeaderItemClass: 'p-2 text-center',
        tableRowDataClass: 'p-2 text-center',

        tableContainerClass: 'has-font-6 margin-auto',
        tableHeadContainerClass: 'p-2',
        tableHeaderTextClass: 'text-center',
        tableRowCheckboxClass: 'button',
        tableBodyContainerClass: '',
        tableRowClass: 'p-2',
        tableRowEditInputClass: 'p-0',
    },
    SortingConfig: {
        enabled: true,
        sortingContainerClass: '',
        sortingButtonClass: 'px-0 transparent-button py-0 pulled-left has-width-2',
        sortingUpClass: 'fa fa-caret-up',
        sortingDownClass: 'fa fa-caret-down',
    },
    FilterConfig: {
        enabled: true,
        rangeEnabled: true,
        equalsEnabled: true,
        filterButtonClass: 'ml-1 px-1 py-0 transparent-button has-border-radius-3 pulled-right',
        dropdownContainerClass: 'p-4 has-border-radius-2',
        formContainerClass: 'p-2 px-4',
        formFilterKeyClass: 'is-4 text-right pr-3',
        formFilterButton: 'mt-4',
        formClearButton: ''
    },
    SearchConfig: {
        searchEnabled: true,
        searchContainerClass: '',
        formContainerClass: '',
        inputClass: '',
        buttonClass: 'primary-button p-2 mx-4 px-6',
        clearButtonClass: 'primary-button p-2'
    },
    PaginationConfig: {
        pageSizesEnabled: true,
        paginationEnabled: true,
        buttonClass: 'secondary-button mx-2 py-2 px-5',
        pageSizeClass: 'primary-button mr-10',
        pagesText: 'has-font-6 px-3 mt-2'
    }
}