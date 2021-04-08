export function add() {
    return ({
        type: "ADD_AGE",
        payload: new Promise(reslove => setTimeout(() => reslove(), 1000))
    })
}
export function inc() {
    return ({
        type: "SUB_AGE",
    })
}