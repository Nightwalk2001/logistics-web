import {useRequest} from "@/hooks"
import {getter} from "@/libs"
import {Table, Tbody} from "@/widgets"
import {ArrearsRow, Thead} from "./arrears.table"

export const Arrears = () => {
  const {data} = useRequest<Arrears[]>("/arrears", getter)

  return <div className={"w-11/12 mx-auto my-6"}>
    <Table>
      <Thead/>
      <Tbody>
        {data && data.map(d => <ArrearsRow key={d.client} arrears={d}/>)}
      </Tbody>
    </Table>
  </div>
}
