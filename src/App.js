import { ConfigProvider } from "antd";
import { useState } from "react";
import "./App.css";
import { GlobalContext } from "./components/context/GlobalContext";
import VistaEncuesta from "./components/ui/vistaEncuesta/VistaEncuesta";

function App() {
  const [appStage, setAppStage] = useState(0); // este valor luego debe venir por localstorage para tener control si se abre desde clientes o desde encuestas

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00bb33",
          },
        }}
      >
        <GlobalContext.Provider
          value={{
            appStage,
            setAppStage,
          }}
        >
          <VistaEncuesta />
        </GlobalContext.Provider>
      </ConfigProvider>
    </>
  );
}

export default App;
