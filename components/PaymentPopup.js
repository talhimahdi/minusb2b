import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PaymentPopup({ isOpen, setIsOpen, paymentUrl }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white bg-opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-center sm:items-center justify-center p-16 text-center h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative bg-white p-10 sm:p-12 text-left overflow-hidden 
              transform transition-all sm:max-w-5xl  shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)] w-full h-full"
              >
                <div className="w-full h-full">
                  <iframe
                    src={paymentUrl}
                    key={"keyValue"}
                    className="w-full h-full"
                    height="600px"
                  ></iframe>
                  <div className=" absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-white rounded-md focus:outline-none focus:ring-0"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XCircleIcon
                        className="h-6 w-6 text-black"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
