export const svgTemplate = `
    <!-- Origin at top left gap for switch -->
    <svg:g tact-switch [value]="value" [description]="['ADD']" [color]="'Yellow'" [bitTarget]="addLine" 
        transform="translate(23,0)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['INC']" [color]="'Yellow'" [bitTarget]="incLine" 
        transform="translate(46,0)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['SHL']" [color]="'Yellow'" [bitTarget]="shlLine" 
        transform="translate(69,0)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['AND']" [color]="'Yellow'" [bitTarget]="andLine" 
        transform="translate(0,23)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['OR']" [color]="'Yellow'" [bitTarget]="orrLine" 
        transform="translate(23,23)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['XOR']" [color]="'Yellow'" [bitTarget]="xorLine" 
        transform="translate(46,23)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['NOT']" [color]="'Yellow'" [bitTarget]="notLine" 
        transform="translate(69,23)"></svg:g>
`;
