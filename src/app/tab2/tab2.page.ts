import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentScheduleId: string | undefined;
  currentScheduleName: string = "";
  
  classes = [
    {
      id: 1,
      name: 'Standard Four Day',
    },
    {
      id: 2,
      name: 'Standard Five Day'
    },
    {
      id: 3,
      name: '1-Hour Delay'
    },
    {
      id: 4,
      name: '2-Hour Delay'
    },
    {
      id: 5,
      name: '3-Hour Delay'
    },
    {
      classtime: {
      per1start: "8:00",
      per1end: "9:00",
      per2start: "9:05",
      per2end: "10:05",
      per3start: "10:10",
      per3end: "11:10",
      per4start: "11:15",
      per4end: "12:15",
      per5start: "1:15",
      per5end: "2:15",
      per6start: "2:20",
      per6end: "3:20",
      per7start: "3:25",
      per7end: "4:25",
      per8start: "4:30",
      per8end: "5:30",
      }
    }
  ];
  selectSchedule(ev: any) {
    this.currentScheduleId = JSON.stringify(ev.target.value.id);
    this.currentScheduleName = JSON.stringify(ev.target.value.name);
    
    
    switch(parseInt(this.currentScheduleId)) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
    }
  }
}