import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';

import { TabComponent } from './tab.component';
import { DynamicTabAnchorDirective } from './dynamic-tab-anchor.directive';

@Component({
  selector: 'ngx-tabs',
  templateUrl: './tabs.component.html'
})

export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChild(DynamicTabAnchorDirective) dynamicTabPlaceholder: DynamicTabAnchorDirective;
  dynamicTabs: TabComponent[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}


  openTab(title: string, template, data) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TabComponent
    );

    const viewContainerRef = this.dynamicTabPlaceholder.viewContainer;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance: TabComponent = componentRef.instance as TabComponent;
    instance.tabTitle = title;
    instance.template = template;
    instance.dataContext = data;

    this.dynamicTabs.push(instance);

    this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
  }


  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active)
    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));
    this.dynamicTabs.forEach(tab => (tab.active = false));
    // activate the tab the user has clicked on.
    tab.active = true;
  }


}
