export const svgTemplate = `
    <!-- Origin at bay top left -720,-235 -->
    <svg:title>Control Card B</svg:title>

    <svg:rect x="729" y="358" width="176" height="5" fill="white" />
    <svg:rect x="729" y="387" width="43" height="5" fill="white" />
 
    <svg:circle cx="734" cy="369" r="4" class="ledYellow" [class.on]="card.regABCD.bit(ldALine)" />
    <svg:circle cx="734" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="745" cy="369" r="4" class="ledYellow" [class.on]="card.regABCD.bit(ldBLine)" />
    <svg:circle cx="745" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="756" cy="369" r="4" class="ledYellow" [class.on]="card.regABCD.bit(ldCLine)" />
    <svg:circle cx="756" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="767" cy="369" r="4" class="ledYellow" [class.on]="card.regABCD.bit(ldDLine)" />
    <svg:circle cx="767" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="734" cy="380" r="4" class="ledGreen" [class.on]="card.regABCD.bit(selALine)" />
    <svg:circle cx="734" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="745" cy="380" r="4" class="ledGreen" [class.on]="card.regABCD.bit(selBLine)" />
    <svg:circle cx="745" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="756" cy="380" r="4" class="ledGreen" [class.on]="card.regABCD.bit(selCLine)" />
    <svg:circle cx="756" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="767" cy="380" r="4" class="ledGreen" [class.on]="card.regABCD.bit(selDLine)" />
    <svg:circle cx="767" cy="380" r="4" class="ledOutline" />
    <svg:text transform="translate(729 358)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">RLA</svg:tspan>
    </svg:text>
    <svg:text transform="translate(740 358)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">RLB</svg:tspan>
    </svg:text>
    <svg:text transform="translate(751 358)" fill="black">
        <svg:tspan class="d-text4" x=".99902344" y="4">RLC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(762 358)" fill="black">
        <svg:tspan class="d-text4" x=".99902344" y="4">RLD</svg:tspan>
    </svg:text>
    <svg:text transform="translate(729 387)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">RSA</svg:tspan>
    </svg:text>
    <svg:text transform="translate(740 387)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">RSB</svg:tspan>
    </svg:text>
    <svg:text transform="translate(751 387)" fill="black">
        <svg:tspan class="d-text4" x=".77734375" y="4">RSC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(762 387)" fill="black">
        <svg:tspan class="d-text4" x=".77734375" y="4">RSD</svg:tspan>
    </svg:text>

    <svg:circle cx="899" cy="369" r="4" class="ledYellow" [class.on]="card.aluFunc.bit(clLine)" />
    <svg:circle cx="899" cy="369" r="4" class="ledOutline" />
    <svg:text transform="translate(894 358)" fill="black">
        <svg:tspan class="d-text4" x="2.4433594" y="4">CL</svg:tspan>
    </svg:text>

    <!--
    <svg:circle cx="778" cy="369" r="4" class="ledYellow" />
    <svg:circle cx="778" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="789" cy="369" r="4" class="ledYellow" />
    <svg:circle cx="789" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="811" cy="369" r="4" class="ledYellow" />
    <svg:circle cx="811" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="822" cy="369" r="4" class="ledYellow" />
    <svg:circle cx="822" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="855" cy="369" r="4" class="ledYellow" />
    <svg:circle cx="855" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="844" cy="369" r="4" class="ledYellow" />
    <svg:circle cx="844" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="910" cy="369" r="4" class="ledYellow" />
    <svg:circle cx="910" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="921" cy="369" r="4" class="ledYellow" />
    <svg:circle cx="921" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="866" cy="369" r="4" class="ledYellow" />
    <svg:circle cx="866" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="888" cy="369" r="4" class="ledYellow" />
    <svg:circle cx="888" cy="369" r="4" class="ledOutline" />
    <svg:circle cx="800" cy="380" r="4" class="ledGreen" />
    <svg:circle cx="800" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="811" cy="380" r="4" class="ledGreen" />
    <svg:circle cx="811" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="822" cy="380" r="4" class="ledGreen" />
    <svg:circle cx="822" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="833" cy="380" r="4" class="ledGreen" />
    <svg:circle cx="833" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="855" cy="380" r="4" class="ledGreen" />
    <svg:circle cx="855" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="844" cy="380" r="4" class="ledGreen" />
    <svg:circle cx="844" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="910" cy="380" r="4" class="ledGreen" />
    <svg:circle cx="910" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="921" cy="380" r="4" class="ledGreen" />
    <svg:circle cx="921" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="932" cy="380" r="4" class="ledGreen" />
    <svg:circle cx="932" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="943" cy="380" r="4" class="ledGreen" />
    <svg:circle cx="943" cy="380" r="4" class="ledOutline" />
    <svg:circle cx="866" cy="380" r="4" class="ledGreen" />
    <svg:circle cx="866" cy="380" r="4" class="ledOutline" />
    <svg:text transform="translate(773 358)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">LJ1</svg:tspan>
    </svg:text>
    <svg:text transform="translate(784 358)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">LJ2</svg:tspan>
    </svg:text>
    <svg:text transform="translate(806 358)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">LM1</svg:tspan>
    </svg:text>
    <svg:text transform="translate(817 358)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">LM2</svg:tspan>
    </svg:text>
    <svg:text transform="translate(839 358)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">LDX</svg:tspan>
    </svg:text>
    <svg:text transform="translate(850 358)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">LDY</svg:tspan>
    </svg:text>
    <svg:text transform="translate(861 358)" fill="black">
        <svg:tspan class="d-text4" x="1.21972656" y="4">LXY</svg:tspan>
    </svg:text>
    <svg:text transform="translate(883 358)" fill="black">
        <svg:tspan class="d-text4" x="1.8876953" y="4">LIN</svg:tspan>
    </svg:text>
    <svg:text transform="translate(905 358)" fill="black">
        <svg:tspan class="d-text4" x="1.8876953" y="4">LIC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(916 358)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">LPC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(795 387)" fill="black">
        <svg:tspan class="d-text4" x="1.33203125" y="4">SEJ</svg:tspan>
    </svg:text>
    <svg:text transform="translate(806 387)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">SM1</svg:tspan>
    </svg:text>
    <svg:text transform="translate(817 387)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">SM2</svg:tspan>
    </svg:text>
    <svg:text transform="translate(839 387)" fill="black">
        <svg:tspan class="d-text4" x=".9980469" y="4">SEX</svg:tspan>
    </svg:text>
    <svg:text transform="translate(850 387)" fill="black">
        <svg:tspan class="d-text4" x=".9980469" y="4">SEY</svg:tspan>
    </svg:text>
    <svg:text transform="translate(861 387)" fill="black">
        <svg:tspan class="d-text4" x=".9980469" y="4">SXY</svg:tspan>
    </svg:text>
    <svg:text transform="translate(905 387)" fill="black">
        <svg:tspan class="d-text4" x="1.6660156" y="4">SIC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(916 387)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">SPC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(828 387)" fill="black">
        <svg:tspan class="d-text4" x=".66601562" y="4">SEM</svg:tspan>
    </svg:text>
    <svg:text transform="translate(927 387)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">SDS</svg:tspan>
    </svg:text>
    <svg:text transform="translate(938 387)" fill="black">
        <svg:tspan class="d-text4" x=".9980469" y="4">SAS</svg:tspan>
    </svg:text>
    -->
`;
