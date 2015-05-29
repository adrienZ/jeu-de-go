module.exports = isObjectLike;


function isObjectLike(obj) {
    return (obj && typeof(obj) === "object") || false;
}
