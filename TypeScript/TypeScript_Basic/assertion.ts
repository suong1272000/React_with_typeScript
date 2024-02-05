// as(assertion)문법 [단언 100%]
const box1 = document.querySelector(".img") as HTMLImageElement
box1.src = ""

const box2 = document.querySelector(".input") as HTMLInputElement
box2.value = "abcdefg"

// <>제너릭 문법
const text = "hello"
const text1 = <string>text