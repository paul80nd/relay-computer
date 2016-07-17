export const svgTemplate = `
    <!-- Origin at bay top left -->
    <svg:title>Sequencer Card B</svg:title>

    <svg:rect x="10" y="32" width="96" height="5" fill="white" />
    <svg:g *ngFor="let i of [0,1,2,3,4,5,6,7,8]">
        <svg:circle [attr.cx]="14+(11*i)" cy="25" r="4" class="ledRed" [class.on]="card.fsm.bit(i)" />
        <svg:circle [attr.cx]="14+(11*i)" cy="25" r="4" class="ledOutline" />
        <svg:text [attr.transform]="'translate(' + (10 + (i * 11)) + ' 32)'" fill="black">
            <svg:tspan class="d-text4" x=".44140625" y="4">S0{{i}}</svg:tspan>
        </svg:text>
    </svg:g>
    <!--
    <svg:g *ngFor="let i of [10,11,12]">
        <svg:circle [attr.cx]="14+(11*i)" cy="25" r="4" class="ledRed" [class.on]="card.fsm.bit(i)" />
        <svg:circle [attr.cx]="14+(11*i)" cy="25" r="4" class="ledOutline" />
        <svg:text [attr.transform]="'translate(' + (10 + (i * 11)) + ' 32)'" fill="black">
            <svg:tspan class="d-text4" x=".44140625" y="4">S{{i}}</svg:tspan>
        </svg:text>
    </svg:g>
    -->    

    <svg:circle cx="102" cy="14" r="4" class="ledYellow" [class.on]="card.abort.bit(at08Line)" />
    <svg:circle cx="102" cy="14" r="4" class="ledOutline" />
    <!--
    <svg:circle cx="124" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="124" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="146" cy="14" r="4" class="ledYellow" />
    <svg:circle cx="146" cy="14" r="4" class="ledOutline" />
    -->
    <svg:rect x="95" y="3" width="14" height="5" fill="white" />
    <svg:text transform="translate(95 3)" fill="black">
        <svg:tspan class="d-text4" x=".8857422" y="4">ABT08</svg:tspan>
    </svg:text>
    <!--
    <svg:rect x="117" y="3" width="14" height="5" fill="white" />
    <svg:text transform="translate(117 3)" fill="black">
        <svg:tspan class="d-text4" x=".8857422" y="4">ABT10</svg:tspan>
    </svg:text>
    <svg:rect x="139" y="3" width="14" height="5" fill="white" />
    <svg:text transform="translate(139 3)" fill="black">
        <svg:tspan class="d-text4" x=".8857422" y="4">ABT12</svg:tspan>
    </svg:text>
    -->

    <!--
    <svg:circle cx="168" cy="14" r="4" class="ledGreen" />
    <svg:circle cx="168" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="168" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="168" cy="25" r="4" class="ledOutline" />
    -->
    <svg:circle cx="179" cy="25" r="4" class="ledGreen" [class.on]="card.pulse.bit(2)" />
    <svg:circle cx="179" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="179" cy="14" r="4" class="ledGreen" [class.on]="card.pulse.bit(3)" />
    <svg:circle cx="179" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="190" cy="25" r="4" class="ledGreen" [class.on]="card.pulse.bit(4)" />
    <svg:circle cx="190" cy="25" r="4" class="ledOutline" />
    <!--
    <svg:circle cx="201" cy="14" r="4" class="ledGreen" />
    <svg:circle cx="201" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="201" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="201" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="212" cy="14" r="4" class="ledGreen" />
    <svg:circle cx="212" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="212" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="212" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="223" cy="14" r="4" class="ledGreen" />
    <svg:circle cx="223" cy="14" r="4" class="ledOutline" />
    <svg:circle cx="223" cy="25" r="4" class="ledGreen" />
    <svg:circle cx="223" cy="25" r="4" class="ledOutline" />
    -->
    <svg:rect x="175" y="3" width="8" height="5" fill="white" />
    <svg:rect x="175" y="32" width="19" height="5" fill="white" />
    <!--
    <svg:text transform="translate(164 32)" fill="black">
        <svg:tspan class="d-text4" x="2.6660156" y="4">A</svg:tspan>
    </svg:text>
    <svg:text transform="translate(164 3)" fill="black">
        <svg:tspan class="d-text4" x="2.6660156" y="4">B</svg:tspan>
    </svg:text>
    -->
    <svg:text transform="translate(175 32)" fill="black">
        <svg:tspan class="d-text4" x="2.555664" y="4">C</svg:tspan>
    </svg:text>
    <svg:text transform="translate(175 3)" fill="black">
        <svg:tspan class="d-text4" x="2.555664" y="4">D</svg:tspan>
    </svg:text>
    <svg:text transform="translate(186 32)" fill="black">
        <svg:tspan class="d-text4" x="2.6660156" y="4">E</svg:tspan>
    </svg:text>
    <!--
    <svg:text transform="translate(197 32)" fill="black">
        <svg:tspan class="d-text4" x="2.7783203" y="4">F</svg:tspan>
    </svg:text>
    <svg:text transform="translate(197 3)" fill="black">
        <svg:tspan class="d-text4" x="2.444336" y="4">G</svg:tspan>
    </svg:text>
    <svg:text transform="translate(208 32)" fill="black">
        <svg:tspan class="d-text4" x="2.555664" y="4">H</svg:tspan>
    </svg:text>
    <svg:text transform="translate(208 3)" fill="black">
        <svg:tspan class="d-text4" x="3.444336" y="4">I</svg:tspan>
    </svg:text>
    <svg:text transform="translate(219 32)" fill="black">
        <svg:tspan class="d-text4" x="3" y="4">J</svg:tspan>
    </svg:text>
    <svg:text transform="translate(219 3)" fill="black">
        <svg:tspan class="d-text4" x="2.6660156" y="4">K</svg:tspan>
    </svg:text>
    -->
`;
