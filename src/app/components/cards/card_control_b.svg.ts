export const svgTemplate = `
    <!-- Origin at bay top left -720,-355 -->
    <svg:title>Control Card B</svg:title>

    <svg:rect x="9" y="3" width="176" height="5" fill="white" />
    <svg:rect x="9" y="32" width="43" height="5" fill="white" />
 
    <svg:circle cx="14" cy="14" r="4" class="ledYellow" [class.on]="card.regABCD.bit(ldALine)" />
    <svg:circle cx="14" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="25" cy="14" r="4" class="ledYellow" [class.on]="card.regABCD.bit(ldBLine)" />
    <svg:circle cx="25" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="36" cy="14" r="4" class="ledYellow" [class.on]="card.regABCD.bit(ldCLine)" />
    <svg:circle cx="36" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="47" cy="14" r="4" class="ledYellow" [class.on]="card.regABCD.bit(ldDLine)" />
    <svg:circle cx="47" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="14" cy="25" r="4" class="ledGreen" [class.on]="card.regABCD.bit(selALine)" />
    <svg:circle cx="14" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="25" cy="25" r="4" class="ledGreen" [class.on]="card.regABCD.bit(selBLine)" />
    <svg:circle cx="25" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="36" cy="25" r="4" class="ledGreen" [class.on]="card.regABCD.bit(selCLine)" />
    <svg:circle cx="36" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="47" cy="25" r="4" class="ledGreen" [class.on]="card.regABCD.bit(selDLine)" />
    <svg:circle cx="47" cy="25" r="4" class="ledOutline" />
    <svg:text transform="translate(9 3)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">RLA</svg:tspan>
    </svg:text>
    <svg:text transform="translate(20 3)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">RLB</svg:tspan>
    </svg:text>
    <svg:text transform="translate(31 3)" fill="black">
        <svg:tspan class="d-text4" x=".99902344" y="4">RLC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(42 3)" fill="black">
        <svg:tspan class="d-text4" x=".99902344" y="4">RLD</svg:tspan>
    </svg:text>
    <svg:text transform="translate(9 32)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">RSA</svg:tspan>
    </svg:text>
    <svg:text transform="translate(20 32)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">RSB</svg:tspan>
    </svg:text>
    <svg:text transform="translate(31 32)" fill="black">
        <svg:tspan class="d-text4" x=".77734375" y="4">RSC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(42 32)" fill="black">
        <svg:tspan class="d-text4" x=".77734375" y="4">RSD</svg:tspan>
    </svg:text>

    <svg:circle cx="179" cy="14" r="4" class="ledYellow" [class.on]="card.aluFunc.bit(clLine)" />
    <svg:circle cx="179" cy="14" r="4" class="ledOutline" />
    <svg:text transform="translate(174 3)" fill="black">
        <svg:tspan class="d-text4" x="2.4433594" y="4">CL</svg:tspan>
    </svg:text>

    <!--
    <svg:circle cx="58" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="58" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="69" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="69" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="91" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="91" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="102" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="102" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="135" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="135" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="124" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="124" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="190" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="190" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="201" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="201" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="146" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="146" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="168" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="168" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="80" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="80" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="91" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="91" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="102" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="102" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="113" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="113" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="135" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="135" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="124" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="124" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="190" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="190" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="201" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="201" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="212" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="212" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="223" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="223" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="146" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="146" cy="25" r="4" class="ledOutline" />
    <svg:text transform="translate(53 3)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">LJ1</svg:tspan>
    </svg:text>
    <svg:text transform="translate(64 3)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="4">LJ2</svg:tspan>
    </svg:text>
    <svg:text transform="translate(86 3)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">LM1</svg:tspan>
    </svg:text>
    <svg:text transform="translate(97 3)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">LM2</svg:tspan>
    </svg:text>
    <svg:text transform="translate(119 3)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">LDX</svg:tspan>
    </svg:text>
    <svg:text transform="translate(130 3)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">LDY</svg:tspan>
    </svg:text>
    <svg:text transform="translate(141 3)" fill="black">
        <svg:tspan class="d-text4" x="1.21972656" y="4">LXY</svg:tspan>
    </svg:text>
    <svg:text transform="translate(163 3)" fill="black">
        <svg:tspan class="d-text4" x="1.8876953" y="4">LIN</svg:tspan>
    </svg:text>
    <svg:text transform="translate(185 3)" fill="black">
        <svg:tspan class="d-text4" x="1.8876953" y="4">LIC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(196 3)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="4">LPC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(175 32)" fill="black">
        <svg:tspan class="d-text4" x="1.33203125" y="4">SEJ</svg:tspan>
    </svg:text>
    <svg:text transform="translate(186 32)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">SM1</svg:tspan>
    </svg:text>
    <svg:text transform="translate(197 32)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">SM2</svg:tspan>
    </svg:text>
    <svg:text transform="translate(119 32)" fill="black">
        <svg:tspan class="d-text4" x=".9980469" y="4">SEX</svg:tspan>
    </svg:text>
    <svg:text transform="translate(130 32)" fill="black">
        <svg:tspan class="d-text4" x=".9980469" y="4">SEY</svg:tspan>
    </svg:text>
    <svg:text transform="translate(141 32)" fill="black">
        <svg:tspan class="d-text4" x=".9980469" y="4">SXY</svg:tspan>
    </svg:text>
    <svg:text transform="translate(185 32)" fill="black">
        <svg:tspan class="d-text4" x="1.6660156" y="4">SIC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(196 32)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">SPC</svg:tspan>
    </svg:text>
    <svg:text transform="translate(108 32)" fill="black">
        <svg:tspan class="d-text4" x=".66601562" y="4">SEM</svg:tspan>
    </svg:text>
    <svg:text transform="translate(207 32)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="4">SDS</svg:tspan>
    </svg:text>
    <svg:text transform="translate(218 32)" fill="black">
        <svg:tspan class="d-text4" x=".9980469" y="4">SAS</svg:tspan>
    </svg:text>
    -->
`;