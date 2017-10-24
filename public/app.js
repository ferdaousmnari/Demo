var app = angular.module("myApp", []);



app.controller("myCtrl", function($scope,$http) {

    $scope.firstName = "Ferdaous";
    $scope.lastName = "Mnari";


     getAll();

    function getAll() {

        $http.get("http://localhost:3000/all").then(function(response) {

            console.log(response.data);

            $scope.clients = response.data;

        });

    }

    $scope.remove = function (client) {


        console.log(client);
        console.log("http://localhost:3000/delete?id_client="+client.id_client);



        $http.get("http://localhost:3000/delete?id_client="+client.id_client).then(function(response) {

           // console.log(response.data);

           // $scope.myData = response.data;

        });


        getAll();


    }

    $scope.show = function () {


        alert("OKKK");

    }


    $scope.valider = function (client) {


         console.log(client);

        alert("OKKK valider");

    }

});