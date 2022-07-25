declare type Shipper = {
    id: string
    date?: string
    client: string
    product: string
    quantity: number
    area: number
    money: number
    received?: number
    paymentMethod?: string
    deliveryDate?: string
    carNumber: string
    driver: string
    follower: string
}

declare type ShippersAndCount = {
    shippers: Shipper[]
    count: number
}
