const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

Expense_Detail = []

function add_expenses(){
    rl.question('Enter expense name:' ,(expense_name) =>{
        if (!isNaN(expense_name)) { // making validation, that name must be string
            console.error('Expense name must be a string.\n');
            return add_expenses();
        }
            rl.question('Enter expense id:' ,(expense_id) =>{
                if (isNaN(expense_id)) { // making validation, that id must be number
                    console.error('Expense ID must be a valid integer.\n');
                    return add_expenses();
                }
                expense_id = parseInt(expense_id)
                rl.question('Enter expense amount:' ,(expense_amount) =>{
                    if (isNaN(expense_amount)) { // making validation, that amount must be int
                        console.error('Expense amount must be a valid integer.\n');
                        return add_expenses();
                    }
                    expense_amount = parseInt(expense_amount)
                    rl.question('Enter date (DD-MM-YYYY): ' ,(date) =>{
                        // date = parseInt(date)
                        expense_name = {
                            id:expense_id,
                            description:expense_name,
                            amount:expense_amount,
                            date:date
                            }
                        Expense_Detail.push(expense_name) // store whole object in array
                        console.error("Expense added successfully \n")
                        Expense_handler()
                })
                    
            })
        })
            
    }
)}

function view_expense(){
    
        for(let value of Expense_Detail){
            console.log(value)
            console.log('\n')
        }
        Expense_handler()
    }
    


function update_expense(){
    rl.question("Enter ID:",(expense_id) =>
    {
        for(let value of Expense_Detail)
        {
            if(value.id ==expense_id) // comparing id to access belonging item
            {
                rl.question("ENTER NEW DESCRIPTION :",(new_des)=>
            {
                rl.question("ENTER NEW AMOUNT:",(new_amount)=>
                {
                    value.description =new_des
                    if (!isNaN(new_des)) { // validation that new_description must be string
                        console.error('Description must be a string.\n');
                        return update_expense();
                    }
                    value.amount = new_amount
                    new_amount = parseInt(new_amount);
                    if (isNaN(new_amount)) { // validation that new_amount must be int
                        console.error('Amount must be a valid integer.\n');
                        return update_expense();
                    }
                    console.log("Expense updated \n ")
                    Expense_handler()
                })
            })
            
            }
            else
            {
                console.error("Invalid ID")
                
            }
            
        }
        
    })
}

function delete_expense(){
    rl.question('Enter ID :' ,(expense_id) =>
    {
        for(let value of Expense_Detail)
        {
            if(value.id == expense_id)
            {
                Expense_Detail.pop()
                console.error("Expense deleted successfuly \n ")
                Expense_handler()
            }
            else
            {
                console.error('Invalid id \n')
                Expense_handler()
            }
        }
    })
}
let sum = 0;
function total_expenditures()
{
    for(let value of Expense_Detail)
    {
        sum = sum+value.amount
    }
    console.log(`Total Amount spent ${sum} \n `)
    Expense_handler()
}

function Expense_handler(){
    console.error("         Welcome to Expense Handler Application\n")
    console.log("1.Add Expense\n")
    console.log("2.View Expense\n")
    console.log("3.Update Expense\n")
    console.log("4.Delete Expense\n")
    console.log("5.View Total Expenditures\n")
    console.log("6.Exit\n")
    rl.question('Choose any option(1-6):' ,(num) =>{
        num = parseInt(num)
        if(num == 1 )
        {
            
        add_expenses();  
        
        }
        if(num == 2 )
        {
            if(!Expense_Detail.length == 0)
            {
                view_expense()
            }
            else
            {
                console.error('Empty Array \n')
                Expense_handler()
            }
        
        }
       if(num ==3 )
       {
        
        update_expense()

       }
       if(num == 4)
       {
        delete_expense()
       }
       if(num == 5)
       {
        total_expenditures()
       }
       if(num == 6)
       {
        rl.close()
       }
    })

}

Expense_handler()