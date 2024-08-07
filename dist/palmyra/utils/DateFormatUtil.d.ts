interface IDateFormatOptions {
    serverPattern?: string;
    displayPattern?: string;
}
declare const DateFormat: (options: IDateFormatOptions) => (value: any) => string;
export default DateFormat;
