//Complete the function/method so that it returns the url with anything after the anchor (#) removed



function removeUrlAnchor(url){
  return url.replace(/#.*/, '')

}
console.log(removeUrlAnchor("www.codewars.com#about"))


