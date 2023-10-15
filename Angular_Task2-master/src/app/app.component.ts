import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Task2';
  
  plans=[
    {
      plan:"FREE",
      price:"0",
      desc:"Single User",
      storage:"5GB Storage",
      limit:"Unlimited Public Projects",
      access:"Community Access",
      private:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      subdomain:"Free Subdomain",
      reports:"Monthly Status Reports",
      
      privateIcon:"fas fa-times",
      supportIcon:"fas fa-times",
      subdomainIcon:"fas fa-times",
      reportsIcon:"fas fa-times",
    
      privateList:"text-muted",
      supportList:"text-muted",
      subdomainList:"text-muted",
      reportsList:"text-muted",
      
    },
    {
      plan:"PLUS",
      price:"9",
      desc:"5 Users",
      storage:"50GB Storage",
      limit:"Unlimited Public Projects",
      access:"Community Access",
      private:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      subdomain:"Free Subdomain",
      reports:"Monthly Status Reports",
     
      privateIcon:"fas fa-check",
      supportIcon:"fas fa-check",
      subdomainIcon:"fas fa-check",
      reportsIcon:"fas fa-times",
      
      privateList:"",
      supportList:"",
      subdomainList:"",
      reportsList:"text-muted",
      
    },
    {
      plan:"PRO",
      price:"49",
      desc:"Unlimited Users",
      storage:"150GB Storage",
      limit:"Unlimited Public Projects",
      access:"Community Access",
      private:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      subdomain:"Free Subdomain",
      reports:"Monthly Status Reports",
      
      privateIcon:"fas fa-check",
      supportIcon:"fas fa-check",
      subdomainIcon:"fas fa-check",
      reportsIcon:"fas fa-check",
      
      privateList:"",
      supportList:"",
      subdomainList:"",
      reportsList:"",
    }
  ]
}





