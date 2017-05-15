import { View, Property, CssProperty, InheritedCssProperty, Style, } from "tns-core-modules/ui/core/view";

export class DrawingPadCommon extends View {

    // Defined property to make typescript happy. 
    public static penColor: string;
    public static penWidth: string;

    constructor() {
        super();
    }

    public clearDrawing(): void { }
    public getDrawing(): any { }

}

export const penColorProperty = new Property<DrawingPadCommon, string>({name: "penColor", defaultValue: '#000000'});
penColorProperty.register(DrawingPadCommon);
    
export const penWidthProperty = new Property<DrawingPadCommon, string>({name: 'penWidth', defaultValue: '3'});
penWidthProperty.register(DrawingPadCommon);
