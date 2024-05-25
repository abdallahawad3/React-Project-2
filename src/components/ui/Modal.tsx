interface IProps {
  title?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
}

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import type { ReactNode } from "react";

const Modal = ({ open, setOpen, title, children }: IProps) => {
  const handelModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <Transition appear show={open}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={handelModal}
          __demoMode
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl">
                  {title && (
                    <DialogTitle
                      as="h3"
                      className="text-base/7 font-medium text-white"
                    >
                      {title}
                    </DialogTitle>
                  )}
                  <p className="mt-2 text-sm/6">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                  <div className="mt-4">{children}</div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
