/*hash table*/
//hash function, max number of buckets
var hash = (string, max) => {
  var hash = 0; 
  for(var i = 0; i <string.length; i++)
  {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

let HashTable = function()
{
  let storage = [];
  //storage limit should be only 50 because there are only 
  //50 states
  const storageLimit = 5; 

  this.print = function()
  {
    console.log(storage)
    //print all the items in the array
  }
  this.add = function(key, value)
  {
    var index = hash(key,storageLimit);
    if(storage[index] === undefined)
    {
      storage[index] = [
        [key, value]
      ];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++)
      {
        if(storage[index][i][0] === key)
        {
          storage[index][i][1] = value; 
          inserted = true; 
        }
      }
      if(inserted === false)
      {
        storage[index].push([key,value]);
      }
    }

  }

};

this.remove = function(key) {
  var index = hash(key, storageLimit);
  //1 is the index
  if(storage[index].length === 1 && storage[index][0][0] === key)
  {
    delete storage[index];
  } else { //if there is more than one index
    for( var i = 0; i < storage[index]; i++)
    {
      if(storage[index][i][0] == key)
      {
        delete storage[index][i];
      }
    }
  }
};

this.seek = function(key) {
  var index = hash(key, storageLimit);
  if(storage[index] === undefined)
  {
    return undefined;
  } else {
    for ( var i = 0; i < storage[index].length; i++)
    {
      if(storage[index][i][0] === key) {
        return storage[index][i][1];
      }
    }
  }
};
/*
Alabama - AL
Alaska - AK
Arixona - AZ
Arkansas - AR
California - CA
Colorado - CO
Connecticut - CT 
Delaware - DE
Florida - FL
Georgia - GA
Hawaii - HI
Idaho - ID
Illinois - IL 
Indiana - IN
Iowa - IA
Kansas - KS
Kentucky - KY
Louisiana - LA
Maine - ME
Maryland - MD 
Massachusetts - MA 
Michigan - MI
Minnesota - MN
Mississippi - MS
Missour - MO
Montana - MT
Nebraska - NE
Nevada - NV
New Hampshire - NH 
New Jersey - NJ
New Mexico - NM
New York - NY
North Calofornia - NC 
North Dakota - ND
Ohio - OH
Oklahoma - OK 
Oregon - OR
Pennsylvania - PA
Rhode Island - RI
South Carolina - SC
South Dakota - SD
Tennessee - TN
Texas - TX
Utah - UT
Vermont - VT 
Virginia - VA
Washington - WA
West Virginia - WV 
Wisconsin - WI
Wyoming - WY
*/

let ht = new HashTable();
ht.add("AL", "47");
ht.add("AK", "23");
ht.add("AZ", "22");
ht.add("AR", "50");
ht.add("CA", "2");
ht.add("CO", "13"); 
ht.add("CT", "15"); 
ht.add("DE", "30"); 
ht.add("FL", "16");
ht.add("GA", "27");
//10
ht.add("HI", "1");
ht.add("ID","31");
ht.add("IL", "7");
ht.add("IN", "40"); 
ht.add("IA", "12"); 
ht.add("KS", "21");
ht.add("KY", "46");
ht.add("LA", "43");
ht.add("ME", "39");
ht.add("MD", "10");
//20
ht.add("MA", "20");
ht.add("MI", "36");
ht.add("MN", "5");
ht.add("MS", "42");
ht.add("MO", "41");
ht.add("MT", "29");
ht.add("NE", "4");
ht.add("NV", "32");
ht.add("NH", "18");
ht.add("NJ", "3");
//30
ht.add("NM", "34");
ht.add("NY", "17");
ht.add("NC", "26");
ht.add("ND", "9");
ht.add("OH", "38");
ht.add("OK", "48");
ht.add("OR", "44");
ht.add("PA", "28");
ht.add("RI", "35");
ht.add("SC", "33");
//40
ht.add("SD", "6");
ht.add("TN", "45");
ht.add("TX", "14");
ht.add("UT", "24");
ht.add("VT", "19");
ht.add("VA", "8");
ht.add("WA", "25");
ht.add("WV", "49");
ht.add("WI", "11");
ht.add("WY", "37");
ht.print();
//console.log(ht.seek("AZ"))

