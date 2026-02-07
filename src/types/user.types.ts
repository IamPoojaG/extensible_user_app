export interface User {
id?: number;
[key: string]: any;
}


export interface FieldSchema {
name: string;
label: string;
type: string;
required?: boolean;
validate?: (value: string) => true | string;
}