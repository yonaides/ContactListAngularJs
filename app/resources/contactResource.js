/**
 * Created by ing yonaides on 7/31/2014.
 */
'use strict';

app.factory('contactResource', function contactResource($resource) {

    return $resource("app/resources/contacts.json", {}, {

        getContacts: {
            method: "GET",
            isArray: true
        }
    });

});
