import {clsx} from "@/libs"
import {Icon, tdStyle, thStyle} from "@/widgets"
import React from "react"
import {scaleOrdinal} from "d3-scale"
import {useNavigate} from "react-router-dom"
import {useModal} from "@/hooks"
import {ModalEnum} from "@/stores"

export const Thead = () => <div className={"table-header-group text-center"}>
  <div className={"table-row bg-gray-200/70"}>
    <div className={clsx(thStyle, "w-32")}>
      <div role={"button"} className={"flex items-center w-fit mx-auto"}>
        <Icon name={"primary-key"} className={"size-4 text-[#80cbc4]"}/>
        <span className={"ml-0.5 mr-1"}>订单号</span>
      </div>
    </div>
    <div role={"button"} className={clsx(thStyle, "w-28")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        <span>订单日期</span>
      </div>
    </div>
    <div className={clsx(thStyle, "w-24")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        <span>客户</span>
      </div>
    </div>
    <div className={clsx(thStyle, "w-28")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        产品名称
      </div>
    </div>
    <div className={clsx(thStyle, "w-20")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        数量
      </div>
    </div>
    <div className={clsx(thStyle, "w-20")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        面积
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
    <div className={clsx(thStyle, "w-24")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        收款方式
      </div>
    </div>
    <div className={clsx(thStyle, "w-20")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        欠款
      </div>
    </div>
    <div className={clsx(thStyle, "w-32")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        送货日期
      </div>
    </div>
    <div className={clsx(thStyle, "w-20")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        车号
      </div>
    </div>
    <div className={clsx(thStyle, "w-20")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        司机
      </div>
    </div>
    <div className={clsx(thStyle, "w-28")}>
      <div role={"button"} className={"flex items-center space-x-0.5 w-fit mx-auto"}>
        <Icon name={"label"} className={"size-4 text-[#80cbc4]"}/>
        跟车
      </div>
    </div>
    <div className={clsx(thStyle, "w-32")}>
      操作
    </div>
  </div>
</div>

type Props = {
  shipper: Shipper
}

const color = scaleOrdinal<number, string>()
  .domain([1.5, 3, 10])
  .range(["#f899d7", "#a0b9f1", "#d3a9fd"])

export const ShipperRow = ({shipper}: Props) => {
  const {
          id,
          date,
          client,
          product,
          quantity,
          area,
          money,
          received,
          paymentMethod,
          deliveryDate,
          carNumber,
          driver,
          follower
        } = shipper

  const arrears: number = money - (received ?? 0),
        settled         = arrears === 0

  const navigate = useNavigate()
  const {setModalStore} = useModal()

  const onDelete  = () => setModalStore({type: ModalEnum.ALERT, param: id}),
        onReceipt = () => setModalStore({type: ModalEnum.RECEIPT, param: id}),
        onEdit    = () => setModalStore({type: ModalEnum.EDIT_SHIPPER, param: shipper})

  return <div className={"table-row whitespace-nowrap text-gray-700 odd:bg-gray-50/50"}>
    <div className={clsx(tdStyle, "py-2")}>
      <div className={"flex place-content-center "}>
        <Icon name={"x"} role={"button"} onClick={onDelete} className={"w-6 h-6 text-rose-500/90"}/>
        <span className={"font-medium"}>{id}</span>
      </div>
    </div>
    {/*<div className={clsx(tdStyle, "font-medium py-2")}>*/}
    {/*  {id}*/}
    {/*</div>*/}
    <div className={tdStyle}>{date}</div>
    <div className={tdStyle}>{client}</div>
    <div className={tdStyle}>{product}</div>
    <div className={tdStyle}>{quantity}</div>
    <div className={tdStyle}>{area}</div>
    <div className={tdStyle}>{money}</div>
    <div className={tdStyle}>{received}</div>
    <div className={tdStyle}>{paymentMethod}</div>
    <div
      className={clsx(tdStyle)}
      style={{color: settled ? "#61e0e0" : "#d38dfd"}}
    >{arrears}
    </div>
    <div className={tdStyle}>{deliveryDate}</div>
    <div className={tdStyle}>{carNumber}</div>
    <div className={tdStyle}>{driver}</div>
    <div className={tdStyle}>{follower}</div>
    <div className={tdStyle}>
      <div className={"flex justify-around items-center"}>
        <button
          disabled={settled}
          onClick={onReceipt}
          className={"inline-flex items-center px-1 text-sm text-cyan-300" +
            " border border-cyan-300 rounded-sm" +
            " disabled:cursor-not-allowed disabled:text-cyan-200/80 disabled:border-cyan-200/80"}>
          收款
          <Icon name={"yuan"} className={"w-3.5 h-3.5"}/>
        </button>
        <button
          className={"inline-flex items-center px-1 text-sm text-indigo-400 border border-indigo-400 rounded-sm"}
          onClick={onEdit}
        >
          编辑
          <Icon name={"edit"} className={"w-3.5 h-3.5"}/>
        </button>
      </div>
    </div>
  </div>
}