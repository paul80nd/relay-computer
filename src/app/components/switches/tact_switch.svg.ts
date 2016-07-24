export const svgTemplate = `
    <!-- Origin is at top left of switch -->
    <svg:g class="clickable" (click)="flipBit()">
        <svg:rect x="0" y="0" width="22" height="22" fill="#bbb" />
        <svg:rect x="0" y="0" width="22" height="22" class="btnOutline" />
        <svg:rect x="2" y="2" width="18" height="18" [ngClass]="'btn'+color" 
            [class.on]="part.value.bit(bitTarget) || (valueIn && valueIn.bit(bitTarget))" />
        <svg:rect x="2" y="2" width="18" height="18" class="btnOutline" />
        <svg:text *ngIf="description[1]" transform="translate(2 4)" fill="black">
            <svg:tspan class="d-text7" x="11" y="6" text-anchor="middle">{{description[0]}}</svg:tspan>
            <svg:tspan class="d-text7" x="9" y="13" text-anchor="middle">{{description[1]}}</svg:tspan>
        </svg:text>
        <svg:text *ngIf="!description[1]" transform="translate(2 4)" fill="black">
            <svg:tspan class="d-text7" x="9" y="9.5" text-anchor="middle">{{description[0]}}</svg:tspan>
        </svg:text>
    </svg:g>
`;