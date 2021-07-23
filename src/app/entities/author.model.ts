export interface Author{
    numFound: number,
    start: number,
    numFoundExact: boolean,
    docs: [
      {
        key: string,
        text: object[],
        type: string,
        name: string,
        alternate_names: object[],
        birth_date: string,
        top_work: string,
        work_count: number,
        top_subjects: object[],
        _version_: number
      },
    ]
  }