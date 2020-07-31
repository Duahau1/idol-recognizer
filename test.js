var app = angular.module('app', []);
app.factory('recognizeService', function ($http) {
    return {
        recognize: function (imgLink) {
            // Link tới RestAPI đã viết ở phần 
            var link = 'https://severless.duahau1.vercel.app/api/index';
            return $http({
                method: 'POST',
                url: link,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    url: imgLink
                }
            });
        }
    }
});
app.factory('upload', function ($http) {

})
app.controller('mainCtrl', function ($scope, recognizeService) {
    $scope.isLoading = false;
    $scope.$watch('imageLink', function (oldValue, newValue) {
        $scope.faces = [];
        $scope.faceDisplay = [];
        if ($scope.imageLink == "" || $scope.imageLink == undefined) {
            document.getElementById('source-image').removeAttribute("src")
        }
    });
    // Gọi hàm này khi người dùng click button "Nhận diện"
    $scope.recognize = function () {
        if ($scope.isLoading) {
            return;
        }
        $scope.isLoading = true;
        
        recognizeService.recognize($scope.imageLink).then(result => {
            if(result.data==='Unknown person' ){
                $scope.isLoading = false;
                $scope.faces="Unknown person";
                setTimeout(() => {
                    $scope.$apply(() => {
                        $scope.imageLink = ""                    
                    });
                  }, 4000);
                return;
            }
            $scope.faces = result.data[0].info;
            
            $scope.faceDisplay = result.data.map(rs => {
                return {
                    /*
                    style: {
                        top: rs.face.top + 'px',
                        left: rs.face.left + 'px',
                        width: rs.face.width + 'px',
                        height: rs.face.height + 'px'
                    },
                    
                    name: rs.idol.name
                    */
                }
            });
            $scope.isLoading = false;
        });
    
    
    }

    // Danh sách ảnh để test
    $scope.testImages = [
        //1
        {

            img1: "https://tse1.mm.bing.net/th?id=OIP.EMOVwTeh7DRKZD-wvS3BngHaK6&pid=Api",
            img2: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/104754423_3024460400937088_5437555570508536303_n.jpg?_nc_cat=102&_nc_sid=0be424&_nc_ohc=U7BJkjIVuagAX_NOC0U&_nc_ht=scontent-sea1-1.xx&oh=29ab882aabd4f6aea2f3f10b933e5b54&oe=5F4A7042"

        },
        //2    
        {
            img2: "https://i.pinimg.com/originals/47/06/4e/47064e32d318569877597999a8a8317c.jpg",
            img1: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/s960x960/116372124_614987245819845_2249995862082645496_o.jpg?_nc_cat=101&_nc_sid=0be424&_nc_ohc=a8Es6KM-qTgAX8M-LTj&_nc_ht=scontent-sea1-1.xx&_nc_tp=7&oh=7011d3c54ec239c78d89f9d175cdb2e6&oe=5F49D264"
        },
        //3
        {
            img1: "https://res.cloudinary.com/duahau/image/upload/v1595898878/97252989_547154832667925_7887392270108852224_n_cxcox8.jpg",
            img2: "https://res.cloudinary.com/duahau/image/upload/v1595898880/77020436_442734929776583_2639068064053723136_n_fi0vda.png"
        },
        //4    
        {
            img2: "https://res.cloudinary.com/duahau/image/upload/v1595898112/54435427_993281737726889_4099795855991635968_o_lct46t.jpg",
            img1: "https://res.cloudinary.com/duahau/image/upload/v1595898113/56120061_998144500573946_6384099715885039616_o_q2sep3.jpg"
        },
        //5
        {
            img2: "https://res.cloudinary.com/duahau/image/upload/v1595899395/45171687_496217870788444_6863086700801818624_o_owldgl.jpg",
            img1: "https://res.cloudinary.com/duahau/image/upload/v1595899397/51234310_537558833321014_6444281897148219392_o_nevudk.jpg"
        },
        //6
        {
            img1: "https://res.cloudinary.com/duahau/image/upload/v1595900062/56631977_380692385852747_2884125755363557376_n_ybi3tj.jpg",
            img2: "https://res.cloudinary.com/duahau/image/upload/v1595900062/58694127_390646791523973_2328050137617661952_n_qo6xjr.jpg"
        },
        //7
        {
            img1: "https://res.cloudinary.com/duahau/image/upload/v1595900744/65742431_3123770997663283_5452695792429039616_o_nxohnd.jpg",
            img2: "https://res.cloudinary.com/duahau/image/upload/v1595900744/66016810_3123771874329862_1711238390906617856_o_zhlgn6.jpg"
        },
        //8
        {
            img2: "https://res.cloudinary.com/duahau/image/upload/v1595897501/66432342_898802363800341_2239771452830121984_o_nnxpow.jpg",
            img1: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-0/p640x640/107599455_800662423671544_4685087564412821781_o.jpg?_nc_cat=104&_nc_sid=0be424&_nc_ohc=pvBSuFAVhRsAX-btGZl&_nc_ht=scontent-sea1-1.xx&_nc_tp=6&oh=7206ebb474c68c62aad1b9ddece536e7&oe=5F49C12F"
        },
        //9
        {
            img1: "https://tse2.mm.bing.net/th?id=OIP.ZVDoz1utD-A3vt1Ha8PlNAHaNK&pid=Api",
            img2: "https://i.pinimg.com/originals/85/16/75/85167540f7982ecdc7b0ed755f7d3925.jpg"
        }
    ]
    // Danh sách idol
    $scope.idols = [
        "Xu Jia Qi",
        "Dai Meng",
        "Wu Zhe Han",
        "Jiang Yun",
        "Kong Xiao Yin",
        "Mo Han",
        "Qian Bei Ting",
        "Zhang Yu Ge",
        "Sun Rui"
    ];
    $scope.icon = [
        "https://img.icons8.com/color/50/000000/fox.png",
        "https://img.icons8.com/color/50/000000/wolf.png",
        "https://img.icons8.com/color/50/000000/puppy.png",
        "https://img.icons8.com/color/50/000000/blond-princess.png",
        "https://img.icons8.com/color/50/000000/swan.png",
        "https://img.icons8.com/flat_round/50/000000/rabbit--v1.png",
        "https://img.icons8.com/office/50/000000/duck.png",
        "https://img.icons8.com/offices/50/000000/octopus.png",
        "https://img.icons8.com/office/50/000000/horse.png"
    ]
});