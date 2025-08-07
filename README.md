# musicplayer
A simple music player that adapts to mobile devices
这是一个简单的音乐播放器，可以自适应手机端
# 使用方法
把 index.html,player.js 和playlist.txt放在相同的目录下，一般是网站的根目录，类似www下面，域名指向这个地址即可
# Usage method
Put index.html, player.js, and playlist.txt in the same directory, usually the root directory of the website, similar to under www, and point the domain name to this address

## 替换成自己喜欢的音乐
修改playlist.txt文件：
歌曲名称|歌曲的url地址
例子:<br>
song1|https://xxx.com/1.mp3<br>
song2|https://xxx.com/2.flac


## Replace with your favorite music
Modify the playlist. txt file:
Song name | URL address of the song
### ex:<br>
song1|https://xxx.com/1.mp3<br>
song2|https://xxx.com/2.flac

# 所有代码是用通义千问生成的，如果有定制化需求，可以问ai继续修改
## 20250807 
添加了大屏端显示tv.html , 对应playlist_tv.txt,考虑了歌词和歌曲可能不在一个域的情况，分开读取数据；手机端暂时不考虑分开读取，默认歌词和歌曲名称一致
