export const svgTemplate = `
    <!-- Origin at bay top left -720,-275 -->

    <svg:rect x="730" y="307" width="96" height="5" fill="white" />
    <svg:g *ngFor="let i of [0,1,2,3,4,5,6,7,8]">
        <svg:circle [attr.cx]="734+(11*i)" cy="300" r="4" class="ledRed" [class.on]="card.fsm.bit(i)" />
        <svg:circle [attr.cx]="734+(11*i)" cy="300" r="4" class="ledOutline" />
        <svg:text [attr.transform]="'translate(' + (730 + (i * 11)) + ' 307)'" fill="black">
            <svg:tspan class="d-text4" x=".44140625" y="4">S0{{i}}</svg:tspan>
        </svg:text>
    </svg:g>
    <!--
    <svg:g *ngFor="let i of [10,11,12]">
        <svg:circle [attr.cx]="734+(11*i)" cy="300" r="4" class="ledRed" [class.on]="card.fsm.bit(i)" />
        <svg:circle [attr.cx]="734+(11*i)" cy="300" r="4" class="ledOutline" />
        <svg:text [attr.transform]="'translate(' + (730 + (i * 11)) + ' 307)'" fill="black">
            <svg:tspan class="d-text4" x=".44140625" y="4">S{{i}}</svg:tspan>
        </svg:text>
    </svg:g>
    -->    

    <svg:circle cx="822" cy="289" r="4" class="ledYellow" />
    <svg:circle cx="822" cy="289" r="4" class="ledOutline" />
    <!--
    <svg:circle cx="844" cy="289" r="4" class="ledYellow" />
    <svg:circle cx="844" cy="289" r="4" class="ledOutline" />
    <svg:circle cx="866" cy="289" r="4" class="ledYellow" />
    <svg:circle cx="866" cy="289" r="4" class="ledOutline" />
    -->
    <svg:rect x="815" y="278" width="14" height="5" fill="white" />
    <svg:text transform="translate(815 278)" fill="black">
        <svg:tspan class="d-text4" x=".8857422" y="4">ABT08</svg:tspan>
    </svg:text>
    <!--
    <svg:rect x="837" y="278" width="14" height="5" fill="white" />
    <svg:text transform="translate(837 278)" fill="black">
        <svg:tspan class="d-text4" x=".8857422" y="4">ABT10</svg:tspan>
    </svg:text>
    <svg:rect x="859" y="278" width="14" height="5" fill="white" />
    <svg:text transform="translate(859 278)" fill="black">
        <svg:tspan class="d-text4" x=".8857422" y="4">ABT12</svg:tspan>
    </svg:text>
    -->

    <!--
    <svg:circle cx="888" cy="289" r="4" class="ledGreen" />
    <svg:circle cx="888" cy="289" r="4" class="ledOutline" />
    <svg:circle cx="888" cy="300" r="4" class="ledGreen" />
    <svg:circle cx="888" cy="300" r="4" class="ledOutline" />
    -->
    <svg:circle cx="899" cy="300" r="4" class="ledGreen" [class.on]="card.pulse.bit(2)" />
    <svg:circle cx="899" cy="300" r="4" class="ledOutline" />
    <svg:circle cx="899" cy="289" r="4" class="ledGreen" [class.on]="card.pulse.bit(3)" />
    <svg:circle cx="899" cy="289" r="4" class="ledOutline" />
    <svg:circle cx="910" cy="300" r="4" class="ledGreen" [class.on]="card.pulse.bit(4)" />
    <svg:circle cx="910" cy="300" r="4" class="ledOutline" />
    <!--
    <svg:circle cx="921" cy="289" r="4" class="ledGreen" />
    <svg:circle cx="921" cy="289" r="4" class="ledOutline" />
    <svg:circle cx="921" cy="300" r="4" class="ledGreen" />
    <svg:circle cx="921" cy="300" r="4" class="ledOutline" />
    <svg:circle cx="932" cy="289" r="4" class="ledGreen" />
    <svg:circle cx="932" cy="289" r="4" class="ledOutline" />
    <svg:circle cx="932" cy="300" r="4" class="ledGreen" />
    <svg:circle cx="932" cy="300" r="4" class="ledOutline" />
    <svg:circle cx="943" cy="289" r="4" class="ledGreen" />
    <svg:circle cx="943" cy="289" r="4" class="ledOutline" />
    <svg:circle cx="943" cy="300" r="4" class="ledGreen" />
    <svg:circle cx="943" cy="300" r="4" class="ledOutline" />
    -->
    <svg:rect x="895" y="278" width="8" height="5" fill="white" />
    <svg:rect x="895" y="307" width="19" height="5" fill="white" />
    <!--
    <svg:text transform="translate(884 307)" fill="black">
        <svg:tspan class="d-text4" x="2.6660156" y="4">A</svg:tspan>
    </svg:text>
    <svg:text transform="translate(884 278)" fill="black">
        <svg:tspan class="d-text4" x="2.6660156" y="4">B</svg:tspan>
    </svg:text>
    -->
    <svg:text transform="translate(895 307)" fill="black">
        <svg:tspan class="d-text4" x="2.555664" y="4">C</svg:tspan>
    </svg:text>
    <svg:text transform="translate(895 278)" fill="black">
        <svg:tspan class="d-text4" x="2.555664" y="4">D</svg:tspan>
    </svg:text>
    <svg:text transform="translate(906 307)" fill="black">
        <svg:tspan class="d-text4" x="2.6660156" y="4">E</svg:tspan>
    </svg:text>
    <!--
    <svg:text transform="translate(917 307)" fill="black">
        <svg:tspan class="d-text4" x="2.7783203" y="4">F</svg:tspan>
    </svg:text>
    <svg:text transform="translate(917 278)" fill="black">
        <svg:tspan class="d-text4" x="2.444336" y="4">G</svg:tspan>
    </svg:text>
    <svg:text transform="translate(928 307)" fill="black">
        <svg:tspan class="d-text4" x="2.555664" y="4">H</svg:tspan>
    </svg:text>
    <svg:text transform="translate(928 278)" fill="black">
        <svg:tspan class="d-text4" x="3.444336" y="4">I</svg:tspan>
    </svg:text>
    <svg:text transform="translate(939 307)" fill="black">
        <svg:tspan class="d-text4" x="3" y="4">J</svg:tspan>
    </svg:text>
    <svg:text transform="translate(939 278)" fill="black">
        <svg:tspan class="d-text4" x="2.6660156" y="4">K</svg:tspan>
    </svg:text>
    -->
`;
