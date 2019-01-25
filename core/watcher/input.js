(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Input;
    (function (Input) {
        Input[Input["MouseLeft"] = 0] = "MouseLeft";
        Input[Input["MouseRight"] = 1] = "MouseRight";
        Input[Input["MouseMiddle"] = 2] = "MouseMiddle";
        Input[Input["Esc"] = 3] = "Esc";
        Input[Input["Backtick"] = 4] = "Backtick";
        Input[Input["One"] = 5] = "One";
        Input[Input["Two"] = 6] = "Two";
        Input[Input["Three"] = 7] = "Three";
        Input[Input["Four"] = 8] = "Four";
        Input[Input["Five"] = 9] = "Five";
        Input[Input["Six"] = 10] = "Six";
        Input[Input["Seven"] = 11] = "Seven";
        Input[Input["Eight"] = 12] = "Eight";
        Input[Input["Nine"] = 13] = "Nine";
        Input[Input["Zero"] = 14] = "Zero";
        Input[Input["Minus"] = 15] = "Minus";
        Input[Input["Plus"] = 16] = "Plus";
        Input[Input["Backspace"] = 17] = "Backspace";
        Input[Input["Tab"] = 18] = "Tab";
        Input[Input["Q"] = 19] = "Q";
        Input[Input["W"] = 20] = "W";
        Input[Input["E"] = 21] = "E";
        Input[Input["R"] = 22] = "R";
        Input[Input["T"] = 23] = "T";
        Input[Input["Y"] = 24] = "Y";
        Input[Input["U"] = 25] = "U";
        Input[Input["I"] = 26] = "I";
        Input[Input["O"] = 27] = "O";
        Input[Input["P"] = 28] = "P";
        Input[Input["BracketLeft"] = 29] = "BracketLeft";
        Input[Input["BracketRight"] = 30] = "BracketRight";
        Input[Input["Backslash"] = 31] = "Backslash";
        Input[Input["CapsLock"] = 32] = "CapsLock";
        Input[Input["A"] = 33] = "A";
        Input[Input["S"] = 34] = "S";
        Input[Input["D"] = 35] = "D";
        Input[Input["F"] = 36] = "F";
        Input[Input["G"] = 37] = "G";
        Input[Input["H"] = 38] = "H";
        Input[Input["J"] = 39] = "J";
        Input[Input["K"] = 40] = "K";
        Input[Input["L"] = 41] = "L";
        Input[Input["Semicolon"] = 42] = "Semicolon";
        Input[Input["Quote"] = 43] = "Quote";
        Input[Input["Enter"] = 44] = "Enter";
        Input[Input["Shift"] = 45] = "Shift";
        Input[Input["Z"] = 46] = "Z";
        Input[Input["X"] = 47] = "X";
        Input[Input["C"] = 48] = "C";
        Input[Input["V"] = 49] = "V";
        Input[Input["B"] = 50] = "B";
        Input[Input["N"] = 51] = "N";
        Input[Input["M"] = 52] = "M";
        Input[Input["Comma"] = 53] = "Comma";
        Input[Input["Period"] = 54] = "Period";
        Input[Input["Slash"] = 55] = "Slash";
        Input[Input["ShiftRight"] = 56] = "ShiftRight";
        Input[Input["Ctrl"] = 57] = "Ctrl";
        Input[Input["Super"] = 58] = "Super";
        Input[Input["Alt"] = 59] = "Alt";
        Input[Input["Space"] = 60] = "Space";
        Input[Input["AltRight"] = 61] = "AltRight";
        Input[Input["SuperRight"] = 62] = "SuperRight";
        Input[Input["CtrlRight"] = 63] = "CtrlRight";
        Input[Input["Insert"] = 64] = "Insert";
        Input[Input["Home"] = 65] = "Home";
        Input[Input["PageUp"] = 66] = "PageUp";
        Input[Input["Delete"] = 67] = "Delete";
        Input[Input["End"] = 68] = "End";
        Input[Input["PageDown"] = 69] = "PageDown";
        Input[Input["ArrowUp"] = 70] = "ArrowUp";
        Input[Input["ArrowDown"] = 71] = "ArrowDown";
        Input[Input["ArrowLeft"] = 72] = "ArrowLeft";
        Input[Input["ArrowRight"] = 73] = "ArrowRight";
    })(Input = exports.Input || (exports.Input = {}));
});
//# sourceMappingURL=input.js.map