const intialState = [
    {
        type: "Café Bombón",
        price: "100"
    },{
        type: "Café au lait.",
        price: "120"
    },{
        type: "Caffé Corretto",
        price: "140"
    },{
        type: "Café Crema",
        price: "150"
    },

];

function CoffeeListReducer(state = intialState) {
    return state;
}

export default CoffeeListReducer;