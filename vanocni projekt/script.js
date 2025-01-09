const storyText = document.getElementById("story-text");
const gameOptions = document.getElementById("game-options");
const inventoryList = document.getElementById("inventory-list");

let inventory = [];

function updateInventory(item) {
  inventory.push(item);
  const listItem = document.createElement("li");
  listItem.textContent = item;
  inventoryList.appendChild(listItem);
}

function showStory(text, options) {
  storyText.innerText = text;
  gameOptions.innerHTML = ""; // Clear previous options
  options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.onclick = () => option.action();
    gameOptions.appendChild(button);
  });
}

// Story Logic
function intro() {
  showStory(
    `Bulovka, Horní Libeň 24/5/2027 8:34
	
	Dobré ráno, přijde k tobě zdravotní sestra.
	Kde to jsem? ptáš se.
	V nemocnici Na Bulovce.
	A co tady dělám nebo proč tady jsem? ptáš se dál
	To nevíte pane? Naše země je ve válce s Muslimskou republikou Bavorsko. A vy jste jeden z mála přeživších, kteří přežili bombardování Palmovky napalmovou bombou.
	Jo! proto jsem tady....  jak dlouho jsem byl v bezvědomí?
	Tři dny pane, vypadá to pane, že už je vám dobře.... před nemocnicí na vás čeká nějaká osoba....
`,
    [
      { text: "Vstanu a půjdu za osobou", action: osoba },
      { text: "Budu líný, ještě si poležím", action: postel },
    ]
  );
}

function postel() {
  showStory(
    `Znova si usnul, prospal si celý den a probouzíš se večer.
    V ten moment tě probudí úkrutná potřeba jít na záchod...`,
    [{ text: "Jít na záchod", action: zachod }]
  );
}

function zachod() {
  showStory(
    `úleva.... Oblíkáš se a jdeš za osobou
	získal si předmět toaletní papír, nikdy nevíš kdy se ti může hodit, třeba ho nikdy nevyužiješ.`,
    [
      {
        text: "Jít za osobou",
        action: osoba,
      },
    ]
  );
  updateInventory("Toaletní papír");
}

function osoba() {
  showStory(
    `Dobrý den Pane plukovníku, osloví tě voják asi nadrotmistr, doufám že jste se v pořádku dostal z toho šoku, to co se stalo na Palmovce je fakt strašné....
	ale abych se představil já jsem nadrotmistr Pavel Kubišta a generální štáb vám, jako rozenému Libeňákovi, přiřadil 104 Prapor mobilní pěchoty a 111 dělostřelecký prapor, který je pod mým velením.
	určitě se Pane plukovníku ptáte na co? proč? co? kdy? kde?..... Generální štáb vybral právě vás díky vašem znalostím Palmovky a okolí. Vaším úkolem je osvobodit Palmovku od nepřátelské nadvlády.
	COŽE?? ptáte se udiveně.
	Ano, bohužel si nepřítel po tom co vybombardoval Dolní Libeň tak si z toho udělal i základnu...
	Dobrá tedy... odpovíš.`,
    [{ text: "Přesunout se do velitelského vozidla", action: vozidlo }]
  );
}

function vozidlo() {
  showStory(
    `ve velitelském vozidle byla rozložená ofocená mapa Libně z webu mapy.cz
	a uvařený šalek kávy, asi pro mě`,
    [
      { text: "Vypít kávu", action: vypito },
      { text: "Nezdržovat se popíjením", action: vozidlo2 },
    ]
  );
}

function vypito() {
  showStory(
    `šálek kávy nikdy nikoho nezabil a vždy se hodí i v těch nejhorších chvílích jako je válka.`,
    [{ text: "Pokračovat", action: vozidlo3 }]
  );
  updateInventory("Prázdný hrneček");
}

function vozidlo2() {
  showStory(
    `Proč studuju mapu Libně, když znám každý roh jako svoje boty...`,
    [{ text: "blbé mapy půjdu ven", action: vozidlo3 }]
  );
}

