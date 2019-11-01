employees = []
function Employee(name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status ||'fulltime'
     printEmployeeForm = function(){
        console.log(`Name: ${name}, ${jobTitle}, ${salary}, ${status}`)
     }
    
}
    var employee1 = new Employee('Tina', 'CEO', '110k')
    var employee2 = new Employee('Mike', 'CFO', '100k', 'part-time')
    var employee3 = new Employee('Steven', 'CMO', '90k', 'contract')
    function   arraypusher (employ){
        return employees.push(employ)
    }

    arraypusher(employee1)
    arraypusher(employee2)
    arraypusher(employee3)
    console.log(employees);
    
