export const svgTemplate = `
    <!-- Origin at bay top left -720,-235 -->
    <svg:title>Control Card A</svg:title>

    <svg:circle cx="734" cy="340" r="4" class="ledYellow" [class.on]="card.abort.bit(at08Line)" />
    <svg:circle cx="734" cy="340" r="4" class="ledOutline" />
    <svg:circle cx="745" cy="340" r="4" class="ledYellow" />
    <svg:circle cx="745" cy="340" r="4" class="ledOutline" />
    <svg:circle cx="756" cy="340" r="4" class="ledYellow" />
    <svg:circle cx="756" cy="340" r="4" class="ledOutline" />
    <svg:circle cx="767" cy="340" r="4" class="ledYellow" />
    <svg:circle cx="767" cy="340" r="4" class="ledOutline" />
    <svg:rect x="730" y="347" width="53" height="5" fill="white" />
    <svg:text transform="translate(730 347)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">08</svg:tspan>
    </svg:text>
    <svg:text transform="translate(741 347)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">10</svg:tspan>
    </svg:text>
    <svg:text transform="translate(752 347)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">12</svg:tspan>
    </svg:text>
    <svg:text transform="translate(763 347)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">14</svg:tspan>
    </svg:text>
    <svg:text transform="translate(774 347)" fill="black">
        <svg:tspan class="d-text4" x=".11035156" y="4">ABT</svg:tspan>
    </svg:text>

    <!--
    <svg:circle cx="817" cy="340" r="4" class="ledYellow" />
    <svg:circle cx="817" cy="340" r="4" class="ledOutline" />
    <svg:circle cx="828" cy="340" r="4" class="ledYellow" />
    <svg:circle cx="828" cy="340" r="4" class="ledOutline" />
    <svg:circle cx="839" cy="340" r="4" class="ledYellow" />
    <svg:circle cx="839" cy="340" r="4" class="ledOutline" />
    <svg:circle cx="850" cy="340" r="4" class="ledYellow" />
    <svg:circle cx="850" cy="340" r="4" class="ledOutline" />
    <svg:rect x="812" y="347" width="54" height="5" fill="white" />
    <svg:text transform="translate(812 347)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">B2M</svg:tspan>
    </svg:text>
    <svg:text transform="translate(823 347)" fill="black">
        <svg:tspan class="d-text4" x=".55566406" y="4">MER</svg:tspan>
    </svg:text>
    <svg:text transform="translate(834 347)" fill="black">
        <svg:tspan class="d-text4" x=".11230469" y="4">MEW</svg:tspan>
    </svg:text>
    <svg:text transform="translate(845 347)" fill="black">
        <svg:tspan class="d-text4" x="1.9980469" y="4">I2B</svg:tspan>
    </svg:text>
    <svg:text transform="translate(855 347)" fill="black">
        <svg:tspan class="d-text4" x=".83398438" y="4">MEM</svg:tspan>
    </svg:text>
    <svg:circle cx="910" cy="340" r="4" class="ledYellow" />
    <svg:circle cx="910" cy="340" r="4" class="ledOutline" />
    <svg:circle cx="921" cy="340" r="4" class="ledYellow" />
    <svg:circle cx="921" cy="340" r="4" class="ledOutline" />
    <svg:circle cx="899" cy="340" r="4" class="ledYellow" />
    <svg:circle cx="899" cy="340" r="4" class="ledOutline" />
    <svg:rect x="895" y="347" width="43" height="5" fill="white" />
    <svg:text transform="translate(895 347)" fill="black">
        <svg:tspan class="d-text4" x="1.6660156" y="4">F2</svg:tspan>
    </svg:text>
    <svg:text transform="translate(906 347)" fill="black">
        <svg:tspan class="d-text4" x="1.6660156" y="4">F1</svg:tspan>
    </svg:text>
    <svg:text transform="translate(917 347)" fill="black">
        <svg:tspan class="d-text4" x="1.6660156" y="4">F0</svg:tspan>
    </svg:text>
    <svg:text transform="translate(927 347)" fill="black">
        <svg:tspan class="d-text4" x="1.609375" y="4">ALU</svg:tspan>
    </svg:text>
    -->
`;
