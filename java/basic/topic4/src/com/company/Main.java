package com.company;

public class Main {

    public static void main(String[] args) {

        SmartPhone phone = new SmartPhone(true, "Xiaomi", "Pablo Cianes", "Android", "XL");

        phone.printAttributes();

        SmartWatch watch = new SmartWatch(true, "Samsung", "Anonymous", true);

        watch.printAttributes();
    }
}
