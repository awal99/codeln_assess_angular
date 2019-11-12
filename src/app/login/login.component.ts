import { Component, OnInit } from '@angular/core';


declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '2347564788702295',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };
 
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

  }


  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
        {
        
          if (response.authResponse)
          {
           
            //login success
            //window.location.href="home";
            /* make the API call */
          FB.api(
            "/{user-id}/",
            function (response) {
              if (response && !response.error) {
                console.log("FACEBOOK GRAPH API",response);
              }
            }
          );
            //login success code here
            //redirect to home page
           }
           else
           {
           console.log('User login failed');
         }
      });

  }
}
