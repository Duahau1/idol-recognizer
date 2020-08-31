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
//Future deploy
app.factory('upload', function ($http) {

})
app.controller('mainCtrl', function ($scope, recognizeService,$http) {
    $scope.isLoading = false;
    $scope.$watch('imageLink', function (oldValue, newValue) {
        $scope.faces = [];
        $scope.faceDisplay = [];
        if ($scope.imageLink == "" || $scope.imageLink == undefined) {
            document.getElementById('source-image').removeAttribute("src")
        }
    });
    $scope.toggleSelection = function (value){        
        if(value =='value1'){
             let url = "https://graphservice.herokuapp.com/";
             $http({
                method:'POST',
                url:url,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                data:{
                    name:"Up vote"
                }
            }).then(poll=>{
                console.log(poll.data);
                update(poll.data)});
         }
         else{
             let url = "https://graphservice.herokuapp.com/";
             $http({
                method:'POST',
                url:url,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                data:{
                    name:"Down vote"
                }
            }).then(poll=>{
                console.log(poll.data);
                update(poll.data)});
         }
         setTimeout(() => {
            $scope.$apply(() => {
               let buttons= document.getElementsByName("example2");
                    buttons[0].checked=false;
                    buttons[1].checked=false;
                $scope.imageLink = ""

            });
          }, 1000);
        //}
    }
    
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
            img2: "https://res.cloudinary.com/duahau/image/upload/v1598889362/118471870_3196235993759527_7938333192663909149_n.jpg_n80kfw.jpg"

        },
        //2    
        {
            img2: "https://res.cloudinary.com/duahau/image/upload/v1598889475/118536652_636791750306061_7057548639248819884_o.jpg_ao8qy9.jpg",
            img1: "https://res.cloudinary.com/duahau/image/upload/v1595964508/116273344_613201085998461_8473487049068399947_n_t8tyc4.jpg"
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
            img1: "https://res.cloudinary.com/duahau/image/upload/v1598889669/66449195_898802323800345_2335854458266714112_o.jpg_ygbs7y.jpg"
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

d3.select("body").append("h1").attr("class","header").text("Face Recognition's Accuracy's Survey");
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    let url = "https://graphservice.herokuapp.com/";

    let xScale = d3.scaleBand().range([0, width]).padding(0.1);
    let yScale = d3.scaleLinear().range([height, 0]);
    const container = d3
      .select('body')
      .append('div')
      .attr('class', 'container1');
    const svg = container
      .append('svg')
      .attr('viewBox', `0 0 960 500`)
      .attr("preserveAspectRatio", "xMidYMid meet ")
      //.attr('width', width + margin.left + margin.right)
      //.attr('height', height + margin.top + margin.bottom)
      .attr('class','cont-svg')
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
const tip = d3
    .select('body')
    .append('div')
    .attr('class', 'tooltip');

let updateData = fetch(url).then(res => res.json()).then((data) => {
        svg
        .append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .attr('class', 'x-axis')
        .call(d3.axisBottom(xScale));

      // add the y Axis
      svg
        .append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(yScale));
        update(data);

})

function update(poll) {
    // Scale the range of the data in the x axis
    xScale.domain(
      poll.map(d => {
        return d.name;
      })
    );

    // Scale the range of the data in the y axis
    yScale.domain([
      0,
      d3.max(poll, d => {
        return d.votes;
      }),
    ]);
    let total = poll[0].votes +poll[1].votes;

    // Select all bars on the graph, take them out, and exit the previous data set.
    // Enter the new data and append the rectangles for each object in the poll array
    svg
      .selectAll('.bar')
      .remove()
      .exit()
      .data(poll)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => {
        return xScale(d.name);
      })
      .attr('width', xScale.bandwidth())
      .attr('y', d => {
        return yScale(d.votes);
      })
      .attr('height', d => {
        return height - yScale(d.votes);
      })
      .on('mousemove', d => {
        tip
          .style('position', 'absolute')
          .style('left', `${d3.event.pageX + 10}px`)
          .style('top', `${d3.event.pageY + 20}px`)
          .style('display', 'inline-block')
          .style('opacity', '0.9')
          .html(
            `<div><strong>${d.name}'s percentage</strong></div> <span>`+Math.round((d.votes/total)*100) +" % </span>"
          );
      })
      .on('mouseout', () => tip.style('display', 'none'));

    // update the x-axis
    svg.select('.x-axis').call(d3.axisBottom(xScale));

    // update the y-axis
    svg.select('.y-axis').call(d3.axisLeft(yScale));
  }

