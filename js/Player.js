class Player
{
  constructor()
  {
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }

  getCount()
  {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{playerCount = data.val();})
  }

  updateCount(count)
  {
    database.ref('/').update({playerCount: count});
  }

  update()
  {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({name:this.name,distance:this.distance,rank: this.rank });
    //Change 4 : Added rank : this.rank to create  a rank node intially
  }

  static getPlayerInfo()
  {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{allPlayers = data.val();})
  }

  static getCarsAtEnd() //Made it static
  {
    //database.ref('CarsAtEnd').on("value",(data)=>{this.rank = data.val();})
    //Change 1
    database.ref('CarsAtEnd').on("value",(data)=>{carsAtEnd = data.val();})
  }

  static updateCarsAtEnd(rank)
  {
    database.ref('/').update({CarsAtEnd:rank})
  }
  updateRank(index,rank){
    var plrIndex = "players/player"+index
    database.ref(plrIndex).update({
        rank : rank
    })
}
}
