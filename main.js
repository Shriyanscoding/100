Webcam.set({
    width:350,
    heigjt:300,
    image_format : 'png',
    png_quality:90
});

    camera = document.getElemenetById("camera");

Webcam.attach( '#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });

    console.log('ml5 version:' , ml5.version);
classifier = mlf.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelLoaded);