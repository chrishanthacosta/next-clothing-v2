import { Button } from "@nextui-org/react";
import { toast } from "react-toastify";

export const deleteInvoice = async (pathname: any, invoiceid: any) => {
  const response = await fetch(pathname + "/api/invoice", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ invoiceid }),
  });

  const res = await response.json();
  if (res == "SUCCESS") {
    toast.success("Invoice deleted successfully!", {
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
};

export const handleDelete = async (pathname: any, invoiceid: any) => {
  // Display a toast notification with a confirmation message.
  toast.warning("Are you sure you want to delete this Invoice?", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: false, // This ensures the notification doesn't auto-close
    closeOnClick: false, // This prevents the notification from closing when clicked
    closeButton: (
      <div>
        <Button
          color="default"
          onClick={() => deleteInvoice(pathname, invoiceid)}
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

// const confirmDelete = async (purchaseorderid: any) => {
//   await deletePo(pathname, purchaseorderid);
//   toast.dismiss();
//   // router.push("/home/products");
// };///
