"use client";

import Modal from "react-modal";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import NextAutoFocusTextInputField from "../../nextui-input-fields/next-autofocus-text-input-fields";
import NextTextReadOnlyInputField from "../../nextui-input-fields/next-text-readonly-input-fields";
import { Button, Tooltip } from "@nextui-org/react";
import {
  AiFillPlusCircle,
  AiFillSave,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { inputFieldValidation } from "@/app/utils/utils";
import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  setAddnewBaseinfoIdPo,
  setAddnewBaseinfoTypePo,
} from "@/store/purchaseorder/po-slice";
import { useDispatch } from "react-redux";
import { PoSelectTable } from "./poselect-table";

const SelectPoScreen = () => {
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
    },
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="px-2">
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
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="">
          <div className="pb-1 w-full flex items-center justify-between">
            <span className="text-2xl font-semibold leading-none text-gray-900 select-none pt-2 mr-auto">
              <span className="text-indigo-600">PO details</span>
            </span>
            <AiOutlineCloseCircle
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 text-indigo-700 hover:text-indigo-500 cursor-pointer flex justify-end"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="mx-auto min-w-[1200px] max-w-[1200px] p-6 flex flex-col min-h-[550px] max-h-[550px] overflow-y-auto">
              {/* {JSON.stringify(allPoDetailsIn)} */}
              <div className="py-2 sm:w-1/1 w-full">
                <div className="max-h-[450px] overflow-y-auto">
                  <PoSelectTable closePopup={closePopup}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default SelectPoScreen;
