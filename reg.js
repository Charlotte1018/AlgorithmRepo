function removeAllSpace(str) {
    return str.replace(/\s/g, "%20");
}
var book = {
    "title": "Professional JavaScript",
    "authors": [
        "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011,
    toJSON: function () {
        return this.year;
    }
};
var jsonText = JSON.stringify(book);
console.log(jsonText)