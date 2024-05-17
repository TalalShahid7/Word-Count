import inquirer from "inquirer";

let ans:{data:string} = await inquirer.prompt([
    {
        type:"input",
        name:"data",
        message:"Input your sentence : "
    }
])

export default ans