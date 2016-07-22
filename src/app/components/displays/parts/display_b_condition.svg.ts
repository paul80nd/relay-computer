export const svgTemplate = `
    <!-- Origin at top left led light bar -->
    <svg:rect x="0" y="0" width="17" height="17" class="indGreen" [class.on]="value.bit(snLine)" />
    <svg:rect x="0" y="0" width="17" height="17" class="indOutline" />
    <svg:text transform="translate(0.86242 2.406845)" fill="black">
        <svg:tspan class="d-text10" x="4.2737343" y="10">S</svg:tspan>
    </svg:text>

    <svg:rect x="18" y="0" width="17" height="17" class="indGreen" [class.on]="value.bit(cyLine)" />
    <svg:rect x="18" y="0" width="17" height="17" class="indOutline" />
    <svg:text transform="translate(18.86242 2.406845)" fill="black">
        <svg:tspan class="d-text10" x="3.9978553" y="10">C</svg:tspan>
    </svg:text>

    <svg:rect x="36" y="0" width="17" height="17" class="indGreen" [class.on]="value.bit(ezLine)" />
    <svg:rect x="36" y="0" width="17" height="17" class="indOutline" />
    <svg:text transform="translate(36.86242 2.406845)" fill="black">
        <svg:tspan class="d-text10" x="4.554496" y="10">Z</svg:tspan>
    </svg:text>    
`;
