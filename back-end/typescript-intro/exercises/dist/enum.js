"use strict";
var studentStatus;
(function (studentStatus) {
    studentStatus[studentStatus["active"] = 1] = "active";
    studentStatus[studentStatus["inactive"] = 2] = "inactive";
    studentStatus[studentStatus["paused"] = 3] = "paused";
})(studentStatus || (studentStatus = {}));
;
let newStudant = studentStatus.inactive;
console.log(newStudant);
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["domingo"] = 1] = "domingo";
    diasDaSemana[diasDaSemana["segunda"] = 2] = "segunda";
    diasDaSemana[diasDaSemana["ter\u00E7a"] = 3] = "ter\u00E7a";
    diasDaSemana[diasDaSemana["quarta"] = 4] = "quarta";
    diasDaSemana[diasDaSemana["quinta"] = 5] = "quinta";
    diasDaSemana[diasDaSemana["sexta"] = 6] = "sexta";
})(diasDaSemana || (diasDaSemana = {}));
;
let quarta = diasDaSemana.quarta;
console.log(`quarta representa o dia ${quarta} da semana.`);
