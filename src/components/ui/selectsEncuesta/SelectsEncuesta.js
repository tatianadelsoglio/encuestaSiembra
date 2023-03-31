import { Select } from "antd";
import React, { useContext } from "react";
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

  return (
    <>
      {appStage === 0 ? (
        <>
          <div className="div_selects">
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
            <Select
              defaultValue="1"
              style={{
                width: 292,
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

          <div>
            
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
