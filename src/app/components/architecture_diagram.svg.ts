export const svgTemplate = `
    <svg:defs>
        <svg:marker orient="auto" overflow="visible" markerUnits="strokeWidth" id="FilledArrow_Marker" viewBox="-1 -2 5 4" markerWidth="5"
            markerHeight="4" color="white">
            <svg:g>
                <path d="M 2.4000001 0 L 0 -.90000004 L 0 .90000004 Z" fill="currentColor" stroke="currentColor" stroke-width="1" />
            </svg:g>
        </svg:marker>
    </svg:defs>
    <svg:g stroke="none" stroke-opacity="1" stroke-dasharray="none" fill="none" fill-opacity="1">
        <svg:g>
            <svg:rect x="480" y="0" width="237" height="232" fill="gray" />
            <svg:rect x="480" y="0" width="237" height="232" 
            stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"
            />
            <svg:g>
                <svg:title>Register A</svg:title>
                <svg:rect x="528.8" y="21.85" width="46" height="8" fill="#004080" />
                <svg:rect x="528.8" y="21.85" width="46" height="8" class="diagElementOutline" />
                <svg:text transform="translate(536.8 22.35)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="0" y="6">A</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:g>
                <svg:title>Register B</svg:title>
                <svg:rect x="528.8" y="31.652778" width="46" height="8" fill="#004080" />
                <svg:rect x="528.8" y="31.652778" width="46" height="8" class="diagElementOutline" />
                <svg:text transform="translate(536.8 32.152778)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="0" y="6">B</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:g>
                <svg:title>Register C</svg:title>
                <svg:rect x="528.8" y="41.455556" width="46" height="8" fill="#004080" />
                <svg:rect x="528.8" y="41.455556" width="46" height="8" class="diagElementOutline" />
                <svg:text transform="translate(536.8 41.955556)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="0" y="6">C</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:g>
                <svg:title>Register D</svg:title>
                <svg:rect x="528.8" y="51.258334" width="46" height="8" fill="#004080" />
                <svg:rect x="528.8" y="51.258334" width="46" height="8" class="diagElementOutline" />
                <svg:text transform="translate(536.8 51.758334)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="0" y="6">D</svg:tspan>
                </svg:text>
            </svg:g>
            <!--
                <svg:rect x="528.8" y="61.061112" width="46" height="8" fill="#004080" />
                <svg:rect x="528.8" y="61.061112" width="46" height="8" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:text transform="translate(536.8 61.561112)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="0" y="6" >M1</svg:tspan>
                </svg:text>
                <svg:rect x="528.8" y="69.261112" width="46" height="8" fill="#004080" />
                <svg:rect x="528.8" y="69.261112" width="46" height="8" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:text transform="translate(536.8 69.761112)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="0" y="6" >M2</svg:tspan>
                </svg:text>            
                <svg:rect x="561.8" y="65.55" width="7" height="7" fill="#004080" />
                <svg:text transform="translate(562.8 65.55)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x=".001953125" y="6">M</svg:tspan>
                </svg:text>
                <svg:rect x="528.8" y="79.06389" width="46" height="8" fill="#004080" />
                <svg:rect x="528.8" y="79.06389" width="46" height="8" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:text transform="translate(536.8 79.56389)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="0" y="6" >X</svg:tspan>
                </svg:text>
                <svg:rect x="528.8" y="87.13889" width="46" height="8" fill="#004080" />
                <svg:rect x="528.8" y="87.13889" width="46" height="8" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:text transform="translate(536.8 87.63889)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="0" y="6" >Y</svg:tspan>
                </svg:text>           
                <svg:rect x="557.8" y="83.65" width="11" height="7" fill="#004080" />
                <svg:text transform="translate(558.8 83.65)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x=".99609375" y="6" >XY</svg:tspan>
                </svg:text>
                <svg:rect x="528.8" y="96.94167" width="46" height="8" fill="#004080" />
                <svg:rect x="528.8" y="96.94167" width="46" height="8" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:text transform="translate(536.8 97.44167)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="0" y="6" >J1</svg:tspan>
                </svg:text>
                <svg:rect x="528.8" y="105.01667" width="46" height="8" fill="#004080" />
                <svg:rect x="528.8" y="105.01667" width="46" height="8" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:text transform="translate(536.8 105.51667)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="0" y="6" >J2</svg:tspan>
                </svg:text>
                <svg:rect x="563.8" y="101.5" width="5" height="7" fill="#004080" />
                <svg:text transform="translate(564.8 101.5)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="0" y="6" >J</svg:tspan>
                </svg:text>
                -->
            <svg:g>
                <svg:title>Instruction Register</svg:title>
                <svg:rect x="528.8" y="114.819447" width="46" height="8" fill="#008040" />
                <svg:rect x="528.8" y="114.819447" width="46" height="8" class="diagElementOutline" />
                <svg:text transform="translate(533.8 115.31945)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="11.166504" y="6">INST</svg:tspan>
                </svg:text>
            </svg:g>
            <!--
                <svg:rect x="528.8" y="124.622225" width="46" height="8" fill="#008040" />
                <svg:rect x="528.8" y="124.622225" width="46" height="8" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:rect x="528.8" y="132.697225" width="46" height="8" fill="#008040" />
                <svg:rect x="528.8" y="132.697225" width="46" height="8" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:rect x="528.8" y="142.5" width="46" height="8" fill="#008040" />
                <svg:rect x="528.8" y="142.5" width="46" height="8" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:rect x="528.8" y="150.575" width="46" height="8" fill="#008040" />
                <svg:rect x="528.8" y="150.575" width="46" height="8" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                -->
            <svg:rect x="507.075" y="10.8999996" width="3" height="212.29999" fill="white" />
            <svg:rect x="507.075" y="10.8999996" width="3" height="212.29999" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                stroke-width=".5" />
            <!--
                <svg:rect x="593.34998" y="59.425" width="3" height="150" fill="white" />
                <svg:rect x="593.34998" y="59.425" width="3" height="150" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                -->
            <svg:line x1="511.45" y1="24.044449" x2="524.15" y2="24.044449" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <svg:line x1="527.325" y1="26.994449" x2="514.625" y2="26.994449" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <svg:line x1="511.45" y1="33.744449" x2="524.15" y2="33.744449" marker-end="url(#FilledArrow_Marker)"
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <svg:line x1="527.325" y1="36.694448" x2="514.625" y2="36.694448" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <svg:line x1="511.45" y1="43.769448" x2="524.15" y2="43.769448" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <svg:line x1="527.325" y1="46.719448" x2="514.625" y2="46.719448" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <svg:line x1="511.45" y1="53.344448" x2="524.15" y2="53.344448" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <svg:line x1="527.325" y1="56.294448" x2="514.625" y2="56.294448" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <!--
                <svg:line x1="511.45" y1="63.044448" x2="524.15" y2="63.044448" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="527.325" y1="65.994448" x2="514.625" y2="65.994448" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="511.45" y1="71.619448" x2="524.15" y2="71.619448" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="527.325" y1="74.569448" x2="514.625" y2="74.569448" marker-end="url(#FilledArrow_Marker)"
                    stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="511.45" y1="81.319448" x2="524.15" y2="81.319448" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="527.325" y1="84.269447" x2="514.625" y2="84.269447" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="511.45" y1="89.394447" x2="524.15" y2="89.394447" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="527.325" y1="92.344447" x2="514.625" y2="92.344447" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="511.45" y1="101.169447" x2="524.15" y2="101.169447" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="511.45" y1="109.24445" x2="524.15" y2="109.24445" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                -->
            <svg:line x1="511.45" y1="119.019446" x2="524.15" y2="119.019446" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <!--
                <svg:line x1="576.25" y1="69.119448" x2="588.95" y2="69.119448" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="576.25" y1="85.144447" x2="588.95" y2="85.144447" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="592.125" y1="88.094447" x2="579.425" y2="88.094447" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="576.25" y1="104.994447" x2="588.95" y2="104.994447" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="576.25" y1="130.59445" x2="588.95" y2="130.59445" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="592.125" y1="133.544446" x2="579.425" y2="133.544446" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="576.25" y1="150.44445" x2="588.95" y2="150.44445" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="552.075" y1="166.89999" x2="552.075" y2="163.19999" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <path d="M 591.775 195.69999 L 552.15 195.7 L 552.12462 193.49971" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="597.85" y1="203.46944" x2="630.55" y2="203.46944" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="511.72757" y1="213.29444" x2="630.525" y2="213.29444" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:line x1="633.5474" y1="216.24444" x2="514.625" y2="216.24444" marker-end="url(#FilledArrow_Marker)" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                <svg:rect x="634.925" y="177.99444" width="68" height="43" fill="#800040" />
                <svg:rect x="634.925" y="177.99444" width="68" height="43" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:text transform="translate(639.925 183.99444)" fill="white">
                    <svg:tspan font-family="Helvetica" font-size="7" font-weight="500" fill="white" x="16.360352" y="6" >Memory</svg:tspan>
                </svg:text>
                -->
            <svg:g>
                <svg:title>ALU (Arithmetic Logic Unit)</svg:title>
                <path d="M 616.325 23.35 L 632.675 23.375 L 641.825 33.8 L 641.825 47.775 L 632.925 58.375 L 616.325 58.35 Z" fill="maroon"
                />
                <path d="M 616.325 23.35 L 632.675 23.375 L 641.825 33.8 L 641.825 47.775 L 632.925 58.375 L 616.325 58.35 Z" stroke="white"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" />
                <svg:text transform="translate(621.325 33.8625)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="1.9140625" y="6">8-bit</svg:tspan>
                    <svg:tspan class="d-text6" fill="white" x="1.9140625" y="13">ALU</svg:tspan>
                </svg:text>
            </svg:g>
            <!--
                <path d="M 528.8 188.68126 L 528.83282 175.53715 L 536.69947 168.18126 L 566.8285 168.18126 
                    L 574.8 176.21117 L 574.76715 188.68126 Z" fill="maroon" />
                <path d="M 528.8 188.68126 L 528.83282 175.53715 L 536.69947 168.18126 L 566.8285 168.18126
                    L 574.8 176.21117 L 574.76715 188.68126 Z" stroke="white" stroke-linecap="round" 
                    stroke-linejoin="round" stroke-width=".5" />
                <svg:text transform="translate(538.55 171.43126)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="5.9956055" y="6">16-bit</svg:tspan>
                    <svg:tspan class="d-text6" fill="white" x=".16113281" y="13">Increment</svg:tspan>
                </svg:text>
                -->
            <svg:g>
                <svg:title>Zero Condition Register</svg:title>
                <svg:rect x="662.52502" y="57.225" width="10.5" height="10.5" fill="#008040" />
                <svg:rect x="662.52502" y="57.225" width="10.5" height="10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:text transform="translate(662.52502 58.975)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="3.4174805" y="6">Z</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:g>
                <svg:title>Carry Condition Register</svg:title>
                <svg:rect x="675.42502" y="57.225" width="10.5" height="10.5" fill="#008040" />
                <svg:rect x="675.42502" y="57.225" width="10.5" height="10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:text transform="translate(675.42502 58.975)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="1.5834961" y="6">Cy</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:g>
                <svg:title>Sign Condition Register</svg:title>
                <svg:rect x="688.20002" y="57.225" width="10.5" height="10.5" fill="#008040" />
                <svg:rect x="688.20002" y="57.225" width="10.5" height="10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width=".5" />
                <svg:text transform="translate(688.20002 58.975)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="3.2490234" y="6">S</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:line x1="576.25" y1="45.644448" x2="611.675" y2="45.644448" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <svg:line x1="576.25" y1="36.069448" x2="611.675" y2="36.069448" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <path d="M 643.05 39.819448 L 692.95 39.725 L 693.0626 52.66961" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <path d="M 643.05 42.194448 L 680.425 42.1 L 680.5316 52.669667" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <path d="M 643.05 44.944448 L 667.65 44.85 L 667.74644 52.59478" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <path d="M 643.05 37.244449 L 655.875 37.15 L 655.775 16.1 L 514.82498 16.191653" marker-end="url(#FilledArrow_Marker)" 
                stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            <!--
                <svg:rect x="546.3" y="128.8" width="11" height="7" fill="#008040" />
                <svg:text transform="translate(547.3 128.8)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x=".33251953" y="6">PC</svg:tspan>
                </svg:text>        
                <svg:rect x="545.3" y="146.65" width="13" height="7" fill="#008040" />
                <svg:text transform="translate(546.3 146.65)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x=".3334961" y="6" >INC</svg:tspan>
                </svg:text>
                <svg:text transform="translate(637.25 199.55)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x=".16308594" y="6">Addr</svg:tspan>
                </svg:text>
                <svg:text transform="translate(637.25 210.75)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x=".16308594" y="6">Data</svg:tspan>
                </svg:text>
                <svg:text transform="translate(598.35 153.4) rotate(-90)" fill="white">
                    <svg:tspan class="d-text8" fill="white" x=".42382812" y="8">16-bit Address Bus</svg:tspan>
                </svg:text>
                -->
            <svg:text transform="translate(493.1 135.2) rotate(-90)" fill="white">
                <svg:tspan class="d-text8" fill="white" x=".154296875" y="8">8-bit Data Bus</svg:tspan>
            </svg:text>
            <svg:text transform="translate(643.3 103.45)" fill="white">
                <svg:tspan class="d-text9" fill="white" x="4.7421875" y="9">Computer</svg:tspan>
                <svg:tspan class="d-text9" fill="white" x=".49047852" y="20">Architecture</svg:tspan>
                <svg:tspan class="d-text9" fill="white" x="7.4953613" y="31">Diagram</svg:tspan>
            </svg:text>
        </svg:g>
    </svg:g>
`;
