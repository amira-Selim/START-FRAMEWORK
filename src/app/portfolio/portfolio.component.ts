import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { StarComponent } from "../star/star.component";

interface Iimages{
  imageSrc : string ,
  title: string,
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 portfolioList : Iimages[]=[
  {
  imageSrc : "./assets/poert1.png",
  title : 'circus'
 },
  {
  imageSrc : "./assets/port2.png",
  title : 'cake'
 },
  {
  imageSrc : "./assets/port3.png",
  title : 'house'
 },
 {
   imageSrc : "./assets/port3.png",
   title : 'house'
 },
 {
   imageSrc : "./assets/port2.png"
   ,title : 'cake'
  },
  {
  imageSrc : "./assets/poert1.png",
  title : 'circus'
 },
  
  
]

@ViewChild ( 'overLayer' ) myDiv! : ElementRef; //open

  
imgSrc:string=""
showOverlayer( myImg :string ){

  this.myDiv.nativeElement.classList.replace( 'd-none' , 'd-flex')
  this.imgSrc = myImg ;
  
}


closeOverlayer(e : any){

const element = this.myDiv.nativeElement ;
 if(e == element){
  this.myDiv.nativeElement.classList.replace( 'd-flex' , 'd-none')
 }

}

}
