export const svgTemplate = `
    <!-- Origin is at top left of led -->
    <svg:rect x="0" y="0" width="17" height="8" [ngClass]="'ind'+color" [class.on]="bitTarget !== -1 && value.bit(bitTarget)" />
    <svg:rect x="0" y="0" width="17" height="8" class="indOutline" />
    <svg:text transform="translate(0 0)" fill="black">
        <svg:tspan class="d-text6" x="8.5" y="6" text-anchor="middle">{{description}}</svg:tspan>
    </svg:text>
`;