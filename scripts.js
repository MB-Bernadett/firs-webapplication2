$(function() {


    let imagesData = [{
            photo: "images/adventure.jpg",
            title: "Rocks and houses",
            description: "Rocky houses... During the trip we can admire the beauty of the place, the buildings carved into the rock. The place is pleasant and soothing..",
        },
        {
            photo: "images/amazing lake.jpg",
            title: "Amazing lake",
            description: "Wonderful lake... Walking in a small village we can admire the beauty of the place. The water of the lake is clean, we can relax in a pleasant little village environment..",
        },
        {
            photo: "images/harbour.jpg",
            title: "Harbour with ship ",
            description: "Shipping...You can take a boat trip to see the beauty of the landscape and the river. You can relax, recharge. Sailing, relax, mounten, ",
        },
        {
            photo: "images/highland.jpg",
            title: "Moon and mountain",
            description: "Heaven and earth merge... When heaven and earth merge. The horizon seems distant. The full moon in the darkness illuminates the infinite greatness of the mountains..",
        },
        {
            photo: "images/ocean.jpg",
            title: "Ocean liner",
            description: "Cruise. They wind the infinity of the oceans. The crew is watching the passengers wish. We can meet many new people..",
        },
        {
            photo: "images/planet.jpg",
            title: "Wonderful Earth",
            description: "Amazing sight from space...Satellites and the International Space Station take amazing photos of our Earth.We can notice the changes in the pictures..",
        },
        {
            photo: "images/spaceship.jpg",
            title: "Space rocket",
            description: "Space rocket mission. Mankind has long wanted to conquer space. Space exploration has been going on for some time. When can we go to another planet? ",
        },
        {
            photo: "images/travel-adventure.jpg",
            title: "Lake and beautiful landscape",
            description: "When perfect. When the mountain is reflected in the lake. You look out the window in the morning and a wonderful landscape lies in front of you..",
        },
    ];

    let currentPhoto = 0;

    let loadPhoto = (currentPhoto) => {
        $("#photo").attr("src", imagesData[currentPhoto].photo);
        $("#photo-title").text(imagesData[currentPhoto].title);
        $("#photo-description").text(imagesData[currentPhoto].description);
        // console.log(imagesData[currentPhoto].description);
    };
    loadPhoto(currentPhoto);

    $("#arrow-left").click(() => {
        if (currentPhoto > 0) {
            currentPhoto--;
        } else if (currentPhoto <= 0) {
            currentPhoto = 8;
        }
        loadPhoto(currentPhoto);
    });
    $("#arrow-right").click(() => {
        if (currentPhoto < 7) {
            currentPhoto++;
        } else if (currentPhoto >= 7) {
            currentPhoto = 0;
        }
        loadPhoto(currentPhoto);
    });

    imagesData
        .forEach((item, index) => {
            $("#thumbs").append(
                `<div class="thumber">
                <img src="${item.photo}" data-num="${index}" class="thmbs" alt="">
            </div>`
            );
            $(".thumber").click((event) => {
                let numbs = parseInt($(event.target).attr("data-num"));
                $('.thmbs').addClass("active");
                loadPhoto(numbs);
            });
        });
});

