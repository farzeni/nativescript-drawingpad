import { DrawingPadCommon, penColorProperty, penWidthProperty} from './drawingpad-common';
import { Color } from "color";

declare var SignatureView: any, CGRectMake: any;

export class DrawingPad extends DrawingPadCommon {
  public nativeView: any = SignatureView;

  constructor() {
    super();
    this.nativeView = SignatureView.alloc().initWithFrame(CGRectMake(0, 0, 100, 100));
    this.nativeView.clipsToBounds = true;
  }

  [penColorProperty.getDefault](): string {
        return '#000000';
  }

  [penColorProperty.setNative](value: string) {
      this.nativeView.setLineColor(new Color(value).ios);
  }

  [penWidthProperty.getDefault](): number {
      return 3;
  }
  
  [penWidthProperty.setNative](value: string) {
      this.nativeView.setLineWidth(parseInt(value));
  }

  public onLoaded() {
    // console.log(`onLoaded ${this.width}, ${this.height}`);
    if (this.width) {
      this.nativeView.frame.size.width = this.width;
    }
    if (this.height) {
      this.nativeView.frame.size.height = this.height;
    }
  }

  public getDrawing(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        let isSigned = this.nativeView.isSigned();
        if (isSigned === true) {
          let data = this.nativeView.signatureImage();
          resolve(data);
        } else {
          reject("DrawingPad is empty.");
        }
      } catch (err) {
        reject(err);
      }
    })
  }

  public clearDrawing(): any {
    try {
      if (this.backgroundColor) {
        let color = this.backgroundColor;
        if (color.constructor == Color) {
          color = color.ios;
        } else if (color.constructor == String) {
          color = new Color(<any>color).ios;
        } 
        this.nativeView.clearWithColor(color);
      } else {
        this.nativeView.clear();
      }
    } catch (err) {
      console.log("Error clearing the DrawingPad: " + err);
    }
  }
}