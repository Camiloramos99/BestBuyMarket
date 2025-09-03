const Layout = ({ children }) => {
  return (
    <div className="grid justify-items-center">
      <main>
        { children }
      </main>
    </div>
  )
}

export default Layout