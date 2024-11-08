import { type } from "os";

export const Currencies = [
    {value:"USD",label:"$ Dollar",locale:"en-US"},
    {value:"IND",label:"₹ Rupees",locale:"en-IN"},
    {value:"EUR",label:"€ Euro",locale:"de-DA"},
    {value:"JPY",label:"¥ Yen",locale:"ja-JP"},

];

export type Currency = (typeof Currencies)[0];