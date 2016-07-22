export const svgTemplate = `
    <!-- Origin is at top left of bit 7 led light bar -->
    <svg:g *ngFor="let i of [7,6,5,4,3,2,1,0]">
        <svg:title>Data Bus Display</svg:title>
        <svg:rect [attr.x]="126-(18*i)" y="0" width="17" height="17" class="indRed" [class.on]="value.bit(i)" />
        <svg:rect [attr.x]="126-(18*i)" y="0" width="17" height="17" class="indOutline" />
        <svg:text [attr.transform]="'translate(' + (126 - (i * 18) + 0.98242) + ' 2.406845)'" fill="black">
            <svg:tspan class="d-text10" x="4.8279335" y="10">{{i}}</svg:tspan>
        </svg:text>
    </svg:g>
`;
