"use client";

import NextAutoFocusTextInputField from "@/app/components/nextui-input-fields/next-autofocus-text-input-fields";
import NextTextInputField from "@/app/components/nextui-input-fields/next-text-input-fields";
import NextTextReadOnlyInputField from "@/app/components/nextui-input-fields/next-text-readonly-input-fields";
import { InvoiceTable } from "@/app/components/page-components/invoice/table";
import NewSupplier from "@/app/components/page-components/suppliers/addnew";
import { SupplierTable } from "@/app/components/page-components/suppliers/table";
import { fetchBankData, fetchCustomerData } from "@/store/purchaseorder/utils";
import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { VscNewFile } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { handleSelectChangeEvent } from "../../purchaseorder/newpurchaseorder/utils";
import NextSelectInputField from "@/app/components/nextui-input-fields/next-select-input-fields";
import NextNumberInputField from "@/app/components/nextui-input-fields/next-number-input-fields";
import NextAreaTextInputField from "@/app/components/nextui-input-fields/next-textarea-input-fields";
import { InvoiceDetailTable } from "@/app/components/page-components/invoice/invoicedetails-table";
import {
  setAllPoDataList,
  setModifiedPoDataList,
  setSelectedPoList,
} from "@/store/invoice/invoice-slice";
import { GiCancel } from "react-icons/gi";
import { AiFillSave } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { inputFieldValidation } from "@/app/utils/utils";
import NextNumberReadOnlyInputField from "@/app/components/nextui-input-fields/next-number-readonly-input-fields";
import NextDateInputField from "@/app/components/nextui-input-fields/next-date-input-fields";
import NextReadonlySelectInputField from "@/app/components/nextui-input-fields/next-select-readonly-input-fields";
import { handleDelete } from "./utils";
import InvoicePrintableComponent from "@/app/components/page-components/invoice/invoice-printing-module";

