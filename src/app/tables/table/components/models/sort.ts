export interface Sort {
    field: string, 
    method: string
}

export enum SortOrder {
    "NONE",
    "ASC",
    "DESC"
}