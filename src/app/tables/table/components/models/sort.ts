export interface Sort {
    fieldName: string, 
    sortOrder: string
}

export enum SortOrder {
    "NONE",
    "ASC",
    "DESC"
}