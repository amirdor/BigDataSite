/**
 * Created by dor on 28/07/2016.
 */


PagesApp.controller("peopleCtrl",  function($scope, $http) {

    window.scrollTo(0, 0);

    $http.get("data/people.json")
        .then(function(response) {
            console.log(response.data.items);

            $scope.assets = response.data;
                    console.log(response.data);
                    $scope.people={
                        graduateStudents: $scope.assets.graduateStudents,
                        undergraduateStudents:$scope.assets.undergraduateStudents,
                        alumni:$scope.assets.alumni
                    };

        });




});
PagesApp.controller("teachingCtrl",  function($scope, $http) {
    window.scrollTo(0, 0);
});


PagesApp.controller("projectsCtrl",  function($scope, $http) {
  window.scrollTo(0, 0);
    $http.get("data/projects.json")
        .then(function(response) {
            $scope.projects = response.data;
        });
});

PagesApp.controller("picCtrl",  function($scope, $http) {
  window.scrollTo(0, 0);
    // $http.get("data/projects.json")
    // .then(function(response) {
    //     $scope.data = response.data;

    // });
});


PagesApp.controller("contactCtrl",  function($scope, $http) {
  window.scrollTo(0, 0);
    // $http.get("data/projects.json")
    // .then(function(response) {
    //     $scope.data = response.data;

    // });
});
