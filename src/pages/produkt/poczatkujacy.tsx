export default function Poczatkujacy() {
  return (
    <div
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        padding: "60px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "60px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/metody.jpg.png"
          alt="Metody Początkujący"
          style={{
            width: "450px",
            borderRadius: "20px",
          }}
        />

        <div style={{ flex: 1 }}>
          <h1 style={{ color: "#d4af37", fontSize: "48px" }}>
            Metody Zarabiania — Początkujący
          </h1>

          <p style={{ fontSize: "20px", color: "#ccc" }}>
            Idealny zestaw dla osób rozpoczynających zarabianie online.
          </p>

          <h2 style={{ color: "#d4af37", fontSize: "46px" }}>
            50 zł
          </h2>

          <p>✔ Metody bez dużego kapitału</p>
          <p>✔ Instrukcje krok po kroku</p>
          <p>✔ Sprawdzone sposoby</p>
          <p>✔ Aktualizacje</p>

          <button
            style={{
              marginTop: "30px",
              background: "#d4af37",
              color: "black",
              padding: "18px 40px",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Kup teraz
          </button>
        </div>
      </div>
    </div>
  );
}