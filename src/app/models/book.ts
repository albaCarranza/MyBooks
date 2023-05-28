

export class Book {
    public id_user?: number

    constructor( 
                public title:string, 
                public type:string,
                public author:string,
                public price:number,
                public photo:string,
                public id_book: number)
    {}

}
