import GoForIt from "./components/GoForIt";

function App() {
  const placeName = "Tromsø";
  const placeCoordinates = {
    lat: 69.65361666895359,
    lng: 18.954824942426775,
  };
  return (
    <div>
      <GoForIt placeName={placeName} placeCoordinates={placeCoordinates} />
    </div>
  );
}

export default App;

// Stwórz widget w stylu FAB (małe, kolorowe kółeczko z ikonką, w prawym dolnym rogu ekranu)

// widget powinien działać tak:

// struktura:
// - cała logika widgetu ma dziać się funkcji goForIt(placeName, {lat, long})
// - placeName - to nazwa do której ma kierować widget
// - lat, long - to długość i szerokość geograficzna miejsca placeName

// logika:
// - ma pojawiać się po załadowaniu strony
// - na wejściu ma wyjeżdzać zza lewego boku do prawego dolnego rogu
// - po kliknięciu ma wyświetlić popup - Czy jesteś gotowy na podróż do miejsca {placeName}?
// - jeśli ktoś potwierdzi, że "Tak" to jest kierowany do Google directions na miejsce o współrzędnych lat, long
// - jeśli ktoś kliknie "Nie" to popup się zamyka
