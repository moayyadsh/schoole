import { Form, Select } from 'antd'
import { useFormikContext } from 'formik';

function SelectFiled({ name, ...props }: any) {

  const { setFieldValue, values } = useFormikContext<any>();

    // console.log(name);
    function handleChangeSelect(value: any) {
        // console.log(`selected ${values}`);
        setFieldValue(name, value);
// console.log(value,"llllllllllllllllllllllllllllllllllllllll");

      }

    return (
        <>
            <Form.Item>

                <Select

                    showSearch
                    placeholder="Select a person"
                    value={values?.select}
                    onChange={handleChangeSelect}
                    allowClear
                    optionFilterProp="name"
                    fieldNames={{ label: "name", value: "id" }}
                    style={{ width: 200 }}
                    {...props}
                />

            </Form.Item>
        </>
    )
}

export default SelectFiled