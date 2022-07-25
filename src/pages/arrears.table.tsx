import {clsx} from "@/libs"
import {Icon, tdStyle, thStyle} from "@/widgets"
import React from "react"
import {useSetRecoilState} from "recoil"
import {searchAtom} from "@/stores"
import {useNavigate} from "react-router-dom"

export const Thead = () => <div className={"table-header-group text-center"}>
  <div className={"table-row bg-gray-200/70"}>
    <div className={clsx(thStyle, "w-32")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        客户
      </div>
    </div>
    <div className={clsx(thStyle, "w-20")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        交易金额
      </div>
    </div>
    <div className={clsx(thStyle, "w-20")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        已收金额
      </div>
    </div>
    <div className={clsx(thStyle, "w-28")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        欠款
      </div>
    </div>
  </div>
</div>

type Props = {
  arrears: Arrears
}

export const ArrearsRow = ({arrears}: Props) => {
  const {client, money, received} = arrears

  const navigate = useNavigate()
  const setSearch = useSetRecoilState(searchAtom)

  const arrearsAmount: number = money - (received ?? 0),
        settled               = arrearsAmount === 0

  const transaction = () => {
    setSearch(client)
    navigate("/history")
  }

  return <div className={"table-row whitespace-nowrap text-gray-700 odd:bg-gray-50/50"}>
    <div role={"button"} onClick={transaction} className={clsx(tdStyle, "py-2 font-semibold")}>
      {client}
    </div>
    <div className={tdStyle}>{money}</div>
    <div className={tdStyle}>{received}</div>
    <div
      className={clsx(tdStyle)}
      style={{color: settled ? "#61e0e0" : "#d38dfd"}}
    >{arrearsAmount}
    </div>
  </div>
}