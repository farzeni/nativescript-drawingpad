import { DrawingPadCommon, penColorProperty, penWidthProperty} from './drawingpad-common';
import { Color } from "color";

declare var com: any;
let SignaturePad: any = com.github.gcacace.signaturepad.views.SignaturePad;

export class DrawingPad extends DrawingPadCommon {
    private _android: any;

    get android() {
        return this._android;
    }

    get _nativeView() {
        return this._android;
    }

    public createNativeView(): Object {
        this._android = new SignaturePad(this._context, null);

        if (this.penColor) {
            this._android.setPenColor(new Color(this.penColor).android);
        }

        if (this.penWidth) {
            this._android.setMinWidth(this.penWidth);
        }

        return this._android;
    }

    public getDrawing(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if (!this._android.isEmpty()) {
                    let data = this._android.getSignatureBitmap();
                    resolve(data);
                } else {
                    reject("DrawingPad is empty.");
                }
            } catch (err) {
                reject(err);
            }
        })
    }

    public getTransparentDrawing(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if (!this._android.isEmpty()) {
                    let data = this._android.getTransparentSignatureBitmap();
                    resolve(data);
                } else {
                    reject("DrawingPad is empty.");
                }
            } catch (err) {
                reject(err);
            }
        })
    }

    public getDrawingSvg(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if (!this._android.isEmpty()) {
                    let data = this._android.getSignatureSvg();
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
            this._android.clear();
        } catch (err) {
            console.log('Error in clearDrawing: ' + err);
        }
    }
}