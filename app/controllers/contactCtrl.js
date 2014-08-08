/**
 * Created by ing yonaides on 7/31/2014.
 */
'use strict';

app.controller("contactCtrl", function contactCtrl($scope, contactResource) {

    $scope.img = 50;
    $scope.male="checked";
    $scope.next = 0;
    $scope.Contactos = contactResource.getContacts();

    $scope.addContacto = function (contact) {
        $scope.nextIndex();

        var genero ='men' ;
        console.log(contact);
        console.log($scope.male);
        console.log($scope.female);

        if (typeof($scope.male) === "undefined") {
            genero="women";
        }

        $scope.Contactos.push({'id': $scope.next, 'imagen': "http://api.randomuser.me/portraits/" + genero+"/" + $scope.img + ".jpg", 'name': contact.name,
            'mapmarker': contact.mapmaker, 'earphone': contact.phone, 'comments': contact.email});

        contact.name = "";
        contact.mapmaker = "";
        contact.phone = "";
        contact.email = "";
        contact.img = 50;
        $scope.male="checked";
        $scope.famele="";


    }

    $scope.nextIndex = function () {
        $scope.Contactos.forEach(function (item) {
            $scope.next = $scope.next + 1;
        });
    }

});