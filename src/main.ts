import { QuickFindUF, QuickUnionUF, WeightedUnionUF } from './finds';

console.time("quickfind");
const QF = new QuickFindUF(10);
QF.union(4, 3);
QF.union(3, 8);
QF.union(6, 5);
QF.union(9, 4);
QF.union(2, 1);
QF.union(8, 9);
QF.union(5, 0);
QF.union(7, 2);
QF.union(6, 1);
QF.union(1, 0);
QF.union(6, 7);
console.log(QF.connected(0, 7));
console.timeEnd("quickfind");

console.time("quickunion");
const QU = new QuickUnionUF(10);
QU.union(4, 3);
QU.union(3, 8);
QU.union(6, 5);
QU.union(9, 4);
QU.union(2, 1);
QU.union(8, 9);
QU.union(5, 0);
QU.union(7, 2);
QU.union(6, 1);
QU.union(1, 0);
QU.union(6, 7);
console.log(QU.connected(0, 7));
console.timeEnd("quickunion");

console.time("weightedunion");
const WU = new WeightedUnionUF(10);
WU.union(4, 3);
WU.union(3, 8);
WU.union(6, 5);
WU.union(9, 4);
WU.union(2, 1);
WU.union(8, 9);
WU.union(5, 0);
WU.union(7, 2);
WU.union(6, 1);
WU.union(1, 0);
WU.union(6, 7);
console.log(WU.connected(0, 7));
console.timeEnd("weightedunion");
