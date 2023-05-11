import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('listenerOut', { static: true }) listenerOut!: ElementRef;
  private values: string[] = ['resources', 'tools', 'contact'];
  viewResources = true
  viewTools = false
  viewContact = false

  segmentGroupChange = (ev: any) => {
    const nativeEl = this.listenerOut.nativeElement;
    if (!nativeEl) {
      return;
    }

    const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;
    
    if (selectedValue == "resources") {
      this.viewTools = false
      this.viewResources = true
      this.viewContact = false
    } else if (selectedValue == "tools") {
      this.viewTools = true
      this.viewResources = false
      this.viewContact = false
    } else {
      this.viewTools = false
      this.viewResources = false
      this.viewContact = true
    }
  };
}
