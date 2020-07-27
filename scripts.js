function testResults(form) {
  var word = form.inputbox.value;
  var vowels = "aeiouAEIOU";
  var matchVowels = word.match(/[aeiou]/gi);
  if (vowels.indexOf(word[0]) != -1) {
    return (document.getElementById("result_here").innerHTML = word);
  } else if (vowels.indexOf(word[0]) == -1 && matchVowels != null) {
    var firstStringChar = word.charAt(0);
    var word = word.substring(1);

    return (document.getElementById("result_here").innerHTML =
      word + firstStringChar + "ay");
  } else if (matchVowels == null) {
    return (document.getElementById("result_here").innerHTML =  word + "ay");
  }
}
