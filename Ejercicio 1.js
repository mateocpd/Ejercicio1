for (let i = 0; i < 5; i++) {
    let numeroGenerado = Math.floor(Math.random() * 100);
    if (numeroGenerado % 2 === 0) {
      console.log(numeroGenerado + " es par");
    } else {
      console.log(numeroGenerado + " es impar");
    }
  }
