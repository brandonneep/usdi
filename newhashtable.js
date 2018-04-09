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
  const storageLimit = 50; 

  this.print = function()
  {
    for ( var i = 0; i < storageLimit; i++)
    {
      if(storage[i] != undefined)
      console.log(i);
      console.log(storage[i]);
      ;
    }
    //console.log(storage)
    //print all the items in the array
  }
  this.add = function(key, happiness, work, community, HealthCare, economy, opportunity, enviroment, FiscalStability, infrastructure, publicSafety)
  {
    var index = hash(key,storageLimit);
    if(storage[index] === undefined)
    {
      storage[index] = [
        [key, happiness, work, community, HealthCare, economy, opportunity, enviroment, FiscalStability, infrastructure, publicSafety]
      ];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++)
      {
        if(storage[index][i][0] === key)
        {
          storage[index][i][1] = happiness;
          storage[index][i][2] = work;
          storage[index][i][3] = community; 
          storage[index][i][4] = HealthCare; 
          storage[index][i][5] = economy;
          storage[index][i][6] = opportunity;
          storage[index][i][7] = enviroment;
          storage[index][i][8] = FiscalStability;
          storage[index][i][9] = infrastructure
          storage[index][i][10] = publicSafety;
          inserted = true; 
        }
      }
      if(inserted === false)
      {
        storage[index].push([key,happiness, work, community, HealthCare, economy, opportunity, enviroment, FiscalStability, infrastructure, publicSafety]);
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
ht.add("AL", "47", "43", "42", "46" ,"38", "48", "35" , "25", "32", "43");
ht.add("AK", "23", "49", "50", "28" ,"50", "5", "19" , "47", "42", "49");
ht.add("AZ", "22", "19", "27", "24" ,"16", "45", "39" , "34", "12", "41");
ht.add("AR", "50", "28", "35", "49" ,"40", "41", "7" , "20", "46", "47");
ht.add("CA", "2", "21", "21", "11" ,"4", "46", "50", "5", "43", "38", "34");

ht.add("CO", "13", "7", "33", "9" ,"1", "28", "10" ,"31", "14", "27"); 
ht.add("CT", "15", "40", "11", "4" ,"43", "29", "38" ,"41", "41", "6"); 
ht.add("DE", "30", "25", "40", "25" ,"10", "7", "24" ,"15", "18", "40"); 
ht.add("FL", "16", "32", "49", "34" ,"5", "36", "33" ,"3", "11", "35");
ht.add("GA", "27", "24", "36", "42" ,"14", "33", "32" ,"13", "17", "37");
//10
ht.add("HI", "1", "10", "19", "1" ,"23", "18", "31" ,"35", "27", "29");
ht.add("ID","31", "3", "9", "18" ,"7", "42", "20" ,"7", "10", "5");
ht.add("IL", "7", "39", "24", "27" ,"39", "22", "47","50", "13", "25");
ht.add("IN", "40", "13", "20", "40" ,"25", "11", "48" ,"8", "30", "32"); 
ht.add("IA", "12", "8", "7", "3" ,"17", "", "4" ,"9", "21", "1", "16"); 
ht.add("KS", "21", "34", "34", "30" ,"42", "12", "16", "46", "16", "30");
ht.add("KY", "46", "35", "37", "45" ,"45", "30", "27", "46", "22", "12");
ht.add("LA", "43", "50", "48", "47" ,"44", "50", "42", "48", "44", "48");
ht.add("ME", "39", "11", "6", "22" ,"37", "26", "12" ,"29", "43", "1");
ht.add("MD", "10", "31", "5", "16" ,"24", "2", "31" ,"23", "25", "33");
//20
ht.add("MA", "20", "12", "16", "5" ,"9", "14", "25" ,"40", "45", "14");
ht.add("MI", "36", "18", "18", "32" ,"22", "20", "29" ,"32", "40", "24");
ht.add("MN", "5", "5", "3", "7" ,"", "20", "3" ,"2", "24", "6", "11");
ht.add("MS", "42", "46", "47", "50" ,"48", "49", "6" ,"45", "49", "22");
ht.add("MO", "41", "26", "44", "39" ,"33", "21", "15" ,"10", "20", "42");
ht.add("MT", "29", "6", "32", "26" ,"26", "37", "13" ,"12", "34", "28");
ht.add("NE", "4", "15", "17", "27" ,"21", "13", "14" ,"11", "9", "18");
ht.add("NV", "32", "36", "41", "35" ,"12", "19", "43" ,"38", "5", "45");
ht.add("NH", "18", "22", "2", "13" ,"11", "1", "4" ,"26", "37", "3");
ht.add("NJ", "3", "41", "8", "12" ,"41", "10", "49" ,"49", "28", "4");
//30
ht.add("NM", "34", "45", "39", "31" ,"46", "44", "8" ,"44", "47", "50");
ht.add("NY", "17", "42", "22", "15" ,"35", "43", "37" ,"28", "19", "13");
ht.add("NC", "26", "23", "29", "37" ,"18", "40", "34" ,"6", "24", "31");
ht.add("ND", "9", "14", "28", "14" ,"19", "17", "1" ,"2", "2", "17");
ht.add("OH", "38", "38", "25", "36" ,"32", "25", "40" ,"37", "23", "21");
ht.add("OK", "48", "44", "43", "48" ,"36", "38", "17" ,"22", "31", "39");
ht.add("OR", "44", "2", "23", "20" ,"6", "32", "18" ,"30", "3", "26");
ht.add("PA", "28", "37", "14", "23" ,"34", "16", "44" ,"42", "29", "10");
ht.add("RI", "35", "27", "26", "8" ,"29", "34", "23" ,"33", "48", "8");
ht.add("SC", "33", "30", "45", "41" ,"15", "39", "30" ,"18", "33", "44");
//40
ht.add("SD", "6", "16", "12", "21" ,"28", "24", "5" ,"4", "7", "20");
ht.add("TN", "45", "17", "38", "43" ,"13", "31", "28" ,"5", "15", "46");
ht.add("TX", "14", "33", "46", "38" ,"8", "47", "46" ,"17", "21", "36");
ht.add("UT", "24", "1", "1", "10" ,"2", "35", "22" ,"1", "8", "23");
ht.add("VT", "19", "20", "4", "6" ,"31", "6", "27" ,"16", "35", "2");
ht.add("VA", "8", "29", "13", "29" ,"30", "9", "41" ,"14", "39", "7");
ht.add("WA", "25", "4", "15", "2" ,"3", "27", "21" ,"27", "4", "38");
ht.add("WV", "49", "48", "31", "44" ,"49", "23", "45" ,"36", "50", "19");
ht.add("WI", "11", "9", "10", "17" ,"27", "8", "3" ,"", "19", "26", "15");
ht.add("WY", "37", "47", "30", "33" ,"47", "15", "11" ,"9", "", "36", "9");
ht.print();
//console.log(ht.seek("AZ"))

