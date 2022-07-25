import {Icon} from "./Icon"
import {useSetRecoilState} from "recoil"
import {searchAtom} from "@/stores"
import {ChangeEvent, startTransition, useState} from "react"
import debounce from "lodash.debounce"

export const Search = () => {
  const [_, setSearch] = useState("")
  const setSearchState = useSetRecoilState(searchAtom)

  const handleQuery = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value
    setSearch(q)
    startTransition(() => setSearchState(q))
  }, 1500)

  return <div className={"relative"}>
    <input
      placeholder={"搜索客户"}
      className={`w-64 h-9 pl-9 pr-3 py-1 text-sm bg-gray-100 rounded-md outline-none ring-inset select-none
    transition-color duration-150 focus:text-gray-600 focus:bg-white focus:ring-1 focus:ring-gray-300`}
      onChange={handleQuery}
    />
    <Icon name={"search"}
          className={"absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 stroke-current opacity-30"}/>
  </div>
}