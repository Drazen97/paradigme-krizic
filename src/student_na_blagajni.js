function vrati(a, b, c, d, e, f, n) {
  let lista_povrat = [];
  //za svaku novcanicu definiramo broj koliko imamo
  // tih novcanica na raspolaganju
  let lista1 = [a, b, c, d, e, f];
  let lista = [200, 25, 10, 5, 2, 1];
  let i = 0;
  // i - brojac koji seta po listi
  //zelimo da se prvo vracaju velike novcanice pa onda manje
  //kada nestane velikih ili n postane manji od neke novcanice
  //pomicemo se na sljedecu manju novcanicu/kovanicu
  while (n > 0) {
    if (n >= lista[i]) {
      if (lista1[i] > 0) {
        n = n - lista[i];
        lista_povrat.push(lista[i]);
        lista1[i]--;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
  return lista_povrat;
}
//podrazumijeva se da postoji kombinacija da vratimo iznos,
//tj da brojac i neće premasiti duljinu liste
let x = vrati(10, 10, 10, 10, 10, 100, 46);
console.log(x);
