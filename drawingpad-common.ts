import { View, Property, CssProperty, InheritedCssProperty, Style, } from "tns-core-modules/ui/core/view";

export class DrawingPadCommon extends View {

    public static penColorProperty = penColorProperty;
    public static penWidthProperty = penWidthProperty;

    constructor() {
        super();
    }

    get penColor(): string {
        return this._getValue(DrawingPadCommon.penColorProperty);
    }
    set penColor(value: string) {
        this._setValue(DrawingPadCommon.penColorProperty, value);
    }

    get penWidth(): number {
        return this._getValue(DrawingPadCommon.penWidthProperty);
    }
    set penWidth(value: number) {
        this._setValue(DrawingPadCommon.penWidthProperty, value);
    }

    public clearDrawing(): void { }
    public getDrawing(): any { }

}

export const penColorProperty = new Property<DrawingPadCommon, string>({name: "penColor", defaultValue: '#000000'});
penColorProperty.register(DrawingPadCommon);
    
export const penWidthProperty = new Property<DrawingPadCommon, string>({name: 'penWidth', defaultValue: '3'});
penWidthProperty.register(DrawingPadCommon);
