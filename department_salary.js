//Task 1
const company = {

    departments: [
    
    {
    departmentName: 'Engineering',
    employees: [
    
     { name: 'Alice',
     salary: 100000,
     subordinates: [
    
     {name: 'Bob',
    salary: 80000,
    subordinates: [
    
    {name: 'Charlie',
    salary: 60000,


    subordinates: []
    
    }
    
     ]
    
     }
    
    ]
    
    },
    
      {name: 'David',
    salary: 90000,
    subordinates: []
    
     }
    
      ]
    
    },
    
    {
    
    departmentName: 'Sales',
    
    employees: [
    
    {name: 'Eve',
    salary: 85000,
    subordinates: [
    
    {name: 'Frank',
    salary: 70000,
    subordinates: []
    
    }
    
    ]
    
    },
    
    {name: 'Grace',
    salary: 95000,
    subordinates: []
    
    }
    
    ]
    
    }
    
    ]
    
};

//Task 2
    function calculateDepartmentSalary(department) {
      let deptTotal = 0;
  
      for (const employee of department.employees) {
          // Adds each of the employee's salary to the total
          deptTotal += employee.salary;
  
          // Adds the salary of any subordinate an employee has
          if (employee.subordinates && employee.subordinates.length > 0) {
              deptTotal += calculateDepartmentSalary({ employees: employee.subordinates });
          }
      }
  
      return deptTotal; 
  }
  // Calculates the total salary for each department and outputs them
  for (const department of company.departments) {
    const departmentSalary = calculateDepartmentSalary(department);
    console.log(`Total salary for ${department.departmentName} department: ${departmentSalary}`);

}

//Task 3

  
  