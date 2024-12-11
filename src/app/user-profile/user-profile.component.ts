import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  enrolledCourses=[
    {
      title:'MEA(R)N stack development', progress: 50
      
    }
  ]

}
