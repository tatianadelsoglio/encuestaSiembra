/* eslint-disable no-unused-vars */
import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Drawer, Form, Input, Select } from "antd";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./style.css";
import dayjs from 'dayjs';

const SelectsEncuesta = () => {
  const { appStage, setAppStage } = useContext(GlobalContext);

  const { Option } = Select;
  const [form] = Form.useForm();

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChangeFecha = (date, dateString) => {
    console.log(date, dateString);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    form.resetFields();
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const dateFormatList = ['DD/MM/YYYY'];

  return (
    <>
      {appStage === 0 ? (
        <>
          <div className="div_selects">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="label">Cliente</label>
              <Select
                style={{ width: 292 }}
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="label">Cosecha</label>
              <Select
                defaultValue="2223"
                style={{
                  width: 80,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "1920",
                    label: "1920",
                  },
                  {
                    value: "2021",
                    label: "2021",
                  },
                  {
                    value: "2122",
                    label: "2122",
                  },
                  {
                    value: "2223",
                    label: "2223",
                  },
                ]}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="label">Cultivo</label>
              <Select
                defaultValue="todos"
                style={{
                  width: 180,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "todos",
                    label: "TODOS",
                  },
                  {
                    value: "maiz",
                    label: "MAIZ",
                  },
                  {
                    value: "soja",
                    label: "SOJA",
                  },
                  {
                    value: "trigo",
                    label: "TRIGO",
                  },
                  {
                    value: "cf",
                    label: "CEBADA FORRAJERA",
                  },
                ]}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="label">Estado</label>
              <Select
                defaultValue="1"
                style={{
                  width: 160,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "0",
                    label: "TODOS",
                  },
                  {
                    value: "1",
                    label: "ENCUESTA OK",
                  },
                  {
                    value: "2",
                    label: "NO ENCUESTADO",
                  },
                  {
                    value: "3",
                    label: "NO ACCEDE",
                  },
                  {
                    value: "4",
                    label: "NO SIEMBRA",
                  },
                ]}
              />
            </div>
          </div>
          <div className="div_nuevaEncuesta">
            <Button
              className="btnNewEnc"
              style={{
                marginRight: "5px",
                width: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#00b333",
                color: "#00b333",
              }}
              onClick={() => showDrawer()}
            >
              <PlusOutlined />
            </Button>
            <Drawer
              title="Nueva Encuesta"
              placement="right"
              onClose={onClose}
              open={open}
              width={400}
            >
              <div className="div_drawerWrapper">
                <Form
                  form={form}
                  name="validate_other"
                  layout="vertical"
                  //   {...formItemLayout}
                  onFinish={onFinish}
                >
                  <Form.Item name="estado" label="Estado">
                    <Select
                      placeholder="Seleccione Estado"
                      style={{ width: "300px" }}
                    >
                      <Option value="1">ENCUESTA OK</Option>
                      <Option value="2">NO ENCUESTADO</Option>
                      <Option value="3">NO ACCEDE</Option>
                      <Option value="4">NO SIEMBRA</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item name="cliente" label="Cliente">
                    <Select
                      placeholder="Seleccione Cliente"
                      style={{ width: "300px" }}
                    >
                      <Option value="1">ACONCAGUA S.R.L.</Option>
                      <Option value="2">SABO OSVALDO</Option>
                      <Option value="3">3 ARROYOS</Option>
                      <Option value="4">A.P.I.N.T.A.</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item name="lote" label="Lotes">
                    <Select
                      mode="multiple"
                      placeholder="Seleccione Lote/s"
                      style={{ width: "300px" }}
                    >
                      <Option value="1">LOTE 1</Option>
                      <Option value="2">LOTE 2</Option>
                      <Option value="3">LOTE 3</Option>
                      <Option value="4">LOTE 4</Option>
                    </Select>
                  </Form.Item>
                  <div className="divFormEstruc">
                    <Form.Item name="cosecha" label="Cosecha">
                      <Select
                        placeholder="Seleccione Cosecha"
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
                        placeholder="Seleccione Cultivo"
                        style={{ width: "150px" }}
                      >
                        <Option value="1">SOJA</Option>
                        <Option value="2">MAIZ</Option>
                        <Option value="3">TRIGO</Option>
                        <Option value="4">CEBADA</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="divFormEstruc">
                    <Form.Item name="ciclo" label="Ciclo">
                      <Select
                        placeholder="Seleccione Ciclo"
                        style={{ width: "150px" }}
                      >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="hasEstimadas"
                      label="Has. Estimadas"
                      style={{ marginLeft: "31px" }}
                    >
                      <Input style={{ width: "150px" }} />
                    </Form.Item>
                  </div>
                  <div className="divFormEstruc">
                    <Form.Item name="rindeTT" label="Rinde (TT)">
                      <Input style={{ width: "150px" }} />
                    </Form.Item>
                    <Form.Item
                      name="costo"
                      label="Costo (U$S)"
                      style={{ marginLeft: "31px" }}
                    >
                      <Input style={{ width: "150px" }} />
                    </Form.Item>
                  </div>
                  <div className="divFormEstruc">
                    <Form.Item name="fechaSiembra" label="Fecha de Siembra">
                      <DatePicker onChange={onChangeFecha} format={dateFormatList}/>
                    </Form.Item>
                    <Form.Item
                      name="cultivoAnterior"
                      label="Cultivo Anterior"
                      style={{ marginLeft: "31px" }}
                    >
                      <Select
                        placeholder="Seleccione Cultivo Anterior"
                        style={{ width: "150px" }}
                      >
                        <Option value="1">SOJA</Option>
                        <Option value="2">MAIZ</Option>
                        <Option value="3">TRIGO</Option>
                        <Option value="4">CEBADA</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" style={{width:"100%", marginTop:"12px"}}>
                      Guardar
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Drawer>
          </div>
        </>
      ) : (
        <div className="div_selects">
          <Select
            style={{ width: 292 }}
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
          <Select
            defaultValue="2223"
            style={{
              width: 292,
            }}
            onChange={handleChange}
            options={[
              {
                value: "1920",
                label: "1920",
              },
              {
                value: "2021",
                label: "2021",
              },
              {
                value: "2122",
                label: "2122",
              },
              {
                value: "2223",
                label: "2223",
              },
            ]}
          />
          <Select
            defaultValue="todos"
            style={{
              width: 292,
            }}
            onChange={handleChange}
            options={[
              {
                value: "todos",
                label: "TODOS",
              },
              {
                value: "maiz",
                label: "MAIZ",
              },
              {
                value: "soja",
                label: "SOJA",
              },
              {
                value: "trigo",
                label: "TRIGO",
              },
            ]}
          />
        </div>
      )}
    </>
  );
};

export default SelectsEncuesta;
