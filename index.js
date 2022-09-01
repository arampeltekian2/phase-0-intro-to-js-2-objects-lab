const employee = {
    code1: "employee", 
    code2: "streetAddress",
    code3: "name",
};
    

function updateEmployeeWithKeyAndValue(employee, key, value){
    const itsMorbinTime =  {...employee}; 
    itsMorbinTime[key] = value; 
    return itsMorbinTime;
}  


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    const aMorbillion = {...employee}
    delete aMorbillion[key]; 
    return aMorbillion; 
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee; 
    
}
  