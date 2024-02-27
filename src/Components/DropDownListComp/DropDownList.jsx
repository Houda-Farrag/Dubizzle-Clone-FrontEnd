import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropDownList({ props }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);


    const togglebutton = () => {
        setIsOpen(!isOpen);
    };
    const showProfileDetials = () => {
        setIsOpen1(!isOpen1)
    }
    const navigate = useNavigate()

    return (
        <div className='w-full'>
            <Menu as="div" className="relative inline-block text-left w-full ">
                <div>
                    <Menu.Button onClick={showProfileDetials} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3  text-sm font-semibold text-gray-900   ring-inset ring-gray-300 hover:bg-gray-50">
                        {props}

                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <div>
                            </div>

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu >
        </div>
    )
}
