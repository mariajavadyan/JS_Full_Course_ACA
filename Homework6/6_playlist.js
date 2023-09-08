function Playlist() {
  this.songsArr = [];
  this.currentIndex = 0;
}

Playlist.prototype.add = function (song) {
  this.songsArr.push(song);
};

Playlist.prototype.play = function () {
  if (this.songsArr.length === 0) {
    return "Please add song to the playlist";
  }

  let currentSong = this.songsArr[this.currentIndex];
  return currentSong.play();
};

Playlist.prototype.stop = function () {
  if (this.songsArr.length === 0) {
    return "Please add song to the playlist";
  }

  let currentSong = this.songsArr[this.currentIndex];
  return currentSong.stop();
};

Playlist.prototype.next = function () {
  if (this.songsArr.length === 0) {
    return "Please add song to the playlist";
  }

  let currentSong = this.songsArr[this.currentIndex];
  let messageFromStop = currentSong.stop();

  this.currentIndex = (this.currentIndex + 1) % this.songsArr.length;

  let nextSong = this.songsArr[this.currentIndex];
  let messageFromPlay = nextSong.play();
  return `${messageFromStop}, ${messageFromPlay}`;
};

function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.isPlaying = false;
}

Song.prototype.play = function () {
  this.isPlaying = true;
  return `${this.title} is playing`;
};

Song.prototype.stop = function () {
  this.isPlaying = false;
  return `${this.title} is stopped`;
};

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);
playlist.add(jaded);

playlist.play();
playlist.next();
playlist.next();
playlist.stop();
playlist.play();
