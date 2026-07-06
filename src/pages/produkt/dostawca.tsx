export default function Dostawca() {
  return (
    <div
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        padding: "60px",
        fontFamily: "Arial, sans-serif",
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
        {/* dostawca.jpg.png*/}
        <img
          src="/dostawca.jpg"
          alt="Dostawca Perfum"
          style={{
            width: "450px",
            borderRadius: "20px",
            boxShadow: "0 0 30px rgba(212,175,55,0.3)",
          }}
        />

        {/* Informacje */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              color: "#d4af37",
              fontSize: "48px",
              marginBottom: "10px",
            }}
          >
            Dostawca Perfum Premium
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#ccc",
              lineHeight: "1.7",
            }}
          >
            Otrzymujesz dostęp do sprawdzonego dostawcy perfum premium,
            dzięki któremu możesz rozpocząć własny biznes online.
          </p>

          <h2
            style={{
              color: "#d4af37",
              fontSize: "46px",
              marginTop: "30px",
            }}
          >
            80 zł
          </h2>

          <div
            style={{
              marginTop: "30px",
              fontSize: "19px",
              lineHeight: "2",
            }}
          >
            <p>✔ Sprawdzony dostawca</p>
            <p>✔ Wysoka marża sprzedaży</p>
            <p>✔ Produkty Premium</p>
            <p>✔ Instrukcja sprzedaży</p>
            <p>✔ Stałe aktualizacje</p>
            <p>✔ Natychmiastowy dostęp po zakupie</p>
          </div>

          <button
            style={{
              marginTop: "40px",
              background: "#d4af37",
              color: "black",
              border: "none",
              padding: "18px 45px",
              borderRadius: "12px",
              fontSize: "22px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Kup teraz
          </button>
        </div>
      </div>

      {/* Opis */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "80px auto 0",
        }}
      >
        <h2
          style={{
            color: "#d4af37",
            fontSize: "36px",
            marginBottom: "20px",
          }}
        >
          Co otrzymujesz?
        </h2>

        <p
          style={{
            color: "#ddd",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Po zakupie otrzymasz komplet danych do sprawdzonego dostawcy
          perfum, instrukcję rozpoczęcia sprzedaży, wskazówki dotyczące
          marketingu oraz sposoby na zwiększenie zysków.
        </p>
      </div>

      {/* Opinie */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
        }}
      >
        <h2
          style={{
            color: "#d4af37",
            marginBottom: "30px",
          }}
        >
          Opinie klientów
        </h2>

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#1b1b1b",
              padding: "25px",
              borderRadius: "15px",
              flex: 1,
              minWidth: "250px",
            }}
          >
            ⭐⭐⭐⭐⭐
            <p>
              Świetny dostawca. Pierwsze zamówienia miałem już po kilku dniach.
            </p>
            <b>Kamil</b>
          </div>

          <div
            style={{
              background: "#1b1b1b",
              padding: "25px",
              borderRadius: "15px",
              flex: 1,
              minWidth: "250px",
            }}
          >
            ⭐⭐⭐⭐⭐
            <p>
              Bardzo dobry kontakt i wysoka jakość produktów. Polecam.
            </p>
            <b>Patryk</b>
          </div>

          <div
            style={{
              background: "#1b1b1b",
              padding: "25px",
              borderRadius: "15px",
              flex: 1,
              minWidth: "250px",
            }}
          >
            ⭐⭐⭐⭐⭐
            <p>
              Zdecydowanie warto. Szybko odzyskałem koszt zakupu.
            </p>
            <b>Mateusz</b>
          </div>
        </div>
      </div>
    </div>
  );
}