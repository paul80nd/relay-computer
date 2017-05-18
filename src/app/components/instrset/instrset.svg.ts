export const svgTemplate = `
    <svg:g stroke="none" stroke-opacity="1" stroke-dasharray="none" fill="none" fill-opacity="1">
        <svg:g>
            <svg:rect x="0" y="0" width="80" height="232" fill="gray" />
            <svg:rect x="0" y="0" width="80" height="232" 
                stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" />
            <svg:g>
                <svg:title>MOVE-8: 0 0 d d d s s s</svg:title>                
                <svg:rect x="4" y="5" width="9" height="9" fill="#004080" />
                <svg:rect x="4" y="5" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(4 6)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >0</svg:tspan>
                </svg:text>
                <svg:rect x="13" y="5" width="9" height="9" fill="#004080" />
                <svg:rect x="13" y="5" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(13 6)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >0</svg:tspan>
                </svg:text>
                <svg:rect x="22" y="5" width="9" height="9" fill="#008040" />
                <svg:rect x="22" y="5" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(22 6)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >d</svg:tspan>
                </svg:text>
                <svg:rect x="31" y="5" width="9" height="9" fill="#008040" />
                <svg:rect x="31" y="5" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(31 6)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >d</svg:tspan>
                </svg:text>
                <svg:rect x="40" y="5" width="9" height="9" fill="#008040" />
                <svg:rect x="40" y="5" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(40 6)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >d</svg:tspan>
                </svg:text>
                <svg:rect x="49" y="5" width="9" height="9" fill="#008040" />
                <svg:rect x="49" y="5" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(49 6)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="3" y="6" >s</svg:tspan>
                </svg:text>
                <svg:rect x="58" y="5" width="9" height="9" fill="#008040" />
                <svg:rect x="58" y="5" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(58 6)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="3" y="6" >s</svg:tspan>
                </svg:text>
                <svg:rect x="67" y="5" width="9" height="9" fill="#008040" />
                <svg:rect x="67" y="5" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(67 6)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="3" y="6" >s</svg:tspan>
                </svg:text>
                <svg:rect x="12" y="6.5" width="2" height="6" fill="#004080" />
                <svg:rect x="30" y="6.5" width="2" height="6" fill="#008040" />
                <svg:rect x="39" y="6.5" width="2" height="6" fill="#008040" />
                <svg:rect x="57" y="6.5" width="2" height="6" fill="#008040" />
                <svg:rect x="66" y="6.5" width="2" height="6" fill="#008040" />
                <svg:rect x="4" y="13.9" width="63" height="9" fill="#004080" />
                <svg:rect x="4" y="13.9" width="63" height="9" class="diagElementOutline" />
                <svg:text transform="translate(4 14.9)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="19.998047" y="6" >MOVE-8</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:g>
                <svg:title>8 Cycle Instruction</svg:title>                
                <svg:rect x="67" y="13.9" width="9" height="9" fill="#800040" />
                <svg:rect x="67" y="13.9" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(67 14.9)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >8</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:g>
                <svg:title>Copies the contents of one 8-bit register to another</svg:title> 
                <svg:rect x="4" y="23" width="72" height="18" fill="#333" />
                <svg:rect x="4" y="23" width="72" height="18" class="diagElementOutline" />
                <svg:text transform="translate(4 26)" fill="white">
                    <svg:tspan class="d-text5" fill="white" x="6.2575684" y="5" >Copies the contents of one</svg:tspan>
                    <svg:tspan class="d-text5" fill="white" x="10.152832" y="11" >8-bit register to another</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:rect x="4" y="41" width="72" height="35" fill="#008040" />
            <svg:rect x="4" y="41" width="72" height="35" class="diagElementOutline" />
            <svg:text transform="translate(8 43.5)" fill="white">
                <svg:tspan class="d-text4" fill="white" x="0" y="4" >ddd:</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="4" >destination register</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="9">A 000, B 001, C 010, D 011,</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="14" >M1 100, M2 101, X 110, Y 111</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="0" y="19" >sss:</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="19" >source register</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="24" >A 000, B 001, C 010, D 011,</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="29" >M1 100, M2 101, X 110, Y 111</svg:tspan>
            </svg:text>
            <svg:g>
                <svg:title>ALU: 1 0 0 0 r f f f</svg:title>                
                <svg:rect x="4" y="81" width="9" height="9" fill="#004080" />
                <svg:rect x="4" y="81" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(4 82)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >1</svg:tspan>
                </svg:text>
                <svg:rect x="13" y="81" width="9" height="9" fill="#004080" />
                <svg:rect x="13" y="81" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(13 82)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >0</svg:tspan>
                </svg:text>
                <svg:rect x="22" y="81" width="9" height="9" fill="#004080" />
                <svg:rect x="22" y="81" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(22 82)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >0</svg:tspan>
                </svg:text>
                <svg:rect x="31" y="81" width="9" height="9" fill="#004080" />
                <svg:rect x="31" y="81" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(31 82)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >0</svg:tspan>
                </svg:text>
                <svg:rect x="40" y="81" width="9" height="9" fill="#008040" />
                <svg:rect x="40" y="81" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(40 82)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="3.5009766" y="6" >r</svg:tspan>
                </svg:text>
                <svg:rect x="49" y="81" width="9" height="9" fill="#008040" />
                <svg:rect x="49" y="81" width="9" height="9" class="diagElementOutline"/>
                <svg:text transform="translate(49 82)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="3.666504" y="6" >f</svg:tspan>
                </svg:text>
                <svg:rect x="58" y="81" width="9" height="9" fill="#008040" />
                <svg:rect x="58" y="81" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(58 82)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="3.666504" y="6" >f</svg:tspan>
                </svg:text>
                <svg:rect x="67" y="81" width="9" height="9" fill="#008040" />
                <svg:rect x="67" y="81" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(67 82)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="3.666504" y="6" >f</svg:tspan>
                </svg:text>
                <svg:rect x="12" y="82.5" width="2" height="6" fill="#004080" />
                <svg:rect x="30" y="82.5" width="2" height="6" fill="#004080" />
                <svg:rect x="57" y="82.5" width="2" height="6" fill="#008040" />
                <svg:rect x="66" y="82.5" width="2" height="6" fill="#008040" />
                <svg:rect x="4" y="89.9" width="63" height="9" fill="#004080" />
                <svg:rect x="4" y="89.9" width="63" height="9" class="diagElementOutline" />
                <svg:text transform="translate(4 90.9)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="25.664062" y="6" >ALU</svg:tspan>
                </svg:text>
            </svg:g>    
            <svg:g>
                <svg:title>8 Cycle Instruction</svg:title>                
                <svg:rect x="67" y="89.9" width="9" height="9" fill="#800040" />
                <svg:rect x="67" y="89.9" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(67 90.9)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >8</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:g>
                <svg:title>Performs an ALU operation on the B (and C) registers</svg:title> 
                <svg:rect x="4" y="99" width="72" height="18" fill="#333" />
                <svg:rect x="4" y="99" width="72" height="18" class="diagElementOutline" />
                <svg:text transform="translate(4 102)" fill="white">
                    <svg:tspan class="d-text5" fill="white" x="5.84375" y="5" >Performs an ALU operation</svg:tspan>
                    <svg:tspan class="d-text5" fill="white" x="7.3757324" y="11" >on the B (and C) registers</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:rect x="21" y="82.5" width="2" height="6" fill="#004080" />
            <svg:rect x="4" y="117" width="72" height="35" fill="#008040" />
            <svg:rect x="4" y="117" width="72" height="35" class="diagElementOutline" />
            <svg:text transform="translate(8 119.5)" fill="white">
                <svg:tspan class="d-text4" fill="white" x="0" y="4" >r:</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="4" >destination register</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="9" >A 0, D 1</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="0" y="14" >fff:</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="14" >function code</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="19" >NOP 000, ADD 001, INC 010,</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="24" >AND 011, OR 100, XOR 101, </svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="29" >NOT 110, SHL 111</svg:tspan>
            </svg:text>
            <svg:g>
                <svg:title>SETAB: 0 1 r d d d d d</svg:title>                
                <svg:rect x="4" y="157" width="9" height="9" fill="#004080" />
                <svg:rect x="4" y="157" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(4 158)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >0</svg:tspan>
                </svg:text>
                <svg:rect x="13" y="157" width="9" height="9" fill="#004080" />
                <svg:rect x="13" y="157" width="9" height="9" class="diagElementOutline"/>
                <svg:text transform="translate(13 158)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >1</svg:tspan>
                </svg:text>
                <svg:rect x="22" y="157" width="9" height="9" fill="#008040" />
                <svg:rect x="22" y="157" width="9" height="9" class="diagElementOutline"/>
                <svg:text transform="translate(22 158)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="3.5009766" y="6" >r</svg:tspan>
                </svg:text>
                <svg:rect x="31" y="157" width="9" height="9" fill="#008040" />
                <svg:rect x="31" y="157" width="9" height="9" stroke="white" 
                stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <svg:text transform="translate(31 158)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >d</svg:tspan>
                </svg:text>
                <svg:rect x="40" y="157" width="9" height="9" fill="#008040" />
                <svg:rect x="40" y="157" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(40 158)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >d</svg:tspan>
                </svg:text>
                <svg:rect x="49" y="157" width="9" height="9" fill="#008040" />
                <svg:rect x="49" y="157" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(49 158)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >d</svg:tspan>
                </svg:text>
                <svg:rect x="58" y="157" width="9" height="9" fill="#008040" />
                <svg:rect x="58" y="157" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(58 158)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >d</svg:tspan>
                </svg:text>
                <svg:rect x="67" y="157" width="9" height="9" fill="#008040" />
                <svg:rect x="67" y="157" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(67 158)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >d</svg:tspan>
                </svg:text>
                <svg:rect x="12" y="158.5" width="2" height="6" fill="#004080" />
                <svg:rect x="48" y="158.5" width="2" height="6" fill="#008040" />
                <svg:rect x="39" y="158.5" width="2" height="6" fill="#008040" />
                <svg:rect x="57" y="158.5" width="2" height="6" fill="#008040" />
                <svg:rect x="66" y="158.5" width="2" height="6" fill="#008040" />
                <svg:rect x="4" y="165.9" width="63" height="9" fill="#004080" />
                <svg:rect x="4" y="165.9" width="63" height="9" class="diagElementOutline" />
                <svg:text transform="translate(4 166.9)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="21.884766" y="6" >SETAB</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:g>
                <svg:title>8 Cycle Instruction</svg:title>                
                <svg:rect x="67" y="165.9" width="9" height="9" fill="#800040" />
                <svg:rect x="67" y="165.9" width="9" height="9" class="diagElementOutline" />
                <svg:text transform="translate(67 166.9)" fill="white">
                    <svg:tspan class="d-text6" fill="white" x="2.831543" y="6" >8</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:g>
                <svg:title>Loads any value between -16 and +15 in to register A or B</svg:title>                
                <svg:rect x="4" y="175" width="72" height="18" fill="#333" />
                <svg:rect x="4" y="175" width="72" height="18" class="diagElementOutline" />
                <svg:text transform="translate(4 178)" fill="white">
                    <svg:tspan class="d-text5" fill="white" x="3.3376465" y="5" >Loads any value between -16</svg:tspan>
                    <svg:tspan class="d-text5" fill="white" x="5.074707" y="11" >and +15 in to register A or B</svg:tspan>
                </svg:text>
            </svg:g>
            <svg:rect x="4" y="193" width="72" height="26" fill="#008040" />
            <svg:rect x="4" y="193" width="72" height="26" class="diagElementOutline" />
            <svg:text transform="translate(8 196)" fill="white">
                <svg:tspan class="d-text4" fill="white" x="0" y="4" >r:</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="4" >destination register</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="9" >A 0, B 1</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="0" y="14" >ddddd: value (-16..15)</svg:tspan>
                <svg:tspan class="d-text4" fill="white" x="9.9" y="19" >(sign extends to 8bit)</svg:tspan>
            </svg:text>
        </svg:g>
    </svg:g>
`;