export interface IHashTag{
    id: string,
    tag: string
}
export interface IContact{
    phoneNumber:string,
    instagram: string,
    telegram:string
}
export interface IEvent{
    id: string,
    title: string,
    description: string,
    date: Date | string
    time: string,
    location: string,
    author: string,
    contact:IContact,
    hashTags: IHashTag[]

}
