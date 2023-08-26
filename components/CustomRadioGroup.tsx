"use client"
import { useBoardState } from "@/store/BoardStore";
import { TypeColumns } from "@/typing";
import { RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import { FaCheckCircle } from "react-icons/fa";

const Types = [
  {
    id: "todo",
    name: "Todo",
    description: "A new Task to be completed",
    color: "bg-red-500",
  },
  {
    id: "inprogress",
    name: "Inprogress",
    description: "A task being done",
    color: "bg-yellow-500",
  },
  {
    id: "done",
    name: "Done",
    description: "A task remaining to be done",
    color: "bg-green-500",
  },
];


function CustomRadioGroup() {
  const [setTaskType, newTaskType] = useBoardState((state) => [
    state.setTaskType,
    state.newTaskType,
  ]);
  const handleRadioChange = (columnId: TypeColumns) => {
    setTaskType(columnId); // Update the task type with the selected columnId
  };
  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-md">
        <HeadlessRadioGroup value={newTaskType} onChange={handleRadioChange}>
          {Types.map((Type) => (
            
            <HeadlessRadioGroup.Option
              key={Type.id}
              value={Type.id}
              className={({ active, checked }) =>
                `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''} ${
                  checked ? `${Type.color} bg-opacity-75 text-white` : 'bg-white'
                } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
              }
            >
              
              
              {({ active, checked }) => (
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <HeadlessRadioGroup.Label
                        as="p"
                        className={`font-medium ${
                          checked ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {Type.name}
                      </HeadlessRadioGroup.Label>
                      <HeadlessRadioGroup.Description
                        as="span"
                        className={`inline ${
                          checked ? 'text-white' : 'text-gray-500'
                        }`}
                      >
                        {Type.description}
                      </HeadlessRadioGroup.Description>
                    </div>
                  </div>
                  {checked && (
                    <div className="flex shrink-0 text-white">
                      <FaCheckCircle className="h-6 w-6" />
                    </div>
                  )}
                </div>
              )}
            </HeadlessRadioGroup.Option>
          ))}
        </HeadlessRadioGroup>
      </div>
    </div>
  );
}

export default CustomRadioGroup;
function setTaskType(columnId: string) {
  throw new Error("Function not implemented.");
}

