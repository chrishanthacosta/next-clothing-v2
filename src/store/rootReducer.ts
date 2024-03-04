import { combineReducers } from "@reduxjs/toolkit";
import poReducer from "./purchaseorder/po-slice";
import invoiceReducer from "./invoice/invoice-slice";

const rootReducer = combineReducers({
  poReducer,
  invoiceReducer,
});

export default rootReducer;
