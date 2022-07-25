import {lightFormat} from "date-fns"

export const format = (date:Date) => lightFormat(date, "yyyy-MM-dd")