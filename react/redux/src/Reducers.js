import { createReducer, createAction } from "@reduxjs/toolkit";
const increment = createAction('increment')
const decrement = createAction('decrement')

const initialState={
    c:0,
}
export const customReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(increment, (state, action) => {
        // action is inferred correctly here
        state.c += action.payload
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(decrement, (state, action) => {
        state.c -= action.payload
      })
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  }) 