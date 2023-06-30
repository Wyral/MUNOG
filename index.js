<!DOCTYPE html>
<html lang="en">

<head>
  <meta version="0.1">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#06090e">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <title>Welcome to MUNOG3</title>
  
  <link rel="shortcut icon" href="https://pasteboard-evening.000webhostapp.com/Pictures/Favicon-lightmode.svg"
  type="image/x-icon" media="(prefers-color-scheme: light)">
  <link rel="shortcut icon" href="https://pasteboard-evening.000webhostapp.com/Pictures/Favicon-darkmode.svg"
  type="image/x-icon" media="(prefers-color-scheme: dark)">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/0c5223a6ee.js" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- stylesheets -->

<link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="css/index-mobile.css">
  <link rel="stylesheet" href="css/index-animate.css">
 

  
  <script>
      window.addEventListener("load", function() {
       const loadingScreen = document.getElementById("loading-screen");
       loadingScreen.style.display = "none";
     });
   </script>
    
</head>

<body style="background-color: black;">
    <script>
    import loading_screen1 from 'ressources/munog-animation-logo.js';
      export default function load() {
  return (<loading_screen1/>
 );
}
    </script>
  <header style="z-index: 100;" tabindex="0">
    <a href="index.html"><img class="logo_navbar" src="ressources/munog-logo.svg"
        alt=""></img></a>
  </header>
  <div style="z-index: 100;" id="nav-container">
    <div class="bg"></div>
    <div class="button" tabindex="0">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    <div id="nav-content" tabindex="0">
      <ul>
        <li><a href="about.html">About</a></li>
        <li><a href="newsroom.html">News</a></li>
        <li><a href="support-us.html">Support Us</a></li>
        <li><a href="galerie.html">Galerie</a></li>
        <li><a href="archive.html">Archive</a></li>
        <li><a href="press.html">Press</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li class="small"><a href="./partner.html">Partner</a><a href="./imprint.html">Imprint</a><a href="./contact">Contact</a><a
            href="./privacy.html">Privacy</a></li>
        <li class="small"><a href="./partner.html">Partner</a><a href="./imprint.html">Impressum</a><a href="./contact">Kontakt</a><a
            href="./privacy.html">Datenschutz</a><a href="https://codesandbox.io/s/wezbbl">Login</a></li>
      </ul>
    </div>
  </div>

  <!-- Section end-->

  <main>
    <!-- Header Picture -->
    <div
      style="background-image: url('img/IMG_0679.webp'); background-size: cover; background-position: center; height: 100vh;">
    <div>
    <h1 class="header_h1" >
      Welcome to MUNOG 2023
    </h1>
    <!-- Countdown -->
    <p class="header_countdown" id="demo"></p>

    <script>
      var countDownDate = new Date("Oct 20, 2023 ").getTime();

      var x = setInterval(function () {

        var now = new Date().getTime();
  
        var distance = countDownDate - now;
  
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        document.getElementById("demo").innerHTML = "MUNOG 2023 begins in " + days + " days, " + hours + " hours, "
          + minutes + " minutes and " + seconds + " seconds. ";
  
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "MUNOG 2023 is now live";
        }
      }, 1000);
    </script>
    <a href="https://munog.de/register-school">
      <button class="btn-header btn_top"
        >Apply</button>
    </a>
    <a href="./prepare.html">
      <button class="btn-header btn_low"
        >Prepare</button>
    </a>
    <a href="MUNOG 2023.ics">
      <button class="btn-header btn_lower"
        >Save the Date</button>
    </a>
    <script>
      function isIOS() {
        if (/iPad|iPhone|iPod/.test(navigator.platform)) {
          return true;
        } else {
          return navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2 &&
            /MacIntel/.test(navigator.platform);
        }
      }
    
      function isIpadOS() {
        return navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2 &&
          /MacIntel/.test(navigator.platform);
      }
    
      var display = false;
      
      if (isIOS() && isIpadOS()) {
        display = true;
      } else if (/iPad|iPhone|iPod/.test(navigator.userAgent) && navigator.userAgent.indexOf('Safari') !== -1) {
        display = true;
      }
      
      if (!display) {
        document.querySelector('.btn_lower').style.display = 'none';
      }
    </script>
    
    </div>
      <div class="arrow-container" onclick="scrollDown()">
        <i class="fa-solid fa-chevron-down arrow fa-2x"></i>
      </div>
      <script>
        function scrollDown() {
          window.scroll({
          top: window.innerHeight, 
          left: 0, 
          behavior: 'smooth',
          duration: 2000,
          });
          }
      </script>
    </div>
    <!-- Logos pc -->
    <div class="logos-pc">
      <h2 class="sponsored_by">
        MUNOG 2023 is sponsored by:
      </h2>
      <div class="logo_container_ontop">
        <div class="logo-container">
          <div class="logo_field">
            <img class="logo_comp" src="https://pasteboard-evening.000webhostapp.com/Pictures/Bürgerstiftung.svg"
              alt="Logo 1">
            <h3 style="padding-bottom: 10px;">Logo 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.</p>
          </div>
          <div class="logo_field">
            <img class="logo_comp" src="https://pasteboard-evening.000webhostapp.com/Pictures/Bauhaus.svg" alt="Logo 2"">
            <h3 style="padding-bottom: 10px;">Logo 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.</p>
          </div>
          <div class="logo_field">
            <img class="logo_comp" src="https://pasteboard-evening.000webhostapp.com/Pictures/Stadtwerke Sifi.svg"
              alt="Logo 3">
            <h3 style="padding-bottom: 10px;">Logo 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.</p>
          </div>
          <div class="logo_field">
            <img class="logo_comp" src="https://pasteboard-evening.000webhostapp.com/Pictures/Volksbank.svg"
              alt="Logo 4">
            <h3 style="padding-bottom: 10px;">Logo 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Logos mobile version -->
    <div class="carousel-container">
      <ul class="carousel my-carousel carousel--thumb">
        <input class="carousel__activator" type="radio" id="K" name="thumb" checked="checked">
        <input class="carousel__activator" type="radio" id="L" name="thumb">
        <input class="carousel__activator" type="radio" id="M" name="thumb">
        <input class="carousel__activator" type="radio" id="N" name="thumb">
        <div class="carousel__controls">
          <label class="carousel__control carousel__control--backward fa-solid fa-angle-left fa-2x" for="N"></label>
          <label class="carousel__control carousel__control--forward fa-solid fa-angle-right fa-2x" for="L"></label>
        </div>
        <div class="carousel__controls">
          <label class="carousel__control carousel__control--backward fa-solid fa-angle-left fa-2x" for="K"></label>
          <label class="carousel__control carousel__control--forward fa-solid fa-angle-right fa-2x" for="M"></label>
        </div>
        <div class="carousel__controls">
          <label class="carousel__control carousel__control--backward fa-solid fa-angle-left fa-2x" for="L"></label>
          <label class="carousel__control carousel__control--forward fa-solid fa-angle-right fa-2x" for="N"></label>
        </div>
        <div class="carousel__controls">
          <label class="carousel__control carousel__control--backward fa-solid fa-angle-left fa-2x" for="M"></label>
          <label class="carousel__control carousel__control--forward fa-solid fa-angle-right fa-2x" for="K"></label>
        </div>
  
        <li class="carousel__slide">
          <h1>Stadtwerke Sindeflingen</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.</p>
        </li>
        <li class="carousel__slide">
          <h1>Volksbank Raiffeisenbakn Aidlingen</h1>
        </li>
        <li class="carousel__slide">
          <h1>Bauhaus</h1>
        </li>
        <li class="carousel__slide">
          <h1>Bürgerstiftung Sindeflingen</h1>
        </li>
      </ul>
    </div>
    <!-- Letter -->
    <div class="pre-text-block">
        <div class="responsive-text-block">
            <h2> <span class="highlight">Excellencies,</span> distinguished <span class="highlight">delegates, ladies and gentlemen,</span> dear <span class="highlight">visitors</span> of the official Model United Nations of Goldberg website,</h2>
          <br>
          <p>On February 24th, “the Russian Federation launched a massive invasion of the sovereign territory of Ukraine in violation of the UN Charter. It was done after months of building up a military force of overwhelming proportion along the Ukrainian border. Since then, we have seen appalling human suffering and destruction in cities, towns and villages.  (…) It is time to end this absurd war.“</p>
          <br>
          <p>This is a quotation by António Guterres. The UN Secretary-General delivered this speech on 22nd March 2022. In his remarks to the press, regarding the war in Ukraine, he stated that it is time to stop the fighting and give peace a chance.</p>
          <br>
          <p>We only have one world. One world in which war, a pandemic, climate change and other pressing issues are the biggest challenges we are facing. It is up to us to evaluate what effects they have on our lives and societies and take on responsibility for discovering the measures we need to take together to tackle these issues head-on.</p>
          <br>
          <p>But we are living in a world with huge differences between our nations. Consequently, we need to recognize our issues such as poverty or war because during this pandemic, poverty and inequality are deepening, a climate collapse is more likely than ever and the conflicts are spinning out of control. Therefore, solidarity and collaboration are needed with greater reason and we have to choose peace. Peace to recover from this pandemic, to ensure equality and human rights and we have to choose peace to protect our environment.</p>
          <br>
          <p>We listen to adults all the time, but now it is time they listened to us. It is time to start creating and shaping our future by ourselves and to raise our legitimated voices now. Because as the young people of today’s world, we are the future of tomorrow’s world and even though we might be powerless as individuals - together, we can be heard.</p>
          <br>
          <p>With the responsibility for our planet, we decide whether we want continue living in a world full of dangers or whether we want to transform our world into a better place.</p>
          <br>
          <p>This also means that we first of all have to start with ourselves. Showing willingness to change our reckless behavior and our way of thinking in order to understand that our happiness depends on peace among us.</p>
          <br>
          <p>So, let us start with MUNOG by raising our voices and dealing with our issues and let us remind the adults: We don’t want to be talked about. We want to do the talking.</p>
          <br>
          <p>We all know that we can not change the whole world from one day to the other, but we can use MUNOG as our first step in the right direction. We have to remind ourselves that big changes can start small and only together, we can change the world.</p>
          <br>
          <p>Therefore, I wish all of us an unforgettable MUN conference and I am looking forward to welcoming you to our fourteenth Model United Nations of Goldberg in October.</p>
          <br>
          <div class="signature">
            <img src="./images/Signature.png" alt="Anastasia Ristovski's signature">
          </div>
          <p>H.E. Anastasia Ristovski</p>
          <p>Secretary General of MUNOG 2022</p>
          <br><br><br>
        </div>
  </main>


  <footer>
    <div class="container_footer">
      <div>
        <div>
          <p class="links_footer">
            <a href="./imprint.html">Imprint</a>
            <a href="./privacy.html">Privacy</a>
            <a href="./contact.html">Contact</a>
            <a style="padding-left: 30px;" href="https://codesandbox.io/s/wezbbl">Login</a>
          </p>
          <ul class="outer_line_footer">
            <a href="https://snapchat.com/add/munog.official" target="_blank">
              <li class="inner_line_footer">
                <i class="fa-brands fa-duotone fa-snapchat fa-2x"></i>
              </li>
            </a>
            <a href="https://www.instagram.com/munog.official/" target="_blank">
              <li class="inner_line_footer">
                <i class="fa-brands fa-duotone fa-instagram fa-2x"></i>
              </li>
            </a>
            <a href="https://m.youtube.com/@MunogDe/" target="_blank">
              <li class="inner_line_footer">
                <i class="fa-brands fa-duotone fa-youtube fa-2x"></i>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <script>
    const highlights = Array.from(document.querySelectorAll(".highlight"));
    const offset = 0.5; 
    
    function checkPosition() {
        highlights.forEach((highlight) => {
            const top = highlight.getBoundingClientRect().top;
            if (top <= (window.innerHeight * offset) + window.scrollY) {
                highlight.classList.add("active");
            } 
            if(top > (window.innerHeight * offset) + window.scrollY){
                highlight.classList.remove("active");
            }
        });
    }
    
    window.addEventListener("scroll", checkPosition);
  </script>  
</html>
