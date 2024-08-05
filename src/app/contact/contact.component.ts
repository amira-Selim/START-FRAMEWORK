import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})



export class ContactComponent {

  @ViewChild ( 'lable1') name! : ElementRef;
  @ViewChild ( 'lable2') email! : ElementRef;
  @ViewChild ( 'lable3') pass! : ElementRef;
  @ViewChild ( 'lable4') age! : ElementRef;




  viweLabel(e:any,inputType : string){
        const myValue = e.value ;
      if(inputType=="name"){
          this.name.nativeElement.classList.remove('move')
          if(myValue == ''){
            this.name.nativeElement.classList.add('move')
      }
  }
      if(inputType=="email"){
          this.email.nativeElement.classList.remove('move')
          if(myValue == ''){
            this.email.nativeElement.classList.add('move')
      }
  }
      if(inputType=="pass"){
          this.pass.nativeElement.classList.remove('move')
          if(myValue == ''){
            this.pass.nativeElement.classList.add('move')
      }
  }
      if(inputType=="age"){
          this.age.nativeElement.classList.remove('move')
          if(myValue == ''){
            this.age.nativeElement.classList.add('move')
      }
  }

  }












  

  // @ViewChild ( 'lable') myLable! : ElementRef;


  // viewLable(e:any){
  //     const myValue = e.value ;
  //     this.age.nativeElement.classList.remove('move')
  //     if(myValue == ''){
  //     this.age.nativeElement.classList.add('move')


  // }


  // @ViewChildren('lable') myLables! : QueryList< ElementRef > ; 




  // viewLable(e:any){
  //     console.log(this.myLables.get(0)?.nativeElement)
  //     this.myLables.get(0)?.nativeElement.classList.add('move')


  // }
}
