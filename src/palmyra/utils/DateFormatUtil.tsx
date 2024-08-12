import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

interface IDateFormatOptions {
    serverPattern?: string
    displayPattern?: string
}

const DateFormat = (options: IDateFormatOptions) => {
    const serverPattern = options.serverPattern
    const displayPattern = options.displayPattern || "YYYY-MM-DD"

    const parse = (value, serverPattern): Date => {
        const date = dayjs(value, serverPattern)
        return date.toDate();
    }

    const format = (date, displayPattern) => {
        return dayjs(date).format(displayPattern)
    }

    return (value) => {
        const date = parse(value, serverPattern);
        const result = format(date, displayPattern);
        return result;
    }
}

export default DateFormat;