import {DayPicker} from "react-day-picker"
import {Icon} from "./Icon"
import {Fragment, useRef, useState} from "react"
import {useClickOutside} from "@/hooks"
import {Transition} from "@headlessui/react"
import {format} from "@/libs"
import {zhCN} from "date-fns/locale"

type Props = {
  date?: string
  placeholder?: string
  onChange: (date: string) => void
  clear?: () => void
}

export const DatePicker = ({
                             date,
                             placeholder = "选择日期",
                             onChange,
                             clear
                           }: Props
) => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  const selectDate = (date?: Date) => {
    if (date) onChange(format(date))
    setShow(!show)
  }

  useClickOutside(ref, () => setShow(false))

  return <div ref={ref} className={"relative w-fit"}>
    <input
      readOnly
      role={"button"}
      className={"w-40 py-1.5 pl-3 text-gray-500 font-medium rounded-md shadow-lg select-none focus:outline-none"}
      value={date ?? placeholder}
      onClick={() => setShow(!show)}
    />
    <Icon
      name={"calender"}
      role={"button"}
      onClick={clear}
      className={"absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 p-1 rounded-md opacity-75 text-indigo-500"}/>

    <Transition
      as={Fragment}
      show={show}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <div
        className={"absolute -left-[72px] top-10 z-50 bg-white rounded-lg shadow-lg"}>
        <DayPicker
          mode={"single"}
          locale={zhCN}
          selected={date ? new Date(date) : undefined}
          onSelect={selectDate}
        />
      </div>
    </Transition>
  </div>
}