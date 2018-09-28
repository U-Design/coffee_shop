const initialState = [
    {
        id:1,
        type: "Espresso",
        price: 100,
        image: 'espresso'
    },{
        id:2,
        type: "Decaf",
        price: 120,
        image: "decaf"
    },{
        id:3,
        type: "Black Tea",
        price: 140,
        image: "black_tea"
    },{
        id:4,
        type: "Hot Chocolate",
        price: 150,
        image: "hot_chocolate"
    },{
        id:5,
        type: "Iced Coffee",
        price: 150,
        image: "iced_coffee"
    },{
        id:6,
        type: "Coffee",
        price: 150,
        image: "coffee"
    },

];


  const fetchProducts = () => {
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                resolve(initialState);
            },100);
        })
  };
  export  default fetchProducts;