export default function Koszyk() {
  return (
    <div
      style={{
        background: "#0b0b0b",
        minHeight: "100vh",
        color: "white",
        padding: "60px",
      }}
    >
      <h1
        style={{
          color: "#d4af37",
          fontSize: "50px",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        🛒 Twój koszyk
      </h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#1b1b1b",
          borderRadius: "15px",
          padding: "30px",
          border: "1px solid #333",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            fontSize: "22px",
          }}
        >
          <span>Dostawca Perfum Premium</span>
          <span>80 zł</span>
        </div>

        <hr style={{ borderColor: "#333" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            fontSize: "30px",
            color: "#d4af37",
            fontWeight: "bold",
          }}
        >
          <span>Razem</span>
          <span>80 zł</span>
        </div>

        <button
          style={{
            width: "100%",
            marginTop: "40px",
            padding: "20px",
            background: "#d4af37",
            color: "#000",
            border: "none",
            borderRadius: "12px",
            fontSize: "24px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Przejdź do płatności
        </button>
      </div>
    </div>
  );
}