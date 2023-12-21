import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";

function App() {
  const theme = extendTheme({
    fonts: {
      heading: `'Heading Font Name', sans-serif`,
      body: `'Body Font Name', sans-serif`,
    },
  });

  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          minHeight: "100vh",
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* アプリケーション全体のテーマを設定するためにThemeProviderを使用 */}
        <ChakraProvider theme={theme}>
          <div className="" style={{}}>
            {/* ルーティングを設定するためにBrowserRouterを使用 */}
            <BrowserRouter>
              <Routes>
                {/* ルートパスに対するルート要素としてSignInPageコンポーネントを設定 */}
                <Route path={`/`} element={<HomePage />} />
              </Routes>
            </BrowserRouter>
            <div className="progress-bar"></div>
          </div>
        </ChakraProvider>
      </div>
    </>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
