export const svgTemplate = `
    <!-- Origin at bay top left -->
    <svg:title>Card Bay Z</svg:title>
    <svg:g stroke="none" stroke-opacity="1" stroke-dasharray="none" fill="none" fill-opacity="1">
        <svg:g>
            <svg:rect x="0" y="0" width="237" height="200" fill="gray" class="cardOutline" />
            <svg:g rc-card-register-ad [card]="backplane.registerAD" transform="translate(0,0)"></svg:g>
            <svg:line x1="0" y1="40" x2="237" y2="40" class="cardOutline" />
            <svg:g rc-card-register-bc [card]="backplane.registerBC" transform="translate(0,40)"></svg:g>
            <svg:line x1="0" y1="80" x2="237" y2="80" class="cardOutline" />
            <svg:g rc-card-alu-ctrl [card]="backplane.aluControl" transform="translate(0,80)"></svg:g>
            <svg:line x1="0" y1="120" x2="237" y2="120" class="cardOutline" />
            <svg:g rc-card-alu-arith [card]="backplane.aluArithmetic" transform="translate(0,120)"></svg:g>
            <svg:line x1="0" y1="160" x2="237" y2="160" class="cardOutline" />
            <svg:g rc-card-alu-logic [card]="backplane.aluLogic" transform="translate(0,160)"></svg:g>
        </svg:g>
    </svg:g>
`;
