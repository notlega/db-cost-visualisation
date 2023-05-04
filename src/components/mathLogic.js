

export const mathLogic = (numCompany,numUsersperCompany,percentUsers,numListings,numRooms,numMessages,numCategories,numParams) => {
    const totalBits = calculateUserBits(numCompany,numUsersperCompany,percentUsers) + listingBits(numListings) + roomsBits(numRooms) + messagesBits(numMessages) + categoriestoBits(numCategories) + paramsToBits(numParams);
    const totalGB = bitsToGB(totalBits);
    const totalCosts = totalCost(totalGB);
    return totalCosts;
}

function calculateUserBits(numCompany,numUsersperCompany,percentUsers){
    const numofUsers= Math.round(numCompany*numUsersperCompany*percentUsers/100);
    return numofUsers*1134 ;
}


function listingBits(numListings){
    return numListings *3891;
}

function roomsBits(numRooms){
    return numRooms*512 ;
}

function messagesBits(numMessages){
    return numMessages* 7792;
}


function categoriestoBits(numCategories){
    return numCategories* 1633;
}


function paramsToBits(numParams){
    return numParams* 593;
}



function bitsToGB(bits) {
  const bytes = bits / 8;
  const gigabytes = bytes / 1024 / 1024 / 1024;
  return gigabytes.toFixed(2);
}



function totalCost(gb){
    var cost = 0;
    if(gb>5){
        cost = (gb-5)*0.1;
        return cost;
    }
    return cost;
}





