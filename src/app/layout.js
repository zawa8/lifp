import "./globals.css";
//<body className={`antialiased`} > {children} </body>
export const metadata = {
  title: "lifp",
  description: "lifp using hsciifonts hsciifontscn Hsciifontpicker ",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
