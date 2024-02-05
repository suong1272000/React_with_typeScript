//alias [별칭]
//number,string,...
type Person = {
    name:string,
    age:number,
}

type NumStr = number | string
type Weekdays = "월" | "화" | "수" | "목" | "금"

const pikachu:Person = {name:"피카츄", age:10}
const data:NumStr = 1
const tomorrow:Weekdays = "월"

type Flavor = "블랙그라운드" | "아로마노트" | "디카페인"
type Nation = "콜롬비아" | "케냐" | "브라질"
type CoffeeBean = {
    nation: Nation,
    flavor: Flavor
}
type Product = "가공유" | "원유" | "연유"
type Milk = {
    fatty: number
    product: Product
}

type Latte = CoffeeBean & Milk

const megaLatte:Latte = {
    nation: "케냐",
    flavor: "디카페인",
    fatty: 100,
    product: "원유"
}

//type unit = {name:,hp:,mp:}
//type skills = {q:,w:,e:,r:}
//type champ

type unit = {
    name:string,
    hp:number,
    mp?:number
}
type skills = {
    q:string[] | string,
    w:string,
    e:string,
    r?:string,
}
type champ = unit & skills
const Rakan:champ = {
    name:"라칸",
    hp:2293,
    mp:1165,
    q:"빛나는 깃털",
    w:"화려한 등장",
    e:"전쟁무도",
    r:"매혹의 질주"
}