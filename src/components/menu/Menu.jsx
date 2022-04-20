import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`menu ${menuOpen && "active"}`}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro2">Intro2</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro3">Intro3</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro4">Intro4</a>
        </li>
      </ul>
    </div>
  );
}
