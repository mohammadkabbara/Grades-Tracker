let parent =document.getElementById('parent');


let table=document.createElement('table');


parent.appendChild(table);

let headerArray =['Student Name', 'Student Grade','Course','Status'];

Personal.allPersonal=[];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function Personal(name,course){
    this.name=name;
    this.course=course;
    this.grade=this.update();
    Personal.allPersonal.push(this);
}


//making header array

function header (){


    let trHeader=document.createElement('tr');
    table.appendChild(trHeader);
    for (let i= 0; i < headerArray.length; i++) {

        let thHeader=document.createElement('th');
        trHeader.appendChild(thHeader);
        thHeader.textContent=headerArray[i]
     
    }
}
header ();


Personal.prototype.update=function (){
  return  this.grade=getRndInteger(0,100);
//   if(this.grade>49){

//   }


    
}

let form =document.getElementById('form');
form.addEventListener('submit',handleSubmiting);
function handleSubmiting(event) {

    event.preventDefault();
    let name =event.target.name.value;
    console.log(name);
    let course=event.target.course.value;
    console.log(course);
    
     


    let newPersonal=  new Personal(name,course)
    newPersonal.render();
    setItem();
    
}

Personal.prototype.render=function() {
   

    for (let i = 0; i < Personal.allPersonal.length; i++) {

        let trRow=document.createElement('tr');
        table.appendChild(trRow);
    

        //create all td

        let tdName=document.createElement('td');
        let tdGrade=document.createElement('td');
        let tdCourse=document.createElement('td');
        // let tdStatus=document.createElement('td');





        //append all td

        trRow.appendChild(tdName);
        trRow.appendChild(tdGrade);
        trRow.appendChild(tdCourse);
        // trRow.appendChild(tdStatus);



        //create text content

        tdName.textContent=Personal.allPersonal[i].name;
        tdGrade.textContent=Personal.allPersonal[i].grade;
        tdCourse.textContent=Personal.allPersonal[i].course;

       
        
    }  
    
};
function setItem() {

    let setData = JSON.stringify(Personal.allPersonal);
    localStorage.setItem('data',setData);
    
}


function getData() {

    let data=localStorage.getItem('data');
    let storageData=JSON.parse(data);

    for (let i= 0; i<Personal.allPersonal.length; i++) {
        if(storageData!==null){
            storageData=Personal.allPersonal
        }
       
        
    }


    
}

getData();