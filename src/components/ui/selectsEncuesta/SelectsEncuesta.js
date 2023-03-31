/* eslint-disable no-unused-vars */
import {PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Select } from "antd";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./style.css";

const SelectsEncuesta = () => {
  const { appStage, setAppStage } = useContext(GlobalContext);

  const onChange = (value) => {
    console.log(`selected ${value}`);
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
    setOpen(false);
  };

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
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
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
