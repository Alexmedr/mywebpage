var students = [
    {
        lname: "Medrano",
        name: "Alejandro",
        age: 23,
        birthday: {
            year: 1998,
            month: "August",
            day: 23
        },
        career: "IDYGS"
    },
    {
        lname: "Hernandez",
        name: "Emir",
        age: 22,
        birthday: {
            year: 2000,
            month: "November",
            day: 17
        },
        career: "IDYGS"
    },
    {
        lname: "Resendiz",
        name: "Homero",
        age: 22,
        birthday: {
            year: 1999,
            month: "September",
            day: 11
        },
        career: "IDYGS"
    },
    {
        lname: "Villicaña",
        name: "Adolfo",
        age: 24,
        birthday: {
            year: 1996,
            month: "October",
            day: 11
        },
        career: "IDYGS"
    },
]

var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < students.length; i++ ) {
    var templ = document.getElementById("tbodytempl").content.cloneNode(true);
    var tdnumber = templ.querySelector("span[name='tbodynumber']");
    var tdname = templ.querySelector("span[name='tbodyname']");
    var tdage = templ.querySelector("span[name='tbodyage']");
    var tdcareer = templ.querySelector("span[name='tbodycareer']");

    
    tdnumber.innerText = i + 1; 
    tdname.innerText = students[i].lname + " " + students[i].name;
    tdage.innerText = students[i].age;
    tdcareer.innerText = students[i].career;

    table.append(templ);
}