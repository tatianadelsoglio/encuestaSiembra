/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./style.css";
import {
  Button,
  Card,
  DatePicker,
  Divider,
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
  //a esta data le falta info de eventos
  const data = [
    {
      key: "1",
      name: "John Brown",
      cultivo: "MAIZ",
      cultivoAnt: "TRIGO",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2122,
      lotes: ["LOTE1", "LOTE2"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "2",
      name: "Jim Green",
      cultivo: "SOJA",
      cultivoAnt: "MAIZ",
      ciclo: "2",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2122,
      lotes: ["LOTE2", "LOTE3"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "3",
      name: "Joe Black",
      cultivo: "TRIGO",
      cultivoAnt: "SOJA",
      ciclo: "",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2122,
      lotes: ["LOTE4", "LOTE5"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "4",
      name: "Joe Black",
      cultivo: "SOJA",
      cultivoAnt: "TRIGO",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2223,
      lotes: ["LOTE1", "LOTE2"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "5",
      name: "John Brown",
      cultivo: "TRIGO",
      cultivoAnt: "MAIZ",
      ciclo: "",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2223,
      lotes: ["LOTE2", "LOTE3"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "6",
      name: "John Brown",
      cultivo: "MAIZ",
      cultivoAnt: "SOJA",
      ciclo: "2",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2223,
      lotes: ["LOTE3", "LOTE4"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "7",
      name: "Joe Black",
      cultivo: "SOJA",
      cultivoAnt: "TRIGO",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2223,
      lotes: ["LOTE4", "LOTE5"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "8",
      name: "Joe Black",
      cultivo: "TRIGO",
      cultivoAnt: "MAIZ",
      ciclo: "",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2324,
      lotes: ["LOTE1", "LOTE2"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "9",
      name: "Joe Black",
      cultivo: "SOJA",
      cultivoAnt: "TRIGO",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2324,
      lotes: ["LOTE2", "LOTE3"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "10",
      name: "John Brown",
      cultivo: "TRIGO",
      cultivoAnt: "SOJA",
      ciclo: "",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2324,
      lotes: ["LOTE3", "LOTE4"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "11",
      name: "Jim Green",
      cultivo: "SOJA",
      cultivoAnt: "TRIGO",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2324,
      lotes: ["LOTE4", "LOTE5"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "12",
      name: "Joe Black",
      cultivo: "SOJA",
      cultivoAnt: "MAIZ",
      ciclo: "2",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2324,
      lotes: ["LOTE5", "LOTE6"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "13",
      name: "Jim Green",
      cultivo: "MAIZ",
      cultivoAnt: "SOJA",
      ciclo: "1",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2324,
      lotes: ["LOTE2", "LOTE3", "LOTE4", "LOTE5"],
      estado: ["ENCUESTA OK"],
    },
    {
      key: "14",
      name: "Jim Green",
      cultivo: "MAIZ",
      cultivoAnt: "TRIGO",
      ciclo: "2",
      sup: 210,
      rinde: 200,
      costo: 300,
      cosecha: 2324,
      lotes: ["LOTE2", "LOTE3", "LOTE4", "LOTE5"],
      estado: ["ENCUESTA OK"],
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
        if (record.cultivo === "TRIGO") {
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
            if (e === "ENCUESTA OK") {
              e = "OK";
              let color = e.length > 5 ? "geekblue" : "green";
              if (e === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={e}>
                  {e.toUpperCase()}
                </Tag>
              );
            }
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

  const dataLote = [
    {
      key: "1",
      campo: "EL HORIZONTE 1",
      lote: "SUR",
      has: "50",
    },
    {
      key: "2",
      campo: "ESTANCIA NORTE",
      lote: "NORTE",
      has: "150",
    },
    {
      key: "3",
      campo: "EL HORIZONTE 2",
      lote: "ESTE",
      has: "250",
    },
    {
      key: "4",
      campo: "LOTE MAYRA",
      lote: "CENTRO",
      has: "100",
    },
    {
      key: "5",
      campo: "RAMIREZ",
      lote: "SUR",
      has: "350",
    },
    {
      key: "6",
      campo: "DELSOGLIO",
      lote: "NORTE",
      has: "250",
    },
    {
      key: "7",
      campo: "EL HORIZONTE 1",
      lote: "ESTE",
      has: "150",
    },
  ];

  const columnsLote = [
    {
      title: "CAMPO",
      dataIndex: "campo",
      key: "campo",
      render: (text) => text,
    },
    {
      title: "LOTE",
      dataIndex: "lote",
      key: "lote",
      render: (text) => text,
    },
    {
      title: "HAS",
      dataIndex: "has",
      key: "has",
      render: (text) => text,
    },
  ];

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [recordToEdit, setRecordToEdit] = useState("");
  const [recordToAddEvent, setRecordToAddEvent] = useState("");
  const [recordToVerEnc, setRecordToVerEnc] = useState("");
  const [recordToAddFile, setRecordToAddFile] = useState("");
  const [recordToVerLote, setRecordToVerLote] = useState("");
  //const [recordToDeleteEnc, setRecordToDeleteEnc] = useState(null);
  const [tipoEvento, setTipoEvento] = useState(""); // estado para guardar el tipo de evento seleccionado

  const handleTipoEventoChange = (value) => {
    setTipoEvento(value); // actualizamos el estado con el valor seleccionado en el Select
  };

  const { Option } = Select;
  const [form] = Form.useForm();

  const handleEdit = (record) => {
    form.resetFields();
    setTitle(`EDITAR ENCUESTA SIEMBRA / ${record.name}`);
    setRecordToEdit(record);
    setIsDrawerVisible(true);
  };

  const handleAddEvent = (record) => {
    form.resetFields();
    setTitle(`AGREGAR EVENTO / ${record.name}`);
    setRecordToAddEvent(record);
    setIsDrawerVisible(true);
  };

  const handleVerEnc = (record) => {
    form.resetFields();
    setTitle(`INFORMACIÓN DE ENCUESTA / ${record.name}`);
    setRecordToVerEnc(record);
    setIsDrawerVisible(true);
  };

  const handleAddFile = (record) => {
    form.resetFields();
    setTitle("Subir Archivo");
    //setTitle(`Subir Archivo / ${record.name}`);
    setRecordToAddFile(record);
    setIsDrawerVisible(true);
  };

  const handleVerLote = (record) => {
    form.resetFields();
    setTitle(`Ver Lote / ${record.name}`);
    setRecordToVerLote(record);
    setIsDrawerVisible(true);
  };

  // const handleDeleteEnc = (record) => {
  //   setTitle("Eliminar Encuesta Siembra");
  //   setRecordToDeleteEnc(record);
  //   setIsDrawerVisible(true);
  // };

  const handleDrawerClose = () => {
    form.resetFields();
    setRecordToEdit("");
    setTipoEvento("");
    setRecordToAddEvent("");
    setRecordToVerEnc("");
    setRecordToAddFile("");
    setRecordToVerLote("");
    // handleDeleteEnc(null);

    setIsDrawerVisible(false);
  };

  const onFinishEdit = (values) => {
    console.log("Received values of form: ", values);
  };

  const onFinishAddEvent = (values) => {
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
          width={450}
        >
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
                <Form.Item
                  name="estado"
                  label="Estado"
                  initialValue={recordToEdit.estado[0]}
                >
                  <Select
                    placeholder="Seleccione Estado"
                    style={{ width: "300px" }}
                  >
                    <Option value="ENCUESTA OK">ENCUESTA OK</Option>
                    <Option value="NO ENCUESTADO">NO ENCUESTADO</Option>
                    <Option value="NO ACCEDE">NO ACCEDE</Option>
                    <Option value="NO SIEMBRA">NO SIEMBRA</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="cliente"
                  label="Cliente"
                  initialValue={recordToEdit.name}
                >
                  <Select
                    disabled
                    placeholder="Seleccione Cliente"
                    style={{ width: "300px" }}
                  ></Select>
                </Form.Item>

                <Form.Item
                  name="lote"
                  label="Lotes"
                  initialValue={["LOTE 1", "LOTE 2"]}
                >
                  <Select
                    disabled
                    mode="multiple"
                    placeholder="Seleccione Lote/s"
                    style={{ width: "300px" }}
                  ></Select>
                </Form.Item>
                <div className="divFormEstruc">
                  <Form.Item
                    name="cosecha"
                    label="Cosecha"
                    initialValue={"2223"}
                  >
                    <Select
                      disabled
                      placeholder="Seleccione Cosecha"
                      style={{ width: "150px" }}
                    ></Select>
                  </Form.Item>
                  <Form.Item
                    name="cultivo"
                    label="Cultivo"
                    initialValue={recordToEdit.cultivo}
                  >
                    <Select
                      disabled
                      placeholder="Seleccione Cultivo"
                      style={{ width: "150px" }}
                    ></Select>
                  </Form.Item>
                </div>
                <div className="divFormEstruc">
                  <Form.Item
                    name="ciclo"
                    label="Ciclo"
                    initialValue={recordToEdit.ciclo}
                  >
                    <Select
                      disabled
                      placeholder="Seleccione Ciclo"
                      style={{ width: "150px" }}
                    ></Select>
                  </Form.Item>
                  <Form.Item
                    name="hasEstimadas"
                    label="Has. Estimadas"
                    style={{ marginLeft: "31px" }}
                    initialValue={recordToEdit.sup}
                  >
                    <Input style={{ width: "150px" }} />
                  </Form.Item>
                </div>
                <div className="divFormEstruc">
                  <Form.Item
                    name="rindeTT"
                    label="Rinde (TT)"
                    initialValue={recordToEdit.rinde}
                  >
                    <Input style={{ width: "150px" }} />
                  </Form.Item>
                  <Form.Item
                    name="costo"
                    label="Costo (U$S)"
                    style={{ marginLeft: "31px" }}
                    initialValue={recordToEdit.costo}
                  >
                    <Input style={{ width: "150px" }} />
                  </Form.Item>
                </div>

                <Form.Item>
                  <div className="divFormEstruc">
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%", marginTop: "20px" }}
                    >
                      Guardar
                    </Button>
                    <Button
                      onClick={() => handleDrawerClose()}
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        marginLeft: "5px",
                        borderColor: "#5bbc34",
                        color: "#5bbc34",
                      }}
                    >
                      Cancelar
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          )}
          {recordToAddEvent && (
            <div className="div_drawerWrapper">
              {console.log(recordToAddEvent)}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Card
                  style={{
                    width: 300,
                    marginBottom: "20px",
                    border: "1px dashed #5bbc34",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <p>Cultivo: {recordToAddEvent.cultivo}</p>
                    <p style={{ marginLeft: "" }}>
                      Ciclo: {recordToAddEvent.ciclo}°
                    </p>
                  </div>
                </Card>
              </div>

              <Form
                form={form}
                name="validate_other"
                layout="vertical"
                //   {...formItemLayout}
                onFinish={onFinishAddEvent}
              >
                <Form.Item name="tipoEvento" label="Tipo de Evento">
                  <Select
                    placeholder="Seleccione"
                    style={{ width: "300px" }}
                    onChange={handleTipoEventoChange}
                  >
                    <Option value="RINDE REAL">RINDE REAL</Option>
                    <Option value="ESTIMADO ACOPIO">ESTIMADO ACOPIO</Option>
                    <Option value="HAS. REALES">HAS. REALES</Option>
                    <Option value="DESTINO">DESTINO</Option>
                  </Select>
                </Form.Item>

                {tipoEvento === "RINDE REAL" && (
                  <Form.Item name="rindeReal" label="Rinde Real (TT)">
                    <Input
                      placeholder="Ingrese valor"
                      style={{ width: "300px" }}
                    />
                  </Form.Item>
                )}

                {tipoEvento === "ESTIMADO ACOPIO" && (
                  <Form.Item name="estAcopio" label="% Est. Acopio">
                    <Input
                      placeholder="Ingrese valor"
                      style={{ width: "300px" }}
                    />
                  </Form.Item>
                )}

                {tipoEvento === "HAS. REALES" && (
                  <Form.Item
                    name="superficieReal"
                    label="Superficie Real (HAS)"
                  >
                    <Input
                      placeholder="Ingrese valor"
                      style={{ width: "300px" }}
                    />
                  </Form.Item>
                )}

                {tipoEvento === "DESTINO" && (
                  <>
                    <Form.Item name="destino" label="Destino">
                      <Select
                        placeholder="Seleccione"
                        style={{ width: "300px" }}
                      >
                        <Option value="1">CONSUMO</Option>
                        <Option value="2">SEMILLAS</Option>
                        <Option value="3">COMERCIALIZACION</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name="hectareas" label="Hectareas">
                      <Input
                        placeholder="Ingrese valor"
                        style={{ width: "300px" }}
                      />
                    </Form.Item>
                  </>
                )}

                {tipoEvento === "" && <></>}

                <Form.Item>
                  <div className="divFormEstruc">
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%", marginTop: "20px" }}
                    >
                      Guardar
                    </Button>
                    <Button
                      onClick={() => handleDrawerClose()}
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        marginLeft: "5px",
                        borderColor: "#5bbc34",
                        color: "#5bbc34",
                      }}
                    >
                      Cancelar
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          )}
          {recordToVerEnc && (
            <div className="div_drawerWrapper">
              {console.log(recordToVerEnc)}
              <div className="divFormEstruc">
                <div className="divCentrado">
                  <h3 className="h3Style">Cosecha</h3>
                  <p className="pStyle">{recordToVerEnc.cosecha}</p>
                </div>
                <Divider type="vertical" style={{ height: "40px" }} />
                <div className="divCentrado">
                  <h3 className="h3Style">Cultivo/Ciclo</h3>
                  <p className="pStyle">
                    {recordToVerEnc.cultivo} / {recordToVerEnc.ciclo}°
                  </p>
                </div>
                <Divider type="vertical" style={{ height: "40px" }} />
                <div className="divCentrado">
                  <h3 className="h3Style">Cultivo Ant</h3>
                  <p className="pStyle">{recordToVerEnc.cultivoAnt}</p>
                </div>
                <Divider type="vertical" style={{ height: "40px" }} />
                <div className="divCentrado">
                  <h3 className="h3Style">Estado</h3>
                  <p className="pStyle">{recordToVerEnc.estado}</p>
                </div>
              </div>
              <Divider />
              <div className="divFormEstruc">
                <div className="divCentrado">
                  <h3 className="h3Style">Fecha Siembra</h3>
                  <p className="pStyle">20/12/2022</p>
                </div>
                <Divider type="vertical" style={{ height: "40px" }} />
                <div className="divCentrado">
                  <h3 className="h3Style">Sup.(Has)</h3>
                  <p className="pStyle">{recordToVerEnc.sup}</p>
                </div>
                <Divider type="vertical" style={{ height: "40px" }} />
                <div className="divCentrado">
                  <h3 className="h3Style">Rinde(TT)</h3>
                  <p className="pStyle">{recordToVerEnc.rinde}</p>
                </div>
                <Divider type="vertical" style={{ height: "40px" }} />
                <div className="divCentrado">
                  <h3 className="h3Style">Costo(U$S)</h3>
                  <p className="pStyle">{recordToVerEnc.costo}</p>
                </div>
              </div>
              <Divider />
              <h3 className="subTitleStyle">Eventos</h3>
              <div className="divFormEstruc">
                <div className="divCentrado">
                  <h3 className="h3Style">Sup. Real</h3>
                  <p className="pStyle">0</p>
                </div>
                <Divider type="vertical" style={{ height: "40px" }} />
                <div className="divCentrado">
                  <h3 className="h3Style">Rinde Real</h3>
                  <p className="pStyle">0</p>
                </div>
                <Divider type="vertical" style={{ height: "40px" }} />
                <div className="divCentrado">
                  <h3 className="h3Style">% Est. Acopio</h3>
                  <p className="pStyle">0</p>
                </div>
                <Divider type="vertical" style={{ height: "40px" }} />
                <div className="divCentrado">
                  <h3 className="h3Style">Destino</h3>
                  <p className="pStyle">0</p>
                </div>
              </div>
              <Divider />
              <h3 className="subTitleStyle">Archivos</h3>
              <div className="divFormEstruc">Aca va lista de archivos</div>
              <Divider />
              <h3 className="subTitleStyle">Lotes</h3>
              <div className="divFormEstruc">
                <Table
                  columns={columnsLote}
                  dataSource={dataLote}
                  size={"small"}
                  pagination={{ pageSize: 3 }}
                  style={{ border: "1px solid #e8e8e8", width: "400px" }}
                />
              </div>
              <Divider />
              <Button
                onClick={() => handleDrawerClose()}
                style={{
                  width: "100%",
                  borderColor: "#5bbc34",
                  color: "#5bbc34",
                }}
              >
                Cerrar
              </Button>
            </div>
          )}
          {recordToAddFile && (
            <div>
              ACA VA UPLOAD
            </div>
          )}
          {recordToVerLote && (
            <div>
              ACA VA MAPA LOTE
            </div>
          )}
        </Drawer>
      </div>
    </>
  );
};

export default TablaEncuesta;
