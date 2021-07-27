import { AuthorDocs } from "./authorDocs.model";

export interface Author{
    numFound: number,
    start: number,
    numFoundExact: boolean,
    docs: AuthorDocs[]
  }