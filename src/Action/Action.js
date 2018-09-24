
export function selectCoffeeAction(payload) {
    payload.qty = 1;
    return{
        type: "SELECT_COFFEE",
        payload: payload
    }
}