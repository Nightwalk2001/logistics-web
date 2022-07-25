import {atom} from "recoil"

export enum ModalEnum {
    DEFAULT_CLOSED,
    RECEIPT,
    EDIT_SHIPPER,
    ALERT
}

export type ModalStore = {
    type: ModalEnum
    param?: any
}

export const defaultModalStore = {type: ModalEnum.DEFAULT_CLOSED, param: null}

export const modalAtom = atom<ModalStore>({
    key: "modal",
    default: defaultModalStore,
})
