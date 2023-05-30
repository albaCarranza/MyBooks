export class User {
    public Id_user: number
   

    constructor(public name?:string, 
                public last_name?:string, 
                public email?:string, 
                public photo?:string,
                public password?: string)
    {}
       
}

