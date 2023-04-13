var timer = 0;
var theTime = "";

var time_interval = 5000;

//this class will hold the UAT space data
class InputData{
    constructor(
        seconds_data,
        latitude,
        longitude,
        gpsSensor_alt,
        bmpSensor_alt,
        bmpSensor_pres,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eco2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.seconds_data = seconds_data;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gpsSensor_alt = gpsSensor_alt;
        this.bmpSensor_alt = bmpSensor_alt;
        this.bmpSensor_pres = bmpSensor_pres;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eco2 = cssSensor_eco2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

/*
    This function builds the row of information to display.
    Sample output: <td>Legend: </td><td>value units</td>
*/
function dataRow(legend, value, units){
    var txt = "<td>";
    txt += legend;
    txt += ": </td><td>";
    txt += value;
    txt += " " + units;
    txt += "</td>";
    return txt;
}

function start(){
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function updateDisplay(){
    //code for the clock
    theTime = new Date();
    var theMinutes = theTime.getMinutes();
    if (theMinutes < 10){
        theMinutes = "0" + String(theMinutes);
    }
    var theSeconds = (theTime.getSeconds() < 10 ? + "0" + String(theTime.getSeconds()) : theTime.getSeconds());
    var timeFormat = theTime.getHours() + ":" + theMinutes + ":" + theSeconds;

    document.getElementById("timeStamp").innerHTML = timeFormat;

    //code for updating the table
    var timeRead = data[index].seconds_data;
    var dataTable = document.getElementById("data");

    //read the data and output it to the HTML page
    if (timeRead >= 10){
        dataTable.rows["seconds_data"].innerHTML = dataRow("Time Elapsed", data[index].seconds_data, "seconds");
        dataTable.rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, "");
        dataTable.rows["longitude"].innerHTML = dataRow("Longitude", data[index].longitude, "");
        dataTable.rows["gpsSensor_alt"].innerHTML = dataRow("GPS Altitude", data[index].gpsSensor_alt, "");
        dataTable.rows["bmpSensor_alt"].innerHTML = dataRow("BMP Altitude", data[index].bmpSensor_alt, "");
        dataTable.rows["bmpSensor_pres"].innerHTML = dataRow("BMP Pressure", data[index].bmpSensor_pres, "");
        dataTable.rows["bmpSensor_temp"].innerHTML = dataRow("BMP Temperature", data[index].bmpSensor_temp, "");
        dataTable.rows["digSensor_temp"].innerHTML = dataRow("Digital Temperature", data[index].digSensor_temp, "");
        dataTable.rows["cssSensor_temp"].innerHTML = dataRow("CSS Temperature", data[index].cssSensor_temp, "");
        dataTable.rows["cssSensor_eco2"].innerHTML = dataRow("CSS eCO2", data[index].cssSensor_eco2, "");
        dataTable.rows["cssSensor_TVOC"].innerHTML = dataRow("CSS TVOC", data[index].cssSensor_TVOC, "");
        dataTable.rows["UV"].innerHTML = dataRow("UV", data[index].UV, "");
        dataTable.rows["accelX"].innerHTML = dataRow("X Acceleration", data[index].accelX, "");
        dataTable.rows["accelY"].innerHTML = dataRow("Y Acceleration", data[index].accelY, "");
        dataTable.rows["accelZ"].innerHTML = dataRow("Z Acceleration", data[index].accelZ, "");
        dataTable.rows["magneticX"].innerHTML = dataRow("X Magnetic", data[index].magneticX, "");
        dataTable.rows["magneticY"].innerHTML = dataRow("Y Magnetic", data[index].magneticY, "");
        dataTable.rows["magneticZ"].innerHTML = dataRow("Z Magnetic", data[index].magneticZ, "");
        dataTable.rows["gyroX"].innerHTML = dataRow("X Gyro", data[index].gyroX, "");
        dataTable.rows["gyroY"].innerHTML = dataRow("Y Gyro", data[index].gyroY, "");
        dataTable.rows["gyroZ"].innerHTML = dataRow("Z Gyro", data[index].gyroZ, "");
    }

    //when the end of the data is reached, start over
    if (index > 500){
        index = 0;
    }
    else{
        index++;
        //index = index + 1;
    }
}