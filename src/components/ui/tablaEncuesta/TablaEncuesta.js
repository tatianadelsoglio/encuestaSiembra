/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./style.css";
import { Button, Drawer, Space, Table, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  FileAddOutlined,
  FileTextOutlined,
  PaperClipOutlined,
  PushpinOutlined,
} from "@ant-design/icons";

const TablaEncuesta = () => {
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
  const data = [
    {
      key: "1",
      name: "John Brown",
      cultivo: "MAIZ / 1º",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "2",
      name: "Jim Green",
      cultivo: "SOJA / 2º",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "3",
      name: "Joe Black",
      cultivo: "Trigo",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "4",
      name: "Joe Black",
      cultivo: "SOJA / 1º",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "5",
      name: "John Brown",
      cultivo: "Trigo",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "6",
      name: "John Brown",
      cultivo: "	MAIZ / 2º",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "7",
      name: "Joe Black",
      cultivo: "SOJA / 1º",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "8",
      name: "Joe Black",
      cultivo: "TRIGO",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "9",
      name: "Joe Black",
      cultivo: "SOJA / 1º",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "10",
      name: "John Brown",
      cultivo: "TRIGO",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "11",
      name: "Jim Green",
      cultivo: "SOJA / 1º",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "12",
      name: "Joe Black",
      cultivo: "SOJA / 2º",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "13",
      name: "Jim Green",
      cultivo: "MAIZ / 1º",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
    },
    {
      key: "14",
      name: "Jim Green",
      cultivo: "MAIZ / 2º",
      sup: 210,
      rinde: 200,
      costo: 300,
      estado: ["ok"],
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
            <div>
              <p>Nombre: {recordToEdit.name}</p>
              <p>Cultivo: {recordToEdit.cultivo}</p>
              {/* ... y así sucesivamente para los demás campos */}
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
