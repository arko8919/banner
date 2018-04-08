// JavaScript Document
window.onload = function () {
    console.log("Junior developer test.");

    // declare your variables here.
    var background;
    var samsung;
    var voucher;
    var skyLogo;
    var textReward;
    var joinSky;
    var skyRental;
    var stamp;
    var button;
    var textBroadband;
    var textVoucher;
    var textOffer;
    var skyRentalLightgrey;

    // clear id's from animations
    var frame1Id;
    var frame2Id;
    var frame3Id;

    // store a reference to the canvas which we will draw on.
    var stage = new createjs.Stage("stage");

    // register the stage to handle mouse events.
    stage.enableMouseOver(10);

    // register the Ticker to listen for the tick event.
    createjs.Ticker.addEventListener("tick", handleTick, false);

    // redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
    function handleTick(event) {
        stage.update();
    }

    // create a preloader to load the images.
    var loader = new createjs.LoadQueue(false);

    // when all images are loaded call the handleAllImageLoaded function.
    loader.on('complete', handleAllImagesLoaded, this);

    // provide a manifest of files and ids to be loaded.
    loader.loadManifest([
        {id: "background", src: "images/background.png"},
        {id: "samsung", src: "images/samsung.png"},
        {id: "voucher", src: "images/voucher.png"},
        {id: "sky-logo", src: "images/sky-logo.png"},
        {id: "text-reward", src: "images/text-reward.png"},
        {id: "join-sky", src: "images/join-sky.png"},
        {id: "sky-rental", src: "images/sky-rental.png"},
        {id: "stamp", src: "images/stamp.png"},
        {id: "button", src: "images/button.png"},
        {id: "text-broadband", src: "images/text-broadband.png"},
        {id: "text-voucher", src: "images/text-voucher.png"},
        {id: "text-offer", src: "images/text-offer.png"},
        {id: "sky-rental-lightgrey", src: "images/sky-rental-lightgrey.png"}
    ]);

    function handleAllImagesLoaded() {
        console.log("All the images have loaded.");
        drawTheBannerBackground();
    }

    function drawTheBannerBackground() {
        console.log("draw and animate the background.");

        // provide the loader result for the item with id == 'background'
        // as a bitmap which will be stored in our background variable.
        background = new createjs.Bitmap(loader.getResult("background"));

        // set the background bitmap alpha to zero.
        background.alpha = 0;

        // add background to the display list.
        stage.addChild(background);

        // animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
        createjs.Tween.get(background).to({alpha: 1}, 1000);

        // after the background is drawn on the canvas draw and animate the content for frame 1.
        frame1Id = setTimeout(frame1, 100);
    }

    function frame1() {
        console.log("draw and animate frame one.");
        // background
        // background = new createjs.Bitmap(loader.getResult("background"));

        // first product "samsung"
        samsung = new createjs.Bitmap(loader.getResult("samsung"));
        samsung.x = 57;
        samsung.y = 115;

        // second product "voucher"
        voucher = new createjs.Bitmap(loader.getResult("voucher"));
        voucher.x = 163;
        voucher.y = 116;

        // sky logo
        skyLogo = new createjs.Bitmap(loader.getResult("sky-logo"));
        skyLogo.x = 18;
        skyLogo.y = 205;

        // text
        textReward = new createjs.Bitmap(loader.getResult("text-reward"));
        textReward.x = 56;
        textReward.y = 19;
        textReward.alpha = 0;

        // add elements to display list
        stage.addChild(
            samsung,
            voucher,
            skyLogo,
            textReward
        );

        // animation
        createjs.Tween.get(textReward).to({alpha: 1}, 500).wait(2000).to({alpha: 0}, 500);
        createjs.Tween.get(samsung).wait(2500).to({alpha: 0}, 500);
        createjs.Tween.get(voucher).wait(2500).to({alpha: 0}, 500);

        // refer to the creative brief, frame 1 for guidance.

        // after a timeout and the animations have completed, draw frame 2.
        frame2Id = setTimeout(frame2, 3000);
    }

    function frame2() {
        console.log("draw and animate frame two.");

        // gradient text
        joinSky = new createjs.Bitmap(loader.getResult("join-sky"));
        joinSky.x = 43;
        joinSky.y = 27;
        joinSky.alpha = 0;

        // dark grey text
        skyRental = new createjs.Bitmap(loader.getResult("sky-rental"));
        skyRental.x = 126;
        skyRental.y = 220;
        skyRental.alpha = 0;

        // stamp - set start position outside of banner
        stamp = new createjs.Bitmap(loader.getResult("stamp"));
        stamp.x = 68;
        stamp.y = -300;

        stage.addChild(
            joinSky,
            skyRental,
            stamp
        );

        // Animations
        // fade in gradient text and grey text
        createjs.Tween.get(joinSky).to({alpha: 1}, 500).wait(2000).to({alpha: 0}, 500);
        createjs.Tween.get(skyRental).to({alpha: 1}, 500).wait(2000).to({alpha: 0}, 500);
        // fall and bounce effect
        createjs.Tween.get(stamp).to({x: stamp.x, y: 65}, 2000, createjs.Ease.bounceOut).wait(500).to({alpha: 0}, 500);

        // refer to the creative brief, frame 2 for guidance.

        // after a timeout and the animations have completed, draw frame 3.
        frame3Id = setTimeout(frame3, 3000);
    }

    function frame3() {
        console.log("draw and animate frame three.");

        // button setup
        button = new createjs.Bitmap(loader.getResult("button"));
        button.x = 148.25;
        button.y = 202.91;
        // cursor change to pointer if mouse is over button image
        button.cursor = "pointer";
        // add event listener to button
        button.addEventListener("click", handleClick);

        function handleClick() {
            console.log("Button was clicked");
        }

        textVoucher = new createjs.Bitmap(loader.getResult("text-voucher"));
        textVoucher.x = 11;
        textVoucher.y = 31;
        textVoucher.alpha = 0;

        textBroadband = new createjs.Bitmap(loader.getResult("text-broadband"));
        textBroadband.x = 41;
        textBroadband.y = 85;
        textBroadband.alpha = 0;

        textOffer = new createjs.Bitmap(loader.getResult("text-offer"));
        textOffer.x = 75;
        textOffer.y = 139;
        textOffer.alpha = 0;

        skyRentalLightgrey = new createjs.Bitmap(loader.getResult("sky-rental-lightgrey"));
        skyRentalLightgrey.x = 84;
        skyRentalLightgrey.y = 181;
        skyRentalLightgrey.alpha = 0;

        stage.addChild(button, textVoucher, textBroadband, textOffer, skyRentalLightgrey);

        // Text Animations
        createjs.Tween.get(textVoucher).to({alpha: 1}, 500);
        createjs.Tween.get(textBroadband).to({alpha: 1}, 500);
        createjs.Tween.get(textOffer).to({alpha: 1}, 500);
        createjs.Tween.get(skyRentalLightgrey).to({alpha: 1}, 500);

        // create shape and set coordinates
        var sheen = new createjs.Shape().set({x: 148.25, y: 206});
        // fill shape background with white color and draw it
        sheen.graphics.beginFill("#fff").drawRect(0, 0, 35, 35);
        sheen.skewX = 20;

        // set blue filter
        var blurFilter = new createjs.BlurFilter(50, 15, 1);
        sheen.filters = [blurFilter];
        var bounds = blurFilter.getBounds();
        sheen.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height);

        stage.addChild(sheen);

        // sheen animation
        createjs.Ticker.on("tick", tick);
        createjs.Ticker.setFPS(30);

        // set start position base on current x position minus width of shape
        sheen.x -= 30;
        function tick() {

            sheen.x  += 10;
            if (sheen.x > button.width) {
                sheen.x = 148.25 - 30;
            }
            stage.update(event);
        }

        // refer to the creative brief, frame 3 for guidance.
    }

    setTimeout(clearAnimations, 15000);

    function clearAnimations() {
        clearTimeout(frame1Id);
        clearTimeout(frame2Id);
        clearTimeout(frame3Id);
        console.log("Animation cleaned");
    }

};