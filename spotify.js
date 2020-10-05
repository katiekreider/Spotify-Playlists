var request = require("request");
var user_id = "1274121084";
var token = "Bearer BQBAOcuNGAkGmiFo5VxxmGDxEr417E_PqoCUmafeDZTaE6xUgg0v7hMwgRiluepaZY3ptz3Cl7gGRibN0FcluTbOT9PFx2rh_CMysXIi59_HztV6MhXqYT4jG9v6fBtFuOFCHZrrFukkkv5aGQ"
var playlists_url="https://api.spotify.com/v1/users/"+user_id+"/playlists";

request({url:playlists_url, headers:{"Authorization":token}}, function(err, res){
	if (res){
		var playlists=JSON.parse(res.body);	
		var playlist_url = playlists.items[0].href;
		request({url:playlist_url, headers:{"Authorization":token}}, function(err, res){
			if (res){
				var playlist = JSON.parse(res.body);
				console.log("playlist: " + playlist.name);
				playlist.tracks.items.forEach(function(track){
					console.log(track.track.name);
				});
			}
		})		
	}
})
