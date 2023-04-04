/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./style.css";
import {
  Button,
  DatePicker,
  Drawer,
  Form,
  Input,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  FileAddOutlined,
  FileTextOutlined,
  PaperClipOutlined,
  PushpinOutlined,
} from "@ant-design/icons";

const TablaEncuesta = () => {
  //a esta data le falta cosecha y array de lotes
  const data = [
    {
      key: "1",
      name: "John Brown",
      cultivo: "MAIZ",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "2",
      name: "Jim Green",
      cultivo: "SOJA",
      ciclo: "2",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "3",
      name: "Joe Black",
      cultivo: "TRIGO",
      ciclo: "",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "4",
      name: "Joe Black",
      cultivo: "SOJA",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "5",
      name: "John Brown",
      cultivo: "TRIGO",
      ciclo: "",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "6",
      name: "John Brown",
      cultivo: "MAIZ",
      ciclo: "2",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "7",
      name: "Joe Black",
      cultivo: "SOJA",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "8",
      name: "Joe Black",
      cultivo: "TRIGO",
      ciclo: "",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "9",
      name: "Joe Black",
      cultivo: "SOJA",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "10",
      name: "John Brown",
      cultivo: "TRIGO",
      ciclo: "",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "11",
      name: "Jim Green",
      cultivo: "SOJA",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "12",
      name: "Joe Black",
      cultivo: "SOJA",
      ciclo: "2",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "13",
      name: "Jim Green",
      cultivo: "MAIZ",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "14",
      name: "Jim Green",
      cultivo: "MAIZ",
      ciclo: "2",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
  ];

  const columns = [
    {
      title: "Cliente",
      dataIndex: "name",
      key: "name",
      render: (text) => text,
    },
    {
      title: "Cultivo/Ciclo",
      dataIndex: "cultivo",
      key: "cultivo",
      align: "center",
      render: (text, record) => {
        if (record.cultivo === 'TRIGO') {
          return text;
        }
        return `${text} / ${record.ciclo}°`;
      },
    },
    {
      title: "SUP. EST.(HAS)",
      dataIndex: "sup",
      key: "sup",
      align: "center",
    },
    {
      title: "RINDE EST. (TT)",
      dataIndex: "rinde",
      key: "rinde",
      align: "center",
    },
    {
      title: "COSTO EST. (U$S)",
      dataIndex: "costo",
      key: "costo",
      align: "center",
    },
    {
      title: "Estado",
      key: "estado",
      dataIndex: "estado",
      render: (_, { estado }) => (
        <>
          {estado.map((e) => {
            let color = e.length > 5 ? "geekblue" : "green";
            if (e === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={e}>
                {e.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            style={{ color: "#00bb33" }}
            onClick={() => handleEdit(record)}
          />
          <FileAddOutlined
            style={{ color: "#f6bb42" }}
            onClick={() => handleAddEvent(record)}
          />
          <FileTextOutlined
            style={{ color: "#4fc1e9" }}
            onClick={() => handleVerEnc(record)}
          />
          <PaperClipOutlined
            style={{ color: "#00bb33" }}
            onClick={() => handleAddFile(record)}
          />
          <PushpinOutlined
            style={{ color: "#605d5f" }}
            onClick={() => handleVerLote(record)}
          />
          <DeleteOutlined
            style={{ color: "#da4453" }}
            //onClick={() => handleDeleteEnc(record)}
          />
        </Space>
      ),
      align: "center",
    },
  ];
  

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [recordToEdit, setRecordToEdit] = useState(null);
  const [recordToAddEvent, setRecordToAddEvent] = useState(null);
  const [recordToVerEnc, setRecordToVerEnc] = useState(null);
  const [recordToAddFile, setRecordToAddFile] = useState(null);
  const [recordToVerLote, setRecordToVerLote] = useState(null);
  //const [recordToDeleteEnc, setRecordToDeleteEnc] = useState(null);

  const { Option } = Select;
  const [form] = Form.useForm();

  const handleEdit = (record) => {
    setTitle("Editar Encuesta Siembra");
    setRecordToEdit(record);
    setIsDrawerVisible(true);
  };

  const handleAddEvent = (record) => {
    setTitle("Agregar Evento");
    setRecordToAddEvent(record);
    setIsDrawerVisible(true);
  };

  const handleVerEnc = (record) => {
    setTitle("Ver Encuesta Siembra");
    setRecordToVerEnc(record);
    setIsDrawerVisible(true);
  };

  const handleAddFile = (record) => {
    setTitle("Subir Archivo");
    setRecordToAddFile(record);
    setIsDrawerVisible(true);
  };

  const handleVerLote = (record) => {
    setTitle("Ver Lote");
    setRecordToVerLote(record);
    setIsDrawerVisible(true);
  };

  // const handleDeleteEnc = (record) => {
  //   setTitle("Eliminar Encuesta Siembra");
  //   setRecordToDeleteEnc(record);
  //   setIsDrawerVisible(true);
  // };

  const handleDrawerClose = () => {
    setRecordToEdit(null);
    setRecordToAddEvent(null);
    setRecordToVerEnc(null);
    handleAddFile(null);
    setRecordToVerLote(null);
    // handleDeleteEnc(null);
    setIsDrawerVisible(false);
  };

  const onFinishEdit = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className="div_contentTabla">
        <Table
          columns={columns}
          dataSource={data}
          size={"small"}
          pagination={{ pageSize: 7 }}
          style={{ border: "1px solid #e8e8e8" }}
        />
        <Drawer
          title={title}
          visible={isDrawerVisible}
          onClose={handleDrawerClose}
        >
          {/* Aquí va el formulario para editar el registro */}
          {recordToEdit && (
            
            <div className="div_drawerWrapper">
              {console.log(recordToEdit)}
              <Form
                form={form}
                name="validate_other"
                layout="vertical"
                //   {...formItemLayout}
                onFinish={onFinishEdit}
              >
                <Form.Item name="estado" label="Estado">
                  <Select
                    placeholder="Seleccione Estado"
                    style={{ width: "300px" }}
                    defaultValue={recordToEdit.estado}
                  >
                    <Option value="1">ENCUESTA OK</Option>
                    <Option value="2">NO ENCUESTADO</Option>
                    <Option value="3">NO ACCEDE</Option>
                    <Option value="4">NO SIEMBRA</Option>
                  </Select>
                </Form.Item>

                <Form.Item name="cliente" label="Cliente">
                  <Select
                    disabled
                    placeholder="Seleccione Cliente"
                    style={{ width: "300px" }}
                    defaultValue={recordToEdit.name}
                  >
                  </Select>
                </Form.Item>

                <Form.Item name="lote" label="Lotes">
                  <Select
                    disabled
                    mode="multiple"
                    placeholder="Seleccione Lote/s"
                    defaultValue={["LOTE 1", "LOTE 2"]}
                    style={{ width: "300px" }}
                  >
                  </Select>
                </Form.Item>
                <div className="divFormEstruc">
                  <Form.Item name="cosecha" label="Cosecha">
                    <Select
                      disabled
                      placeholder="Seleccione Cosecha"
                      defaultValue={"2223"}
                      style={{ width: "150px" }}
                    >
                      <Option value="1">2223</Option>
                      <Option value="2">2122</Option>
                      <Option value="3">2021</Option>
                      <Option value="4">1920</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="cultivo" label="Cultivo">
                    <Select
                      disabled
                      placeholder="Seleccione Cultivo"
                      defaultValue={recordToEdit.cultivo}
                      style={{ width: "150px" }}
                    >
                    </Select>
                  </Form.Item>
                </div>
                <div className="divFormEstruc">
                  <Form.Item name="ciclo" label="Ciclo">
                    <Select
                      disabled
                      placeholder="Seleccione Ciclo"
                      defaultValue={recordToEdit.ciclo}
                      style={{ width: "150px" }}
                    >
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="hasEstimadas"
                    label="Has. Estimadas"
                    style={{ marginLeft: "31px" }}
                  >
                    <Input defaultValue={recordToEdit.sup} style={{ width: "150px" }} />
                  </Form.Item>
                </div>
                <div className="divFormEstruc">
                  <Form.Item name="rindeTT" label="Rinde (TT)">
                    <Input defaultValue={recordToEdit.rinde} style={{ width: "150px" }} />
                  </Form.Item>
                  <Form.Item
                    name="costo"
                    label="Costo (U$S)"
                    style={{ marginLeft: "31px" }}
                  >
                    <Input defaultValue={recordToEdit.costo} style={{ width: "150px" }} />
                  </Form.Item>
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%", marginTop: "20px" }}
                  >
                    Guardar
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
          {recordToAddEvent && (
            <div>
              <p>Nombre: {recordToAddEvent.name}</p>
              <p>Cultivo: {recordToAddEvent.cultivo}</p>
              {/* ... y así sucesivamente para los demás campos */}
            </div>
          )}
          {recordToVerEnc && (
            <div>
              <p>Nombre: {recordToVerEnc.name}</p>
              <p>Cultivo: {recordToVerEnc.cultivo}</p>
              {/* ... y así sucesivamente para los demás campos */}
            </div>
          )}
          {recordToAddFile && (
            <div>
              <p>Nombre: {recordToAddFile.name}</p>
              <p>Cultivo: {recordToAddFile.cultivo}</p>
              {/* ... y así sucesivamente para los demás campos */}
            </div>
          )}
          {recordToVerLote && (
            <div>
              <p>Nombre: {recordToVerLote.name}</p>
              <p>Cultivo: {recordToVerLote.cultivo}</p>
              {/* ... y así sucesivamente para los demás campos */}
            </div>
          )}
        </Drawer>
      </div>
    </>
  );
};

export default TablaEncuesta;
