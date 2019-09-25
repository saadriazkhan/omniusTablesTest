let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatTimeObject(date: Date): string {
    let hours = date.getHours();
    let minutes: number | string = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
}

function formatDateObject(date: Date): string {
    return date.getDate() + " " + monthNames[date.getMonth()] + ", " + date.getFullYear();
}

export const formattingMap = {
    "number": (value: number): number => {
        return value;
    },
    "string": (value: string): string => {
        return value;
    },
    "boolean": (value: boolean): boolean => {
        return value;
    },
    "date": (value: string): string => {
        const date = new Date(value);
        return formatDateObject(date);
    },
    "datetime": (value: string): string => {
        const date = new Date(value);
        return formatDateObject(date) + " " + formatTimeObject(date);
    },
    "time": (value: string): string => {
        const date = new Date(value);
        return formatTimeObject(date);
    },
    "currency": (value: string, currency: string): string => {
        return currency + " " + parseFloat(value).toFixed(2);
    },
};

export const dataColumnsTypes = {
    "id": "number",
    "name": "string",
    "hasMobile": "boolean",
    "amount": "currency",
    "location": "string",
    "date": "date",
    "time": "time",
    "dateTime": "datetime",
    "carName": "string"
}

export const primaryKey = "id";