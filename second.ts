import ans from "./first.js"
let countWord=()=>{
const words= ans.data.trim().split(" ")
console.log(`Your total words in the sentence is : ${words.length}`)
}
export default countWord