export interface ITodoAction {
    type: string,
    payload: any
}

export function addItem(value:string):ITodoAction {
    console.log("object");
    return {
        type: "ADD_ITEM",
        payload: { value }
    }
}