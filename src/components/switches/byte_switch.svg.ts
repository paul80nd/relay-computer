export const svgTemplate = `
    <!-- Origin is at top left of bit 7 label -->
    <svg:g *ngFor="let i of [7,6,5,4,3,2,1,0]">
        <g [attr.transform]="'translate(' + (-10 + 196 - (i * 28)) + ' -176)'">

            <rect x="10" y="176" width="21" height="8" fill="white" />
            <text transform="translate(10 175)" fill="black">
                <tspan class="d-text8" x="8.2753906" y="7.5">{{i}}</tspan>
            </text>
            <g (click)="flipBit(i)" class="clickable">
                <path d="M 10 199.275 L 10 204.275 L 10 208.2241 L 10 209 L 10 209.27499 L 10.055863 209.27499 
                C 10.2949547 210.92855 11.3014565 212.53621 13.075368 213.80329 
                C 17.175845 216.73224 23.824027 216.73224 27.924504 213.80329 
                C 29.698416 212.53621 30.704918 210.92855 30.94401 209.27499 
                L 30.999872 209.27499 L 30.999872 209 L 30.999872 204.275 L 30.999872 199.77209 L 30.999872 199.59587 
                C 30.999998 199.55712 31.000082 199.51837 30.999872 199.47961 L 30.999872 199.275 L 30.999872 197 
                L 30.999872 194.7721 C 30.998914 194.65521 31.001012 194.53824 30.999305 194.4213 L 30.999872 194.275 
                L 30.995182 194.275 C 30.918188 192.43126 29.89463 190.60394 27.924504 189.19671 
                C 23.824027 186.26776 17.175845 186.26776 13.075368 189.19671 
                C 11.105243 190.60394 10.081684 192.43126 10.0046916 194.275 L 10 194.275 L 10 197 Z"
                    fill="#bbb" />
                <path d="M 10 199.275 L 10 204.275 L 10 208.2241 L 10 209 L 10 209.27499 L 10.055863 209.27499 
                C 10.2949547 210.92855 11.3014565 212.53621 13.075368 213.80329 
                C 17.175845 216.73224 23.824027 216.73224 27.924504 213.80329 
                C 29.698416 212.53621 30.704918 210.92855 30.94401 209.27499 L 30.999872 209.27499 L 30.999872 209 
                L 30.999872 204.275 L 30.999872 199.77209 L 30.999872 199.59587 
                C 30.999998 199.55712 31.000082 199.51837 30.999872 199.47961 L 30.999872 199.275 L 30.999872 197 
                L 30.999872 194.7721 C 30.998914 194.65521 31.001012 194.53824 30.999305 194.4213 L 30.999872 194.275 
                L 30.995182 194.275 C 30.918188 192.43126 29.89463 190.60394 27.924504 189.19671 
                C 23.824027 186.26776 17.175845 186.26776 13.075368 189.19671 
                C 11.105243 190.60394 10.081684 192.43126 10.0046916 194.275 L 10 194.275 L 10 197 Z"
                    class="swtOutline" />

                <g [style.display]="value.value.bit(i)?'inherit':'none'">
                    <ellipse cx="20.499936" cy="194.5" rx="9.0999594" ry="6.5000086" fill="#333" />
                    <ellipse cx="20.499936" cy="194.5" rx="9.0999594" ry="6.5000086" class="swtOutline" />
                </g>
                <g [style.display]="value.value.bit(i)?'none':'inherit'">
                    <ellipse cx="20.499936" cy="208.5" rx="9.0999594" ry="6.5000086" fill="#333" />
                    <ellipse cx="20.499936" cy="208.5" rx="9.0999594" ry="6.5000086" class="swtOutline" />
                </g>
            </g>
        </g>
    </svg:g>
`;
