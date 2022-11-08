/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { Route, Routes } from "react-router-dom";
import { ViewNotes } from "./pages/ViewNotes";
import { ArchivePages } from "./pages/ArchivePages";
import { DetailPages } from "./pages/DetailPages";
import { PageNotFound } from "./components/PageNotFound";
import { AddNotePages } from "./pages/AddNotePages";
import { Login } from "./pages/Login";
import { useEffect, useMemo, useState } from "react";
import { getUserLogged } from "./utils/network-data";
import { AuthContext } from "./contexts/AuthContext";
import { Register } from "./pages/Register";
import { ThemeContext } from "./contexts/ThemeContext";

export const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "bright");

  useEffect(() => {
    handleUserLogged();
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "bright");
      document.body.classList.remove("dark");
    }
  }, []);

  const handleUserLogged = async () => {
    const { error, data } = await getUserLogged();
    if (!error) {
      setAuthUser(data);
    }
  };

  const valueAuthContext = useMemo(
    () => ({
      authUser,
      setAuthUser,
    }),
    [authUser]
  );

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "dark" ? "bright" : "dark");
    setTheme((prevState) => (prevState === "dark" ? "bright" : "dark"));

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "bright");
      document.body.classList.remove("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.classList.add("dark");
    }
  };

  const valueThemeContext = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  if (!authUser) {
    return (
      <ThemeContext.Provider value={valueThemeContext}>
        <AuthContext.Provider value={valueAuthContext}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/new" element={<Login />} />
            <Route path="/notes/:id" element={<Login />} />
            <Route path="/archived" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    );
  }

  return (
    <>
      <ThemeContext.Provider value={valueThemeContext}>
        <AuthContext.Provider value={valueAuthContext}>
          <Routes>
            <Route path="/" element={<ViewNotes />} />
            <Route path="/new" element={<AddNotePages />} />
            <Route path="/notes/:id" element={<DetailPages />} />
            <Route path="/archived" element={<ArchivePages />} />
            <Route path="/login" element={<ViewNotes />} />
            <Route path="/register" element={<ViewNotes />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};
