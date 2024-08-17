const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

task_list = []

function add_task(){
    rl.question('Enter task name:' ,(task_name) =>{
        rl.question('Enter task id:' ,(task_id) =>{
            task_id = parseInt(task_id)
            task_name = {id: task_id,
                description:task_name,
                mark:"not completed"
            }
            task_list.push(task_name)
            console.log("Task Added!.")
            console.log("\n")
            Question()
        })
    })
}
function Marked_task(){
    rl.question("Enter task id:",(task_id) =>{
     for(i of task_list){
         if(task_id==i.id){
             i.mark = "completed"
             console.log("Marked completed");
             console.log("\n")
         }else
         {
             console.log("Invalid id");
             console.log("\n")
         }
     }
     Question()
 
    })
 }
 
 function Delete_task(){
     rl.question("Enter id:" ,(task_id)=>{
         for(i of task_list){
             if(task_id==i.id){
                 task_list.pop()
                 console.log("Task Deleted");
                 console.log("\n")
                 Question()
             }
             else{
                 console.log("Invaild id.");
                 console.log("\n")
                 Question()
             }
        }})
 }
function Question(){
        console.log("Welcome to To-Do list Application.\n 1.Add a new task \n 2.View all tasks \n 3.Mark a task as completed \n 4.Delete a task \n 5.Exit")
        rl.question("Please choose an option (1-5):",(num) =>{
            num = parseInt(num)
            if(num ==1)
            {
                add_task()
    
            }
            if(num ==2)
            {
                if(task_list.length ==0)
                    {
                        console.log("Task list is empty!..")
                        console.log("\n")
                    }
               
                    else{
                        for(i of task_list){
                            console.log(i)
                            console.log("\n")
                    }
                }
                Question()
            }
            if(num ==3)
            {
                Marked_task()
                
            }
            if(num == 4)
            {
                Delete_task()
            }
            if(num == 5)
            {
                rl.close()
            }
            else{
               
            }
         })
    }
Question()
