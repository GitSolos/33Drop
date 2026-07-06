import { useCart } from "@/context/CartContext";

export default function Koszyk() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

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
        {cart.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Twój koszyk jest pusty.
          </p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px 0",
                  borderBottom: "1px solid #333",
                }}
              >
                <span>{item.name}</span>
                <span>{item.price} zł</span>
              </div>
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                fontSize: "28px",
                color: "#d4af37",
                fontWeight: "bold",
              }}
            >
              <span>Razem</span>
              <span>{total} zł</span>
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "30px",
                padding: "18px",
                background: "#d4af37",
                color: "#000",
                border: "none",
                borderRadius: "10px",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Przejdź do płatności
            </button>
          </>
        )}
      </div>
    </div>
  );
}