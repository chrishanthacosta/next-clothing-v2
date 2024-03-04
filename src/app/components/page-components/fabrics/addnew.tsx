"use client";

import Modal from "react-modal";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import NextAutoFocusTextInputField from "../../nextui-input-fields/next-autofocus-text-input-fields";
import NextTextReadOnlyInputField from "../../nextui-input-fields/next-text-readonly-input-fields";
import { Button } from "@nextui-org/react";
import { AiFillPlusCircle, AiFillSave } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { inputFieldValidation } from "@/app/utils/utils";
import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  setAddnewBaseinfoIdPo,
  setAddnewBaseinfoTypePo,
} from "@/store/purchaseorder/po-slice";
import { useDispatch } from "react-redux";

const NewFabric = ({
  type,
  setReloadTable,
  data,
  addnewFromOutside,
}: {
  type: string;
  setReloadTable?: () => void;
  data?: any;
  addnewFromOutside?: boolean;
}) => {
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

  const [isOpen, setIsOpen] = useState(false);

  const { data: session, status } = useSession();

  const [fabricid, setFabricid] = useState(data?.fabricid ?? "");
  const [fabricname, setFabricname] = useState(data?.fabricname ?? "");

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 50,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
    },
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = async (event: any) => {
    if (!addnewFromOutside) {
      if (type != "edit" && (event.key === "F2" || event.keyCode === 113)) {
        setIsOpen(true);
      } else if (event.key === "Escape" || event.keyCode === 27) {
        setIsOpen(false);
      }
    }
  };

  const submitButtonHandler = async (
    e?: React.MouseEvent<HTMLButtonElement>
  ) => {
    e?.preventDefault();
    if (fabricid) {
      update();
    } else {
      addnew();
    }
  };

  const addnew = async () => {
    const validation = inputFieldValidation({
      fabricname,
    });
    try {
      if (validation == 0) {
        const response = await fetch(pathname + "/api/fabrics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fabricname }),
        });

        const res = await response.json();
        if (res.message == "SUCCESS") {
          setIsOpen(false);
          if (setReloadTable) {
            setReloadTable();
          }
          if (addnewFromOutside) {
            dispatch(setAddnewBaseinfoTypePo("Fabric"));
            dispatch(setAddnewBaseinfoIdPo(res.newFabric.fabricid));
          }
          toast.success("Fabric item created successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setFabricname("");
        }
      }
    } catch (error) {
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

  const update = async () => {
    const validation = inputFieldValidation({
      fabricname,
    });
    try {
      if (validation == 0) {
        const response = await fetch(pathname + "/api/fabrics", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fabricid, fabricname }),
        });

        const res = await response.json();
        if (res == "SUCCESS") {
          setIsOpen(false);
          if (setReloadTable) {
            setReloadTable();
          }
          toast.success("Fabric item updated successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          // setFabricid("");
          // setFabricname("");
        }
      }
    } catch (error) {
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

  const handleDelete = async (itemcode: any) => {
    // Display a toast notification with a confirmation message.
    toast.warning("Are you sure you want to delete this item?", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false, // This ensures the notification doesn't auto-close
      closeOnClick: false, // This prevents the notification from closing when clicked
      closeButton: (
        <div>
          <Button color="default" onClick={confirmDelete} className="mb-1">
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

  const confirmDelete = async () => {
    if (fabricid) {
      const response = await fetch(pathname + "/api/fabrics", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fabricid }),
      });

      const res = await response.json();
      if (res == "SUCCESS") {
        setIsOpen(false);
        toast.dismiss();
        if (setReloadTable) {
          setReloadTable();
        }
        toast.success("Fabric item deleted successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
    } else {
      if (setReloadTable) {
        setReloadTable();
      }
      router.push("/home/fabrics");
    }
  };

  return (
    <div className="px-2">
      {type == "edit" ? (
        <Button
          isIconOnly
          color="warning"
          variant="faded"
          aria-label="Create Item"
          className="mr-2"
        >
          <MdOutlineEditNote
            onClick={() => setIsOpen(true)}
            className="inline-block h-6 w-6 text-indigo-700 hover:text-indigo-500 cursor-pointer"
          />
        </Button>
      ) : addnewFromOutside ? (
        <Button
          isIconOnly
          color="warning"
          variant="light"
          aria-label="Create Item"
        >
          <AiFillPlusCircle
            onClick={() => setIsOpen(true)}
            className="inline-block h-6 w-6 text-indigo-700 hover:text-indigo-500 cursor-pointer"
          />
        </Button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Create New - F2
        </button>
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center text-xl sm:text-xl text-gray-800 mr-auto">
            {fabricid ? "Update" : "Create New"}
          </div>
          <div className="mt-5">
            <div className="flex flex-col mb-6">
              <div className="relative">
                <div className="mb-3">
                  <NextTextReadOnlyInputField
                    label="Fabric ID"
                    value={fabricid}
                    onChange={(e) => setFabricid(e.target.value)}
                  />
                </div>
                <div>
                  <NextAutoFocusTextInputField
                    label="Fabric Name"
                    value={fabricname}
                    onChange={(e) => setFabricname(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="">
                <Button
                  color="danger"
                  variant="faded"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
              </div>
              <div>
                <Button color="primary" onClick={submitButtonHandler}>
                  Save
                </Button>
              </div>
              <div className={fabricid ? "" : "hidden"}>
                <Button
                  isIconOnly
                  color="warning"
                  variant="faded"
                  aria-label="Create Item"
                >
                  <RiDeleteBin5Line
                    onClick={handleDelete}
                    className="inline-block h-6 w-6 text-red-700 hover:text-red-500 cursor-pointer"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default NewFabric;
