export default function Background() {
  var backgroundText = `
    mi piace il tuo freddo
    perché quando un giorno saremo insieme
    odio tutti gli umani.
    ti amo cazzo, se ti amo
    non mi manca niente insieme a te
    una vita, chissà dove
    qualcosa è vero, è cambiato
    voglio essere protagonista.
    un film lo si può giudicare anche da quanto è lungo, o da quanto a lungo ci pensi dopo averlo visto
    per fare i traslochi
    salve, halo, grazie a tutti
    (noi) siamo i ciliegia suicidio
    adesso faremo un po' di casino
    andrà tutto bene
    siamo pronti?
    chitarra sexy triste
    ti tocchi i capelli
    niente xanax
    non voglio che mi odi
    non so più che cosa devo fare
    qualcosa che avrei potuto darti
    i sogni fanno paura, ma in realtà la vita va bene.
    bisogna cosare il cosabile
    ⁛⁙⁖
    .
    bisogna fare dei sogni per essere coraggiosi
    gli orsi non esistono qui
    io non so niente di te in realtà.
    né cosa ci faccio qui.
  `;

  for (let i = 0; i < 3; i++) {
    backgroundText += backgroundText;
  }

  return (
    <div className="background">
      <p>     
        {backgroundText}
      </p>
    </div>
  );
}
