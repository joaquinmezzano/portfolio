import MenuContextProvider from "@/context/MenuContext";
import MainLayout from "./components/MainLayout";
import "./globals.css";

export const metadata = {
  title: "Joaquin Mezzano",
  description: "Personal page for projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
