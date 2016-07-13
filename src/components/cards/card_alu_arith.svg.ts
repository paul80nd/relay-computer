export const svgTemplate = `
    <!-- Origin at bay top left -->
    <svg:title>ALU Arithmetic Card</svg:title>
    <svg:circle cx="58" cy="25" r="4" class="ledGreen" [class.on]="card.carryOut" />
    <svg:circle cx="58" cy="25" r="4" class="ledOutline" />
    <svg:rect x="53" y="32" width="10" height="5" fill="white" />
    <svg:text transform="translate(53 32)" fill="black">
        <svg:tspan class="d-text4" x=".33203125" y="4">COut</svg:tspan>
    </svg:text>
    <svg:g byte-leds [value]="card.value" transform="translate(80,25)"></svg:g>
    <svg:rect x="76" y="32" width="85" height="5" fill="white" />
    <svg:text transform="translate(76 32)" fill="black">
        <svg:tspan class="d-text4" x="34.606445" y="4">Add / Inc</svg:tspan>
    </svg:text>
    <svg:circle cx="179" cy="25" r="4" class="ledYellow" [class.on]="card.carryIn" />
    <svg:circle cx="179" cy="25" r="4" class="ledOutline" />
    <svg:rect x="175" y="32" width="8" height="5" fill="white" />
    <svg:text transform="translate(175 32)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">CIn</svg:tspan>
    </svg:text>
`;
