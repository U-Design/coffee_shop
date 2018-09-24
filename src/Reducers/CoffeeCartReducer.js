const intialState = [
    {
        type: "Café Bombón",
        price: "100",
        qty : 1
    }

];

function CoffeeCartReducer(state = intialState, action) {
    if(action.type === 'SELECT_COFFEE'){
        if(state.length){
            state = [...state];
            let index = state.findIndex((record) => {

                return record.type === action.payload.type;
            });
            if(index > -1){
                state[index].price = parseInt(state[index].price,10) + parseInt(action.payload.price,10);
                state[index].qty = parseInt(state[index].qty,10) + parseInt(action.payload.qty,10)
            }else{
                state.push(action.payload);
            }
        }

    }
    return state;
}



export default CoffeeCartReducer;