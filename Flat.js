function Flat() {
    this.inhabitants = [];

    this.addInhabitant = function (person) {
        return this.inhabitants.push(person);
    }
}