function vozidlo3() {
    showStory(
      `Vyšel jsi z velitelského vozu a okamžitě dostáváš rozkaz.
      "Pane plukovníku, dostavte se prosím na předsunuté velení do Libeňské sokolovny. Tam obdržíte další pokyny."`,
      [
        { text: "Vydat se na cestu", action: cesta }
      ]
    );
  }
  
  function cesta() {
    showStory(
      `Přijelo si pro tebe vojenské vozidlo Dingo nastoupil si do něj, krátká cesta ubíhá rychle, když projíždíš kolem u korábu tak si povšimneš 111. dělostřeleckého praporu skoládající se 
	z vozidel Dita a Dana a napadla tě jedna taktika kterou využil....`,
      [
        { text: "kdo ji využil", action: vietnam }
      ]
    );
  }
  function vietnam() {
    showStory(
     `Kterou využil vietnamský generál Giáp při bitvě u Dien Bien Phu, kde totálně porazil francouzské vojska.....`,
      [
        { text: "tak jo", action: cesta2 }
      ]
    );
  }
  function cesta2() {
    showStory(
      `Po pěti minutách dorážíš před sokolovnu. Rychle vbíháš dovnitř, ale najednou si uvědomíš, že tě díky vypité kávě přemáhá akutní potřeba.
      `,
      [
        { text: "Jsem dospělý, to vydržím", action: opravdu },
        { text: "Odskočím si", action: sokolovna }
      ]
    );
  }
  
  function opravdu() {
    showStory(
      `Po hodině další práce ti explodoval močák... GG.`,
      [
        { text: "Ale neeee!", action: gameOver }
      ]
    );
  }
  function sokolovna() {
    showStory(
      `zase na záchodě..... no to je jedno konečně se pustíme do práce
	vyběhneš po schodech a zajdeš do zbrojírny`,
      [
        { text: "vejít do zbrojírny", action: zbrojirna }
      ]

    );
  }
  
  function zbrojirna() {
    showStory(
      `ve zbrojírně je mnoho zbraní, nečekaně, můžeš si vybrat co chceš z následující nabídky:`,
      [
        { text: "Pouze granát", action: guerrila },
        { text: "Samopal a granát", action: vojin },
        { text: "Samopal, granát a zásobník navíc", action: general }
      ]
    );
  }
  
  function guerrila() {
    inventory.push("granát");
    showStory(
      `gránat hmmm mňam`,
      [
        { text: "Jdeme na to!", action: bojg }
      ]
    );
  }
  
  function vojin() {
    inventory.push("samopal", "granát");
    showStory(
      `jooooo ratatatatata`,
      [
        { text: "Jdeme na to!", action: bojv }
      ]
    );
  }
  
  function general() {
    inventory.push("samopal", "granát", "zásobník");
    showStory(
      `joooo ratatatata^2`,
      [
        { text: "Jdeme na to!", action: boj }
      ]
    );
  }
  
  // Funkce "gameOver" a další části můžeš přidat podle této struktury.
  function gameOver() {
    inventory.splice(inventory.indexOf("Toaletní papír"), 1);
    inventory.splice(inventory.indexOf("Prázdný hrneček"), 1);
    showStory(
      `Prohrál jsi. Unlucky.`,
      [
        { text: "Zkusit znovu!", action: intro },
        { text: "Raději ne", action: () => alert("Děkujeme za hru!") }
      ]
    );
  }
  
  function bojg() {
    showStory(
      `ozbrojen, vylezl si z budovy sokola Libeň kde na tebe čekala už tvoje divize tak si zavelel svým jednotkám do boje.
	Divize se pomalu přibližuje Zenklovou ulicí k Palmovce. Na Elsnicově náměstí dáváš rozkaz půlce svých jednotek aby se odebrali na
	Palmovku z východu přes Kotlasku. Blížíte se k náměstí Bohumila Hrabala a hned se spustí salva nepřítelského protiútoku.`,
      [
        { text: "Skrýt se ", action: ukrytg }
      ]
    );
  }
  
  function ukrytg() {
    showStory(
      `stihl ses ukrýt za okolní stavbu ale pár tvých mužů to bohužel nestihlo a zaplatili cenou nejvyšší 
	pokračuje dále jako vojáci při vylodění v Normandii. Překonáváte tramvajové koleje v ulici Na Žertvách.
	Přicházíte do ulice Heydukova a tam vás překvapí nepřítel s miniganou`,
      [
        { text: "Hodit granát", action: minigung }
      ]
    );
  }
  
  function minigung() {
    inventory.splice(inventory.indexOf("granát"), 1); // Odebrání granátu z inventáře
    showStory(
        `hodíš po něm svůj jediinej granát a zachráníš tím den (odebrat granát z batohu)
        boj pokračuje vybojujete ulici Heydukovu ale v ten moment když vykoukneš na ulici Novákových tak tam vidíš celou nepřátelskou jednotku.¨
        ale jelikož nemáš zbraň tak tě zabijou...
    `,
      [
        { text: "Ale neeee!", action: gameOver }
      ]
    );
  }
  function bojv() {
    showStory(
      `ozbrojen, vylezl si z budovy sokola Libeň kde na tebe čekala už tvoje divize tak si zavelel svým jednotkám do boje.
	Divize se pomalu přibližuje Zenklovou ulicí k Palmovce. Na Elsnicově náměstí dáváš rozkaz půlce svých jednotek aby se odebrali na
	Palmovku z východu přes Kotlasku. Blížíte se k náměstí Bohumila Hrabala a hned se spustí salva nepřítelského protiútoku.`,
      [
        { text: "Skrýt se ", action: ukrytv }
      ]
    );
  }
  function ukrytv() {
    showStory(
      `stihl ses ukrýt za okolní stavbu ale pár tvých mužů to bohužel nestihlo a zaplatili cenou nejvyšší 
	pokračuje dále jako vojáci při vylodění v Normandii. Překonáváte tramvajové koleje v ulici Na Žertvách.
	Přicházíte do ulice Heydukova a tam vás překvapí nepřítel s miniganou`,
      [
        { text: "Hodit granát", action: minigunv }
      ]
    );
  }
  function minigunv() {
    inventory.splice(inventory.indexOf("granát"), 1); // Odebrání granátu z inventáře
    showStory(
        `hodíš po něm svůj jediinej granát a zachráníš tím den 
	boj pokračuje vybojujete ulici Heydukovu ale v ten moment když vykoukneš na ulici Novákových tak tam vidíš celou nepřátelskou jednotku.¨
	rychle se chopíš samopalu a postřílíš je. Ulice Novákových dobyta! 
    `,
      [
        { text: "pokracujem pokracujem", action: heydukovav }
      ]
    );
  }
  function heydukovav() {
    inventory.splice(inventory.indexOf("samopal"), 1); // Odebrání granátu z inventáře
    showStory(
        `pokračuješ dál Heydukovou na jih a pak na Sokolovské se stane ta samá věc ale bylo jich dvakrát víc jak předtím na Novákových.
	jseš zastřelen jelikož ti došly náboje`,
      [
        { text: "ale neeee", action: gameOver }
      ]
    );
  }
  function boj() {
    showStory(
      `ozbrojen, vylezl si z budovy sokola Libeň kde na tebe čekala už tvoje divize tak si zavelel svým jednotkám do boje.
	Divize se pomalu přibližuje Zenklovou ulicí k Palmovce. Na Elsnicově náměstí dáváš rozkaz půlce svých jednotek aby se odebrali na
	Palmovku z východu přes Kotlasku. Blížíte se k náměstí Bohumila Hrabala a hned se spustí salva nepřítelského protiútoku.`,
      [
        { text: "Skrýt se ", action: ukryt }
      ]
    );
  }
  function ukryt() {
    showStory(
      `stihl ses ukrýt za okolní stavbu ale pár tvých mužů to bohužel nestihlo a zaplatili cenou nejvyšší 
	pokračuje dále jako vojáci při vylodění v Normandii. Překonáváte tramvajové koleje v ulici Na Žertvách.
	Přicházíte do ulice Heydukova a tam vás překvapí nepřítel s miniganou`,
      [
        { text: "Hodit granát", action: minigun }
      ]
    );
  }
  function minigun() {
    inventory.splice(inventory.indexOf("granát"), 1); // Odebrání granátu z inventáře
    showStory(
        `hodíš po něm svůj jediinej granát a zachráníš tím den 
	boj pokračuje vybojujete ulici Heydukovu ale v ten moment když vykoukneš na ulici Novákových tak tam vidíš celou nepřátelskou jednotku.¨
	rychle se chopíš samopalu a postřílíš je. Ulice Novákových dobyta! 
    `,
      [
        { text: "pokracujem pokracujem", action: heydukova }
      ]
    );
  }
  function heydukova() {
    inventory.splice(inventory.indexOf("zásobník"), 1); // Odebrání granátu z inventáře
    showStory(
        `pokračuješ dál Heydukovou na jih a pak na Sokolovské se stane ta samá věc ale bylo jich dvakrát víc jak předtím na Novákových.
	nabiješ další zásobník  a postřílíš půlku ale bohužel ti nevystačí náboje a jseš střelen.`,
      [
        { text: " neeee", action: artilerija }
      ]
    );
  }
  function artilerija() {
    inventory.splice(inventory.indexOf("samopal"), 1); // Odebrání granátu z inventáře
    showStory(
        `předtím než omdlíš máš poslední možnost vyhrát, zmáčknout tlačítko, co dá rozkaz dělostřelectvu k zahájení palby.
	co uděláš?`,
      [
        { text: " nic", action: gameOver },
        { text: " tlačknout mačítko", action: pal }
      ]
    );
  }
  function pal() {
    showStory(
      `je to sebevražedná mise ale díky tvému nadání byla osvobozena Dolní Libeň od nepřátel stal ses společně se svými muži národním hrdinou.
	`,
      [
        { text: "konec", action: outro }
      ]
    );
  }
  function outro() {
    inventory.splice(inventory.indexOf("Toaletní papír"), 1);
    inventory.splice(inventory.indexOf("Prázdný hrneček"), 1);
    showStory(
      `díky za hraní této textové adventury doufám že se ti aspoň trochu líbila.
	Školní úkol Alexandre Basseville Leden 2025
	`,
      [
        { text: "znova", action: intro },
        { text: "konec!", action: () => alert("Děkujeme za hru!") }
      ]
    );
  }
  intro()
  
