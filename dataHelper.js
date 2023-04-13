class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        uv,
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
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.uv = uv;
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


function buildDataRow(title, value, unit){
    var colData = "<td>";
    colData += title;
    colData += ": </td><td>";
    colData += value;
    colData += " " + unit;
    colData += "</td>";
    return colData;
}

function displayData(){
    document.getElementById("data").rows["seconds"].innerHTML = buildDataRow("Time Elapsed", data[dataCounter].time_seconds, "seconds");                
    document.getElementById("data").rows["latitude"].innerHTML = buildDataRow("Latitude", data[dataCounter].latitude, "");
    document.getElementById("data").rows["longitude"].innerHTML = buildDataRow("Longitude", data[dataCounter].longitude, "");
    document.getElementById("data").rows["gpsSensor_alt"].innerHTML = buildDataRow("GPS Altitude", data[dataCounter].gps_altitude, "");
    document.getElementById("data").rows["bmpSensor_alt"].innerHTML = buildDataRow("BMP Altitude", data[dataCounter].bmpSensor_altitude, "");
    document.getElementById("data").rows["bmpSensor_pres"].innerHTML = buildDataRow("BMP Pressure", data[dataCounter].bmpSensor_pressure, "");
    document.getElementById("data").rows["bmpSensor_temp"].innerHTML = buildDataRow("BMP Temperature", data[dataCounter].bmpSensor_temp, "");
    document.getElementById("data").rows["digSensor_temp"].innerHTML = buildDataRow("Digital Temperature", data[dataCounter].digSensor_temp, "");
    document.getElementById("data").rows["cssSensor_temp"].innerHTML = buildDataRow("CSS Temperature", data[dataCounter].cssSensor_temp, "");
    document.getElementById("data").rows["cssSensor_eco2"].innerHTML = buildDataRow("CSS eCO2", data[dataCounter].cssSensor_eCO2, "");
    document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = buildDataRow("CSS TVOC", data[dataCounter].cssSensor_TVOC, "");
    document.getElementById("data").rows["UV"].innerHTML = buildDataRow("UV", data[dataCounter].uv, "");
    document.getElementById("data").rows["accelX"].innerHTML = buildDataRow("X Acceleration", data[dataCounter].accelX, "");
    document.getElementById("data").rows["accelY"].innerHTML = buildDataRow("Y Acceleration", data[dataCounter].accelY, "");
    document.getElementById("data").rows["accelZ"].innerHTML = buildDataRow("Z Acceleration", data[dataCounter].accelZ, "");
    document.getElementById("data").rows["magneticX"].innerHTML = buildDataRow("X Magnetic", data[dataCounter].magneticX, "");
    document.getElementById("data").rows["magneticY"].innerHTML = buildDataRow("Y Magnetic", data[dataCounter].magneticY, "");
    document.getElementById("data").rows["magneticZ"].innerHTML = buildDataRow("Z Magnetic", data[dataCounter].magneticZ, "");
    document.getElementById("data").rows["gyroX"].innerHTML = buildDataRow("X Gyro", data[dataCounter].gyroX, "");
    document.getElementById("data").rows["gyroY"].innerHTML = buildDataRow("Y Gyro", data[dataCounter].gyroY, "");
    document.getElementById("data").rows["gyroZ"].innerHTML = buildDataRow("Z Gyro", data[dataCounter].gyroZ, "");

    if (dataCounter > 500){
        dataCounter = 0
    } else {dataCounter++}

}