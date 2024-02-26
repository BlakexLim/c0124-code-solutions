"use strict";
function getRangeReport(start, end) {
    const rangeInput = [];
    const rangeObject = {
        total: 0,
        odds: [],
        evens: [],
        range: [],
        average: 
    };
    for (let i = start; i <= rangeInput.length; i++) {
        rangeObject.total += rangeInput[i];
        if (rangeInput[i] % 2 === 1) {
            rangeObject.odds = rangeInput;
        }
        if (rangeInput[i] % 2 === 0) {
            rangeObject.evens = rangeInput;
        }
        const range = rangeInput.slice(start, end);
        rangeObject.range.push(range[i]);
        const average = rangeObject.total / rangeInput.length;
        rangeObject.average = average;
    }
    return rangeObject;
}
