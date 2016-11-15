# Adafruit DHT Humidity & Temperature Unified Sensor Library

This is a version of the [DHT humidity and temperature sensor](https://learn.adafruit.com/dht/overview) library which is made to work with the [Adafruit unified sensor library](https://learn.adafruit.com/using-the-adafruit-unified-sensor-driver/introduction).

You must have the following Arduino libraries installed to use this one:

- [Adafruit Unified Sensor Library](https://github.com/adafruit/Adafruit_Sensor)
- [Adafruit DHT Sensor Library](https://github.com/adafruit/DHT-sensor-library)

To download. click the DOWNLOAD ZIP button to the right, rename the uncompressed folder to Adafruit\_DHT\_Unified.  Place the folder in your <arduinosketchfolder>/libraries/ folder. You may need to create the libraries subfolder if its your first library. Restart the IDE.  [See this guide](https://learn.adafruit.com/adafruit-all-about-arduino-libraries-install-use/arduino-libraries) for more details on loading a library in Arduino.

## What is the Adafruit Unified Sensor Library? ##

The Adafruit Unified Sensor Library (**Adafruit_Sensor**) provides a common interface and data type for any supported sensor.  It defines some basic information about the sensor (sensor limits, etc.), and returns standard SI units of a specific type and scale for each supported sensor type.

It provides a simple abstraction layer between your application and the actual sensor HW, allowing you to drop in any comparable sensor with only one or two lines of code to change in your project (essentially the constructor since the functions to read sensor data and get information about the sensor are defined in the base Adafruit_Sensor class).

This is imporant useful for two reasons:

1.) You can use the data right away because it's already converted to SI units that you understand and can compare, rather than meaningless values like 0..1023.

2.) Because SI units are standardised in the sensor library, you can also do quick sanity checks working with new sensors, or drop in any comparable sensor if you need better sensitivity or if a lower cost unit becomes available, etc. 

Light sensors will always report units in lux, gyroscopes will always report units in rad/s, etc. ... freeing you up to focus on the data, rather than digging through the datasheet to understand what the sensor's raw numbers really mean.

## About this Driver ##

Adafruit invests time and resources providing this open source code.  Please support Adafruit and open-source hardware by purchasing products from Adafruit!

Written by Tony DiCola for Adafruit Industries.
