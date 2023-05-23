export class User {
    public Id_user: number
    public name: string
    public last_name: string
    public email: string
    public photo: string
    public password: string

    constructor(name:string, last_name:string, email:string, photo:string)
    {


        this.Id_user
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.photo = photo;
        this.password
    }

    // public userCompleto():string
    // {
    //    return this.Id_user + this.name + this.last_name + this.email + this.photo + this.password;
    // }

}
