// Type definition, for define custom javascript object type
// A TypeScript class or interface used to define the structure of data could be considered a POJO.
export interface Course {
    id:number;
    description:string;
    iconUrl: string;
    longDescription: string;
    category:string;
    lessonsCount:number;
}
