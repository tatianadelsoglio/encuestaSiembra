/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import { Space, Table, Tag } from "antd";
import { DeleteOutlined, EditOutlined, FileAddOutlined, FileTextOutlined, PaperClipOutlined, PushpinOutlined,  } from "@ant-design/icons";
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
    align: 'center',
  },
  {
    title: "SUP. EST.(HAS)",
    dataIndex: "sup",
    key: "sup",
    align: 'center',
  },
  {
    title: "RINDE EST. (TT)",
    dataIndex: "rinde",
    key: "rinde",
    align: 'center',
  },
  {
    title: "COSTO EST. (U$S)",
    dataIndex: "costo",
    key: "costo",
    align: 'center',
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
    align: 'center',
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a>
        <a>Delete</a> */}
        
        <EditOutlined style={{color:"#00bb33"}}/>
        <FileAddOutlined style={{color:"#f6bb42"}}/>
        <FileTextOutlined style={{color:"#4fc1e9"}}/>
        <PaperClipOutlined style={{color:"#00bb33"}}/>
        <PushpinOutlined style={{color:"#605d5f"}}/> 
        <DeleteOutlined style={{color:"#da4453"}}/>
      </Space>
    ),
    align: 'center',
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

const TablaEncuesta = () => {
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
      </div>
    </>
  );
};

export default TablaEncuesta;