export default function NewInvoice() {
  const router = useRouter();
  const dispatch = useDispatch();
  //get pathname
  let pathname: string = "";

  try {
    pathname = window.location.href;
  } catch (error) {}

  if (pathname) {
    const r: number = pathname.indexOf("/", 9);
    if (r !== -1) {
      pathname = pathname.substring(0, r);
    }
  }

  const searchParams = useSearchParams();
  const selInvoiceid = searchParams.get("invoiceid");

  const customerOptionValues = useSelector(
    (state: any) => state.poReducer.customerOptionValues
  );

  const bankdetailOptionValues = useSelector(
    (state: any) => state.poReducer.bankdetailOptionValues
  );

  const selectedPoDataList = useSelector(
    (state: any) => state.invoiceReducer.selectedPoDataList
  );

  const currencyOptionValues = [
    {
      value: "USD",
      name: "USD",
    },
    {
      value: "Pound sterling",
      name: "Pound sterling",
    },
  ];

  const [formData, setFormData] = useState({
    invoiceid: "",
    invoiceno: "",
    date: "",
    paymentterm: "",
    totalqty: "",
    totalvalue: "",
    remark: "",
  });

  // const [allPoDetails, setAllPoDetails] = useState([]);
  const [invoiceHeaderData, setInvoiceHeaderData] = useState([]);
  const [invoiceDetailData, setInvoiceDetailData] = useState([]);

  const [customerid, setCustomerid] = useState(new Set([]));
  const [bankaccountid, setBankaccountid] = useState(new Set([]));
  const [currency, setCurrency] = useState(new Set(["USD"]));

  useEffect(() => {
    if (customerid.values().next().value) {
      fetchPoDetailsAsCustomer();
      // dispatch(setSelectedPoList([]));
    }
  }, [customerid]);

  useEffect(() => {
    if (selInvoiceid) {
      fetchSelInvoiceData();
    }
  }, []);

  useEffect(() => {
    dispatch(fetchCustomerData(pathname));
    dispatch(fetchBankData(pathname));
  }, []);
  // useEffect(() => {

  //   for (let i = 0; i < allPoDetails.length; i++) {
  //     const element = allPoDetails[i];

  //   }
  // }, [allPoDetails, selectedPoList]);

  // useEffect(() => {
  //   setModifiedAllPoDetails(allPoDetails);
  // }, [allPoDetails]);

  useEffect(() => {
    const totalQty = selectedPoDataList?.reduce((total: any, obj: any) => {
      return total + parseInt(obj.totalqty);
    }, 0);
    handleInputChange(totalQty, "totalqty");
    // console.log("selectedPoDataList", selectedPoDataList);

    const updatedTableData = selectedPoDataList?.map((item) => ({
      ...item,
      totalvalue: item.totalqty * item.sellingprice,
    }));

    const totalValue = updatedTableData?.reduce((total: any, obj: any) => {
      return total + parseFloat(obj.totalvalue);
    }, 0);
    handleInputChange(totalValue, "totalvalue");
  }, [selectedPoDataList]);

  const handleInputChange = (value, name) => {
    setFormData((prve) => ({
      ...prve,
      [name]: value,
    }));
  };

  const fetchPoDetailsAsCustomer = async () => {
    const fetchData = async () => {
      const reponse = await fetch(
        pathname +
          "/api/purchaseorder/get-po-headerlist?customerid=" +
          customerid.values().next().value
      );
      const res = await reponse.json();
      dispatch(setAllPoDataList(res.poData));
      // console.log("res", res);
      // setAllPoDetails(res.poData);
    };

    // call the function
    await fetchData().catch(console.error);
  };

  const fetchSelInvoiceData = async () => {
    const fetchData = async () => {
      const reponse = await fetch(
        pathname + "/api/invoice/get-selected-invoice?invoiceid=" + selInvoiceid
      );
      const res = await reponse.json();
      const resData = res.invoiceData;
      const tmpInvoiceData = resData.map((y) => ({
        invoiceid: y.invoiceid,
        invoiceno: y.invoiceno,
        date: y.date,
        paymentterm: y.paymentterm,
        totalqty: y.totalqty,
        totalvalue: y.totalvalue,
        remark: y.remark,
      }));
      setInvoiceHeaderData(resData);
      setInvoiceDetailData(res.invoiceDetailData);

      setFormData(tmpInvoiceData[0]);
      // console.log("resData[0].customerid", resData[0].customerid);
      setCustomerid(new Set([resData[0].customerid.toString()]));
      setBankaccountid(new Set([resData[0].bankaccountid.toString()]));
      setCurrency(new Set([resData[0].currency.toString()]));
      dispatch(setSelectedPoList(res.invoiceDetailData));
      // setSavedPoDetails(res.invoiceDetailData);
      // console.log("res.invoiceDetailData", res.invoiceDetailData);
    };

    // call the function
    fetchData().catch(console.error);
  };

  const newInvoiceScreen = async () => {
    // Display a toast notification with a confirmation message.
    toast.warning("Are you sure you want to create new Invoice?", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false, // This ensures the notification doesn't auto-close
      closeOnClick: false, // This prevents the notification from closing when clicked
      closeButton: (
        <div>
          <Button
            color="default"
            onClick={() => createNewInvoice()}
            className="mb-1"
          >
            Yes
          </Button>
          <Button
            color="danger"
            onClick={() => {
              toast.dismiss();
            }}
          >
            No
          </Button>
        </div>
      ),
    });
  };
  const createNewInvoice = () => {
    window.location.href = pathname + "/home/invoice/newinvoice";
    toast.dismiss();
  };
  const cancelEvent = () => {
    dispatch(setSelectedPoList([]));
    dispatch(setAllPoDataList([]));
    dispatch(setModifiedPoDataList([]));
    window.location.href = "/home/invoice";
  };

  const updateInvoice = async () => {
    const Invoice_no = formData.invoiceno;
    const Customer = customerid.values().next().value;
    const validation = inputFieldValidation({ Invoice_no, Customer });
    if (validation == 0) {
      if (selectedPoDataList.length > 0) {
        const response = await fetch(pathname + "/api/invoice", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formData,
            customerid: customerid.values().next().value ?? 0,
            bankaccountid: bankaccountid.values().next().value ?? 0,
            currency: currency.values().next().value ?? "0",
            selectedPoDataList,
          }),
        });
        const res = await response.json();
        if (res.message == "SUCCESS") {
          console.log("res", res);
          toast.success(`Invoice updated successfully!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          window.location.href = "/home/invoice";
        } else {
          toast.error("Error!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }

        return res;
      } else {
        toast.info(`Please select atleast one PO!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div className="flex ml-3 flex-col bg-slate-200 w-full">
      <span className="text-3xl font-black leading-none text-gray-900 select-none">
        {formData.invoiceid ? "Edit" : "Create new"} Invoi
        <span className="text-indigo-600">ce</span>
      </span>
      <div className="justify-end w-full mt-3 flex items-center mr-3 gap-2">
        {formData.invoiceid ? (
          <InvoicePrintableComponent
            invoiceHeaderData={invoiceHeaderData}
            invoiceDetailData={invoiceDetailData}
          />
        ) : null}
        <Button
          color="primary"
          onClick={newInvoiceScreen}
          startContent={<VscNewFile />}
        >
          Create New
        </Button>
      </div>
      <div>
        {/* {JSON.stringify(selectedPoDataList)} */}
        <div className="w-full flex flex-col gap-4 mt-2 pb-2 pt-2 border border-gray-400 border-solid rounded-lg">
          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/2">
              <NextTextReadOnlyInputField
                label="Invoice ID"
                value={formData.invoiceid}
                onChange={(e) => handleInputChange(e.target.value, "invoiceid")}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/2">
              <NextAutoFocusTextInputField
                label="Invoice No"
                value={formData.invoiceno}
                onChange={(e) => handleInputChange(e.target.value, "invoiceno")}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/2">
              <NextDateInputField
                label="Date"
                value={formData.date}
                onChange={(e) => handleInputChange(e.target.value, "date")}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/2">
              <NextTextInputField
                label="Payment terms"
                value={formData.paymentterm}
                onChange={(e) =>
                  handleInputChange(e.target.value, "paymentterm")
                }
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/2">
              {formData.invoiceid ? (
                <NextReadonlySelectInputField
                  label="Customer"
                  value={customerid}
                  onChange={(e) =>
                    handleSelectChangeEvent(e, setCustomerid, customerid)
                  }
                  optionValues={customerOptionValues}
                />
              ) : (
                <NextSelectInputField
                  label="Customer"
                  value={customerid}
                  onChange={(e) =>
                    handleSelectChangeEvent(e, setCustomerid, customerid)
                  }
                  optionValues={customerOptionValues}
                />
              )}
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/2">
              <NextSelectInputField
                label="Bank"
                value={bankaccountid}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setBankaccountid, bankaccountid)
                }
                optionValues={bankdetailOptionValues}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mt-1 ml-1 px-2">
              <span className="inline-block mr-1 last:mr-0 py-1 px-2 rounded-full bg-blue-200 text-xs font-semibold text-blue-600 uppercase">
                PO details
              </span>
            </div>
            <InvoiceDetailTable
              currency={currency}
              // savedPoDetails={savedPoDetails}
            />
          </div>
          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/2">
              <NextNumberReadOnlyInputField
                label="Total Qty"
                value={formData.totalqty}
                onChange={(e) => handleInputChange(e.target.value, "totalqty")}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/2 flex">
              <div className="w-3/5">
                <NextNumberReadOnlyInputField
                  label="Total Value"
                  value={formData.totalvalue}
                  onChange={(e) =>
                    handleInputChange(e.target.value, "totalvalue")
                  }
                />
              </div>
              <div className="w-2/5">
                <NextSelectInputField
                  label="Currency"
                  value={currency}
                  onChange={(e) =>
                    handleSelectChangeEvent(e, setCurrency, currency)
                  }
                  optionValues={currencyOptionValues}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/1">
              <NextAreaTextInputField
                label="Remark"
                value={formData.remark}
                onChange={(e) => handleInputChange(e.target.value, "remark")}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 mt-2 px-3 mb-1">
            <div className="flex flex-wrap">
              <div className="px-1">
                <Button
                  color="primary"
                  startContent={<AiFillSave />}
                  onClick={updateInvoice}
                >
                  Save
                </Button>
              </div>
              <div>
                <Button
                  color="default"
                  startContent={<GiCancel />}
                  onClick={cancelEvent}
                >
                  Cancel
                </Button>
              </div>
              <div className={formData.invoiceid ? "ml-auto" : "hidden"}>
                <Button
                  color="danger"
                  startContent={<ImBin />}
                  onClick={() => handleDelete(pathname, formData.invoiceid)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
