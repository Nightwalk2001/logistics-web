import {number, object, string} from "yup"

export const defaultValues: Shipper = {
    id: "",
    area: 0,
    carNumber: "01",
    client: "",
    driver: "",
    follower: "",
    product: "",
    quantity: 0,
    money: 0,
    received: 0,
    paymentMethod: ""
}

export const shipperSchema = object({
    id: string().required("字段不可为空！"),
    carNumber: string(),
    client: string().required("字段不可为空！"),
    // date: string().required("字段不可为空！"),
    // deliveryDate: string(),
    driver: string(),
    follower: string(),
    area: number().positive("内容应该为大于零的数！").required("字段不可为空！"),
    product: string().required("字段不可为空！"),
    quantity: number().positive("内容应该为大于零的数！").required("字段不可为空！"),
    money: number().positive("内容应该为大于零的数！").required("字段不可为空！"),
    received: number().positive("内容应该为大于零的数！"),
    paymentMethod: string()
})
