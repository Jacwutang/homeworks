// const initialState = {baseCurrency: "Please select", rates: {}};
// We currently have defined a dummy reducer which always returns the initialState. Now let's build it out by adding a switch statement. It's going to start by looking something like this:
//
// const reducer = (state = initialState, action) => {
//   switch(action.type) {
//     default:
//       return state;
//   }
// };



const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const reducer = (state = initialState, action) => {
    //takes in state, action

    switch(action.type){
      case: 'SWITCH_CURRENCY':
        return {
          baseCurrency: action.baseCurrency
          rates: action.rates

        }


      default:
        return state;

    }


};

export default reducer;
