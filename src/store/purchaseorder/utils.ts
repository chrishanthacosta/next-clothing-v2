import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCustomerData: any = createAsyncThunk(
  "po/fetchCustomerData",
  async (apiUrl: string) => {
    const response = await fetch(`${apiUrl}/api/customers`);
    const res = await response.json();
    // Create option array
    const optionArray: { value: number; name: string }[] = res.customerData.map(
      (c: any) => {
        return { value: c.customerid, name: c.customername };
      }
    );
    return optionArray;
  }
);

export const fetchSupplierData: any = createAsyncThunk(
  "po/fetchSupplierData",
  async (apiUrl: string) => {
    const response = await fetch(`${apiUrl}/api/suppliers`);
    const res = await response.json();
    // Create option array
    const optionArray: { value: number; name: string }[] = res.supplierData.map(
      (c: any) => {
        return { value: c.supplierid, name: c.suppliername };
      }
    );
    return optionArray;
  }
);

export const fetchFabricData: any = createAsyncThunk(
  "po/fetchFabricData",
  async (apiUrl: string) => {
    const response = await fetch(`${apiUrl}/api/fabrics`);
    const res = await response.json();
    // Create option array
    const optionArray: { value: number; name: string }[] = res.fabricData.map(
      (c: any) => {
        return { value: c.fabricid, name: c.fabricname };
      }
    );
    return optionArray;
  }
);

export const fetchBankData: any = createAsyncThunk(
  "po/fetchBankData",
  async (apiUrl: string) => {
    const response = await fetch(`${apiUrl}/api/bankdetails`);
    const res = await response.json();
    // Create option array
    const optionArray: { value: number; name: string }[] = res.bankDetailData.map(
      (c: any) => {
        return { value: c.bankaccountid, name: c.bankname };
      }
    );
    return optionArray;
  }
);

export const fetchSelPoDataForEdit: any = createAsyncThunk(
  "po/fetchSelPoDataForEdit",
  async (params: { apiUrl: string; purchaseorderid: any }) => {
    const { apiUrl, purchaseorderid } = params;

    const response = await fetch(
      `${apiUrl}/api/purchaseorder/get-selected-po?purchaseorderid=${purchaseorderid}`
    );
    const res = await response.json();
    console.log("poDetailData", res);
    let tmpPoData = res.poData;
    let tmpPoDetailData = res.poDetailData;
    tmpPoData.poDetailData = tmpPoDetailData;
    return tmpPoData;
  }
);
