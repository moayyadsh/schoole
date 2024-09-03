import Table from './Table'
import { Button } from 'antd'
import useModalState from '../../stateManagement/ModalState'
import AddModal from './modal/AddModal'
import EditModal from './modal/EditModal'
import FiltterFiled from './FiltterFiled'

const Page = () => {
    const{toggleModalAdd}=useModalState()
  return (
    <>
    <Button type="primary" onClick={toggleModalAdd}>
            Add Modal
          </Button>
          <FiltterFiled/>
          <AddModal/>
     <Table/>
     <EditModal/>
    
    </>
  )
}

export default Page