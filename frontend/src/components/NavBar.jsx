function NavBar(props) {
  const colors = {
    black: 'navbar-inverse',
    white: 'navbar-default'
  }

  return (
    <nav className={`navbar ${colors[props.color]}`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <div className='navbar-brand'>
            {props.title}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
