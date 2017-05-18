export const svgTemplate = `
    <!-- Origin is at center of first (LD) led -->
    <svg:title>Register {{registerName}}</svg:title>

    <svg:rect x="-4" y="7" width="218" height="5" fill="white" />
    
    <svg:circle cx="0" cy="0" r="4" class="ledYellow" [class.on]="register.load" />
    <svg:circle cx="0" cy="0" r="4" class="ledOutline" />
    <svg:text transform="translate(-4 7)" fill="black">
        <svg:tspan class="d-text4" fill="black" x="1.7753906" y="3.75">Ld</svg:tspan>
    </svg:text>

    <svg:g *ngIf="register.isSelectable">
        <svg:circle cx="209" cy="0" r="4" class="ledGreen" [class.on]="register.select" />
        <svg:circle cx="209" cy="0" r="4" class="ledOutline" />
        <svg:text transform="translate(204 7)" fill="black">
            <svg:tspan class="d-text4" x="2.109375" y="3.75">Sel</svg:tspan>
        </svg:text>
    </svg:g>
    
    <svg:g rc-dbl-byte-leds [value]="register.value.value" transform="translate(22,0)"></svg:g>
    
    <svg:text transform="translate(18 7)" fill="black">
        <svg:tspan class="d-text4" fill="black" x="86" y="3.75" text-anchor="middle">{{description}}</svg:tspan>
    </svg:text>
`;