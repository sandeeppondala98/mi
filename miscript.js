function loadtweets() {
      jQuery(function($){
        $("#mitweets").tweet({
          avatar_size: 32,
          count: 40,
          fetch: 41,
          //filter: function(t){ return ! /^@\w+/.test(t.tweet_raw_text); },
          username: "mipaltan"
        });
      });
    }