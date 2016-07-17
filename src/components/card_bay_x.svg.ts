export const svgTemplate = `
    <!-- Origin at bay top left -->
    <svg:title>Card Bay X</svg:title>
    <svg:g stroke="none" stroke-opacity="1" stroke-dasharray="none" fill="none" fill-opacity="1">
        <svg:g>
            <svg:rect x="0" y="0" width="237" height="200" fill="gray" />
            <svg:rect x="0" y="0" width="237" height="200" class="cardOutline" />
            <svg:g card-register-i [card]="backplane.registerI" transform="translate(0,0)"></svg:g>
            <svg:line x1="0" y1="40" x2="237" y2="40" class="cardOutline" />
            <svg:line x1="0" y1="80" x2="237" y2="80" class="cardOutline" />
            <svg:line x1="0" y1="120" x2="237" y2="120" class="cardOutline" />
            <svg:line x1="0" y1="160" x2="237" y2="160" class="cardOutline" />
        </svg:g>
    </svg:g>
`;
