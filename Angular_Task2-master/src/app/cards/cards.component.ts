import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() plan:String ="";
  @Input() price:String="";
  @Input() desc:String="";
  @Input() storage:String="";
  @Input() limit:String="";
  @Input() access:String="";
  @Input() private:String="";
  @Input() support:String="";
  @Input() subdomain:String="";
  @Input() reports:String="";

  @Input() privateIcon="";
  @Input() supportIcon="";
  @Input() subdomainIcon="";
  @Input() reportsIcon="";
 
  @Input() privateList="";
  @Input() supportList="";
  @Input() subdomainList="";
  @Input() reportsList="";
}
