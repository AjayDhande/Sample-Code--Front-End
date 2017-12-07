var countries = [];
var states = [];


function pairForCitiesOrStates(geonameObj)
{
  var result = Array();
  result[0] = geonameObj["name"];
  result[1] = geonameObj["geonameId"]
  return result;
}

function listOfCountries(elemId)
{
  countries = [];
  var countryGeonameIds = [6255146, 6255152, 6255147, 6255148, 6255149, 6255151, 6255150]
  var count = 0;
  showLoader();
  for(x in countryGeonameIds)
  {
    count++;
    $.getJSON("http://www.geonames.org/childrenJSON?geonameId="+countryGeonameIds[x], function(data){
      count--;
      $.merge(countries,data["geonames"]);
      if (count==0){
        allCountries(elemId);
        hideLoader();
      }
    });
  }
}

function listOfStatesOrCities(elem, elemId)
{
  states = [];
  showLoader();
  $.getJSON("http://www.geonames.org/childrenJSON?geonameId="+$("#"+elem.id+" option:selected").attr('data-role'), function(data){
    states = data["geonames"];
    statesOrCities(elemId);
    hideLoader();
  });
}

function allCountries(elemId)
{
  countries = (countries.map(pairForCitiesOrStates)).sort();
  var top_country = "United States"
  var top_country_code = "6252001"
  var src = document.getElementById(elemId);
  src.options.length = 0;
  document.getElementById('state').options.length = 0;
  document.getElementById('region').options.length = 0;
  document.getElementById('city').options.length = 0;
  var count = countries.length;
  if(count){
    src.options[src.options.length] = new Option('Select','')
    src.options[1] = new Option(top_country, top_country)
    $($("#"+elemId+" > option")[1]).attr('data-role', top_country_code)
  }
  else
    src.options[src.options.length] = new Option('No Data Available','')
  for(var i=0;i<count;i++)
  {
    if (countries[i][0] != top_country) {
      var tmp = countries[i][0];
      var index = src.options.length;
      src.options[index] = new Option(tmp, tmp)
      $($("#"+elemId+" > option")[index]).attr('data-role', countries[i][1]);
    }
  }
  //$(".chosen-select").trigger('chosen:updated');
}

function disable (elemId) {
  var src = document.getElementById(elemId);
  src.options.length = 0;
  src.options[src.options.length] = new Option('No Data Available','')
  src.disabled = true;
}

function disable_for (elemId) {
  disable(elemId);
  if (elemId == 'state') {
    disable('region');
    disable('city');
  }
  else if (elemId == 'region'){
    disable('city');
  }
}

function truncate (elemId) {
  var src = document.getElementById(elemId);
  src.options.length = 0;
  src.disabled = false;
}

function statesOrCities(elemId)
{
  if (elemId == 'state') {
    truncate('region');
    truncate('city');
  } 
  else if (elemId == 'region'){
    truncate('city');
  };
  if(typeof states != 'undefined')
  {
    states = (states.map(pairForCitiesOrStates)).sort();
    var src = document.getElementById(elemId);
    src.options.length = 0;
    var count = states.length;
    if(count)
    {
      src.options[src.options.length] = new Option('Select','')
      src.disabled = false;
    }
    else
      disable_for(elemId);
    for(var i=0;i<count;i++)
    {
      var tmp = states[i][0];
      var index = src.options.length;
      src.options[index] = new Option(tmp,tmp);
      $($("#"+elemId+" > option")[index]).attr('data-role', states[i][1]);
    }
  }
  else
    disable_for(elemId);
    //$(".chosen-select").trigger('chosen:updated');
}

window.onload = function() {
    listOfCountries('country');
    //$(".chosen-select").chosen();
    //$(".chosen-select").trigger('chosen:updated');
}
