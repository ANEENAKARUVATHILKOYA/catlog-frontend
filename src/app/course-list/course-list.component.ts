import { Component, OnInit} from '@angular/core';
import axios from 'axios';
  

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent  implements  OnInit   {
 
  courses:any[] =[];
  searchText:string='';
  filterCriteria:string='';

   async ngOnInit()  {
    const response = await axios.get('http://localhost:5000/courses');
    this.courses=response.data;
    
  }

  enroll(course:any){
    alert(`Enrolled in ${course.title}`);
  }

  unenroll(course:any){
    alert(`Unenrolled from ${course.title}`);
  }
}
