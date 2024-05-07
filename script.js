document
  .getElementById("cipherForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var text = document.getElementById("textInput").value;
    var shift = parseInt(document.getElementById("shiftInput").value);
    var encrypted_text = encrypt(text, shift);
    var decrypted_text = decrypt(encrypted_text, shift);
    document.getElementById("result").innerHTML =
      "<strong>Teks terenkripsi:</strong> " +
      encrypted_text +
      "<br><strong>Teks terdekripsi:</strong> " +
      decrypted_text;
  });

function encrypt(text, shift) {
  var encrypted_text = "";
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (char.match(/[a-z]/i)) {
      var code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    encrypted_text += char;
  }
  return encrypted_text;
}

function decrypt(encrypted_text, shift) {
  return encrypt(encrypted_text, 26 - shift);
}
