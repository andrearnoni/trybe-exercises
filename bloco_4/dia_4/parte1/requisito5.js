let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  info.recorrente = "Sim"

  let info2= {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
  };

  info2.recorrente = "Sim"

  for (let key in info){
      if (info[key] === info.recorrente && info.recorrente === "Sim" && info2.recorrente === "Sim"){
          console.log("Ambos recorrentes");
      } else {
          console.log(info[key] + " e " + info2[key]);
      }
  }

