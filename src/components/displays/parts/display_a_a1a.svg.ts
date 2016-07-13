export const svgTemplate = `
    <!-- Origin at top left switch -->
    <svg:g tact-switch [value]="value" [description]="['ld','A']" [color]="'Yellow'" [bitTarget]="ldALine" 
        transform="translate(0,0)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['ld','B']" [color]="'Yellow'" [bitTarget]="ldBLine" 
        transform="translate(23,0)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['ld','C']" [color]="'Yellow'" [bitTarget]="ldCLine" 
        transform="translate(46,0)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['ld','D']" [color]="'Yellow'" [bitTarget]="ldDLine" 
        transform="translate(69,0)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['sel','A']" [color]="'Green'" [bitTarget]="selALine" 
        transform="translate(0,23)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['sel','B']" [color]="'Green'" [bitTarget]="selBLine" 
        transform="translate(23,23)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['sel','C']" [color]="'Green'" [bitTarget]="selCLine" 
        transform="translate(46,23)"></svg:g>
    <svg:g tact-switch [value]="value" [description]="['sel','D']" [color]="'Green'" [bitTarget]="selDLine" 
        transform="translate(69,23)"></svg:g>  
`;
