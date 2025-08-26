import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/services/api'
// import cartReducer from '@/features/cart/slice'
// import configuratorReducer from '@/features/configurator/slice'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // cart: cartReducer,
    // configurator: configuratorReducer,
  },
  middleware: (gDM) => gDM().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
