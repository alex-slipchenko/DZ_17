function Build(maxLength) {
    this.myFlats = [];
    this.maxLength = maxLength;

    this.addFlats = function (myArr) {
        if (this.myFlats.length < this.maxLength) {
            return this.myFlats.push(myArr);
        } else {
            return console.log("Слишком много квартир не влезает;)");
        }
    }
}