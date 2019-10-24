function valid(){
    var champ = document.getElementById('lastname').value
    if (isNaN(champ)){
       result= champ;//récupère le contenu du champ et le met dans la boite de dial
    }
    else
    {
       result = "saisi ton nom !";//message si espace ou champ vide
       document.getElementById('lastname').value = ""
    }
    return result;
  }
