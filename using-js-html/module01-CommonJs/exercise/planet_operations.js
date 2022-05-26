module.exports = {
    get AU_IN_KILOMETERS () { return 149587870 },
    convertAuToKM(au) {
        return au * this.AU_IN_KILOMETERS
    }
}