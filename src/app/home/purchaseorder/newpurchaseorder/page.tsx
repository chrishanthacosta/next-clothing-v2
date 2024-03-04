"use client";

import NextDateInputField from "@/app/components/nextui-input-fields/next-date-input-fields";
import NextTextInputField from "@/app/components/nextui-input-fields/next-text-input-fields";
import NextTextReadOnlyInputField from "@/app/components/nextui-input-fields/next-text-readonly-input-fields";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { handleDelete, handleSelectChangeEvent } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomerData,
  fetchFabricData,
  fetchSupplierData,
} from "@/store/purchaseorder/utils";
import NextSelectInputField from "@/app/components/nextui-input-fields/next-select-input-fields";
import NextNumberInputField from "@/app/components/nextui-input-fields/next-number-input-fields";
import NextAreaTextInputField from "@/app/components/nextui-input-fields/next-textarea-input-fields";
import { PoDetailTable } from "@/app/components/page-components/purchaseorder/podetails-table";
import NextNumberReadOnlyInputField from "@/app/components/nextui-input-fields/next-number-readonly-input-fields";
import { Button, cn } from "@nextui-org/react";
import { AiFillSave } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { toast } from "react-toastify";
import { inputFieldValidation } from "@/app/utils/utils";
import { ImBin } from "react-icons/im";
import NewCustomer from "@/app/components/page-components/customers/addnew";
import NewFabric from "@/app/components/page-components/fabrics/addnew";
import NewSupplier from "@/app/components/page-components/suppliers/addnew";
import {
  setAddnewBaseinfoIdPo,
  setAddnewBaseinfoTypePo,
} from "@/store/purchaseorder/po-slice";
import { VscNewFile } from "react-icons/vsc";
import PoPrintableComponent from "@/app/components/page-components/purchaseorder/po-printing-module";

