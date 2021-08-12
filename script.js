
//list of facts for fact generator
var factList = [
  "More than 50 percent of LGBT people experience some form of healthcare discrimination.", "LGBTQ people of color are more than twice as likely to avoid a doctor’s office than white LGBTQ individuals.", "Only 16 percent of LGBT patients choose to inform their doctor of their sexual orientation.", "In 2015, 80 percent of first year medical students expressed implicit bias against gay and lesbian people and 50 percent expressed explicit bias.", "17% of LGBTQ adults do not have any kind of health insurance coverage, compared to 12% of non-LGBTQ adults.", "Trans people often skip health care because of cost: nearly half (48%) have postponed medical care when sick or injured and avoided preventive care (50%) because they couldn’t afford it.",
];

//variables for click interactivity
var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

//event listener
factButton.addEventListener("click", displayFact);

//define function
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


  

