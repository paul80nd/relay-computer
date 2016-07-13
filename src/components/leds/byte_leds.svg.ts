export const svgTemplate = `
    <!-- Origin is at centre of bit 7 led -->
    <svg:g *ngFor="let i of [7,6,5,4,3,2,1,0]">
        <svg:circle [attr.cx]="77-(11*i)" cy="0" r="4" class="ledRed" [class.on]="value.bit(i)"></svg:circle>
        <svg:circle [attr.cx]="77-(11*i)" cy="0" r="4" class="ledOutline"></svg:circle>
    </svg:g>
`;
