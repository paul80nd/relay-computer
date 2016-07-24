export const svgTemplate = `
    <!-- Origin at bay top left -->
    <svg:title>Decoder</svg:title>

    <!--
    <svg:circle cx="31" cy="25" r="4" fill="#fdf927"/>
    <svg:circle cx="31" cy="25" r="4" stroke="navy" class="ledOutline"/>
    <svg:rect x="23" y="32" width="16" height="5" fill="white"/>
    <svg:text transform="translate(23 32)" fill="black">
        <svg:tspan class="d-text4" x="2.1113281" y="4">GOTO</svg:tspan>
    </svg:text>
    -->

    <svg:circle cx="53" cy="25" r="4" class="ledYellow" [class.on]="card.operation.bit(setLine)"/>
    <svg:circle cx="53" cy="25" r="4" stroke="navy" class="ledOutline"/>
    <svg:rect x="45" y="32" width="16" height="5" fill="white"/>
    <svg:text transform="translate(45 32)" fill="black">
        <svg:tspan class="d-text4" x="1.4423828" y="4">SETAB</svg:tspan>
    </svg:text>
    
    <svg:circle cx="75" cy="25" r="4" class="ledYellow" [class.on]="card.operation.bit(mv8Line)"/>
    <svg:circle cx="75" cy="25" r="4" stroke="navy" class="ledOutline"/>
    <svg:rect x="67" y="32" width="16" height="5" fill="white"/>
    <svg:text transform="translate(67 32)" fill="black">
        <svg:tspan class="d-text4" x="2.3320312" y="4">MOV8</svg:tspan>
    </svg:text>
   
   <!--
    <svg:circle cx="97" cy="25" r="4" fill="#fdf927"/>
    <svg:circle cx="97" cy="25" r="4" stroke="navy" class="ledOutline"/>
    <svg:rect x="89" y="32" width="16" height="5" fill="white"/>
    <svg:text transform="translate(89 32)" fill="black">
        <svg:tspan class="d-text4" x="1.8876953" y="4">INCXY</svg:tspan>
    </svg:text>
    -->

    <svg:circle cx="119" cy="25" r="4" class="ledYellow" [class.on]="card.operation.bit(aluLine)"/>
    <svg:circle cx="119" cy="25" r="4" stroke="navy" class="ledOutline"/>
    <svg:rect x="111" y="32" width="16" height="5" fill="white"/>
    <svg:text transform="translate(111 32)" fill="black">
        <svg:tspan class="d-text4" x="4.109375" y="4">ALU</svg:tspan>
    </svg:text>
   
    <!--
    <svg:circle cx="141" cy="25" r="4" fill="#fdf927"/>
    <svg:circle cx="141" cy="25" r="4" stroke="navy" class="ledOutline"/>
    <svg:rect x="133" y="32" width="16" height="5" fill="white"/>
    <svg:text transform="translate(133 32)" fill="black">
        <svg:tspan class="d-text4" x="1.11035156" y="4">STORE</svg:tspan>
    </svg:text>
   
    <svg:circle cx="163" cy="25" r="4" fill="#fdf927"/>
    <svg:circle cx="163" cy="25" r="4" stroke="navy" class="ledOutline"/>
    <svg:rect x="155" y="32" width="16" height="5" fill="white"/>
    <svg:text transform="translate(155 32)" fill="black">
        <svg:tspan class="d-text4" x="2.553711" y="4">LOAD</svg:tspan>
    </svg:text>

    <svg:circle cx="185" cy="25" r="4" fill="#fdf927"/>
    <svg:circle cx="185" cy="25" r="4" stroke="navy" class="ledOutline"/>
    <svg:rect x="177" y="32" width="16" height="5" fill="white"/>
    <svg:text transform="translate(177 32)" fill="black">
        <svg:tspan class="d-text4" x="3" y="4">MISC</svg:tspan>
    </svg:text>

    <svg:circle cx="207" cy="25" r="4" fill="#fdf927"/>
    <svg:circle cx="207" cy="25" r="4" stroke="navy" class="ledOutline"/>
    <svg:rect x="199" y="32" width="16" height="5" fill="white"/>
    <svg:text transform="translate(199 32)" fill="black">
        <svg:tspan class="d-text4" x="1.21972656" y="4">MOV16</svg:tspan>
    </svg:text>
    -->
`;