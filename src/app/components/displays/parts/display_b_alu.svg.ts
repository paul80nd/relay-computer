export const svgTemplate = ` 
    <!-- Origin at top left CL led light bar -->
    <svg:rect x="0" y="0" width="8" height="17" class="indGreen" [class.on]="aluFuncCl.bit(clLine)" />
    <svg:rect x="0" y="0" width="8" height="17" class="indOutline" />
    <svg:text transform="translate(1.6967 1.406848)" fill="black">
        <svg:tspan class="d-text6" x="0" y="6">C</svg:tspan>
        <svg:tspan class="d-text6" x=".4729043" y="13">L</svg:tspan>
    </svg:text>
    <svg:rect x="9" y="0" width="8" height="17" class="indGreen" [class.on]="aluFuncCl.bit(f2Line)" />
    <svg:rect x="9" y="0" width="8" height="17" class="indOutline" />
    <svg:text transform="translate(10.6967 2.906825)" fill="black">
        <svg:tspan class="d-text9" x="0" y="9">2</svg:tspan>
    </svg:text>
    <svg:rect x="18" y="0" width="8" height="17" class="indGreen" [class.on]="aluFuncCl.bit(f1Line)" />
    <svg:rect x="18" y="0" width="8" height="17" class="indOutline" />
    <svg:text transform="translate(19.6967 2.906825)" fill="black">
        <svg:tspan class="d-text9" x="0" y="9">1</svg:tspan>
    </svg:text>
    <svg:rect x="27" y="0" width="8" height="17" class="indGreen" [class.on]="aluFuncCl.bit(f0Line)" />
    <svg:rect x="27" y="0" width="8" height="17" class="indOutline" />
    <svg:text transform="translate(28.6967 2.906825)" fill="black">
        <svg:tspan class="d-text9" x="0" y="9">0</svg:tspan>
    </svg:text>
    
    <svg:g rc-alu-op-llb [value]="alu" [description]="'INC'" [color]="'Yellow'" 
        [bitTarget]="incLine" transform="translate(18 18)"></svg:g>
    <svg:g rc-alu-op-llb [value]="alu" [description]="'OR'" [color]="'Yellow'" 
        [bitTarget]="orrLine" transform="translate(18 27)"></svg:g>
    <svg:g rc-alu-op-llb [value]="alu" [description]="'NOT'" [color]="'Yellow'" 
        [bitTarget]="notLine" transform="translate(18 36)"></svg:g>
    <svg:g rc-alu-op-llb [value]="alu" [description]="'NOP'" [color]="'Yellow'" 
        [bitTarget]="-1" transform="translate(18 45)"></svg:g>
    <svg:g rc-alu-op-llb [value]="alu" [description]="'ADD'" [color]="'Yellow'" 
        [bitTarget]="addLine" transform="translate(0 18)"></svg:g>
    <svg:g rc-alu-op-llb [value]="alu" [description]="'AND'" [color]="'Yellow'" 
        [bitTarget]="andLine" transform="translate(0 27)"></svg:g>
    <svg:g rc-alu-op-llb [value]="alu" [description]="'XOR'" [color]="'Yellow'" 
        [bitTarget]="xorLine" transform="translate(0 36)"></svg:g>
    <svg:g rc-alu-op-llb [value]="alu" [description]="'SHL'" [color]="'Yellow'" 
        [bitTarget]="shlLine" transform="translate(0 45)"></svg:g>
`;