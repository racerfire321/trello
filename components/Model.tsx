"use client";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { useModalStore } from "@/store/ModalStore";
import { useBoardState } from "@/store/BoardStore";
import CustomRadioGroup from "./CustomRadioGroup";
import ImageUpload from "./ImageUpload";

function Model() {
  const [isOpen, closeModel] = useModalStore((state) => [
    state.isOpen,
    state.closeModel,
  ]);
  const[newInputTask,setTnputTask] = useBoardState((state)=>[
    state.newTaskInput,
    state.setTaskInput,
  ])

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="form" className="fixed inset-0 flex items-center justify-center z-50" onClose={closeModel}>
        {/* Dark backdrop */}
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black opacity-25" />
        </Transition.Child>

        {/* Modal content */}
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition-all ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <Dialog.Title as="h3" className="text-lg font-medium text-gray-900 pb-2">
              Add a task
            </Dialog.Title>

            {/* Add your form or content for adding a task here */}

            <div className="mt-2">
             <input type="text" value={newInputTask}
             onChange={(e)=> setTnputTask(e.target.value)}
             placeholder="enter a task"
             className="w-full p-5 border border-gray-300" />
            </div>
            <CustomRadioGroup />
             <ImageUpload/>
            
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default Model;
