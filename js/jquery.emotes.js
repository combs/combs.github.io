
	var emotes = $("#emotes");
	emotes.show();	
	
	var the_id = emotes.data("id");
	
	var uri_json = "/emotes/" + the_id + ".json";

	var data_emotes = [];
	
	$.getJSON(uri_json,emoteBuild);
	
	var array_emotes = emotes.find("a.emote");
	array_emotes.each(function(){ $(this).attr("id","emote-" + $(this).data("emote"));
	$(this).click( emoteVote ) } ) ;	
	
	function emoteVote(thisone) {
   		var theemote = $(thisone.target).data("emote") || $(thisone.target.parentNode).data("emote");
		
		var theID = "#emote-" + theemote;
		$(theID).off("click");
		$(theID).css({ border: "0.2rem solid black", boxShadow: "0 0 1rem rgba(0,0,0,1)"});

		var uri_ping = "/app/?command=ping&id=" + the_id + "&emote=" + theemote;
		$.getJSON(uri_ping,emoteVoted);
		return false;
		
	}
	function emoteVoted(data) {
		if (console.log) {
			console.log("Voted!");
		}
		data_emotes = [];
		emoteBuild(data);
	
	}	
	function emoteBuild(data) {
		var data_emotes_keys = [];
		data_emotes["total"] = 0;
		var maximum = 0;
		
		$.each( data, function( key, val ) {
			data_emotes[key] = val;
			if (val > maximum) {
				maximum = val;
				}
				
			data_emotes_keys.push(key);
			data_emotes["total"] = data_emotes["total"] + val;
			} ) ;
		var total=data_emotes["total"];
		for (var a=0; a<data_emotes_keys.length; a++) {
			var thisone = data_emotes[ data_emotes_keys[a] ];
			var percent = thisone / maximum;
			var theOpacity = percent * 0.7 + 0.3;
			var theID = "#emote-" + data_emotes_keys[a];
			if ($(theID) ) {
				$(theID).css({ opacity: theOpacity } ) ;
			}
			
			
		}
		
	}
	
	