//dc date
export default function PurchaseOrder() {
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

  const customerOptionValues = useSelector(
    (state: any) => state.poReducer.customerOptionValues
  );

  const supplierOptionValues = useSelector(
    (state: any) => state.poReducer.supplierOptionValues
  );

  const fabricOptionValues = useSelector(
    (state: any) => state.poReducer.fabricOptionValues
  );

  const poDetailTableData = useSelector(
    (state: any) => state.poReducer.poDetailTableData
  );

  const selPoForEdit = useSelector(
    (state: any) => state.poReducer.selPoForEdit
  );

  const addnewBaseinfoTypePo = useSelector(
    (state: any) => state.poReducer.addnewBaseinfoTypePo
  );

  const addnewBaseinfoIdPo = useSelector(
    (state: any) => state.poReducer.addnewBaseinfoIdPo
  );

  const shippingmodeOptionValues = [
    {
      value: "FOB (By air)",
      name: "FOB (By air)",
    },
    {
      value: "FOB (By Sea)",
      name: "FOB (By Sea)",
    },
    {
      value: "CIF",
      name: "CIF",
    },
  ];

  const shippingmethodOptionValues = [
    {
      value: "Flat pack",
      name: "Flat pack",
    },
    {
      value: "m2",
      name: "m2",
    },
  ];

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

  const orderStatusOptionValues = [
    {
      value: "Initiated",
      name: "Initiated",
    },
    {
      value: "Shipped",
      name: "Shipped",
    },
    {
      value: "Delivered",
      name: "Delivered",
    },
    {
      value: "Closed",
      name: "Closed",
    },
  ];

  const sampleStatusOptionValues = [
    {
      value: "First fit",
      name: "First fit",
    },
    {
      value: "Second fit",
      name: "Second fit",
    },
    {
      value: "Third fit",
      name: "Third fit",
    },
    {
      value: "Fourth fit",
      name: "Fourth fit",
    },
    {
      value: "Sealed",
      name: "Sealed",
    },
    {
      value: "PPS approved",
      name: "PPS approved",
    },
    {
      value: "PS approved",
      name: "PS approved",
    },
  ];

  let tmpSelPoForEdit: any = selPoForEdit[0];
  let tmpSelPoDetailForEdit: any = selPoForEdit.poDetailData;

  const [purchaseorderid, setPurchaseorderid] = useState(
    tmpSelPoForEdit?.purchaseorderid ?? ""
  );
  const [customerid, setCustomerid] = useState(
    tmpSelPoForEdit?.customerid
      ? new Set([tmpSelPoForEdit?.customerid.toString()])
      : new Set([])
  );
  const [date, setDate] = useState(tmpSelPoForEdit?.date ?? "");

  const [dcdate, setDcdate] = useState(tmpSelPoForEdit?.dcdate ?? "");

  const [supplierid, setSupplierid] = useState(
    tmpSelPoForEdit?.supplierid
      ? new Set([tmpSelPoForEdit?.supplierid.toString()])
      : new Set([])
  );
  const [customerpo, setCustomerpo] = useState(
    tmpSelPoForEdit?.customerpo ?? ""
  );
  const [exfactorydate, setExfactorydate] = useState(
    tmpSelPoForEdit?.exfactorydate ?? ""
  );
  // console.log("selPoForEdit", selPoForEdit);
  const [shippingmode, setShippingmode] = useState(
    tmpSelPoForEdit?.shippingmode
      ? tmpSelPoForEdit?.shippingmode.toString() == "0"
        ? new Set([])
        : new Set([tmpSelPoForEdit?.shippingmode.toString()])
      : new Set([])
  );
  const [customerstylename, setCustomerstylename] = useState(
    tmpSelPoForEdit?.customerstylename ?? ""
  );
  const [department, setDepartment] = useState(
    tmpSelPoForEdit?.department ?? ""
  );

  const [shippingmethod, setShippingmethod] = useState(
    tmpSelPoForEdit?.shippingmethod
      ? tmpSelPoForEdit?.shippingmethod.toString() == "0"
        ? new Set([])
        : new Set([tmpSelPoForEdit?.shippingmethod.toString()])
      : new Set([])
  );
  const [fabricid, setFabricid] = useState(
    tmpSelPoForEdit?.fabricid
      ? new Set([tmpSelPoForEdit?.fabricid.toString()])
      : new Set([])
  );
  const [rationpacksize, setRationpacksize] = useState(
    tmpSelPoForEdit?.rationpacksize ?? ""
  );

  const [style, setStyle] = useState(tmpSelPoForEdit?.style ?? "");
  const [colour, setcolour] = useState(tmpSelPoForEdit?.colour ?? "");
  const [description, setDescription] = useState(
    tmpSelPoForEdit?.description ?? ""
  );

  const [supplierprice, setSupplierprice] = useState(
    tmpSelPoForEdit?.supplierprice ?? 0
  );
  const [totalqty, setTotalqty] = useState(tmpSelPoForEdit?.totalqty ?? 0);
  const [totalvalue, setTotalvalue] = useState(
    tmpSelPoForEdit?.totalvalue ?? 0
  );

  const [sellingprice, setSellingprice] = useState(
    tmpSelPoForEdit?.sellingprice ?? 0
  );
  const [colourcode, setColourcode] = useState(
    tmpSelPoForEdit?.colourcode ?? ""
  );
  const [remark, setRemark] = useState(tmpSelPoForEdit?.remark ?? "");
  const [currency, setCurrency] = useState(
    tmpSelPoForEdit?.currency
      ? tmpSelPoForEdit?.currency.toString() == "0"
        ? new Set([])
        : new Set([tmpSelPoForEdit?.currency.toString()])
      : new Set(["USD"])
  );

  const [orderstatus, setOrderstatus] = useState(
    tmpSelPoForEdit?.orderstatus
      ? tmpSelPoForEdit?.orderstatus.toString() == "0"
        ? new Set([])
        : new Set([tmpSelPoForEdit?.orderstatus.toString()])
      : new Set([])
  );

  const [samplestatus, setSamplestatus] = useState(
    tmpSelPoForEdit?.samplestatus
      ? tmpSelPoForEdit?.samplestatus.toString() == "0"
        ? new Set([])
        : new Set([tmpSelPoForEdit?.samplestatus.toString()])
      : new Set([])
  );

  useEffect(() => {
    dispatch(fetchCustomerData(pathname));
    dispatch(fetchSupplierData(pathname));
    dispatch(fetchFabricData(pathname));
  }, []);

  useEffect(() => {
    switch (addnewBaseinfoTypePo) {
      case "Customer":
        dispatch(fetchCustomerData(pathname));
        setCustomerid(new Set([addnewBaseinfoIdPo.toString()]));
        break;
      case "Supplier":
        dispatch(fetchSupplierData(pathname));
        setSupplierid(new Set([addnewBaseinfoIdPo.toString()]));
        break;
      case "Fabric":
        dispatch(fetchFabricData(pathname));
        setFabricid(new Set([addnewBaseinfoIdPo.toString()]));
        break;
      default:
        "";
    }
  }, [addnewBaseinfoIdPo]);

  useEffect(() => {
    const totalQty = poDetailTableData?.reduce((total: any, obj: any) => {
      if (obj.rowstatus !== "r" && obj.rowstatus !== "d") {
        return total + parseInt(obj.total);
      }
      return total; // Ignore the calculation when rowstatus is 'r' or 'd'
    }, 0);
    // const totalQty = poDetailTableData?.reduce(
    //   (total: any, obj: any) => total + parseInt(obj.total),
    //   0
    // );
    setTotalqty(totalQty);
  }, [poDetailTableData]);

  useEffect(() => {
    const tmpTotalValue = supplierprice * totalqty;
    setTotalvalue(tmpTotalValue);
  }, [totalqty, supplierprice]);

  const cancelEvent = () => {
    window.location.href = "/home/purchaseorder";
  };

  const saveButtonHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (purchaseorderid) {
      updatePo();
    } else {
      addnewPo();
    }
    dispatch(setAddnewBaseinfoTypePo(""));
    dispatch(setAddnewBaseinfoIdPo(""));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = async (event: any) => {
    // if (event.key === "F2" || event.keyCode === 113) {
    //   await saveButtonHandler(event);
    // } else if (event.key === "Escape" || event.keyCode === 27) {
    //   cancelEvent();
    // }
  };

  const addnewPo = async () => {
    const validation = inputFieldValidation({});
    if (validation == 0) {
      const response = await fetch(pathname + "/api/purchaseorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerid: customerid.values().next().value ?? 0,
          date,
          supplierid: supplierid.values().next().value ?? 0,
          customerpo,
          exfactorydate,
          shippingmode: shippingmode.values().next().value ?? "0",
          customerstylename,
          department,
          shippingmethod: shippingmethod.values().next().value ?? "0",
          fabricid: fabricid.values().next().value ?? 0,
          rationpacksize,
          style,
          colour,
          description,
          supplierprice,
          sellingprice,
          colourcode,
          remark,
          currency: currency.values().next().value ?? "0",
          orderstatus: orderstatus.values().next().value ?? "0",
          samplestatus: samplestatus.values().next().value ?? "0",
          poDetailTableData,
          totalqty,
          totalvalue,
          dcdate
        }),
      });
      const res = await response.json();
      if (res == "SUCCESS") {
        toast.success(`Purchase order created successfully!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        window.location.href = "/home/purchaseorder";
        // router.push("/home/purchaseorder");
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
    }
  };

  const updatePo = async () => {
    const validation = inputFieldValidation({});
    if (validation == 0) {
      const response = await fetch(pathname + "/api/purchaseorder", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          purchaseorderid,
          customerid: customerid.values().next().value ?? 0,
          date,
          supplierid: supplierid.values().next().value ?? 0,
          customerpo,
          exfactorydate,
          shippingmode: shippingmode.values().next().value ?? "0",
          customerstylename,
          department,
          shippingmethod: shippingmethod.values().next().value ?? "0",
          fabricid: fabricid.values().next().value ?? 0,
          rationpacksize,
          style,
          colour,
          description,
          supplierprice,
          sellingprice,
          colourcode,
          remark,
          currency: currency.values().next().value ?? "0",
          orderstatus: orderstatus.values().next().value ?? "0",
          samplestatus: samplestatus.values().next().value ?? "0",
          totalqty,
          totalvalue,
          poDetailTableData,
          dcdate,
        }),
      });
      const res = await response.json();
      if (res == "SUCCESS") {
        toast.success(`Purchase order updated successfully!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        window.location.href = "/home/purchaseorder";
        // router.push("/home/purchaseorder");
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
    }
  };

  const newPoScreen = async () => {
    // Display a toast notification with a confirmation message.
    toast.warning("Are you sure you want to create new Po?", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false, // This ensures the notification doesn't auto-close
      closeOnClick: false, // This prevents the notification from closing when clicked
      closeButton: (
        <div>
          <Button
            color="default"
            onClick={() => createNewPo()}
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

  const createNewPo = () => {
    dispatch(setAddnewBaseinfoTypePo(""));
    dispatch(setAddnewBaseinfoIdPo(""));
    window.location.href = pathname + "/home/purchaseorder/newpurchaseorder";
    toast.dismiss();
  };

  return (
    <div className="flex ml-3 flex-col bg-slate-200 w-full">
      <span className="text-3xl font-black leading-none text-gray-900 select-none">
       {purchaseorderid ? "Edit" : "Create new"} purchase or<span className="text-indigo-600">der</span>
      </span>
      <div className="justify-end w-full mt-3 flex items-center mr-3 gap-2">
        {purchaseorderid ? (
          <PoPrintableComponent poDataForPrint={selPoForEdit} />
        ) : null}
        <Button
          color="primary"
          onClick={newPoScreen}
          startContent={<VscNewFile />}
        >
          Create New
        </Button>
      </div>
      {/* v- {JSON.stringify(poDetailTableData)} */}
      <div>
        <div className="w-full flex flex-col gap-4 mt-2 pb-2 pt-2 border border-gray-400 border-solid rounded-lg">
          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3 flex">
              <div className="w-1/2">
                <NextTextReadOnlyInputField
                  label="Purchase order ID"
                  value={purchaseorderid}
                  onChange={(e) => setPurchaseorderid(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <NextSelectInputField
                  label="Order status"
                  value={orderstatus}
                  onChange={(e) =>
                    handleSelectChangeEvent(e, setOrderstatus, orderstatus)
                  }
                  optionValues={orderStatusOptionValues}
                />
              </div>
            </div>
            <div className="mb-6 md:mb-0 w-full pr-3 sm:w-1/3 flex items-center justify-center">
              <NewCustomer type="new" addnewFromOutside={true} />
              <NextSelectInputField
                label="Customer"
                value={customerid}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setCustomerid, customerid)
                }
                optionValues={customerOptionValues}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextDateInputField
                label="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 w-full pr-3 sm:w-1/3 flex items-center justify-center">
              <NewSupplier type="new" addnewFromOutside={true} />
              <NextSelectInputField
                label="Supplier"
                value={supplierid}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setSupplierid, supplierid)
                }
                optionValues={supplierOptionValues}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Customer PO"
                value={customerpo}
                onChange={(e) => setCustomerpo(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextDateInputField
                label="Ex factory date"
                value={exfactorydate}
                onChange={(e) => setExfactorydate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextSelectInputField
                label="Shipping mode"
                value={shippingmode}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setShippingmode, shippingmode)
                }
                optionValues={shippingmodeOptionValues}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Customer style name"
                value={customerstylename}
                onChange={(e) => setCustomerstylename(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextSelectInputField
                label="Shipping method"
                value={shippingmethod}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setShippingmethod, shippingmethod)
                }
                optionValues={shippingmethodOptionValues}
              />
            </div>
            <div className="mb-6 md:mb-0 w-full pr-3 sm:w-1/3 flex items-center justify-center">
              <NewFabric type="new" addnewFromOutside={true} />
              <NextSelectInputField
                label="Fabric"
                value={fabricid}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setFabricid, fabricid)
                }
                optionValues={fabricOptionValues}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextNumberInputField
                label="Ratio pack size"
                value={rationpacksize}
                onChange={(e) => setRationpacksize(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Style"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Colour"
                value={colour}
                onChange={(e) => setcolour(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextAreaTextInputField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextSelectInputField
                label="Sample status"
                value={samplestatus}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setSamplestatus, samplestatus)
                }
                optionValues={sampleStatusOptionValues}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextDateInputField
                label="DC Date"
                value={dcdate}
                onChange={(e) => setDcdate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mt-1 ml-1 px-2">
              <span className="inline-block mr-1 last:mr-0 py-1 px-2 rounded-full bg-blue-200 text-xs font-semibold text-blue-600 uppercase">
                PO details
              </span>
            </div>
            <PoDetailTable
              rationpacksizeIn={rationpacksize}
              poDetailsRowsIn={tmpSelPoDetailForEdit}
            />
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3 flex">
              <div className="w-3/5">
                <NextNumberInputField
                  label="Supplier price"
                  value={supplierprice}
                  onChange={(e) => setSupplierprice(e.target.value)}
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
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextNumberReadOnlyInputField
                label="Total qty"
                value={totalqty}
                onChange={(e) => setTotalqty(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3 flex">
              <div className="w-3/5">
                <NextNumberReadOnlyInputField
                  label="Total value"
                  value={totalvalue}
                  onChange={(e) => setTotalvalue(e.target.value)}
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
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3  flex">
              <div className="w-3/5">
                <NextNumberInputField
                  label="Selling price"
                  value={sellingprice}
                  onChange={(e) => setSellingprice(e.target.value)}
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
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Colour code"
                value={colourcode}
                onChange={(e) => setColourcode(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextAreaTextInputField
                label="Remark"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 mt-2 px-3 mb-1">
            <div className="flex flex-wrap">
              <div className="px-1">
                <Button
                  color="primary"
                  startContent={<AiFillSave />}
                  onClick={saveButtonHandler}
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
              <div className={purchaseorderid ? "ml-auto" : "hidden"}>
                <Button
                  color="danger"
                  startContent={<ImBin />}
                  onClick={() => handleDelete(pathname, purchaseorderid)}
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
