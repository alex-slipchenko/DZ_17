
// ========================================
const oneHabit = new Human('Вася', 'чол');
const twoHabit = new Human('Петя', 'чол');
const threeHabit = new Human('Оля', 'жін');
const fourHabit = new Human('Саша', 'чол');
const fiveHabit = new Human('Леонід', 'чол');
const sixHabit = new Human('Света', 'жін');
const sevenHabit = new Human('Ваня', 'чол');
const eightHabit = new Human('Шурік', 'чол');
const nineHabit = new Human('Льоля', 'жін');
// ======================================
const oneFlat = new Flat();

const twoFlat = new Flat();

const threeFlat = new Flat();

// =====================================
oneFlat.addInhabitant(oneHabit);
oneFlat.addInhabitant(twoHabit);
oneFlat.addInhabitant(threeHabit);
// ======================================
twoFlat.addInhabitant(fourHabit);
twoFlat.addInhabitant(fiveHabit);
twoFlat.addInhabitant(sixHabit);
//========================================
threeFlat.addInhabitant(sevenHabit);
threeFlat.addInhabitant(eightHabit);
threeFlat.addInhabitant(nineHabit);
// console.log(oneFlat);
// console.log(twoFlat);
// console.log(threeFlat);
// ======================================
const mainBuild = new Build(2);
// =========================
mainBuild.addFlats(oneFlat);
// =========================
mainBuild.addFlats(twoFlat);
// =========================
mainBuild.addFlats(threeFlat);
console.log(mainBuild);
