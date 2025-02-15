'use strict';
function makeDiamond() {
//value input from html
const size = parseInt(document.getElementById('size').value);
const oddcolors = document.getElementById('oddcolors').value;
const evencolors = document.getElementById('evencolors').value;
const shape = document.getElementById('shape').value;

// validate if number if odd or even
            if (size % 2 === 0 || size < 1) {
                alert('Please enter an odd number greater than 0');
                return;
            }

            let diamond = '';
            const mid = Math.floor(size / 2);

// Top half 
            for (let i = 1; i <= mid + 1; i++) {
	diamond += createLine(i, mid, shape, oddcolors, evencolors);
            }

// Bottom half
            for (let i = mid; i >= 1; i--) {
	diamond += createLine(i, mid, shape, oddcolors, evencolors);
            }

            document.getElementById('output').innerHTML = diamond;
        }

        function createLine(lineNumber, totalLines, shape, oddcolors, evencolors) {
            let line = "";
            const color = lineNumber % 2 === 0 ? evencolors : oddcolors;

            // Create spaces
            line += "&nbsp;".repeat(totalLines - lineNumber + 1);

            // Create design with color and shape
            for (let j = 0; j < 2 * lineNumber - 1; j++) {
        line += `<span style="color: ${color};">${shape}</span>`;
    }

    return line + "<br>";
        }