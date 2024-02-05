//1. 타입 선언
const a:number = 1234
const b:string = '1234'
const c:boolean = true
const d:{name:string, age:number} = {name: "엄준식", age: 21}
const e:number[] = [1,2,3,4]
const f:{}[] = [{name:"안녕"}]

//2. new 타입
const g:any = [1,{},3,4] //최상의 타입 any 지양할것 
const h:string | null = null // union 타입
const i:()=>void = () => {}
const j:never // 도달 불가능한 타입
const k:undefined = undefined