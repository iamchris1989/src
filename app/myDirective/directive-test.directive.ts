import { Directive, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveTest]'
})
export class DirectiveTestDirective {

  constructor(private elementRef: ElementRef,private renderer: Renderer2) { }

  private status:number=0;
  ngOnInit() {
    //console.log(this.elementRef.nativeElement.parentNode);
    // 設定 CSS 樣式
    this.createButton();
  }

  createButton(){
    const button = this.renderer.createElement('button'); 
    const text = this.renderer.createText(`改變樣式`);
    this.renderer.listen(button,"click",()=>this.changestyle());
    this.renderer.appendChild(button, text); 
    this.renderer.appendChild(this.elementRef.nativeElement.previousSibling, button);
    //console.log(this.elementRef.nativeElement);
  }



changestyle(){
  var backgroundColor='white';
  var color='black';
  if(this.status===0){
    backgroundColor='black'
    color='white';
    this.status=1;
  }else
  this.status=0;
// 設定 CSS 樣式
this.elementRef.nativeElement.style.backgroundColor = backgroundColor;
this.elementRef.nativeElement.style.color = color;
}



}
