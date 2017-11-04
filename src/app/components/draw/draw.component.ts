import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../services/socket.service';
import { DrawingPacket } from '../../packets/drawing.packet';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {
  paint: boolean;
  clickX: number[];
  clickY: number[];
  clickDrag: boolean[];
  context: CanvasRenderingContext2D;

  @ViewChild('canvas') canvas: ElementRef;

  constructor(private router: Router, private socketService: SocketService) {
    this.clickX = [];
    this.clickY = [];
    this.clickDrag = [];
  }

  ngOnInit() {
    this.context = this.canvas.nativeElement.getContext("2d");

    this.socketService.stream.subscribe(packet => {
      if (packet.name == 'time') {
        this.socketService.emit(new DrawingPacket(this.canvas.nativeElement.toDataURL("image/png")));
        this.router.navigate(['/processing']);
      }
    });
  }

  canvasMouseDown(e: MouseEvent) {
    this.paint = true;
    this.addClick(e.offsetX, e.offsetY);
    this.redraw();
  }

  canvasMouseMove(e: MouseEvent) {
    if (this.paint) {
      this.addClick(e.offsetX, e.offsetY, true);
      this.redraw();
    }
  }

  canvasMouseUp(e: MouseEvent) {
    this.paint = false;
  }

  canvasMouseLeave(e: MouseEvent) {
    this.paint = false;
  }

  addClick(x: number, y: number, dragging: boolean = false) {
    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(dragging);
  }

  redraw(){
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height); // Clears the canvas

    this.context.strokeStyle = "black";
    this.context.lineJoin = "round";
    this.context.lineWidth = 5;

    for(let i=0; i < this.clickX.length; i++) {
      this.context.beginPath();
      if(this.clickDrag[i] && i){
        this.context.moveTo(this.clickX[i-1], this.clickY[i-1]);
      }else{
        this.context.moveTo(this.clickX[i]-1, this.clickY[i]);
      }
      this.context.lineTo(this.clickX[i], this.clickY[i]);
      this.context.closePath();
      this.context.stroke();
    }
  }
}
