import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  openedGames = [];
  currentUser = {profilepic:'',name:''};

  constructor() { 

  }

  ngOnInit() {
    this.openedGames=[
      {url:'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1220441804809213&height=50&width=50&ext=1574886095&hash=AeRrkJrcaL2XO8rb'},
      {url:'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1220441804809213&height=50&width=50&ext=1574886095&hash=AeRrkJrcaL2XO8rb'},
      {url:'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1220441804809213&height=50&width=50&ext=1574886095&hash=AeRrkJrcaL2XO8rb'},
      {url:'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1220441804809213&height=50&width=50&ext=1574886095&hash=AeRrkJrcaL2XO8rb'}

    ];

    this.currentUser.profilepic = 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1220441804809213&height=50&width=50&ext=1574886095&hash=AeRrkJrcaL2XO8rb';
    this.currentUser.name = "Sulemana Awal";
  }

  gotToNewGame(){
    window.location.href = "game";
  }

}
