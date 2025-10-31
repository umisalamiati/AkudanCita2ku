function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xOyNKTwVkY":
        Script1();
        break;
      case "6hTFE3rGP9m":
        Script2();
        break;
      case "6nxXeKs4pCx":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('backsound');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume = 0.2;
}

function Script2()
{
  var audio = document.getElementById('backsound');
if (audio.muted) {
    audio.muted = false; // Unmute
} else {
    audio.muted = true; // Mute
}
}

function Script3()
{
  document.getElementById('backsound').muted = true;
}

