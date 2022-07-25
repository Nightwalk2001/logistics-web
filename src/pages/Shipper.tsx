import {DateField, DatePicker, Input} from "@/widgets"
import {defaultValues, shipperSchema} from "./shipper.form"
import {poster} from "@/libs"
import {toast} from "react-toastify"
import {Form, Formik} from "formik"

export const Shipper = () => {

  const handleSubmit = async (values: Shipper) => {
    const res = await poster("/shipper", values)
    toast("订单创建成功！")
  }

  return <div className={"w-11/12 mx-auto my-6"}>
    <Formik<Shipper>
      initialValues={defaultValues}
      onSubmit={handleSubmit}
      validationSchema={shipperSchema}
    >
      {({values, setFieldValue}) => <Form>
        <div className={"grid grid-cols-2 gap-x-10 gap-y-4 w-fit"}>
          <div className={"flex justify-between items-center w-64"}>
            <span>订单日期</span>
            <DatePicker
              date={values.date}
              onChange={date => setFieldValue("date", date)}
            />
          </div>
          <div className={"flex justify-between items-center w-64"}>
            <span>送货日期</span>
            <DatePicker
              date={values.deliveryDate}
              onChange={date => setFieldValue("deliveryDate", date)}
            />
          </div>
          <Input name={"id"} label={"订单号"}/>
          <Input name={"client"} label={"客户"}/>
          <Input name={"carNumber"} label={"车号"}/>
          <Input name={"driver"} label={"司机"}/>
          <Input name={"follower"} label={"跟车"}/>
          <Input type={"number"} name={"quantity"} label={"数量"}/>
          <Input type={"number"} name={"area"} label={"面积"}/>
          <Input type={"number"} name={"money"} label={"交易金额"}/>
          <Input type={"number"} name={"received"} label={"已收金额"}/>
          <Input name={"product"} label={"产品名称"}/>
          <Input name={"paymentMethod"} label={"收款方式"}/>
        </div>

        <div className={"flex space-x-5 mt-5"}>
          <button
            type={"submit"}
            // disabled={isSubmitting || isValidating}
            className={"btn btn-sm btn-secondary"}>
            确认
          </button>
          <button
            type={"reset"}
            className={"btn btn-sm btn-active"}>
            重置
          </button>
        </div>
      </Form>}
    </Formik>
  </div>
}
