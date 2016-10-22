export const svgTemplate = `
    <!-- Origin at bay top left -->
    <svg:title>ALU Logic Card</svg:title>
    
    <svg:g rc-byte-stacked-leds [value]="card.notValue" transform="translate(14,14)"></svg:g>
    <svg:rect x="10" y="3" width="41" height="5" fill="white" />
    <svg:text transform="translate(10 3)" fill="black">
        <svg:tspan class="d-text4" x="13.72168" y="4">Not - Hi</svg:tspan>
    </svg:text>
    <svg:rect x="10" y="32" width="41" height="5" fill="white" />
    <svg:text transform="translate(10 32)" fill="black">
        <svg:tspan class="d-text4" x="13.385742" y="4">Not - Lo</svg:tspan>
    </svg:text>
    
    <svg:g rc-byte-stacked-leds [value]="card.shlValue" transform="translate(58,14)"></svg:g>
    <svg:rect x="54" y="3" width="41" height="5" fill="white" />
    <svg:text transform="translate(54 3)" fill="black">
        <svg:tspan class="d-text4" x="13.943359" y="4">Shl - Hi</svg:tspan>
    </svg:text>
    <svg:rect x="54" y="32" width="41" height="5" fill="white" />
    <svg:text transform="translate(54 32)" fill="black">
        <svg:tspan class="d-text4" x="13.607422" y="4">Shl - Lo</svg:tspan>
    </svg:text>
    <svg:g rc-byte-stacked-leds [value]="card.orValue" transform="translate(102,14)"></svg:g>
    <svg:rect x="98" y="3" width="41" height="5" fill="white" />
    <svg:text transform="translate(98 3)" fill="black">
        <svg:tspan class="d-text4" x="14.612305" y="4">Or - Hi</svg:tspan>
    </svg:text>
    <svg:rect x="98" y="32" width="41" height="5" fill="white" />
    <svg:text transform="translate(98 32)" fill="black">
        <svg:tspan class="d-text4" x="14.276367" y="4">Or - Lo</svg:tspan>
    </svg:text>
    <svg:g rc-byte-stacked-leds [value]="card.xorValue" transform="translate(146,14)"></svg:g>
    <svg:rect x="142" y="3" width="41" height="5" fill="white" />
    <svg:text transform="translate(142 3)" fill="black">
        <svg:tspan class="d-text4" x="13.72168" y="4">Xor - Hi</svg:tspan>
    </svg:text>
    <svg:rect x="142" y="32" width="41" height="5" fill="white" />
    <svg:text transform="translate(142 32)" fill="black">
        <svg:tspan class="d-text4" x="13.385742" y="4">Xor - Lo</svg:tspan>
    </svg:text>
    <svg:g rc-byte-stacked-leds [value]="card.andValue" transform="translate(190,14)"></svg:g>
    <svg:rect x="186" y="3" width="41" height="5" fill="white" />
    <svg:text transform="translate(186 3)" fill="black">
        <svg:tspan class="d-text4" x="13.275391" y="4">And - Hi</svg:tspan>
    </svg:text><svg:rect x="186" y="32" width="41" height="5" fill="white" />
    <svg:text transform="translate(186 32)" fill="black">
        <svg:tspan class="d-text4" x="12.939453" y="4">And - Lo</svg:tspan>
    </svg:text>
`;
