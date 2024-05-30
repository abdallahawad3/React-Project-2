import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Category } from "../../data";
import type { ICategory } from "../../interfaces";
interface IProps {
  selected: ICategory;
  setSelected: (category: ICategory) => void;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const SelectMenu = ({ selected, setSelected }: IProps) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Label className="block text-sm font-medium leading-6 text-gray-900">
            Category
          </Label>
          <div className="w-100 relative mt-1">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white  pl-3 pr-10  p-[.6rem]  text-left text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img
                  src={selected.imageURL}
                  alt=""
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {Category.map((ele) => (
                  <ListboxOption
                    key={ele.id}
                    className={({ focus }) =>
                      classNames(
                        focus ? "bg-indigo-600 text-white" : "",
                        !focus ? "text-gray-900" : "",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={ele}
                  >
                    {({ selected, focus }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={ele.imageURL}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {ele.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              focus ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default SelectMenu;
