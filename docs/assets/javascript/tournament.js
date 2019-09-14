"use strict";
// interface TrPlaceResult {
//     point: number;
//     miss: number;
//     rank: number
// }
Object.defineProperty(exports, "__esModule", { value: true });
// class TrPlace {
//     name: string;
//     result: TrPlaceResult | null;
//     constructor (name: string) {
//         this.name = name;
//         this.result = null;
//     }
//     setResult(point: number, miss: number, rank: number): void {
//         this.result = {point: point, miss: miss, rank: rank };
//     }
// }
// type TrSide = "W" | "L";
// class TrMatch {
//     places: (TrPlace | null)[];
//     side: TrSide;
//     round: number;
//     id: number;
//     isDummy: boolean = false;
//     static width: number;
//     static height: number;
//     static horiInterval: number = 50;
//     static vertInterval: number = 10;
//     constructor (places: (TrPlace | null)[], side: TrSide, round: number, id: number) {
//         this.places = places;
//         this.side = side;
//         this.round = round;
//         this.id = id;
//     }
//     static calcSize(): void {
//         let dummy = new TrMatch([null, null, null, null], "W", 0, 0);
//         dummy.isDummy = true;
//         dummy.draw();
//         let matches = document.getElementsByClassName("tour-match");
//         if (matches.length == 0) {
//             console.log("試合がないよ");
//             return;
//         }
//         let basematch = matches[0] as HTMLElement;
//         this.width = basematch.getBoundingClientRect().width;
//         this.height = basematch.getBoundingClientRect().height;
//         //dummyを作っているのがtournamentなのでparentは絶対あります
//         basematch.parentNode!.removeChild(basematch);
//     }
//     get top(): number {
//         if (this.isDummy) {
//             return 0;
//         }
//         function calcTop(round: number): number {
//             if (round == 0) {
//                 return 0;
//             }
//             return 0;
//         }
//         return (TrMatch.height + TrMatch.vertInterval) * this.id;
//     }
//     get left(): number {
//         if (this.isDummy) {
//             return 0;
//         }
//         return (TrMatch.width + TrMatch.horiInterval) * this.round;
//     }
//     draw() {
//         let base = document.getElementById("tournament");
//         let tableHTML = '<table class="tour-match" style="position: absolute;';
//         tableHTML += 'left:' + this.left.toString() + 'px;';
//         tableHTML += 'top:' + this.top + 'px;';
//         tableHTML += '">';
//         for (let i = 0; i < this.places.length; i++) {
//             tableHTML += this.makeOneTr(this.places[i]);
//         }
//         tableHTML += "</table>";
//         if (base != null) {
//             base.insertAdjacentHTML('beforeend', tableHTML);
//         }
//     }
//     private makeOneTr(place: TrPlace |  null): string {
//         let nameString = "";
//         let pointString = "";
//         let missString = "";
//         let rankString = "";
//         if (place != null) {
//             nameString = place.name;
//             if (place.result != null) {
//                 pointString = place.result.point.toString();
//                 missString = place.result.miss.toString();
//                 rankString = place.result.rank.toString();
//             }
//         }
//         return `<tr>
//         <td class="tour-name">${nameString}</td>
//         <td class="tour-point">${pointString}-${missString}</td>
//         <td class="tour-rank">${rankString}</td>
//         </tr>`;
//     }
// }
var trClass_1 = require("./trClass");
function buildTournament() {
    var place1 = new trClass_1.TrPlace("wktk");
    var place2 = new trClass_1.TrPlace("ktkr");
    var place3 = new trClass_1.TrPlace("佐々木 忠次郎");
    var place4 = null;
    var match1 = new trClass_1.TrMatch([place1, place2, place3, place4], "W", 0, 0);
    match1.draw();
    place1.setResult(7, 0, 1);
    place2.setResult(3, 2, 4);
    var match2 = new trClass_1.TrMatch([place1, place2, place3, place4], "W", 0, 1);
    match2.draw();
    for (var i = 0; i < 15; i++) {
        var match = new trClass_1.TrMatch([place1, place2, place3, place4], "W", i, i + 2);
        match.draw();
    }
    var base = document.getElementById("tournament");
    if (base != null) {
        var width = 1500;
        base.style.width = width + "px";
        base.style.height = "1000px";
        var content = document.getElementById("content");
        if (content != null) {
            content.style.maxWidth = width + "px";
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    trClass_1.TrMatch.calcSize();
    buildTournament();
});