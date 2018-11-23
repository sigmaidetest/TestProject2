exports.handler = function (event, context, callback) {

    console.log("Event", event);

    callback(null, {
        "isBase64Encoded": true,
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": { name: "hello" }
    });
}