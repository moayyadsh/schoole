import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import React from 'react'
import useModalState from '../../stateManagement/ModalState';

function useTableColumns() {
    const { toggleModalEdit } = useModalState();
const columns = [
    
        {
            key:'1',
            title:'ID',
            dataIndex:'id'
        },
        
        {
            key:'2',
            title:'Name',
            dataIndex:'name'
        },
        {
            key:'3',
            title:'Title',
            dataIndex:'title'
        },
        {
            key:'4',
            title:'content',
            dataIndex:'content'
        },
        {
            key:'5',
            title:'start with',
            dataIndex:'assigning_date'
        },
        {
            key:'6',
            title:'Done with',
            dataIndex:'due_date'
        },

        {
            key: '5',
            title: 'Action',
            render: () => {
              
                
              return <>
                <EditOutlined
              onClick={() => toggleModalEdit( )} 
                />
               
                <DeleteOutlined
                style={{ color: "red", marginLeft: 12 }}
                />

              </>
            }
          },
    ]
    return columns
}

export default useTableColumns