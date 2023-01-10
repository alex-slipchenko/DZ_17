function Human(name, gender) {
    this.name = name;
    this.gender = gender;
    this.getInfo = function (name, gender) {
        return `${this.name}${':'}${this.gender}`;
    }
}