const employees = [
  {
    id: 1,
    name: "ก้องภพ",
    department: "IT",
    position: "Developer",
    salary: 65000,
    startDate: "2021-04-15",
    isActive: true,
  },
  {
    id: 2,
    name: "วิมล",
    department: "Marketing",
    position: "Marketing Manager",
    salary: 92000,
    startDate: "2019-08-01",
    isActive: true,
  },
  {
    id: 3,
    name: "สมศักดิ์",
    department: "IT",
    position: "Senior Developer",
    salary: 88000,
    startDate: "2018-02-20",
    isActive: false,
  },
  {
    id: 4,
    name: "จินตนา",
    department: "Sales",
    position: "Sales Rep",
    salary: 58000,
    startDate: "2022-11-10",
    isActive: true,
  },
  {
    id: 5,
    name: "อมร",
    department: "IT",
    position: "Developer",
    salary: 68000,
    startDate: "2023-07-01",
    isActive: true,
  },
  {
    id: 6,
    name: "สุดา",
    department: "Sales",
    position: "Sales Manager",
    salary: 105000,
    startDate: "2017-05-30",
    isActive: true,
  },
];

//ข้อ 1: สร้าง Array ใหม่ที่มีเฉพาะข้อมูลของพนักงานที่ ยังทำงานอยู่ทั้งหมด
const activeEmployee = employees.filter(
  (employee) => employee.isActive == true
);
console.log(activeEmployee.map((employee) => employee.name));

// ข้อ 2: สร้าง Array ใหม่ที่เก็บเฉพาะ ชื่อ ของพนักงานทุกคน
const employeeName = employees.map((employee) => employee.name);
console.log(employeeName);

// ข้อ 3: หาข้อมูลของพนักงานที่มี id เท่ากับ 4
const employeeID = employees.find((id) => id.id === 4);
console.log(employeeID);

// ข้อ 4: ตรวจสอบว่ามีพนักงานคนใดคนหนึ่งที่ทำงานในแผนก 'Marketing' หรือไม่ (ตอบเป็น true หรือ false)
const isSomeMarketingDepartment = employees.some(
  (employee) => employee.department === "Marketing"
);
console.log(isSomeMarketingDepartment);

// ข้อ 5: หารายชื่อของพนักงานทุกคนที่อยู่ในแผนก 'IT'
const fineEmpIT = employees.filter(emp => emp.department === "IT")
  .map(emp => emp.name);
console.log(fineEmpIT);

// ข้อ 6: คำนวณ เงินเดือนรวมทั้งหมด ที่บริษัทต้องจ่ายให้พนักงาน ทุกคน ในแต่ละเดือน
const totalPaidSalary = employees.reduce((total, employee) => {
  return (total += employee.salary);
}, 0);
console.log(`ต้องจ่ายเงินเดือนพนักงานทั้งหมด ${totalPaidSalary} บาท`);

// ข้อ 7: หาข้อมูลของพนักงานที่ เงินเดือนสูงสุด ในบริษัท (เอามาแค่คนเดียว)***
const highestPaidEmployee = employees.reduce((maxEmp, currentEmp) => 
  currentEmp.salary > maxEmp.salary ? currentEmp : maxEmp
);
console.log(highestPaidEmployee);

// ข้อ 8: หารายชื่อของพนักงานที่เริ่มทำงาน หลังปี 2020 และ ยังทำงานอยู่ จากนั้นจัดเรียงชื่อตามลำดับตัวอักษร ****
const findEmployeeName2020 = employees
  .filter(emp => new Date(emp.startDate).getFullYear() > 2020 && emp.isActive)
  .map(emp => emp.name)
  .sort();
console.log(findEmployeeName2020);

// ข้อ 9: คำนวณ เงินเดือนเฉลี่ย ของพนักงานในแผนก 'IT' ที่ ยังทำงานอยู่
const averageITsalary = employees.filter(
  (employee) => employee.department === "IT" && employee.isActive === true
);
const averageITsalaryResult = averageITsalary.reduce((total, employee) => {
  return (total += employee.salary);
}, 0);
console.log(
  `เงินเดือนเฉลี่ยของแผนก IT ที่ยังทำงานอยู่คือ ${averageITsalaryResult} บาท`
);

// ข้อ 10: สร้าง Array ใหม่ของพนักงานที่ยังทำงานอยู่ โดยปรับเปลี่ยนรูปแบบข้อมูลเป็น { fullName: '...', details: 'ตำแหน่ง - แผนก' }
const emp = [
  {
    id: 1,
    fullName: "ก้องภพ",
    details: "Developer - IT",
  },
  {
    id: 2,
    fullName: "วิมล",
    details: "Marketing Manager - Marketing",
  },
  {
    id: 3,
    fullName: "สมศักดิ์",
    details: "Senior Developer - IT",
  },
  {
    id: 4,
    fullName: "จินตนา",
    details: "Sales Rep - Sales",
  },
  {
    id: 5,
    fullName: "อมร",
    details: "Developer - IT",
  },
  {
    id: 6,
    fullName: "สุดา",
    details: "Sales Manager - Sales",
  },
];
