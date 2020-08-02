<template>
  <div>
    
    <form class="center" @submit="handleSearch()">
      <label class="field a-field a-field_a3">
        <input class="field__input a-field__input" @keydown.space.prevent v-model="username" placeholder="eg. jon_snow" required>
        <span class="a-field__label-wrap">
          <span class="a-field__label">username</span>
        </span>
      </label>
      <button class="button" href="add-website-here">Search</button>
      <div v-if='loading == true'> searching at {{siteList[loadingCounter]}} </div>
    </form>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters([
    'loading'
  ]),
  data: function () {
    return {
      username: '',
      loadingCounter: this.randomInt(290),
      siteList: ["F6S","getmyuni","polarsteps","2Dimensions","3dnews","4pda","500px","7Cups","About.me","Academia.edu","Alik.cz","AllTrails","Anobii","Aptoide","Archive.org","Asciinema","Ask Fedora","AskFM","Audiojungle","Avizo","BLIP.fm","BOOTH","Badoo","Bandcamp","Bazar.cz","Behance","BitBucket","BitCoinForum","Blogger","BodyBuilding","Bookcrossing","BuyMeACoffee","BuzzFeed","CNET","Carbonmade","Career.habr","CashMe","Cent","Championat","Chatujme.cz","Chess","Cloob","CloudflareCommunity","Clozemaster","Codecademy","Codechef","Codewars","Contently","Coroflot","Countable","Cracked","Crevado","Crunchyroll","DEV Community","DailyMotion","Designspiration","DeviantART","Discogs","Discuss.Elastic.co","Disqus","Docker Hub","Dribbble","Duolingo","Ebay","Ello","Etsy","Euw","EyeEm","F3.cool","Facebook","Facenama","Fandom","Filmogs","Fiverr","Flickr","Flightradar24","Flipboard","Football","FortniteTracker","Freelance.habr","Freelancer.com","Freesound","GDProfiles","Gamespot","Giphy","GitHub","GitLab","Gitee","GoodReads","Gravatar","Gumroad","GunsAndAmmo","GuruShots","HackTheBox","HackerNews","HackerOne","HackerRank","House-Mixes.com","Houzz","HubPages","Hubski","IFTTT","ImageShack","ImgUp.cz","Instagram","Instructables","Issuu","Itch.io","Jimdo","Kaggle","Kali community","Keybase","Kik","Kongregate","LOR","Launchpad","LeetCode","Letterboxd","Lichess","LiveJournal","LiveLeak","Lobsters","Lolchess","Medium","MeetMe","Memrise","MixCloud","MyAnimeList","Myspace","NICommunityForum","NPM","NPM-Package","NameMC (Minecraft.net skins)","NationStates Nation","NationStates Region","Newgrounds","OK","OpenCollective","OpenStreetMap","Oracle Community","Otzovik","OurDJTalk","PCGamer","PCPartPicker","PSNProfiles.com","Packagist","Pastebin","Patreon","Periscope","Photobucket","Pinkbike","Pinterest","PlayStore","Pling","Plug.DJ","Pokemon Showdown","PokerStrategy","Polygon","ProductHunt","PromoDJ","Quora","Rajce.net","Rate Your Music","Realmeye","Redbubble","Reddit","Repl.it","ResearchGate","ReverbNation","Roblox","RubyGems","Sbazar.cz","Scratch","Scribd","ShitpostBot5000","Signal","Slack","SlideShare","Smashcast","Smule","SoundCloud","SourceForge","Speedrun.com","Splits.io","Sporcle","SportsRU","Spotify","Star Citizen","Steam","SteamGroup","Steamid","SublimeForum","T-MobileSupport","Taringa","Tellonym.me","Tinder","TrackmaniaLadder","TradingView","Trakt","TrashboxRU","Trello","TripAdvisor","Twitch","Twitter","Typeracer","Ultimate-Guitar","Unsplash","VK","VSCO","Velomania","Venmo","Viadeo","Vimeo","Virgool","VirusTotal","Wattpad","We Heart It","WebNode","Whonix Forum","Wikidot","Wikipedia","Wix","WordPress","WordPressOrg","YandexCollection","YouNow","YouPic","YouTube","Zhihu","akniga","allmylinks","authorSTREAM","babyRU","babyblogRU","chaos.social","couchsurfing","d3RU","dailykos","datingRU","devRant","drive2","eGPU","eintracht","fixya","fl","forum_guns","forumhouseRU","geocaching","gfycat","habr","hackster","hunting","iMGSRC.RU","igromania","interpals","irecommend","jeuxvideo","kwork","labpentestit","last.fm","leasehackr","livelib","mastodon.cloud","mastodon.social","mastodon.technology","mastodon.xyz","metacritic","moikrug","mstdn.io","nairaland.com","nightbot","nnRU","notabug.org","note","opennet","opensource","osu!","phpRU","pikabu","pr0gramm","radio_echo_msk","satsisRU","segmentfault","social.tchncs.de","soylentnews","sparkpeople","spletnik","svidbook","toster","tracr.co","travellerspoint","uid","warriorforum","windy","mercadolivre","kofi","aminoapp","Xbox Gamertag","prog.hu"]
    }
  },
  methods: {
    handleSearch () {
      this.startInterval()
      this.$store.dispatch('FETCH_SITES', this.username)
    },
    startInterval: function () {
      setInterval(() => {
          this.loadingCounter = this.randomInt(290);
      }, 500);
    },
    randomInt(max){
      return Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }
  }
}
</script>