// exercise 4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
 afficheUser()
 
 {
    if(users=="") console.log("personne n'est en ligne")

    elseif(users==1)
    {
     console.log("lLea123 est connecté")
    } elseif(users==2)
    {
        console.log("Lea123 et doglovers sont connecté")
    }
     
     elseif(users!="") 
     {
        console.log("les deux premiers noms dans le tableau des utilisateurs et le nombre d'utilisateurs supplémentaires en ligne.")
     }
    
 }


// exercise 2
let newDog ="Chihuahua"
  let len = newDog.length
  console.log(len )

  // affichage de la variable en majuscule 
  
  console.log(newDog.toUpperCase())

  // affichage de la variable en minuscule
  console.log(newDog.toLowerCase())

  verif()
  {
    if(newDog =="Chihuahua"){
        return "J'adore les Chihuahuas, c'est ma race de chien préférée"
    } else{
        console.log("Je m'en fous, je préfère les chats")
    }
  }

// exercise 1
// j'ai crée une fonction anwer et a l'interieur  de ma fonction 
anwser()

{
    let x=15
 let y= 20

    if(x> y){
        return x
    } else{
        return y
    }
};

