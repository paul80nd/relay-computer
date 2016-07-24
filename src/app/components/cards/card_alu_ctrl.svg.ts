export const svgTemplate = `
    <!-- Origin at bay top left -->
    <svg:title>ALU Control Card</svg:title>
    <svg:circle cx="14" cy="25" r="4" class="ledYellow" [class.on]="card.func.bit(f2Line)" />
    <svg:circle cx="14" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="25" cy="25" r="4" class="ledYellow" [class.on]="card.func.bit(f1Line)" />
    <svg:circle cx="25" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="36" cy="25" r="4" class="ledYellow" [class.on]="card.func.bit(f0Line)" />
    <svg:circle cx="36" cy="25" r="4" class="ledOutline" />
    <svg:rect x="10" y="32" width="30" height="5" fill="white" />
    <svg:text transform="translate(10 32)" fill="black">
        <svg:tspan class="d-text4" x="10.553711" y="3.75">Func</svg:tspan>
    </svg:text>
    <svg:circle cx="47" cy="25" r="4" class="ledGreen" [class.on]="card.operation.value.bit(shlLine)" />
    <svg:circle cx="47" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="58" cy="25" r="4" class="ledGreen" [class.on]="card.operation.value.bit(notLine)" />
    <svg:circle cx="58" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="69" cy="25" r="4" class="ledGreen" [class.on]="card.operation.value.bit(xorLine)" />
    <svg:circle cx="69" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="80" cy="25" r="4" class="ledGreen" [class.on]="card.operation.value.bit(orrLine)" />
    <svg:circle cx="80" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="91" cy="25" r="4" class="ledGreen" [class.on]="card.operation.value.bit(andLine)" />
    <svg:circle cx="91" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="102" cy="25" r="4" class="ledGreen" [class.on]="card.operation.value.bit(incLine)" />
    <svg:circle cx="102" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="113" cy="25" r="4" class="ledGreen" [class.on]="card.operation.value.bit(addLine)" />
    <svg:circle cx="113" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="124" cy="25" r="4" class="ledGreen" [class.on]="card.operation.value.bit(clrLine)" />
    <svg:circle cx="124" cy="25" r="4" class="ledOutline" />
    <svg:rect x="43" y="32" width="85" height="5" fill="white" />
    <svg:text transform="translate(43 32)" fill="black">
        <svg:tspan class="d-text4" x="1.109375" y="3.75">Shl</svg:tspan>
    </svg:text>
    <svg:text transform="translate(54 32)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="3.75">Not</svg:tspan>
    </svg:text>
    <svg:text transform="translate(65 32)" fill="black">
        <svg:tspan class="d-text4" x=".8876953" y="3.75">Xor</svg:tspan>
    </svg:text>
    <svg:text transform="translate(76 32)" fill="black">
        <svg:tspan class="d-text4" x="1.7783203" y="3.75">Or</svg:tspan>
    </svg:text>
    <svg:text transform="translate(87 32)" fill="black">
        <svg:tspan class="d-text4" x=".44140625" y="3.75">And</svg:tspan>
    </svg:text>
    <svg:text transform="translate(98 32)" fill="black">
        <svg:tspan class="d-text4" x="1.33203125" y="3.75">Inc</svg:tspan>
    </svg:text>
    <svg:text transform="translate(109 32)" fill="black">
        <svg:tspan class="d-text4" x=".44140625" y="3.75">Add</svg:tspan>
    </svg:text>
    <svg:text transform="translate(120 32)" fill="black">
        <svg:tspan class="d-text4" x="1.4453125" y="3.75">Clr</svg:tspan>
    </svg:text>
    <svg:circle cx="179" cy="25" r="4" class="ledYellow" [class.on]="card.load" />
    <svg:circle cx="179" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="190" cy="25" r="4" class="ledGreen" [class.on]="card.select" />
    <svg:circle cx="190" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="201" cy="25" r="4" class="ledRed" [class.on]="card.condition.value.bit(snLine)" />
    <svg:circle cx="201" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="212" cy="25" r="4" class="ledRed" [class.on]="card.condition.value.bit(cyLine)" />
    <svg:circle cx="212" cy="25" r="4" class="ledOutline" />
    <svg:circle cx="223" cy="25" r="4" class="ledRed" [class.on]="card.condition.value.bit(ezLine)" />
    <svg:circle cx="223" cy="25" r="4" class="ledOutline" />
    <svg:rect x="175" y="32" width="52" height="5" fill="white" />
    <svg:text transform="translate(175 32)" fill="black">
        <svg:tspan class="d-text4" x="1.7753906" y="3.75">Ld</svg:tspan>
    </svg:text>
    <svg:text transform="translate(186 32)" fill="black">
        <svg:tspan class="d-text4" x="1.5537109" y="3.75">En</svg:tspan>
    </svg:text>
    <svg:text transform="translate(197 32)" fill="black">
        <svg:tspan class="d-text4" x="2.6660156" y="3.75">S</svg:tspan>
    </svg:text>
    <svg:text transform="translate(208 32)" fill="black">
        <svg:tspan class="d-text4" x="1.2216797" y="3.75">CY</svg:tspan>
    </svg:text>
    <svg:text transform="translate(219 32)" fill="black">
        <svg:tspan class="d-text4" x="2.7783203" y="3.75">Z</svg:tspan>
    </svg:text>
`;