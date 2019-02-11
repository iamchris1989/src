import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  @ViewChild('document1')  dom1: ElementRef;  
  count1:number=1;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  createElement(){
    const li = this.renderer.createElement('li'); 
    const text = this.renderer.createText(`[${this.count1++}]被生成的HTML元素`);
    this.renderer.appendChild(li, text); 
    this.renderer.appendChild(this.dom1.nativeElement, li); 
  }
  //this.test3_.nativeElement.parentNode

  removeLastElement(){
    if(this.dom1.nativeElement.lastChild ===null)
        return alert("#document1下沒有HTML元素囉");
        console.log(this.dom1.nativeElement); 
        console.log(this.dom1.nativeElement.lastChild); 
    this.renderer.removeChild(this.dom1.nativeElement,this.dom1.nativeElement.lastChild); 
  }
  removeFirstElement(){
    if(this.dom1.nativeElement.firstChild ===null)
        return alert("#document1沒有HTML元素囉");
    this.renderer.removeChild(this.dom1.nativeElement,this.dom1.nativeElement.firstChild); 
  }
  removeAllElement(){
    if(this.dom1.nativeElement.lastChild ===null)
    return alert("#document1下沒有HTML元素囉");
    console.log(this.dom1.nativeElement.childNodes);
    var count = this.dom1.nativeElement.childNodes.length;
        for(var i=0 ;i<count;i++)
        this.renderer.removeChild(this.dom1.nativeElement,this.dom1.nativeElement.lastChild); 
  }

  @ViewChild('document2')  dom2: ElementRef;  
  count2:number=1;
  count3:number=1;

  createItem(){
    const input1 = this.renderer.createElement('input'); 
    const input2 = this.renderer.createElement('input'); 
    const index = this.renderer.createText(`編號${this.count2}`);

    const button = this.renderer.createElement('button'); 
    const text = this.renderer.createText(`刪除`);
    
    //設定button的text
    this.renderer.appendChild(button, text); 
    //屬性值
    //this.renderer.setProperty(button,`buttonname`,`buttonname${this.count2}`);
    //節點值
    //this.renderer.setValue(button,`buttonname${this.count2}`);
    //設定class
    //this.renderer.addClass(button,`buttonname${this.count2}`);
    //設定listen
    this.renderer.listen(button,"click",(i)=>this.delete(i));

    this.renderer.appendChild(this.dom2.nativeElement.parentNode, index);
    this.renderer.appendChild(this.dom2.nativeElement.parentNode, input2);
    this.renderer.appendChild(this.dom2.nativeElement.parentNode, input1); 
    this.renderer.appendChild(this.dom2.nativeElement.parentNode, button); 
    this.renderer.appendChild(this.dom2.nativeElement.parentNode, this.renderer.createElement('br')); 
    this.count2++;
    this.count3++;
  }

  delete(event){

    console.log(event.target.buttonname);
    //刪除換行
    this.renderer.removeChild(event.target.parentNode,event.target.nextSibling);
     
    /*  //刪除index
     this.renderer.removeChild(event.target.parentNode,event.target.previousSibling.previousSibling.previousSibling);
    //刪除input2
    this.renderer.removeChild(event.target.parentNode,event.target.previousSibling.previousSibling);
     //刪除input1
    this.renderer.removeChild(event.target.parentNode,event.target.previousSibling); */

    //刪除已event.target為基準點的前3個元素
    for(var i=0;i<3;i++)
      this.renderer.removeChild(event.target.parentNode,event.target.previousSibling);

    //刪除button
    this.renderer.removeChild(event.target.parentNode,event.target);
    this.count3--;
  }
}
