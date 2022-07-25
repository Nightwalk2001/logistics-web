import {range} from "d3-array"
import React, {useState} from "react"
import {Icon} from "./Icon"

type Props = {
  total: number,
  current?: number
  onChange?: (page: number) => void
  pagesize?: number
}

export const Pagination = ({total, current = 1, onChange, pagesize = 11}: Props) => {
  const [page, setPage] = useState(current)

  const buttonList = range(Math.ceil(total / pagesize)).map(i => i + 1)

  const buttonStyle = "px-3 py-1.5 font-medium bg-[#edf2f7] text-[#1a202c] rounded-md" +
    " ring-inset hover:text-gray-600 hover:bg-gray-100"
  const disabledStyle = "disabled:text-[#a0a3a8] disabled:cursor-not-allowed hover:ring-0"

  const handlePrev = () => handleChange(page - 1)

  const handleChange = (page: number) => {
    onChange?.(page)
    setPage(page)
  }

  const handleNext = () => handleChange(page + 1)

  return <div className={"flex justify-center items-center space-x-2 mx-auto my-4"}>
    {total > pagesize && <button
      onClick={handlePrev}
      disabled={page === 1}
      className={disabledStyle}
    >
      <Icon name={"chevron-left"} className={"size-6"}/>
    </button>}

    {buttonList.map(i =>
      <button
        key={i}
        className={`${buttonStyle} ${page === i && "text-[#fff] bg-indigo-500"}`}
        onClick={() => handleChange(i)}>
        {i}
      </button>
    )}

    {
      total > pagesize && <button
        onClick={handleNext}
        disabled={page === buttonList[buttonList.length - 1]}
        className={disabledStyle}>
        <Icon name={"chevron-right"} className={"size-6"}/>
      </button>
    }
    {/*<div className={"px-2 py-1 bg-gray-100 rounded-sm shadow-md"}>*/}
    {/*  {total}条*/}
    {/*</div>*/}
  </div>
}
