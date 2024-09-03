import React from 'react'
import useTableColumns from './useTableColumn'
import {Table as DataTable} from 'antd'
import { useGetHomework } from '../../api/homework';
import { useGetTeacher } from '../../api/Teacher';

function Table() {
 const columns = useTableColumns();
 const {data:homework,isLoading}=useGetHomework({});
 const {data:teacher} = useGetTeacher({})

  
//  console.log(homework?.data ?? [],"ssssssssssssssssssssss");
 
  return (
  <DataTable
  columns={columns as any}
  dataSource={homework?.data ?? []}
  rowKey="key"
  loading={isLoading}
  />
  )
}

export default Table

// import React from 'react';
// import useTableColumns from './useTableColumn';
// import { Table as DataTable } from 'antd';
// import { useGetHomework } from '../../api/homework';
// import { useGetTeacher } from '../../api/Term copy';

// function Table() {
//   const columns = useTableColumns();
//   const { data: homeworkData, isLoading: isHomeworkLoading } = useGetHomework({});
//   const { data: teacherData, isLoading: isTeacherLoading } = useGetTeacher({});

//   // Create a dictionary for quick lookup of teacher data by a common key, e.g., teacherId
//   const teacherDataById = teacherData?.data.reduce((acc: { [x: string]: any; }, teacher: { teacherId: string | number; }) => {
//     acc[teacher.teacherId] = teacher;
//     return acc;
//   }, {});

//   // Merge homework data with corresponding teacher data
//   const combinedData = homeworkData?.data.map((homework: { teacherId: string | number; }) => ({
//     ...homework,
//     ...teacherDataById?.[homework.teacherId], // Assuming 'teacherId' is the common key
//   }));

//   console.log(combinedData, "Combined Data");

//   return (
//     <DataTable
//       columns={columns as any}
//       dataSource={combinedData}
//       rowKey="key"
//       loading={isHomeworkLoading || isTeacherLoading}
//     />
//   );
// }

// export default Table;