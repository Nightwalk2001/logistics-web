import {useInput, useModal, useRequest} from "@/hooks"
import {deleter, format, getter} from "@/libs"
import {AlertModal, DatePicker, Filter, Pagination, Search, Table, Tbody} from "@/widgets"
import {ShipperRow, Thead} from "./history.table"
import {useLocation, useSearchParams} from "react-router-dom"
import {useEffect, useState} from "react"
import {ALL, cars, methods, NONE, sorts} from "./history.constant"
import {searchAtom} from "@/stores"
import {toast} from "react-toastify"
import {useRecoilValue} from "recoil"

export const History = () => {
  const location = useLocation()
  const [params, setParams] = useSearchParams()

  const search = useRecoilValue(searchAtom)

  const [page, setPage] = useState<number>(1)

  const [date, setDate]                 = useState<string>(),
        [deliveryDate, setDeliveryDate] = useState<string>()

  const [method, handleMethod] = useInput(ALL),
        [car, handleCar]       = useInput(ALL),
        [sort, handleSort]     = useInput(NONE)

  const {data, mutate} = useRequest<ShippersAndCount>(`/shippers?${params}`, getter)

  const reFetch = async () => await mutate()

  let p = `page=${page}&client=${search}`

  useEffect(() => {
    if (method != ALL) p += `&method=${method}`
    if (car != ALL) p += `&car=${car}`
    if (date) p += `&date=${date}`
    if (deliveryDate) p += `&deliveryDate=${deliveryDate}`

    setParams(p)
  }, [page, search, method, car, date, deliveryDate])

  return <>
    <div className={"w-11/12 mx-auto my-6"}>
      <div className={"flex space-x-8 my-5"}>
        <DatePicker
          date={date}
          onChange={setDate}
          clear={() => setDate(undefined)}
          placeholder={"订单日期"}
        />
        <DatePicker
          date={deliveryDate}
          onChange={setDeliveryDate}
          clear={() => setDeliveryDate(undefined)}
          placeholder={"送货日期"}
        />

        <Search/>

        <Filter
          name={"付款方式"}
          initial={ALL}
          options={methods}
          current={method}
          onChange={handleMethod}
        />

        <Filter
          name={"车号"}
          initial={ALL}
          options={cars}
          current={car}
          onChange={handleCar}
        />

        <Filter
          name={"排序"}
          initial={NONE}
          options={sorts}
          current={sort}
          onChange={handleSort}
        />
      </div>

      {data && <>
        <Table>
          <Thead/>
          <Tbody>
            {data.shippers.map((s) =>
              <ShipperRow
                key={s.id}
                shipper={s}
              />
            )}
          </Tbody>
        </Table>

        <Pagination total={data.count} current={page} onChange={setPage}/>
      </>}
    </div>

    <ModalDelete afterDelete={reFetch}/>
  </>
}

type DeleteProps = {
  afterDelete?: (id: string) => {}
}

const ModalDelete = ({afterDelete}: DeleteProps) => {
  const {param, closeModal} = useModal<string>()

  const handleDelete = async () => {
    const res = await deleter(`/shipper/${param}`)
    toast(`订单${param}删除成功！`)
    afterDelete?.(param)
    closeModal()
  }

  return <AlertModal message={`确定要删除订单号为${param}的订单吗?`} onConfirm={handleDelete}/>
}
