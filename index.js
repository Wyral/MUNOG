import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



//  Noch nicht Hinzugefügt:


//   <main>
//     <!-- Header Picture -->
//     
//     <!-- Logos pc -->
//     
//     <!-- Logos mobile version -->
//     <div class="carousel-container">
//       <ul class="carousel my-carousel carousel--thumb">
//         <input class="carousel__activator" type="radio" id="K" name="thumb" checked="checked">
//         <input class="carousel__activator" type="radio" id="L" name="thumb">
//         <input class="carousel__activator" type="radio" id="M" name="thumb">
//         <input class="carousel__activator" type="radio" id="N" name="thumb">
//         <div class="carousel__controls">
//           <label class="carousel__control carousel__control--backward fa-solid fa-angle-left fa-2x" for="N"></label>
//           <label class="carousel__control carousel__control--forward fa-solid fa-angle-right fa-2x" for="L"></label>
//         </div>
//         <div class="carousel__controls">
//           <label class="carousel__control carousel__control--backward fa-solid fa-angle-left fa-2x" for="K"></label>
//           <label class="carousel__control carousel__control--forward fa-solid fa-angle-right fa-2x" for="M"></label>
//         </div>
//         <div class="carousel__controls">
//           <label class="carousel__control carousel__control--backward fa-solid fa-angle-left fa-2x" for="L"></label>
//           <label class="carousel__control carousel__control--forward fa-solid fa-angle-right fa-2x" for="N"></label>
//         </div>
//         <div class="carousel__controls">
//           <label class="carousel__control carousel__control--backward fa-solid fa-angle-left fa-2x" for="M"></label>
//           <label class="carousel__control carousel__control--forward fa-solid fa-angle-right fa-2x" for="K"></label>
//         </div>
  
//         <li class="carousel__slide">
//           <h1>Stadtwerke Sindeflingen</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna et malesuada dictum.</p>
//         </li>
//         <li class="carousel__slide">
//           <h1>Volksbank Raiffeisenbakn Aidlingen</h1>
//         </li>
//         <li class="carousel__slide">
//           <h1>Bauhaus</h1>
//         </li>
//         <li class="carousel__slide">
//           <h1>Bürgerstiftung Sindeflingen</h1>
//         </li>
//       </ul>
//     </div>
//     <!-- Letter -->
//     <div class="pre-text-block">
//         <div class="responsive-text-block">
//             <h2> <span class="highlight">Excellencies,</span> distinguished <span class="highlight">delegates, ladies and gentlemen,</span> dear <span class="highlight">visitors</span> of the official Model United Nations of Goldberg website,</h2>
//           <br>
//           <p>On February 24th, “the Russian Federation launched a massive invasion of the sovereign territory of Ukraine in violation of the UN Charter. It was done after months of building up a military force of overwhelming proportion along the Ukrainian border. Since then, we have seen appalling human suffering and destruction in cities, towns and villages.  (…) It is time to end this absurd war.“</p>
//           <br>
//           <p>This is a quotation by António Guterres. The UN Secretary-General delivered this speech on 22nd March 2022. In his remarks to the press, regarding the war in Ukraine, he stated that it is time to stop the fighting and give peace a chance.</p>
//           <br>
//           <p>We only have one world. One world in which war, a pandemic, climate change and other pressing issues are the biggest challenges we are facing. It is up to us to evaluate what effects they have on our lives and societies and take on responsibility for discovering the measures we need to take together to tackle these issues head-on.</p>
//           <br>
//           <p>But we are living in a world with huge differences between our nations. Consequently, we need to recognize our issues such as poverty or war because during this pandemic, poverty and inequality are deepening, a climate collapse is more likely than ever and the conflicts are spinning out of control. Therefore, solidarity and collaboration are needed with greater reason and we have to choose peace. Peace to recover from this pandemic, to ensure equality and human rights and we have to choose peace to protect our environment.</p>
//           <br>
//           <p>We listen to adults all the time, but now it is time they listened to us. It is time to start creating and shaping our future by ourselves and to raise our legitimated voices now. Because as the young people of today’s world, we are the future of tomorrow’s world and even though we might be powerless as individuals - together, we can be heard.</p>
//           <br>
//           <p>With the responsibility for our planet, we decide whether we want continue living in a world full of dangers or whether we want to transform our world into a better place.</p>
//           <br>
//           <p>This also means that we first of all have to start with ourselves. Showing willingness to change our reckless behavior and our way of thinking in order to understand that our happiness depends on peace among us.</p>
//           <br>
//           <p>So, let us start with MUNOG by raising our voices and dealing with our issues and let us remind the adults: We don’t want to be talked about. We want to do the talking.</p>
//           <br>
//           <p>We all know that we can not change the whole world from one day to the other, but we can use MUNOG as our first step in the right direction. We have to remind ourselves that big changes can start small and only together, we can change the world.</p>
//           <br>
//           <p>Therefore, I wish all of us an unforgettable MUN conference and I am looking forward to welcoming you to our fourteenth Model United Nations of Goldberg in October.</p>
//           <br>
//           <div class="signature">
//             <img src="./images/Signature.png" alt="Anastasia Ristovski's signature">
//           </div>
//           <p>H.E. Anastasia Ristovski</p>
//           <p>Secretary General of MUNOG 2022</p>
//           <br><br><br>
//         </div>
//   </main>


//   
//   <script>
//     const highlights = Array.from(document.querySelectorAll(".highlight"));
//     const offset = 0.5; 
    
//     function checkPosition() {
//         highlights.forEach((highlight) => {
//             const top = highlight.getBoundingClientRect().top;
//             if (top <= (window.innerHeight * offset) + window.scrollY) {
//                 highlight.classList.add("active");
//             } 
//             if(top > (window.innerHeight * offset) + window.scrollY){
//                 highlight.classList.remove("active");
//             }
//         });
//     }
    
//     window.addEventListener("scroll", checkPosition);
//   </script>  
// </html>
