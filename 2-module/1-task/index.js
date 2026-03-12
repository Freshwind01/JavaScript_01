function sumSalary(salaries) {
    
let sum=0;
for (let salarie in salaries) 
    {
  if (Number.isFinite(salaries[salarie]))            
        sum=sum+salaries[salarie];               
    }
return sum;
}
