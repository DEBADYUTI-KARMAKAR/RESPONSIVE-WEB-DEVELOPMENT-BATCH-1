let a = [
    {
        name: "Debadyuti",
        dep: "CSE",
        roll:47,
        status: true
    },
    {
        name: "Parthib",
        dep: "CSE",
        roll:2,
        status: true
    },
    {
        name: "Rajdeep",
        dep: "CSE",
        roll:23,
        status: true
    },
    {
        name: "Ayan",
        dep: "CSE",
        roll:9,
        status: false
    },
]

for(let i=0;i<a.length;i++){
    if(a[i].status){
        console.log(a[i].name);
    }
}