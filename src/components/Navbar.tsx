export default function Navbar() {
  return (
    <nav
      style={{
        background: "#111",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        borderBottom: "2px solid #d4af37",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <h2
        style={{
          color: "#d4af37",
          margin: 0,
          fontSize: "30px",
          letterSpacing: "2px",
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/")}
      >
        33DROP
      </h2>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          fontSize: "18px",
          alignItems: "center",
        }}
      >
        <span
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "/")}
        >
          Strona główna
        </span>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "/produkt/dostawca")}
        >
          Dostawca perfum
        </span>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "/shop")}
        >
          Metody zarobku
        </span>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => alert("Kontakt wkrótce!")}
        >
          Kontakt
        </span>

        {/* Koszyk */}
        <div
          onClick={() => (window.location.href = "/koszyk")}
          style={{
            background: "#d4af37",
            color: "#000",
            padding: "10px 18px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          🛒 Koszyk (0)
        </div>
      </div>
    </nav>
  );
}