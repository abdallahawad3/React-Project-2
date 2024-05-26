import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ReactNode } from "react";
interface IProps {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal = ({ closeModal, isOpen, title, children }: IProps) => {
  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none "
          onClose={closeModal}
          __demoMode
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-700/95">
            <div className="flex min-h-full items-center justify-center p-4 ">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl shadow-2xl bg-white p-6 ">
                  {title && (
                    <DialogTitle
                      as="h3"
                      className="text-base/7 font-medium text-zinc-800 uppercase "
                    >
                      {title}
                    </DialogTitle>
                  )}
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
