$(document).ready(function(){
    AOS.init({duration: 1700});
});
window.addEventListener('load', AOS.refresh)



let dessert = document.getElementById("dessert-image");
let dessertCaption = document.getElementById("caption");
let dessertParagraph1 = document.getElementById("paragraph1");
let dessertParagraph2 = document.getElementById("paragraph2");
let dessertList = document.getElementById("list");

let pressedButton1 = document.getElementById('button1');
let pressedButton2 = document.getElementById('button2');
let pressedButton3 = document.getElementById('button3');

function changeImage(imageId, imageName){
    document.getElementById(imageId).src = imageName;

}
$(document).ready(function() {
    // Check if element is scrolled into view
    $('.button').on('click', function() {
        console.log("hi im here")
        $('#dessert-image').addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('#dessert-image').removeClass('animated hinge');
        });
    });
    console.log("hello im here now lol")
});
$(function(){
	$('#button1').click(function(){
        console.log("button1");
		e1 = $('dessert-image');
        e1.addClass('animate, animate__bounceOutLeft');
        e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            e1.removeClass('animate__bounceOutLeft');
        });
	});
});
$(function(){
	$('#button3').click(function(){
        console.log("button3");
		e1 = $('dessert-image');
        e1.addClass('animate, animate__bounceOutLeft');
        e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            e1.removeClass('animate__bounceOutLeft');
        });
	});
});
// $('button').on('click', function(){
//     $('dessert-image').addClass('animate__animated', 'animate__fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $(this).removeClass('animate__animated', 'animate__fadeInDown');
//     });
// });
pressedButton1.addEventListener("click",function(){
    let imagePage = document.getElementById("dessert-image");
    console.log(imagePage.alt)
    if(imagePage.alt == "Regular Purin"){
        changeImage("dessert-image", "img/purin-regular.jpeg");
        dessertCaption.innerHTML = "Purin: A custard pudding with caramel on the top";
        dessertParagraph1.innerHTML = "Purin (プリン) is a popular dessert among kids and adults alike in Japan. The name itself is a shortened version of the 'custard pudding'. Very similar to flan, it's a custard dessert with a layer of caramel on top. While it can be homemade, it's most populary found in many convenience stores scattered across Japan. This dessert has been popular ever since the Meiji Period after the policy of <i>sakoku</i> ended. There are 3 different types of purin normally eaten in Japan:";
        dessertList.style.display = "block";
        dessertParagraph2.style.display = "block";
    }
    if (imagePage.alt == "Regular Dalgona"){
        changeImage("dessert-image", "img/dalgona-regular.jpeg");
        dessertCaption.innerHTML = "Dalgona: A Korean candy created by melting baking soda and sugar";
        dessertParagraph1.innerHTML = "This popular candy is called Dalgona (달고나). It was a poular street snack that was popular in the 1970s but is still eaten as a retro snack today. It's gained even more attention due to it's appearance in the massively popular show <i>Squid Game</i>. This candy only contains 2 ingredients: baking soda and sugar. When baking soda is added to the melted sugar, it makes the liquidized sugar puff up and become a light and airy candy when hardened. Dalgona is often poured onto a flat surface and pressed into a circular shape. Before it completely hardens, vendors use a variety of shapes to mold a cute pattern into the candy. With how simple it is to make, you could even make it right now at home if you wanted to!";
    }
    if (imagePage.alt == "Regular Pineapple Bun"){
        changeImage("dessert-image", "img/pineapple-bun.jpg");
        dessertCaption.innerHTML = "Pineapple Bun: A sweet bun with a crunchy top, the fluffy bun either has melted butter inside or a custard filling";
        dessertParagraph1.innerHTML = "This bun is called a Pineapple Bun (菠蘿包, pronounced: boh1 loh4 baau1). Is a bun that is sold in Chinatowns all across the world that originated from Hong Kong. In 2014, it was even listed as a part of Hong Kong's intangible cutural heritage, showing how iconic this bun is. The 'Pineapple' in the name doesn't come from it being in the bun anywhere, but the top simply looking like one. They're often sold in <i>cha chaa tengs</i> (茶餐廳: Hong Kong style cafés) and <i>dai pai dongs</i> (大牌档: Food stall). There are many variations that exist in the world, but they're all equally delicious!"
    }
    if (imagePage.alt == "Regular Taiyaki"){
        changeImage("dessert-image", "img/taiyaki-regular.jpeg");
        dessertCaption.innerHTML = "Taiyaki: A crispy cake filled with a variety of fillings. Perfect for warming yourself during the Winter.";
        dessertParagraph1.innerHTML = "Taiyaki (鯛焼き, literally means 'baked sea bream') is a Japanese dessert that's unique in that it's shaped like a fish. Specifically, it looks like a 'tai' (鯛), which is a seabream. This fish cake came into existence in 1909, where it was sold as a recreation of <i>imagawayaki</i>, another popular Japanese dessert. <i>Senjiro Kobe</i> was having some trouble selling his cakes, so he decided to bake the cakes into shapes of fish in hopes of getting them to sell better. <i>Tai</i> is a symbol of luck and fortune in Japan, an expensive fish that only the upper class could afford. Kobe created the cake in the shape of this luxurious symbol in hopes of giving the lower class an opportunity to taste this fish as well. Throughout history, there are many variations and fillings that exist, however; the most iconic version is the simple cake with red bean filling.";
    }
    if (imagePage.alt == "Regular Halo Halo"){
        changeImage("dessert-image", "img/halo-halo-regular.jpeg");
        dessertCaption.innerHTML = "Halo Halo: A popular Filipino dessert that's eaten cold. There are a vareity of toppings in this dessert that make the possiblies endless.";
        dessertParagraph1.innerHTML = "<i>Halo-halo</i>, also spelled <i>haluhalo</i> means 'mixed' in Filipino. Quite fitting, this dessert is essentially a dessert of crushed ice mixed with a variety of other toppings. The ingredients can include: ";
        dessertList.style.display = "block";
        dessertParagraph2.style.display = "block";
    }
    if (imagePage.alt == "Regular Dantat"){
        changeImage("dessert-image", "img/dantat-regular.jpeg");
        dessertCaption.innerHTML = "Egg Tart: A custard egg tart with a flaky, crispy crust.";
        dessertParagraph1.innerHTML = "Egg tarts, called 'Dan-Tat'(蛋撻) in Cantonese, is a dessert that contains a flaky outer crust with egg custard in the middle. These tarts are often small, able to fit in the palm of your hand. Dan tats were introduced to Hong Kong via Guangzhou in the 1940s. Initially, they were only found in higher-end Western restaurants, but evetually made its way to <i>cha chaa tengs</i>(茶餐廳) over the years. They're often sold in groups of 2-3 and come in a variety of fillings. Much like Pineapple Buns, these egg tarts are considered a staple in Hong Kong culture.";
    }
    if (imagePage.alt == "Regular Egg Waffle"){
        changeImage("dessert-image", "img/egg-waffle-regular.jpeg");
        dessertCaption.innerHTML = "Egg Waffle: Small ball shaped waffles.";
        dessertParagraph1.innerHTML = "<i>Egg waffles</i> (雞蛋仔, pronounced gai dan zaai) are a popular treat in Macau and Hong Kong. The name in Cantonese literally translates to 'little chicken egg', the origins of which are unknown. There are many stories that may explain where the name came from, with one being that it's the egg shape acted as a sort of substitute for eggs since they were considered a luxury. In another few stories, bakers would purchase damaged eggs and attempt to work them into a batter. In contrast to normal European waffles, a special mold is used to create Egg Waffles to produce the iconic bubbly look. The trick to getting the crispy texture is to turn the pan over quickly after the batter is poured in. While the taste is considered quite 'eggy', there a variety of flavors that have been incorporated into this snack for every person to enjoy.";
    }
    if (imagePage.alt == "Regular Bingsoo"){
        changeImage("dessert-image", "img/bingsoo-regular.jpeg");
        dessertCaption.innerHTML = "Bingsoo: Korean shaved ice, the one above is called Patbingsu because it contains red bean.";
        dessertParagraph1.innerHTML = "Bingsoo (빙수) is Korean shaved ice that consists of an ice base with various toppings. The most common variation that was widely eaten in the past is called Patbingsoo (팥빙수), which means Red Bean Shaved Ice. This version included 3 main ingredients:";
        dessertList.style.display = "block";
        dessertParagraph2.style.display = "block";
    }
    if (imagePage.alt == "Regular Honey Toast"){
        changeImage("dessert-image", "img/honey-toast-regular.jpeg");
        dessertCaption.innerHTML = "Honey Toast: A hollowed out loaf of toast stuffed with sugary toppings and snacks.";
        dessertParagraph1.innerHTML = "Honey Toast (ハニートースト) is a Japanese dessert that originated from Shibuya. It's often sold in karaoke and bars and is most commonly shared among friends. This dessert is also quite popular in Taiwan and Singapore. The dessert is prepared by hollowing out the toast and cutting it into smaller cubes. Both the cubes and the loaf are then carmeralized with butter and honey, and then put in a toaster oven once again to bake. Once finished, the cubes are put back in the hollowed shell and a variety of toppings are put on top of it. Toppings often include fruits, syrups, toasted nuts, cookies, and whip cream. To top it off, an ice cream scoop is placed on top. This is the perfect dessert to make on your own and share with friends!";
    }
    if (imagePage.alt == "Regular Mooncake"){
        changeImage("dessert-image", "img/maxim.jpeg");
        dessertCaption.innerHTML = "Mooncake: A sweet cake with lotus paste filling and salted egg yolks.";
        dessertParagraph1.innerHTML = "<i>Mooncake(月餅)</i> is a pastry filled with a sweet dense filling. This round cake is a traditional Chinese dessert often eaten during the Mid-Autumn Festival (中秋節). The salted egg yolk in the middle symbolizes the full moon that families will gaze upon while they enjoy a big meal together. They often have different fillings. Since roundness symbolizes completeness and togetherness, families often eat mooncakes together to express love and happiness to each other. These sweet cakes are also tied the legend of Chang’e. The story is as follows:";
        dessertParagraph2.style.display = "block";
    }
    if (imagePage.alt == "Regular Dango"){
        changeImage("dessert-image", "img/mitarashi.jpeg");
        dessertCaption.innerHTML = "Dango: A Japanese dumpling made from rice flour. Chewy, sticky, and delicious.";
        dessertParagraph1.innerHTML = " Dango (団子) is a Japanese dumpling made from a mixture of primarily rice flour and glutinous rice flour. It's thought that the first dango ever created was at a tea house in Kyoto, Japan and named Kamo Mitarashi. The name of 'Dango' is thought to have been inspired by the bubbles made by the purifying water of <b>Mitarashi River.</b> Mitarashi Dango, a popular dango flavor, used to have 5 pieces on a stick, the top one representing the head, the next two the arms, and the last two the legs.";
        dessertParagraph2.style.display = "block";
    }
    if (imagePage.alt == "Regular Daifuku"){
        changeImage("dessert-image", "img/daifuku-regular.jpeg");
        dessertCaption.innerHTML = "Daifuku: A Japanese wagashi that's a small mochi with sweet filling.";
        dessertParagraph1.innerHTML = "Daifuku (大福, literally means 'Great Luck') is a popular wagashi (Japanese confection) that is often a small mochi filled with sweet filling (mainly anko, which is a sweetened red bean paste). They were origially called Habutai mochi (腹太餅, means belly thick rice cake) because of the filling. The name was later changed to <i>Daifuku Mochi</i> (大腹餅), because the word 'fuku', mean both belly and luck. People thought that this dessert would bring them luck, thus why the name was changed to Daifuku (大福餅 = great luck rice cake). This treat is often served with green tea, and comes in many varieties (like many of the other desserts listed here). It comes in different colors, the most common being white, pink and green. They're coated with a layer of potato starch or corn starch to prevent sticking.";
    }
}, false);
pressedButton2.addEventListener("click",function(){
    let imagePage = document.getElementById("dessert-image");
    // $('.button').on('click', function() {
    //     console.log("hi im here")
    //     $('#dessert-image').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    //         $('#dessert-image').removeClass('animated fadeInDown');
    //     });
    // });
    if(imagePage.alt == "Regular Purin"){
        changeImage("dessert-image", "img/purin-different-flavors.jpeg");
        dessertCaption.innerHTML = "Various flavors of purin depcited from left to right: Houjicha, Black Tea, Black Sesame, Green Tea, and Regular";
        dessert.classList.add('animate__animated', 'fadeInDown');
        dessertList.style.display = "none";
        dessertParagraph1.innerHTML = "The image above depicts only a small amount of a the different forms that Purin can take on. In Asian desserts, sweets are often balanced with something more subtle or bitter in order to make eating dessert a more pleasurable experience. Matcha (抹茶) is finely grounded and processed green tea leaves, the bitterness of it pairs well with a sweet custard pudding. Houjicha (ほうじ茶) is also another green tea, but it's roasted over a charcoal pot that gives it a distinct roastiness. Black Tea (紅茶）is tea not a native to Japan, but it's a popular drink and flavor. Black Sesame (黒ごま) is a popular flavor in Japan. Rich in flavor and nuttiness, this paired with a custard pudding is a perfect balance.";
        dessertParagraph2.style.display = "none";
    }
    if (imagePage.alt == "Regular Dalgona"){
        changeImage("dessert-image", "img/ppogi.jpeg");
        dessertCaption.innerHTML = "Try your best to cleanly break the shape! If you can, you can get another one for free!";
        dessertParagraph1.innerHTML = "Dalgona can also be called ppogi (뽑기). Different regions have different names, but Dalgona and Ppogi are the one most common names. There's also a game that you can play with this sweet treat. Given a small needle, your goal is to carve out the shape in the middle perfectly without breaking the candy at all. If successful, you'll earn yourself another free Dalgona, how fun!";
    }
    if (imagePage.alt == "Regular Pineapple Bun"){
        changeImage("dessert-image", "img/pineapple-butter.jpeg");
        dessertCaption.innerHTML = "Pineapple Bun with a block of butter in the middle";
        dessertParagraph1.innerHTML = "This pineapple bun is probably the most common one that's eaten in Hong Kong. The bun is cut down the middle and a block of butter is put in and sandwiched by the two halves. The top of the bun is made with a dough similar to a dough of sugar cookies. The dough of the bun is often sweeter and softer than dough of European breads. This dessert is popular at afternoon tea and breakfast and can be enjoyed with a nice cup of Jasmine tea."
    }
    if (imagePage.alt == "Regular Taiyaki"){
        changeImage("dessert-image", "img/taiyaki-icecream.jpg");
        dessertCaption.innerHTML = "Taiyaki Ice Cream: A modern twist on Taiyaki that includes soft serve ice cream as a filling.";
        dessertParagraph1.innerHTML = "A dessert that has increased in popularity over the past years. Rather than having this dessert being mainly suited for cold weather, this variation can be enjoyed in summer as well. The cold ice cream complements the warm and crispy waffle quite well. The first instance of this showed up in New York by the shop Taiyaki NYC and has only spread throughout the US ever since the introduction. The ice cream filled to the top with a multitude of toppings, making this treat for the eyes and the mouth";
    }
    if (imagePage.alt == "Regular Halo Halo"){
        changeImage("dessert-image", "img/buko-halo.jpeg");
        dessertCaption.innerHTML = "Buko Halo: A combination of buko salad and halo-halo";
        dessertParagraph1.innerHTML = "Buko Halo is a combination of buko salad and halo-halo. Buko Salad is a Filipino fruit salad made from strips of fresh coconut and sweetened milk and other ingredients. Buko halo still has the same concept of regular Halo-halo, crushed ice, condensed milk, etc. It's served on top coconut shell and differs from Halo-halo by having a bigger amount of coconut used compared to regular Halo-halo.";
        dessertList.style.display = "none";
        dessertParagraph2.style.display = "none";
    }
    if (imagePage.alt == "Regular Dantat"){
        changeImage("dessert-image", "img/portugese-tart.jpeg");
        dessertCaption.innerHTML = "Macau Egg Tart: An egg tart with a cameralized tart and thinner crust";
        dessertParagraph1.innerHTML = "A variation of the egg tart that's commonly found in Macau. This version resembles the Portugese Egg Tart a little bit more. The way egg tarts were brought into Macau was through a couple made up of British pharmacist, Andrew Stow, and his wife Margaret Wong. They sold what is now known as the Macau version of this egg tart by trying to replicate the pastel de nata. In contrast to the Hong Kong counterparts, the Macau ones are bigger and have a carmeralized top.";
    }
    if (imagePage.alt == "Regular Egg Waffle"){
        console.log("hi im in here now");
        changeImage("dessert-image", "img/egg-waffle-flavors.jpeg");
        dessertCaption.innerHTML = "Different flavors of egg waffles";
        dessertParagraph1.innerHTML = "The egg waffles have been reinvented from throughout the world. One way to make the egg waffles universal is to create different flavors that different cultures could enjoy this dessert equally. There are many flavors that exist now, such as Matcha, Sweet Potato, Cheese, or Chocolate. Even savory flavors exist, such as Seaweed or even Pork Floss. Egg Waffles don't only vary in flavors, but also in toppings. Since egg waffles are so versatile, there are ways to customize even more with different flavor and topping combinations.";
    }
    if (imagePage.alt == "Regular Bingsoo"){
        changeImage("dessert-image", "img/bingsoo-flavors.jpeg");
        dessertCaption.innerHTML = "Flavors pictured from left to right: Black Sesame, Oreo, Strawberry, Mango, and Red Bean";
        dessertParagraph1.innerHTML = "Bingsoo's flavors have increased expontentially in the past few decades. What was once a simple dessert made up of only 3 ingredients now has enough flavors that there can be restaurants can be solely dedicated to selling them. Some popular flavors include Green Tea, Strawberry, Grain Powder, Black Sesame, and Oreo. Toppings are fairly the same across all variations though: tteok, condensed milk, almonds, fruits, red bean. Recently, cheesecake cubes and cookies have been put more frequently on top of this shaved ice.";
        dessertList.style.display = "none";
        dessertParagraph2.style.display = "none";
    }
    if (imagePage.alt == "Regular Honey Toast"){
        changeImage("dessert-image", "img/honey-taiwan.jpeg");
        dessertCaption.innerHTML = "Taiwanese Honey Toast: A more subdued version";
        dessertParagraph1.innerHTML = "In contrast to the Japanese counterpart, Taiwanese honey toast is much more simple with its appearance and toppings. Instead of being topped with a variety of snacks and ice cream, this version is only topped with custard, cheese, or condensed milk. This dessert is most commonly sold at cafes and boba shops, meant to be paired with a nice cup of tea or coffee.";
    }
    if (imagePage.alt == "Regular Mooncake"){
        changeImage("dessert-image", "img/snowskin.jpeg");
        dessertCaption.innerHTML = "Snowskin Mooncake (冰皮月餅)";
        dessertParagraph1.innerHTML = "These chewy mooncakes came as a result of many people wanting a mooncake that was less oily and fatty. This variation originated in Hong Kong and is only growing more and more popular with each year. The crust of these mooncakes are made of glutinous rice flour can be filled with a variety of flavors that might not be considered traditional. Fillings can include mung bean, red bean, black sesame, coffee, jam, etc. Rather than eat these mooncakes at room temperature, these mooncakes are eaten cold!";
        dessertParagraph2.style.display = "none";
    }
    if (imagePage.alt == "Regular Dango"){
        changeImage("dessert-image", "img/tsukimi.jpeg");
        dessertCaption.innerHTML = "Dango: A Japanese dumpling made from rice flour. Chewy, sticky, and delicious.";
        dessertParagraph1.innerHTML = "This dango is called Tsukimi Dango (月見団子). This type of dango is only used for the Mid-Autumn Festival, a widely-celebrated holiday among Asian cultures that celebrate the passing of the seasons. It's one of the most iconic dishes for the Mid-Autumn Festival. Rather than being skewered on a stick, the dango is displayed in a pyramid with each dango in a moon-like shape. There are around 15 dangos in the stack it's eaten with the whole family while gazing at the full moon.";
        dessertParagraph2.style.display = "none";
    }
    if (imagePage.alt == "Regular Daifuku"){
        changeImage("dessert-image", "img/mame-daifuku.jpeg");
        dessertCaption.innerHTML = "Mame Daifuku: Daifuku with azuki beans or soybeans";
        dessertParagraph1.innerHTML = "Mame Daifuku (豆大福, literally just 'Bean Daifuku') is a beloved variation of the regular Daifuku enjoyed in Japan. The way to distinct this daifuku from regular daifuku is the fact that there are beans mixed into the filling, which can be seen poking through the thin layer. The beans that are used are either <i>azuki</i> beans (red beans), or soybeans. They are commonly served alongside green tea, but coffee is also a drink that pairs quite well with this polka dotted snack. Many people believed that it was a morning snack, and should be consumed on the first day it was bought.";
    }
}, false);
pressedButton3.addEventListener("click", function(){
    let imagePage = document.getElementById("dessert-image");
    if(imagePage.alt == "Regular Purin"){
        changeImage("dessert-image", "img/purin-con.jpeg");
        dessertCaption.innerHTML = "Purin commonly sold in convenience stores.";
        dessertParagraph1.innerHTML = "These are the purin that are most commonly found in convenience stores. Unlike convenience stores in America, convenience stores in Japan sell a myriad of products, such as pastries, ramen, and basically everything you can imagine. If you want the iconic pudding look, you can turn it upside down and flip the switch on the bottom. The pudding will then come out with the caramel layer on top.";
        dessertList.style.display = "none";
        dessertParagraph2.style.display = "none";
        dessert.classList.add('animate__animated', 'fadeInDown');
    }
    if(imagePage.alt == "Regular Dalgona"){
        changeImage("dessert-image", "img/dalgona-coffee.jpeg");
        console.log("im in the coffee page");
        dessertCaption.innerHTML = "Dalgona coffee: A popular bevarage that skyrocketed in popularity during the COVID-19 pandemic";
        dessertParagraph1.innerHTML = "Okay okay, I know this one is kind of cheating. But it's hard to talk about Dalgona without mentioning Dalgona Coffee. This beverage became wildy popular in the height of the COVID-19 pandemic. With everyone stuck at home and nothing to do, why not whisk coffee for about 10 minutes to pass time and have a delicous drink at the end? This beverage is made with 3 ingredients: instant coffee, sugar, and hot water. With an equal ratio of each ingredient a whisker, you can get this fluffy coffee topping within minutes. Even though it's called Dalgona Coffee, it doesn't actually contain any <i>Dalgona</i> inside it. It only resembles <i>Dalgona</i> in appearance and taste.";
    }
    if (imagePage.alt == "Regular Pineapple Bun"){
        changeImage("dessert-image", "img/pineapple-savory.jpeg");
        dessertCaption.innerHTML = "A Pinepple Bun sandwich with egg and ham";
        dessertParagraph1.innerHTML = "A twist on the tradition Pineapple Bun, rather than being sweet, this variation takes a savory spin on the sweet bun. Ingredients such as spam or barbecued pork. However, the baracued pork you're thinking of right now probably isn't the one used in this sandwich. Another popular bun in Hong Kong called <i>char siu bao</i> (叉燒包) is a savory bun that contains barbacue-flavored cha siu pork. The filling is created using five-powder spices and honey for a glazy look. This creates a sweet and salty combination that may take you by surprise.";
    }
    if (imagePage.alt == "Regular Taiyaki"){
        changeImage("dessert-image", "img/taiyaki-croissant.jpeg");
        dessertCaption.innerHTML = "A cross between a Taiyaki and a Croissant; a mix between a traditional Japanese and French pastry.";
        dessertParagraph1.innerHTML = "Another modern twist that has popped up recently; this time in Japan. Rather than using the traditional waffle batter for Taiyaki, sheets of croissant dough are cooked in the fish shaped molds and are filled with a variety of desserts that range from red bean paste to chocolate. Since they're working with croissant dough, it's hard to get the well-defined shape that normal Taiyaki has. However, it makes up with taste as the dough is flaky and crunchy with a generous amount of filling inside. It's topped off with pearl sugar, adding a finishing touch with show and texture. While this variation is only found in Japan as of now, maybe it'll someday make its way to the States.";
    }
    if (imagePage.alt == "Regular Halo Halo"){
        changeImage("dessert-image", "img/fried-halo.jpeg");
        dessertCaption.innerHTML = "Fried Halo: A fried version of the cold dessert. Get the best of both worlds.";
        dessertParagraph1.innerHTML = "Fried halo-halo is essentially the same thing as regular halo-halo. However, since it's deep fried, the shaved ice (which would literally just melt the minute it touches the oil) is substituted for ice cream instead. The cold ingredients are juxtaposed by the crunchy, cripsy shell that the batter has formed after being deep fried";
        dessertList.style.display = "none";
        dessertParagraph2.style.display = "none";
    }
    if (imagePage.alt == "Regular Dantat"){
        changeImage("dessert-image", "img/matcha-eggtart.jpeg");
        dessertCaption.innerHTML = "Matcha Egg Tart: An egg tart with a cameralized tart and thinner crust";
        dessertParagraph1.innerHTML = "Since egg tarts are such a popular dessert, it was only a matter of time before different fillings would be tried with the simple dessert. In the photo depicted above, it shows a Matcha version of the Macau egg tart. However, there are many flavors that exist throughout the world, even savory ones. Since egg tarts are sweet, Matcha would be a good way to balance that sweetness out.";
    }
    if (imagePage.alt == "Regular Egg Waffle"){
        console.log("hi im in here now");
        changeImage("dessert-image", "img/egg-icecream.jpeg");
        dessertCaption.innerHTML = "Egg waffle ice cream";
        dessertParagraph1.innerHTML = "One popular flavor that has recently become popular is Egg waffle ice cream. By folding the egg waffle into a cone-like shape, ice cream is dispensed down the middle and finished off with colorful toppings. This variation seems to have originated in New York and is spreading nationwide. Toppings often look the egg waffle look much more majestic, and over the top. Toppings such as fruit, Pocky sticks, wafers, and syrups are often used. This can turn a fairly simple treat into a full-blown dessert.";
    }
    if (imagePage.alt == "Regular Bingsoo"){
        changeImage("dessert-image", "img/bingsoo-melon.png");
        dessertCaption.innerHTML = "Melon Bingsoo: Bingsoo eaten out of a melon, sweet and refreshing!";
        dessertParagraph1.innerHTML = "Rather than using a bowl to hold the shaved ice, this variation opts to be environmentally friendly and use the melon as a bowl. Using a melon scooper, one half is hollowed out to store the dessert. The dessert is then asssembled with the usual toppings of shaved ice and condensed milk. The melon balls that emptied the melon shell are then neatly placed all around the shaved ice for an overall very spherical look. It's a nice and refreshing dessert that is normally sold in the summer.";
        dessertList.style.display = "none";
        dessertParagraph2.style.display = "none";
    }
    if (imagePage.alt == "Regular Honey Toast"){
        changeImage("dessert-image", "img/singapore-honeytoast.jpeg");
        dessertCaption.innerHTML = "Singapore Honey Toast: Many unique flavors!";
        dessertParagraph1.innerHTML = "Honey Toast is also a popular dessert in Singapore as well! While some of them resemble the ones found in Japan, there are some ingredients added that aren't found in regular Honey Toast, such as kaya jam. Some use different breads (such as Danish and Cinammon Brioche) for a different taste and texture. The toast colored black is a famous variant called TAN. It's made of a thick charcoal toast that's baked with both honey and butter. It's then topped off with liquid marshmallow, salted caramel, coconut ice cream, and toasted nuts.";
    }
    if (imagePage.alt == "Regular Mooncake"){
        changeImage("dessert-image", "img/icecream-mooncake.jpeg");
        dessertCaption.innerHTML = "Choclate covered ice cream that resembles a mooncake. Instead of biting into gooey filling, you'll be greeted by cold ice cream instead!";
        dessertParagraph1.innerHTML = "A more modern twist on the traditional dessert. The crust is made up of chocolate and inside is an ice cream filling that resembles the layers in a real mooncake. The top is often adorned with a symbol normally found on normal mooncakes, such as Chinese characters or Rabbits. Major companies such a Hagen Daaz offer this limited time dessert when the weather starts to get colder, signifying the beginning of Autumn.";
        dessertParagraph2.style.display = "none";
    }
    if (imagePage.alt == "Regular Dango"){
        changeImage("dessert-image", "img/hanami-dango.jpeg");
        dessertCaption.innerHTML = "Hanami Dango: One of the most iconic variations of dango, this is enjoyed in the Spring.";
        dessertParagraph1.innerHTML = "This iconic tricolor dango is called Hanami Dango (花見団子). The pink, white and green dango is often portrayed in media and is well-known. In the Spring, Japanese Cherry Blossoms start to bloom, covering the country in a light shade of pink. Japanese often partake in a cherry blossom viewing (called <i>Hanami</i>) and during so, they enjoy a picnic with various meals and desserts. Hanami Dango is widely eating during <i>Hanami</i>, having been a tradition for hundreds of years. The pink color comes from crushed red shisho (赤しそ), but now red food coloring is used. The green color comes from mixing the dough with mugwort, creating an earthy taste. This sweet snack is great on the go and matches the theme of Spring perfectly.";
        dessertParagraph2.style.display = "none";
    }
    if (imagePage.alt == "Regular Daifuku"){
        changeImage("dessert-image", "img/ichigo-daifuku.jpeg");
        dessertCaption.innerHTML = "Ichigo Daifuku: A modern twist with a giant strawberry hidden in the Daifuku";
        dessertParagraph1.innerHTML = "Ichigo Daifuku (イチゴ大福, means Strawberry Daifuku) is version of Daifuku that was introduced quite recently compared to other variations. This version is commonly sold in the Springtime. It was first sold in the 1980s and depending on different regions, the fillings may vary. Ichigo Daifuky commonly includes a large strawberry and anko, but some regions may have shiroan (white bean paste) instead. Since strawberries are a seasonal fruit, this variation is only sold between Winter and Spring. However, some vendors have overcome this by filling it with differnt fruits, such as Kiwis or Oranges. The combination of the chewy, soft mochi, the sweet anko filling and the juicy strawberry is one that is hard to get tired of!";
    }
}, false);

// const element = document.getElementsByClassName("center");

// element.addEventListener('animationend', () => {
//     animateCSS('intro-paragraph', 'bounce');
//   });