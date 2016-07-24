export const svgTemplate = `
    <!-- Origin at bay top left -->
    <svg:title>Control Card A</svg:title>

    <svg:circle cx="14" cy="25" r="4" class="ledYellow" [class.on]="card.abort.bit(at08Line)" />
    <svg:circle cx="14" cy="25" r="4" class="ledOutline" />
    <!--
    <svg:circle cx="25" cy="25" r="4" class="ledYellow" />
    <svg:circle cx="25" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="36" cy="25" r="4" class="ledYellow" />
    <svg:circle cx="36" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="47" cy="25" r="4" class="ledYellow" />
    <svg:circle cx="47" cy="25" r="4" class="ledOutline" />
    -->
    <svg:rect x="10" y="32" width="53" height="5" fill="white" />
    <svg:text transform="translate(10 32)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">08</svg:tspan>
    </svg:text>
    <!--
    <svg:text transform="translate(21 32)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">10</svg:tspan>
    </svg:text>
    <svg:text transform="translate(32 32)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">12</svg:tspan>
    </svg:text>
    <svg:text transform="translate(43 32)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">14</svg:tspan>
    </svg:text>
    -->
    <svg:text transform="translate(54 32)" fill="black">
        <svg:tspan class="d-text4" x=".11035156" y="4">ABT</svg:tspan>
    </svg:text>

    <!--
    <svg:circle cx="97" cy="25" r="4" class="ledYellow" />
    <svg:circle cx="97" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="108" cy="25" r="4" class="ledYellow" />
    <svg:circle cx="108" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="119" cy="25" r="4" class="ledYellow" />
    <svg:circle cx="119" cy="25" r="4" class="ledOutline" />
    -->
    <svg:circle cx="130" cy="25" r="4" class="ledYellow" [class.on]="card.i2b.bit(i2bLine)" />
    <svg:circle cx="130" cy="25" r="4" class="ledOutline" />
    <svg:rect x="92" y="32" width="54" height="5" fill="white" />
    <!--
    <svg:text transform="translate(92 32)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">B2M</svg:tspan>
    </svg:text>
    <svg:text transform="translate(103 32)" fill="black">
        <svg:tspan class="d-text4" x=".55566406" y="4">MER</svg:tspan>
    </svg:text>
    <svg:text transform="translate(114 32)" fill="black">
        <svg:tspan class="d-text4" x=".11230469" y="4">MEW</svg:tspan>
    </svg:text>
    -->
    <svg:text transform="translate(125 32)" fill="black">
        <svg:tspan class="d-text4" x="1.9980469" y="4">I2B</svg:tspan>
    </svg:text>
    <svg:text transform="translate(135 32)" fill="black">
        <svg:tspan class="d-text4" x=".83398438" y="4">MEM</svg:tspan>
    </svg:text>

    <!--
    <svg:circle cx="190" cy="25" r="4" class="ledYellow" />
    <svg:circle cx="190" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="201" cy="25" r="4" class="ledYellow" />
    <svg:circle cx="201" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="179" cy="25" r="4" class="ledYellow" />
    <svg:circle cx="179" cy="25" r="4" class="ledOutline" />
    <svg:rect x="175" y="32" width="43" height="5" fill="white" />
    <svg:text transform="translate(175 32)" fill="black">
        <svg:tspan class="d-text4" x="1.6660156" y="4">F2</svg:tspan>
    </svg:text>
    <svg:text transform="translate(186 32)" fill="black">
        <svg:tspan class="d-text4" x="1.6660156" y="4">F1</svg:tspan>
    </svg:text>
    <svg:text transform="translate(197 32)" fill="black">
        <svg:tspan class="d-text4" x="1.6660156" y="4">F0</svg:tspan>
    </svg:text>
    <svg:text transform="translate(207 32)" fill="black">
        <svg:tspan class="d-text4" x="1.609375" y="4">ALU</svg:tspan>
    </svg:text>
    -->
`;