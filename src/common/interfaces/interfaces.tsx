export interface IProduct{
  id: string,
  title: string,
  price: number,
  colors:string[],
  size:string[],
  category:string,
  images:string[]
}
export interface IprodCart{
  id:string,
  title:string,
  price:number,
  color:string,
  size:string,
  qte:number,
  img:string
}